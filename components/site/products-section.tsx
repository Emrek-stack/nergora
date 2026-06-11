import type { Dictionary } from "@/lib/i18n";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function ProductsSection({ dictionary }: { dictionary: Dictionary }) {
  const { products } = dictionary.home;

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-primary">{products.eyebrow}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {products.title}
          </p>
          <p className="mt-6 text-lg/8 text-muted-foreground">
            {products.description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {products.items.map((product) => (
              <Card key={product.name} className="flex flex-col border-border/60 bg-card/50 transition-all hover:bg-card/80 hover:shadow-md">
                <CardHeader>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <div className="h-5 w-5 rounded-sm bg-primary/80" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-7">
                    {product.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
