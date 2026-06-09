import type { Dictionary, Locale } from "@/lib/i18n";

export function ContactCta({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const { contactCta } = dictionary.home;

  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-primary/20 bg-primary/10 p-10 md:p-14">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary">
              {contactCta.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              {contactCta.title}
            </h2>

            <p className="mt-4 text-muted-foreground">
              {contactCta.description}
            </p>

            <a
              href={`/${locale}/contact`}
              className="mt-8 inline-flex rounded-xl bg-foreground px-6 py-3 font-medium text-background hover:bg-foreground/90"
            >
              {contactCta.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
