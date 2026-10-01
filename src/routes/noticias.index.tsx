import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { NewsCard } from "@/components/site/NewsCard";
import { news } from "@/data/news";
import heroCampos from "@/assets/hero-campos.jpg";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Noticias y actualidad | Aguaymanto Perú" },
      {
        name: "description",
        content: "Novedades de la empresa, agricultura, mercado y todo sobre el aguaymanto peruano.",
      },
      { property: "og:title", content: "Noticias y actualidad | Aguaymanto Perú" },
      { property: "og:description", content: "Blog corporativo sobre aguaymanto y agricultura peruana." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Noticias,
});

function Noticias() {
  return (
    <>
      <PageHero
        eyebrow="Noticias"
        title="Noticias y actualidad"
        description="Novedades de la empresa, agricultura y mercado del aguaymanto."
        image={heroCampos}
        alt="Campos de aguaymanto en los Andes"
        breadcrumb={[
          { label: "Inicio", to: "/" },
          { label: "Noticias", to: "/noticias" },
        ]}
      />
      <section className="py-20 sm:py-24">
        <ul className="container-page grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {news.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 100}>
              <NewsCard post={post} />
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
