import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/95 py-1 shadow-[var(--shadow-soft)] backdrop-blur"
          : "border-b border-transparent bg-background py-2",
      )}
    >
      <div className="container-page flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 py-3" aria-label="Ir al inicio">
          <span className="flex size-10 items-center justify-center rounded-full bg-forest text-forest-foreground">
            <Leaf className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold tracking-tight text-forest">
              {siteConfig.shortName}
            </span>
            <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              {siteConfig.name}
            </span>
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="relative rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  activeProps={{ className: "text-forest" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="gold">
            <Link to="/contacto">Solicitar cotización</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-md text-forest transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div id="menu-movil" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Navegación móvil" className="container-page py-4">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                    activeProps={{ className: "bg-secondary text-forest" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild variant="gold" size="xl" className="mt-4 w-full">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
