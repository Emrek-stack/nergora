import type { Dictionary, Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function ContactCta({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const { contactCta } = dictionary.home;

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-primary/5 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 border border-primary/10">
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {contactCta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-muted-foreground">
            {contactCta.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="h-12 px-8">
              <a href={`/${locale}/contact`}>
                {contactCta.cta}
              </a>
            </Button>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.25" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="var(--primary)" />
                <stop offset={1} stopColor="var(--primary)" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
