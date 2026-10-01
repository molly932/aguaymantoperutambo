import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { CtaMayoristas } from "@/components/site/CtaMayoristas";
import { products } from "@/data/products";
import { atributosCalidad } from "@/data/company";
import heroAguaymanto from "@/assets/hero-aguaymanto.jpg";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos | Aguaymanto fresco y al por mayor" },
      {
        name: "description",
        content:
          "Aguaymanto fresco seleccionado, presentaciones para distribución y pedidos especiales. Consulta disponibilidad y precios.",
      },
      { property: "og:title", content: "Productos | Aguaymanto Perú" },
      { property: "og:description", content: "Catálogo de aguaymanto peruano para particulares y empresas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Productos,
});

function Productos() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros productos"
        title="Aguaymanto peruano seleccionado"
        description="Presentaciones para consumo particular, negocios gastronómicos y distribución comercial."
        image={heroAguaymanto}
        alt="Aguaymanto fresco en cajas de madera"
        breadcrumb={[
          { label: "Inicio", to: "/" },
          { label: "Productos", to: "/productos" },
        ]}
      />

      <section id="aguaymanto-fresco" className="py-20 sm:py-24">
        <div className="container-page">
          <SectionTitle eyebrow="Catálogo" title="Presentaciones disponibles" />
          <ul className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 110}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="calidad" className="surface-cream py-20 sm:py-24">
        <div className="container-page">
          <SectionTitle eyebrow="Calidad" title="Calidad que se nota" align="center" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {atributosCalidad.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 80}>
                <div className="flex h-full gap-4 rounded-xl border border-border bg-card p-6">
                  <CheckCircle2 className="size-6 shrink-0 text-leaf" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-base text-forest">{a.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <div id="pedidos-mayoristas">
        <CtaMayoristas />
      </div>
    </>
  );
}
