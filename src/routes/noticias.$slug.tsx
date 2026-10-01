import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/site/NewsCard";
import { formatDate, news } from "@/data/news";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const post = news.find((n) => n.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} | Aguaymanto Perú` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-3xl text-forest">Noticia no encontrada</h1>
      <Button asChild variant="forest" className="mt-6">
        <Link to="/noticias">Ver todas las noticias</Link>
      </Button>
    </div>
  ),
  component: NoticiaDetalle,
});

function NoticiaDetalle() {
  const { post } = Route.useLoaderData();
  const relacionadas = news.filter((n) => n.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <header className="surface-cream py-14 sm:py-20">
        <div className="container-page max-w-4xl">
          <Link to="/noticias" className="inline-flex items-center gap-2 text-sm font-medium text-leaf hover:underline">
            <ArrowLeft className="size-4" aria-hidden="true" /> Volver a noticias
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-leaf">{post.category}</p>
          <h1 className="mt-3 text-balance text-3xl leading-tight text-forest sm:text-5xl">{post.title}</h1>
          <div className="mt-5 flex flex-wrap gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4" aria-hidden="true" /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <User className="size-4" aria-hidden="true" /> {post.author}
            </span>
          </div>
        </div>
      </header>
      <div className="container-page max-w-4xl py-12">
        <img
          src={post.image}
          alt={post.alt}
          width={1920}
          height={1088}
          className="aspect-[16/9] w-full rounded-xl object-cover shadow-elegant"
        />
        <div className="mx-auto mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-foreground/85">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {post.gallery && (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {post.gallery.map((g) => (
              <li key={g.alt}>
                <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
              </li>
            ))}
          </ul>
        )}
      </div>
      {relacionadas.length > 0 && (
        <section className="surface-cream py-16">
          <div className="container-page">
            <h2 className="text-2xl text-forest">Noticias relacionadas</h2>
            <ul className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {relacionadas.map((n) => (
                <li key={n.slug}>
                  <NewsCard post={n} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}
