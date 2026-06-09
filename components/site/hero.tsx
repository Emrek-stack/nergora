import type { Dictionary, Locale } from "@/lib/i18n";

export function Hero({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const { hero } = dictionary.home;

  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,color-mix(in_oklch,var(--primary)_22%,transparent),transparent_35%),radial-gradient(circle_at_70%_20%,oklch(0.65_0.18_250_/_14%),transparent_30%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm text-primary">
            {hero.location}
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            {hero.title}
            <span className="block text-primary">
              {hero.titleAccent}
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`/${locale}/products`}
              className="rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
            >
              {hero.primaryCta}
            </a>

            <a
              href={`/${locale}/contact`}
              className="rounded-xl border border-border px-6 py-3 font-medium text-foreground hover:bg-muted"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card/70 p-4 shadow-2xl shadow-primary/15">
          <div className="rounded-2xl border border-border bg-background">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-muted-foreground">
                {hero.consoleTitle}
              </span>
            </div>

            <div className="space-y-4 p-5">
              {hero.consoleItems.map(([label, status]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl border border-border bg-muted/60 px-4 py-3"
                >
                  <span className="text-sm text-foreground">{label}</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
