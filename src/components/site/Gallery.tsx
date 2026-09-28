import { useEffect, useState } from "react";
import { X } from "lucide-react";
import heroAguaymanto from "@/assets/hero-aguaymanto.jpg";
import heroCampos from "@/assets/hero-campos.jpg";
import heroCosecha from "@/assets/hero-cosecha.jpg";
import productoFresco from "@/assets/producto-fresco.jpg";
import galeriaSeleccion from "@/assets/galeria-seleccion.jpg";
import galeriaEmpaque from "@/assets/galeria-empaque.jpg";
import galeriaFruto from "@/assets/galeria-fruto.jpg";
import galeriaEquipo from "@/assets/galeria-equipo.jpg";
import { cn } from "@/lib/utils";

const items = [
  { src: heroCampos, alt: "Campos y plantaciones de aguaymanto en los Andes", span: "sm:col-span-2" },
  { src: galeriaFruto, alt: "Fruto de aguaymanto con su capuchón abierto", span: "sm:row-span-2" },
  { src: heroCosecha, alt: "Cosecha manual de aguaymanto en el campo", span: "" },
  { src: galeriaSeleccion, alt: "Selección de aguaymanto en planta", span: "" },
  { src: galeriaEmpaque, alt: "Empaque de aguaymanto en cajas", span: "" },
  { src: productoFresco, alt: "Aguaymanto fresco en presentación comercial", span: "" },
  { src: galeriaEquipo, alt: "Equipo de trabajo en campo de aguaymanto", span: "sm:col-span-2" },
  { src: heroAguaymanto, alt: "Aguaymanto fresco en cajas de madera", span: "" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {items.map((item, i) => (
          <li key={item.alt} className={cn("overflow-hidden rounded-lg", item.span)}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block size-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Ampliar imagen: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="size-full min-h-40 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[active].alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 animate-fade-in-slow"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Cerrar imagen"
            className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/15"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <img
            src={items[active].src}
            alt={items[active].alt}
            className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </>
  );
}
