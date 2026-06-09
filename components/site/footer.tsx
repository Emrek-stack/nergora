import type { Dictionary } from "@/lib/i18n";

export function Footer({ dictionary }: { dictionary: Dictionary }) {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="text-sm text-muted-foreground">
          © 2019 Nergora.
          {" "}
          {dictionary.footer.rights}
        </div>
      </div>
    </footer>
  );
}
