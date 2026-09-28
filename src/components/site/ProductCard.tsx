import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.alt}
          width={1200}
          height={900}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-forest">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {product.features.map((f) => (
            <li
              key={f}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {f}
            </li>
          ))}
        </ul>
        <Button asChild variant="gold" className="mt-6 w-full">
          <Link to="/contacto" search={{ producto: product.slug }}>
            {product.cta}
          </Link>
        </Button>
      </div>
    </article>
  );
}
