import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, HeartHandshake, Leaf, Sprout, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { compromiso, historia, mision, valores, vision } from "@/data/company";
import heroCampos from "@/assets/hero-campos.jpg";
import galeriaEquipo from "@/assets/galeria-equipo.jpg";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes somos | Empresa peruana productora de aguaymanto" },
      {
        name: "description",
        content:
          "Conoce nuestra empresa: historia, misión, visión, valores y compromiso con la calidad del aguaymanto peruano.",
      },
      { property: "og:title", content: "Quiénes somos | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Una empresa con raíces en el campo peruano dedicada al aguaymanto de calidad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuienesSomos,
});

const compromisoIconos = [Leaf, HeartHandshake, Sprout];

function QuienesSomos() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una empresa con raíces en el campo peruano"
        description="Producimos y comercializamos aguaymanto con un enfoque en calidad, servicio y relaciones comerciales de largo plazo."
        image={heroCampos}
        alt="Plantación de aguaymanto en terrazas andinas al atardecer"
        breadcrumb={[
          { label: "Inicio", to: "/" },
          { label: "Quiénes Somos", to: "/quienes-somos" },
        ]}
      />

      {/* Nuestra empresa */}
      <section id="nuestra-empresa" className="py-20 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionTitle eyebrow="Nuestra empresa" title="Quiénes somos y qué hacemos" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Somos una empresa peruana dedicada a la producción y comercialización de
                aguaymanto. Nuestro trabajo abarca el cuidado del producto en campo, su selección y
                la atención comercial a cada cliente.
              </p>
              <p>
                Comercializamos aguaymanto fresco, presentaciones orientadas a distribución y
                opciones especiales según el requerimiento del cliente. Atendemos a compradores
                particulares, restaurantes, tiendas, distribuidores y empresas.
              </p>
              <p>
                Nos diferencia la atención cercana y la constancia en la calidad: escuchamos la
                necesidad de cada cliente y proponemos la presentación adecuada para su negocio.
              </p>
            </div>
            <Button asChild variant="forest" size="xl" className="mt-8">
              <Link to="/productos">Ver nuestros productos</Link>
            </Button>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={galeriaEquipo}
              alt="Equipo de trabajo en un campo de aguaymanto peruano"
              width={1408}
              height={912}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant"
            />
          </Reveal>
        </div>
      </section>

      {/* Historia */}
      <section id="nuestra-historia" className="surface-cream py-20 sm:py-24">
        <div className="container-page">
          <SectionTitle eyebrow="Nuestra historia" title="El recorrido de la empresa" />
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {historia.map((item, i) => (
              <Reveal as="li" key={item.step} delay={i * 110}>
                <div className="relative h-full border-t-2 border-accent pt-6">
                  <span className="font-display text-3xl text-accent">{item.step}</span>
                  <h3 className="mt-2 font-display text-lg text-forest">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-7 lg:grid-cols-2">
          <Reveal>
            <article id="mision" className="h-full rounded-xl bg-forest p-9 text-primary-foreground">
              <Target className="size-10 text-gold-soft" aria-hidden="true" />
              <h2 className="mt-6 font-display text-2xl">Nuestra Misión</h2>
              <p className="mt-4 leading-relaxed text-primary-foreground/85">{mision}</p>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article
              id="vision"
              className="h-full rounded-xl border border-border bg-card p-9 shadow-[var(--shadow-soft)]"
            >
              <Compass className="size-10 text-leaf" aria-hidden="true" />
              <h2 className="mt-6 font-display text-2xl text-forest">Nuestra Visión</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{vision}</p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="surface-cream py-20 sm:py-24">
        <div className="container-page">
          <SectionTitle eyebrow="Nuestros valores" title="Lo que guía nuestro trabajo" align="center" />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((valor, i) => (
              <Reveal as="li" key={valor.title} delay={i * 80}>
                <div className="h-full rounded-xl border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-forest">
                    <Leaf className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg text-forest">{valor.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{valor.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Compromiso */}
      <section id="compromiso" className="py-20 sm:py-24">
        <div className="container-page">
          <SectionTitle eyebrow="Nuestro compromiso" title="Tres pilares que sostienen nuestro trabajo" />
          <ul className="mt-12 grid gap-7 md:grid-cols-3">
            {compromiso.map((item, i) => {
              const Icon = compromisoIconos[i % compromisoIconos.length];
              return (
                <Reveal as="li" key={item.title} delay={i * 100}>
                  <div className="h-full rounded-xl border-l-4 border-accent bg-secondary p-7">
                    <Icon className="size-7 text-forest" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-lg text-forest">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
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
          <SectionTitle eyebrow="Galería" title="Nuestro trabajo en imágenes" align="center" />
          <div className="mt-14">
            <Gallery />
          </div>
        </div>
      </section>
    </>
  );
}
