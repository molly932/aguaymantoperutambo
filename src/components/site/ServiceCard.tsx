import { Link } from "@tanstack/react-router";
import {
  Handshake,
  PackageSearch,
  ShoppingBasket,
  Store,
  Truck,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Service } from "@/data/services";

const icons: Record<Service["icon"], LucideIcon> = {
  "shopping-basket": ShoppingBasket,
  truck: Truck,
  utensils: Utensils,
  store: Store,
  "package-search": PackageSearch,
  handshake: Handshake,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-leaf/40 hover:shadow-elegant">
      <span className="flex size-12 items-center justify-center rounded-lg bg-secondary text-forest transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-lg text-forest">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <Button asChild variant="link" className="mt-4 justify-start px-0 text-leaf">
        <Link to="/contacto" search={{ servicio: service.slug }}>
          Consultar
        </Link>
      </Button>
    </article>
  );
}
