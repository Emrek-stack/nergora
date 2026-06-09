import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Clock3,
  Copy,
  LayoutDashboard,
  Menu,
  Minus,
  Monitor,
  RotateCcw,
  Settings,
  ShieldCheck,
  Smartphone,
  Square,
  Users,
  X,
  Zap,
} from "lucide-react";
import { notFound } from "next/navigation";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const content = {
  en: {
    eyebrow: "Cashit",
    title: "Remote access. Simplified.",
    description:
      "Secure, fast and reliable access to your devices from anywhere.",
    primaryCta: "Request early access",
    secondaryCta: "Talk to Nergora",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    dashboard: "Dashboard",
    devices: "Devices",
    connections: "Connections",
    contacts: "Contacts",
    history: "History",
    settings: "Settings",
    thisDevice: "This Device",
    yourId: "Your ID",
    password: "One-time Password",
    connectTitle: "Connect to Device",
    remoteId: "Enter remote ID",
    connect: "Connect",
    recent: "Recent Connections",
    userName: "John Smith",
    userEmail: "john@company.com",
    rows: [
      ["Office PC", "548 811 221", "Today, 09:15"],
      ["Work Laptop", "221 335 778", "Yesterday, 14:30"],
      ["Home PC", "114 522 669", "2 days ago"],
      ["Server", "683 221 090", "3 days ago"],
    ],
    featuresTitle: "Built for modern remote operations.",
    featuresDescription:
      "Cashit keeps the daily remote support workflow clean: identify the device, authenticate the session and connect without friction.",
    features: [
      {
        title: "One-time secure access",
        text: "Session credentials are short-lived and easy to rotate.",
      },
      {
        title: "Desktop and mobile ready",
        text: "The same connection flow works across workstation and phone screens.",
      },
      {
        title: "Fast operator workflow",
        text: "Recent devices, contacts and history stay within reach.",
      },
      {
        title: "Designed for teams",
        text: "A focused interface for support teams and managed service providers.",
      },
    ],
    platformTitle: "A product under the Nergora platform.",
    platformText:
      "Cashit is designed as a remote access layer for support teams, IT providers and organizations that need controlled device access.",
  },
  tr: {
    eyebrow: "Cashit",
    title: "Uzaktan erişim. Sadeleştirildi.",
    description:
      "Cihazlarınıza her yerden güvenli, hızlı ve güvenilir erişim.",
    primaryCta: "Erken erişim iste",
    secondaryCta: "Nergora ile konuş",
    darkMode: "Koyu mod",
    lightMode: "Açık mod",
    dashboard: "Panel",
    devices: "Cihazlar",
    connections: "Bağlantılar",
    contacts: "Kişiler",
    history: "Geçmiş",
    settings: "Ayarlar",
    thisDevice: "Bu Cihaz",
    yourId: "ID numaranız",
    password: "Tek kullanımlık parola",
    connectTitle: "Cihaza Bağlan",
    remoteId: "Uzak ID girin",
    connect: "Bağlan",
    recent: "Son Bağlantılar",
    userName: "John Smith",
    userEmail: "john@company.com",
    rows: [
      ["Ofis PC", "548 811 221", "Bugün, 09:15"],
      ["İş Laptopu", "221 335 778", "Dün, 14:30"],
      ["Ev PC", "114 522 669", "2 gün önce"],
      ["Sunucu", "683 221 090", "3 gün önce"],
    ],
    featuresTitle: "Modern uzaktan operasyonlar için tasarlandı.",
    featuresDescription:
      "Cashit günlük destek akışını temiz tutar: cihazı belirleyin, oturumu doğrulayın ve sürtünmesiz bağlanın.",
    features: [
      {
        title: "Tek kullanımlık güvenli erişim",
        text: "Oturum bilgileri kısa ömürlüdür ve kolayca yenilenir.",
      },
      {
        title: "Masaüstü ve mobil hazır",
        text: "Aynı bağlantı akışı workstation ve telefon ekranlarında çalışır.",
      },
      {
        title: "Hızlı operatör akışı",
        text: "Son cihazlar, kişiler ve geçmiş her zaman elinizin altında.",
      },
      {
        title: "Ekipler için tasarlandı",
        text: "Destek ekipleri ve yönetilen servis sağlayıcıları için odaklı arayüz.",
      },
    ],
    platformTitle: "Nergora platformu altında bir ürün.",
    platformText:
      "Cashit; destek ekipleri, BT sağlayıcıları ve kontrollü cihaz erişimine ihtiyaç duyan organizasyonlar için uzaktan erişim katmanı olarak tasarlanır.",
  },
  nl: {
    eyebrow: "Cashit",
    title: "Remote access. Vereenvoudigd.",
    description:
      "Veilige, snelle en betrouwbare toegang tot je apparaten vanaf elke locatie.",
    primaryCta: "Vraag early access aan",
    secondaryCta: "Praat met Nergora",
    darkMode: "Donkere modus",
    lightMode: "Lichte modus",
    dashboard: "Dashboard",
    devices: "Apparaten",
    connections: "Verbindingen",
    contacts: "Contacten",
    history: "Geschiedenis",
    settings: "Instellingen",
    thisDevice: "Dit apparaat",
    yourId: "Je ID",
    password: "Eenmalig wachtwoord",
    connectTitle: "Verbinden met apparaat",
    remoteId: "Voer remote ID in",
    connect: "Verbinden",
    recent: "Recente verbindingen",
    userName: "John Smith",
    userEmail: "john@company.com",
    rows: [
      ["Office PC", "548 811 221", "Vandaag, 09:15"],
      ["Work Laptop", "221 335 778", "Gisteren, 14:30"],
      ["Home PC", "114 522 669", "2 dagen geleden"],
      ["Server", "683 221 090", "3 dagen geleden"],
    ],
    featuresTitle: "Gebouwd voor moderne remote operations.",
    featuresDescription:
      "Cashit houdt de dagelijkse supportflow helder: identificeer het apparaat, valideer de sessie en verbind zonder frictie.",
    features: [
      {
        title: "Eenmalige veilige toegang",
        text: "Sessietoegang is kort geldig en eenvoudig te vernieuwen.",
      },
      {
        title: "Desktop en mobiel klaar",
        text: "Dezelfde verbindingsflow werkt op workstation- en telefoonschermen.",
      },
      {
        title: "Snelle operatorworkflow",
        text: "Recente apparaten, contacten en geschiedenis blijven dichtbij.",
      },
      {
        title: "Ontworpen voor teams",
        text: "Een gerichte interface voor supportteams en managed service providers.",
      },
    ],
    platformTitle: "Een product binnen het Nergora-platform.",
    platformText:
      "Cashit is ontworpen als remote access-laag voor supportteams, IT-providers en organisaties die gecontroleerde apparaattoegang nodig hebben.",
  },
} as const;

