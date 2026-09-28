import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  alt: string;
  breadcrumb: { label: string; to: string }[];
};

export function PageHero({ eyebrow, title, description, image, alt, breadcrumb }: Props) {
  return (
    <section className="relative overflow-hidden bg-forest">
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-overlay)" }}
        aria-hidden="true"
      />
      <div className="container-page relative z-10 py-20 sm:py-28">
        <nav aria-label="Ruta de navegación" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-primary-foreground/70">
            {breadcrumb.map((item, i) => (
              <li key={item.to} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="size-3" aria-hidden="true" />}
                {i === breadcrumb.length - 1 ? (
                  <span aria-current="page" className="text-gold-soft">
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.to} className="hover:text-gold-soft">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-balance font-display text-4xl leading-tight text-primary-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
