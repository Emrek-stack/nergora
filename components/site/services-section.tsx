import type { Dictionary } from "@/lib/i18n";

export function ServicesSection({ dictionary }: { dictionary: Dictionary }) {
  const { services } = dictionary.home;

  return (
    <section className="border-b border-border/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium text-primary">{services.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            {services.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {services.description}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {services.items.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-border bg-card px-5 py-4 text-sm text-card-foreground"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
