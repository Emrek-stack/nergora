import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const { servicesPage } = dictionary;

  return (
    <>
      <Header dictionary={dictionary} locale={lang} />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border/70">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,color-mix(in_oklch,var(--primary)_22%,transparent),transparent_35%),radial-gradient(circle_at_80%_20%,oklch(0.65_0.18_250_/_14%),transparent_30%)]" />

          <div className="mx-auto max-w-7xl px-6 py-24">
            <p className="text-sm font-medium text-primary">
              {servicesPage.hero.eyebrow}
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight">
              {servicesPage.hero.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              {servicesPage.hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`/${lang}/contact`}
                className="rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
              >
                {servicesPage.hero.primaryCta}
              </a>

              <a
                href={`/${lang}/products`}
                className="rounded-xl border border-border px-6 py-3 font-medium text-foreground hover:bg-muted"
              >
                {servicesPage.hero.secondaryCta}
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-5 md:grid-cols-2">
              {servicesPage.services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-3xl border border-border bg-card p-7 hover:border-primary/50"
                >
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h2>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-6 grid gap-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm text-card-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium text-primary">
                {servicesPage.engagement.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                {servicesPage.engagement.title}
              </h2>

              <p className="mt-4 leading-7 text-muted-foreground">
                {servicesPage.engagement.description}
              </p>
            </div>

            <div className="grid gap-4">
              {servicesPage.engagement.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-card px-5 py-4 text-sm text-card-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <p className="text-sm font-medium text-primary">
              {servicesPage.industries.eyebrow}
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
              {servicesPage.industries.title}
            </h2>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {servicesPage.industries.items.map((industry) => (
                <div
                  key={industry}
                  className="rounded-2xl border border-border bg-card px-5 py-4 text-sm text-card-foreground"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="rounded-3xl border border-primary/20 bg-primary/10 p-10 md:p-14">
              <p className="text-sm font-medium text-primary">
                {servicesPage.cta.eyebrow}
              </p>

              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight">
                {servicesPage.cta.title}
              </h2>

              <p className="mt-4 max-w-2xl text-muted-foreground">
                {servicesPage.cta.description}
              </p>

              <a
                href={`/${lang}/contact`}
                className="mt-8 inline-flex rounded-xl bg-foreground px-6 py-3 font-medium text-background hover:bg-foreground/90"
              >
                {servicesPage.cta.cta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer dictionary={dictionary} />
    </>
  );
}
