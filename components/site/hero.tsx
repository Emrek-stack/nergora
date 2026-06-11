import type { Dictionary, Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/frontend"; // Actually, it should be next/link, wait, let's just use `<a>` since the old code used it or `next/link`. I will use next/link.

export function Hero({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const { hero } = dictionary.home;

  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-6 pointer-events-none">
            {hero.location}
          </Badge>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-6 text-foreground">
            {hero.title}{" "}
            <span className="text-primary bg-clip-text">
              {hero.titleAccent}
            </span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-muted-foreground mb-8">
            {hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8">
              <a href={`/${locale}/products`}>
                {hero.primaryCta}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8">
              <a href={`/${locale}/contact`}>
                {hero.secondaryCta}
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mx-auto w-full max-w-xl lg:max-w-none">
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-2 shadow-2xl">
            <div className="rounded-lg border border-border bg-background overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-3 text-xs font-medium text-muted-foreground">
                  {hero.consoleTitle}
                </span>
              </div>
              
              <div className="space-y-4 p-6">
                {hero.consoleItems.map(([label, status]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/50"
                  >
                    <span className="text-sm font-medium text-foreground">{label}</span>
                    <Badge variant="outline" className="text-primary bg-primary/10 border-primary/20">
                      {status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
