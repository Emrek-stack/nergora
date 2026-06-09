import type { Dictionary } from "@/lib/i18n";

export function WhySection({ dictionary }: { dictionary: Dictionary }) {
  const { why } = dictionary.home;

  return (
    <section className="border-b border-border/70">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-medium text-primary">{why.eyebrow}</p>

        <div className="mt-3 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-3xl font-semibold tracking-tight">
            {why.title}
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {why.items.map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