type ProductContent = (typeof content)[Locale];
type Mode = "dark" | "light";

const featureIcons = [ShieldCheck, Smartphone, Zap, Users];

function CashitLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative size-8 rotate-45 rounded-lg bg-primary">
        <div className="absolute left-1 top-1 size-3 rounded-sm bg-background" />
        <div className="absolute bottom-1 right-1 size-3 rounded-sm bg-background" />
      </div>
      <span
        className={cn(
          "font-bold tracking-tight",
          compact ? "text-lg" : "text-4xl"
        )}
      >
        cashit
      </span>
    </div>
  );
}

function ModeLabel({
  label,
  mode,
}: {
  label: string;
  mode: Mode;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold uppercase tracking-wide",
        mode === "dark"
          ? "border-white/10 bg-white/5 text-white"
          : "border-zinc-200 bg-zinc-100 text-zinc-950"
      )}
    >
      {mode === "dark" ? (
        <MoonIcon className="size-4" />
      ) : (
        <SunIcon className="size-4" />
      )}
      {label}
    </div>
  );
}

function MoonIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M20 15.5A8.5 8.5 0 0 1 8.5 4a7 7 0 1 0 11.5 11.5Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AppWindow({
  copy,
  mode,
}: {
  copy: ProductContent;
  mode: Mode;
}) {
  const navItems = [
    [LayoutDashboard, copy.dashboard],
    [Monitor, copy.devices],
    [Users, copy.connections],
    [Users, copy.contacts],
    [Clock3, copy.history],
    [Settings, copy.settings],
  ] as const;

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border shadow-2xl",
        mode === "dark"
          ? "border-white/15 bg-[#11111d] text-white shadow-violet-950/50"
          : "border-zinc-200 bg-white text-zinc-950 shadow-zinc-200"
      )}
    >
      <div
        className={cn(
          "flex h-12 items-center justify-between border-b px-5",
          mode === "dark" ? "border-white/10" : "border-zinc-200"
        )}
      >
        <CashitLogo compact />
        <div
          className={cn(
            "flex items-center gap-4",
            mode === "dark" ? "text-zinc-300" : "text-zinc-700"
          )}
        >
          <Bell className="size-4" />
          <Menu className="size-4" />
          <Minus className="size-4" />
          <Square className="size-3" />
          <X className="size-4" />
        </div>
      </div>

      <div className="grid min-h-[360px] grid-cols-[180px_1fr]">
        <aside
          className={cn(
            "hidden border-r p-4 md:block",
            mode === "dark" ? "border-white/10" : "border-zinc-200"
          )}
        >
          <nav className="space-y-2">
            {navItems.map(([Icon, item], index) => (
              <div
                key={item}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm",
                  index === 0
                    ? "bg-primary/15 text-primary"
                    : mode === "dark"
                      ? "text-zinc-300"
                      : "text-zinc-700"
                )}
              >
                <Icon className="size-4" />
                {item}
              </div>
            ))}
          </nav>

          <div className="mt-20 flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
              JS
            </div>
            <div>
              <div className="text-sm font-medium">{copy.userName}</div>
              <div
                className={cn(
                  "text-xs",
                  mode === "dark" ? "text-zinc-500" : "text-zinc-500"
                )}
              >
                {copy.userEmail}
              </div>
            </div>
          </div>
        </aside>

        <div className="col-span-2 p-4 md:col-span-1">
          <div className="grid gap-4 lg:grid-cols-2">
            <DevicePanel copy={copy} mode={mode} />
            <ConnectPanel copy={copy} mode={mode} />
          </div>

          <div
            className={cn(
              "mt-4 rounded-xl border p-5",
              mode === "dark"
                ? "border-white/10 bg-white/[0.03]"
                : "border-zinc-200 bg-zinc-50"
            )}
          >
            <h3 className="text-sm font-semibold">{copy.recent}</h3>
            <div className="mt-4 space-y-1">
              {copy.rows.map(([name, id, date], index) => (
                <div
                  key={name}
                  className={cn(
                    "grid grid-cols-[1fr_110px_110px_20px] items-center gap-4 border-t py-3 text-sm",
                    mode === "dark"
                      ? "border-white/10 text-zinc-300"
                      : "border-zinc-200 text-zinc-700"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "size-2 rounded-full",
                        index === 3 ? "bg-zinc-500" : "bg-emerald-500"
                      )}
                    />
                    <span className="font-medium">{name}</span>
                  </div>
                  <span className="hidden sm:inline">{id}</span>
                  <span className="hidden lg:inline">{date}</span>
                  <Menu className="size-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DevicePanel({
  copy,
  mode,
}: {
  copy: ProductContent;
  mode: Mode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-5",
        mode === "dark"
          ? "border-white/10 bg-white/[0.03]"
          : "border-zinc-200 bg-white"
      )}
    >
      <h3 className="text-sm font-semibold">{copy.thisDevice}</h3>
      <div className="mt-4 grid gap-4">
        <div className="flex items-end justify-between">
          <div>
            <div
              className={cn(
                "text-xs",
                mode === "dark" ? "text-zinc-400" : "text-zinc-500"
              )}
            >
              {copy.yourId}
            </div>
            <div className="mt-1 text-2xl font-bold text-primary">
              548 811 221
            </div>
          </div>
          <Copy className="size-5" />
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div
              className={cn(
                "text-xs",
                mode === "dark" ? "text-zinc-400" : "text-zinc-500"
              )}
            >
              {copy.password}
            </div>
            <div className="mt-1 text-2xl font-bold text-primary">7K3 9P2</div>
          </div>
          <RotateCcw className="size-5" />
        </div>
      </div>
    </div>
  );
}

