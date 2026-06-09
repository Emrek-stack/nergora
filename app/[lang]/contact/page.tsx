import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const { contactPage } = dictionary;

  return (
    <>
      <Header dictionary={dictionary} locale={lang} />

      <main className="flex-1">
        <section className="border-b border-border/70">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <p className="text-sm font-medium text-primary">
              {contactPage.hero.eyebrow}
            </p>

            <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight">
              {contactPage.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {contactPage.hero.description}
            </p>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                {contactPage.reach.title}
              </h2>

              <p className="mt-4 text-muted-foreground">
                {contactPage.reach.description}
              </p>

              <div className="mt-8 space-y-4 text-sm">
                <div>
                  <div className="text-muted-foreground">
                    {contactPage.reach.emailLabel}
                  </div>
                  <a
                    href="mailto:hello@nergora.com"
                    className="text-foreground hover:text-primary"
                  >
                    hello@nergora.com
                  </a>
                </div>

                <div>
                  <div className="text-muted-foreground">
                    {contactPage.reach.turkeyPhoneLabel}
                  </div>
                  <a
                    href="tel:+905533592746"
                    className="text-foreground hover:text-primary"
                  >
                    +90 553 359 27 46
                  </a>
                </div>

                <div>
                  <div className="text-muted-foreground">
                    {contactPage.reach.europePhoneLabel}
                  </div>
                  <a
                    href="tel:+447521029239"
                    className="text-foreground hover:text-primary"
                  >
                    +44 7521 029239
                  </a>
                </div>

                <div>
                  <div className="text-muted-foreground">
                    {contactPage.reach.locationsLabel}
                  </div>
                  <div className="text-foreground">
                    {contactPage.reach.locations}
                  </div>
                </div>
              </div>
            </div>

            <form className="rounded-3xl border border-border bg-card p-6">
              <div className="grid gap-5">
                <div>
                  <label className="text-sm text-card-foreground">
                    {contactPage.form.name}
                  </label>
                  <input
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
                    placeholder={contactPage.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label className="text-sm text-card-foreground">
                    {contactPage.form.email}
                  </label>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
                    placeholder={contactPage.form.emailPlaceholder}
                  />
                </div>

                <div>
                  <label className="text-sm text-card-foreground">
                    {contactPage.form.message}
                  </label>
                  <textarea
                    rows={6}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
                    placeholder={contactPage.form.messagePlaceholder}
                  />
                </div>

                <button
                  type="button"
                  className="rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
                >
                  {contactPage.form.submit}
                </button>
              </div>
            </form>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-sm font-medium text-primary">
              {contactPage.locations.eyebrow}
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {contactPage.locations.offices.map((office) => (
                <div
                  key={office.city}
                  className="overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{office.city}</h3>
                    <p className="mt-2 text-sm text-primary">
                      {office.label}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {office.description}
                    </p>
                    <p className="mt-4 whitespace-pre-line text-sm leading-6 text-foreground">
                      {office.address}
                    </p>
                  </div>

                  <iframe
                    title={`${office.city} map`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      office.mapQuery
                    )}&output=embed`}
                    className="h-56 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      office.mapQuery
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex border-t border-border px-6 py-4 text-sm font-medium text-primary hover:bg-muted"
                  >
                    {contactPage.locations.openInMaps}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer dictionary={dictionary} />
    </>
  );
}
