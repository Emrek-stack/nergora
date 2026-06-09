import type { Dictionary } from "@/lib/i18n";

export function ProductsSection({ dictionary }: { dictionary: Dictionary }) {
  const { products } = dictionary.home;

  return (
    <section className="border-b border-border/70">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">{products.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            {products.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {products.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {products.items.map((product) => (
            <div
              key={product.name}
              className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50"
            >
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