function ConnectPanel({
  copy,
  mode,
}: {
  copy: ProductContent;
  mode: Mode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-5",
        mode === "dark"
          ? "border-white/10 bg-white/[0.03]"
          : "border-zinc-200 bg-white"
      )}
    >
      <h3 className="text-sm font-semibold">{copy.connectTitle}</h3>
      <div
        className={cn(
          "mt-5 rounded-lg border px-4 py-3 text-sm",
          mode === "dark"
            ? "border-white/10 bg-black/20 text-zinc-500"
            : "border-zinc-200 bg-zinc-50 text-zinc-500"
        )}
      >
        {copy.remoteId}
      </div>
      <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 lg:w-auto lg:min-w-36">
        <ArrowRight className="size-4" />
        {copy.connect}
      </button>
    </div>
  );
}

function PhoneMockup({
  copy,
  mode,
}: {
  copy: ProductContent;
  mode: Mode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-[220px] rounded-[2rem] border p-2 shadow-2xl",
        mode === "dark"
          ? "border-zinc-700 bg-zinc-950 shadow-violet-950/50"
          : "border-zinc-300 bg-zinc-950 shadow-zinc-300"
      )}
    >
      <div
        className={cn(
          "overflow-hidden rounded-[1.5rem]",
          mode === "dark" ? "bg-[#11111d] text-white" : "bg-white text-zinc-950"
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 text-xs">
          <span>9:41</span>
          <span>•••</span>
        </div>
        <div className="flex items-center justify-between px-4 py-2">
          <span>‹</span>
          <CashitLogo compact />
          <Menu className="size-4" />
        </div>
        <div className="space-y-3 p-3">
          <DevicePanel copy={copy} mode={mode} />
          <ConnectPanel copy={copy} mode={mode} />
        </div>
        <div
          className={cn(
            "grid grid-cols-4 border-t px-3 py-3 text-center text-[10px]",
            mode === "dark" ? "border-white/10" : "border-zinc-200"
          )}
        >
          {[copy.dashboard, copy.devices, copy.connections, copy.settings].map(
            (item, index) => (
              <div
                key={item}
                className={index === 0 ? "text-primary" : "text-muted-foreground"}
              >
                <LayoutDashboard className="mx-auto mb-1 size-4" />
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function ProductVisual({
  copy,
  mode,
}: {
  copy: ProductContent;
  mode: Mode;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b",
        mode === "dark"
          ? "border-white/10 bg-[#05050e] text-white"
          : "border-zinc-200 bg-white text-zinc-950"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 -z-0",
          mode === "dark"
            ? "bg-[radial-gradient(circle_at_50%_100%,rgba(91,33,182,0.45),transparent_38%)]"
            : "bg-[radial-gradient(circle_at_50%_100%,rgba(124,58,237,0.12),transparent_42%)]"
        )}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-[170px_1fr_250px]">
        <div className="lg:self-start">
          <ModeLabel label={mode === "dark" ? copy.darkMode : copy.lightMode} mode={mode} />
        </div>
        <AppWindow copy={copy} mode={mode} />
        <PhoneMockup copy={copy} mode={mode} />
      </div>
    </section>
  );
}

export default async function CashitPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const copy = content[lang];

  return (
    <>
      <Header dictionary={dictionary} locale={lang} />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border/70">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_38%)]" />
          <div className="mx-auto max-w-5xl px-6 py-20 text-center">
            <div className="flex justify-center">
              <CashitLogo />
            </div>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              {copy.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
              {copy.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              {copy.description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
              >
                {copy.primaryCta}
                <ArrowRight className="size-4" />
              </a>
              <a
                href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold text-foreground hover:bg-muted"
              >
                {copy.secondaryCta}
              </a>
            </div>
          </div>
        </section>

        <ProductVisual copy={copy} mode="dark" />
        <ProductVisual copy={copy} mode="light" />

        <section className="border-b border-border/70">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Cashit
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                {copy.featuresTitle}
              </h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                {copy.featuresDescription}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {copy.features.map((feature, index) => {
                const Icon = featureIcons[index];

                return (
                  <article
                    key={feature.title}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <Icon className="size-5 text-primary" />
                    <h3 className="mt-4 font-semibold">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {feature.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="rounded-3xl border border-primary/20 bg-primary/10 p-10 md:p-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight">
                    {copy.platformTitle}
                  </h2>
                  <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
                    {copy.platformText}
                  </p>
                </div>
                <a
                  href={`/${lang}/contact`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 font-semibold text-background hover:bg-foreground/90"
                >
                  {copy.primaryCta}
                  <CheckCircle2 className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer dictionary={dictionary} />
    </>
  );
}
