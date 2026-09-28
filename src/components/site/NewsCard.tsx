import { Link } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { formatDate, type NewsPost } from "@/data/news";

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
      <Link to="/noticias/$slug" params={{ slug: post.slug }} className="block overflow-hidden">
        <img
          src={post.image}
          alt={post.alt}
          width={1200}
          height={800}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full bg-secondary px-3 py-1 font-semibold uppercase tracking-wide text-forest">
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            {formatDate(post.date)}
          </span>
        </div>
        <h3 className="mt-4 font-display text-lg leading-snug text-forest">
          <Link to="/noticias/$slug" params={{ slug: post.slug }} className="hover:text-leaf">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <Link
          to="/noticias/$slug"
          params={{ slug: post.slug }}
          className="mt-5 text-sm font-semibold text-leaf underline-offset-4 hover:underline"
        >
          Leer más
        </Link>
      </div>
    </article>
  );
}
