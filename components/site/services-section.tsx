import type { Dictionary } from "@/lib/i18n";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection({ dictionary }: { dictionary: Dictionary }) {
  const { services } = dictionary.home;

  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8 items-center">
        <div>
          <p className="text-base/7 font-semibold text-primary">{services.eyebrow}</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {services.title}
          </h2>
          <p className="mt-6 text-lg/8 text-muted-foreground">
            {services.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.items.map((service) => (
            <Card key={service} className="border-border/60 bg-background/50 backdrop-blur shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <p className="text-sm font-medium leading-6 text-foreground">
                  {service}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
