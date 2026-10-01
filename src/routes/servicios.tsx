import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaMayoristas } from "@/components/site/CtaMayoristas";
import { services } from "@/data/services";
import heroCosecha from "@/assets/hero-cosecha.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | Proveedor de aguaymanto para negocios" },
      {
        name: "description",
        content:
          "Venta de aguaymanto, venta mayorista, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial.",
      },
      { property: "og:title", content: "Servicios | Aguaymanto Perú" },
      { property: "og:description", content: "Servicios comerciales alrededor del aguaymanto peruano." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros servicios"
        title="Soluciones comerciales con aguaymanto"
        description="Atendemos a clientes particulares y empresas con un servicio cercano y confiable."
        image={heroCosecha}
        alt="Cosecha manual de aguaymanto"
        breadcrumb={[
          { label: "Inicio", to: "/" },
          { label: "Servicios", to: "/servicios" },
        ]}
      />
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionTitle eyebrow="Lo que ofrecemos" title="Servicios para cada tipo de cliente" />
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 80}>
                <div id={s.slug} className="h-full">
                  <ServiceCard service={s} />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaMayoristas />
    </>
  );
}
