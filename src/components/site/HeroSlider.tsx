import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VideoModal } from "@/components/site/VideoModal";
import heroAguaymanto from "@/assets/hero-aguaymanto.jpg";
import heroCampos from "@/assets/hero-campos.jpg";
import heroCosecha from "@/assets/hero-cosecha.jpg";

type Slide = {
  image: string;
  alt: string;
  title: string;
  text?: string;
  actions: { label: string; to: string; variant: "gold" | "onDark" }[];
};

const slides: Slide[] = [
  {
    image: heroAguaymanto,
    alt: "Aguaymanto fresco peruano en cajas de madera con los Andes al fondo",
    title: "Aguaymanto peruano, calidad que nace en nuestra tierra",
    text: "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.",
    actions: [
      { label: "Conocer nuestros productos", to: "/productos", variant: "gold" },
      { label: "Solicitar cotización", to: "/contacto", variant: "onDark" },
    ],
  },
  {
    image: heroCampos,
    alt: "Plantaciones de aguaymanto en terrazas agrícolas de los Andes peruanos",
    title: "Del campo peruano a nuevos mercados",
    text: "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.",
    actions: [{ label: "Conoce nuestra empresa", to: "/quienes-somos", variant: "gold" }],
  },
  {
    image: heroCosecha,
    alt: "Agricultores peruanos cosechando aguaymanto a mano",
    title: "Natural, versátil y de excelente calidad",
    actions: [{ label: "Ver productos", to: "/productos", variant: "gold" }],
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
  return () => window.clearInterval(id);
  }, [index]);

  const current = slides[index] ?? slides[0];
  if (!current) return null;

  return (
    <section
      aria-label="Presentación principal"
      aria-roledescription="carrusel"
      className="relative h-[92vh] min-h-[540px] w-full overflow-hidden bg-forest"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          role="group"
          aria-roledescription="diapositiva"
          aria-label={`${i + 1} de ${slides.length}`}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            i === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={cn(
              "size-full object-cover",
              i === index && "animate-slow-zoom",
            )}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "var(--gradient-overlay)" }}
            aria-hidden="true"
          />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="container-page">
          <div key={index} className="max-w-2xl animate-fade-in-slow">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">
              Producción y comercialización de aguaymanto
            </p>
            <h1 className="text-balance font-display text-4xl leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
              {current.title}
            </h1>
            {current.text && (
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                {current.text}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              {current.actions.map((action) => (
                <Button key={action.label} asChild variant={action.variant} size="xl">
                  <Link to={action.to}>{action.label}</Link>
                </Button>
              ))}
            </div>
            <VideoModal />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-7 z-10">
        <div className="container-page flex items-center justify-between">
          <div className="flex items-center gap-2.5" role="tablist" aria-label="Diapositivas">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                onClick={() => go(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft",
                  i === index
                    ? "w-10 bg-accent"
                    : "w-5 bg-primary-foreground/45 hover:bg-primary-foreground/70",
                )}
              />
            ))}
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Diapositiva anterior"
              className="flex size-11 items-center justify-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-colors hover:bg-primary-foreground/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Siguiente diapositiva"
              className="flex size-11 items-center justify-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-colors hover:bg-primary-foreground/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
