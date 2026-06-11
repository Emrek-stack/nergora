import type { Dictionary } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";

export function WhySection({ dictionary }: { dictionary: Dictionary }) {
  const { why } = dictionary.home;

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-base/7 font-semibold text-primary">{why.eyebrow}</p>

        <div className="mt-4 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 items-start">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sticky top-24">
            {why.title}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {why.items.map((item, index) => (
              <Card key={item.title} className="bg-muted/40 border-border/50 hover:bg-muted/80 transition-colors shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
