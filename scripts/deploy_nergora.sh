#!/usr/bin/env bash
set -euo pipefail

# Deploy script for nergora-web
# Usage: sudo ./scripts/deploy_nergora.sh <git-repo-url> [branch] [deploy-user]

REPO_URL="${1:-}"
BRANCH="${2:-main}"
DEPLOY_USER="${3:-www-data}"
DEPLOY_GROUP="${DEPLOY_USER}"
DEPLOY_DIR="/var/www/nergora.com"
SERVICE_NAME="nergora"
APP_PORT=3000

if [ -z "$REPO_URL" ]; then
  echo "Usage: sudo $0 <git-repo-url> [branch] [deploy-user]"
  exit 1
fi

if [ "$(id -u)" -ne 0 ]; then
  echo "This script must be run as root (sudo)."
  exit 1
fi

echo "Deploying $REPO_URL (branch: $BRANCH) to $DEPLOY_DIR as $DEPLOY_USER"

# Clone or update repository
if [ -d "$DEPLOY_DIR/.git" ]; then
  echo "Repository exists, fetching latest..."
  git -C "$DEPLOY_DIR" fetch --all --prune
  git -C "$DEPLOY_DIR" checkout "$BRANCH"
  git -C "$DEPLOY_DIR" pull --rebase origin "$BRANCH"
else
  echo "Cloning repository..."
  rm -rf "$DEPLOY_DIR"
  mkdir -p "$DEPLOY_DIR"
  git clone --depth 1 --branch "$BRANCH" "$REPO_URL" "$DEPLOY_DIR"
fi

chown -R "$DEPLOY_USER":"$DEPLOY_GROUP" "$DEPLOY_DIR"

# Detect package manager
if command -v pnpm >/dev/null 2>&1; then
  PKG_MANAGER="pnpm"
elif command -v npm >/dev/null 2>&1; then
  PKG_MANAGER="npm"
else
  echo "Neither pnpm nor npm found. Install one and re-run."
  exit 1
fi

cd "$DEPLOY_DIR"
echo "Installing dependencies with $PKG_MANAGER..."
if [ "$PKG_MANAGER" = "pnpm" ]; then
  sudo -u "$DEPLOY_USER" pnpm install --frozen-lockfile --ignore-scripts || sudo -u "$DEPLOY_USER" pnpm install
  sudo -u "$DEPLOY_USER" pnpm build
else
  sudo -u "$DEPLOY_USER" npm ci || sudo -u "$DEPLOY_USER" npm install
  sudo -u "$DEPLOY_USER" npm run build
fi

# Create systemd service
SERVICE_PATH="/etc/systemd/system/${SERVICE_NAME}.service"
echo "Creating systemd service at $SERVICE_PATH"
cat > "$SERVICE_PATH" <<EOF
[Unit]
Description=Nergora Next.js app
After=network.target

[Service]
Type=simple
User=${DEPLOY_USER}
Group=${DEPLOY_GROUP}
WorkingDirectory=${DEPLOY_DIR}
Environment=PORT=${APP_PORT}
ExecStart=/usr/bin/env ${PKG_MANAGER} start
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable --now "$SERVICE_NAME"

# Create nginx config
NGINX_AVAILABLE="/etc/nginx/sites-available/nergora.conf"
NGINX_ENABLED="/etc/nginx/sites-enabled/nergora.conf"
echo "Writing nginx config to $NGINX_AVAILABLE"
cat > "$NGINX_AVAILABLE" <<'NGCFG'
server {
    listen 80;
    server_name nergora.com www.nergora.com;

    location /_next/static/ {
        alias /var/www/nergora.com/.next/static/;
        access_log off;
        expires max;
    }

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
NGCFG

ln -sf "$NGINX_AVAILABLE" "$NGINX_ENABLED"

echo "Testing nginx configuration..."
if nginx -t; then
  systemctl reload nginx
  echo "nginx reloaded successfully"
else
  echo "nginx configuration test failed. Please check $NGINX_AVAILABLE"
fi

echo "Deployment finished. Service: $SERVICE_NAME, Nginx site: nergora"

exit 0
