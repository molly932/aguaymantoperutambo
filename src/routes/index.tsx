import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, ShieldCheck, Sprout, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { ServiceCard } from "@/components/site/ServiceCard";
import { NewsCard } from "@/components/site/NewsCard";
import { Gallery } from "@/components/site/Gallery";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { CtaMayoristas } from "@/components/site/CtaMayoristas";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { news } from "@/data/news";
import { razones } from "@/data/company";
import heroCampos from "@/assets/hero-campos.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aguaymanto Perú | Producción y venta de aguaymanto peruano" },
      {
        name: "description",
        content:
          "Empresa peruana dedicada a la producción y comercialización de aguaymanto fresco. Venta al por mayor, atención a restaurantes, tiendas y distribuidores.",
      },
      { property: "og:title", content: "Aguaymanto Perú | Calidad desde el campo peruano" },
      {
        property: "og:description",
        content:
          "Aguaymanto peruano seleccionado. Solicita una cotización para tu negocio o empresa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const iconos = [Sprout, ShieldCheck, Users, Leaf, Sprout];

function Index() {
  return (
    <>
      <HeroSlider />

      {/* Sobre nosotros */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionTitle
              eyebrow="Sobre nosotros"
              title="Comprometidos con la calidad del aguaymanto peruano"
              description="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes."
            />
            <Button asChild variant="forest" size="xl" className="mt-8">
              <Link to="/quienes-somos">
                Conoce quiénes somos <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={120} className="relative">
            <img
              src={heroCampos}
              alt="Campos de aguaymanto en los Andes peruanos al atardecer"
              width={1920}
              height={1088}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -left-4 hidden rounded-xl bg-accent px-6 py-5 text-accent-foreground shadow-[var(--shadow-gold)] sm:block">
              <p className="font-display text-2xl leading-none">100%</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide">Origen peruano</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Productos */}
      <section className="surface-cream py-20 sm:py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Nuestros productos"
            title="Aguaymanto seleccionado para cada tipo de cliente"
            description="Presentaciones pensadas para consumo particular, negocios gastronómicos y distribución comercial."
            align="center"
          />
          <ul className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal as="li" key={product.slug} delay={i * 110}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Button asChild variant="forest" size="xl">
              <Link to="/productos">Ver todos los productos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Nuestros servicios"
            title="Acompañamos a nuestros clientes en cada pedido"
            align="center"
          />
          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <Reveal as="li" key={service.slug} delay={i * 90}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaMayoristas />

      {/* Por qué elegirnos */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionTitle eyebrow="¿Por qué elegirnos?" title="Razones para trabajar con nosotros" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {razones.map((razon, i) => {
              const Icon = iconos[i % iconos.length];
              return (
                <Reveal as="li" key={razon.title} delay={i * 80}>
                  <div className="h-full rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-leaf/40">
                    <Icon className="size-6 text-leaf" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-base text-forest">{razon.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {razon.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Galería */}
      <section className="surface-cream py-20 sm:py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Galería"
            title="Del campo a la mesa"
            description="Imágenes de nuestros campos, la cosecha, la selección y el producto final."
            align="center"
          />
          <div className="mt-14">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionTitle eyebrow="Noticias" title="Novedades y actualidad" />
          <ul className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {news.slice(0, 3).map((post, i) => (
              <Reveal as="li" key={post.slug} delay={i * 110}>
                <NewsCard post={post} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="surface-cream py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas antes de comprar"
            description="Si no encuentras la respuesta que buscas, escríbenos y te atendemos."
          />
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
