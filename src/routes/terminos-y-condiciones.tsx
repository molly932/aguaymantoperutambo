import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Aguaymanto Perú" },
      { name: "description", content: "Términos y condiciones de uso del sitio web." },
      { property: "og:title", content: "Términos y condiciones | Aguaymanto Perú" },
      { property: "og:description", content: "Condiciones de uso del sitio web." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <section className="container-page max-w-3xl py-20">
      <h1 className="text-4xl text-forest">Términos y condiciones</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
        <p>[TEXTO PROVISIONAL] Al usar el sitio de {siteConfig.name} aceptas estas condiciones.</p>
        <p>Este texto debe ser reemplazado por los términos oficiales de la empresa.</p>
      </div>
    </section>
  ),
});
