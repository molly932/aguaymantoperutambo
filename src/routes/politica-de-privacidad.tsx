import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Aguaymanto Perú" },
      { name: "description", content: "Política de privacidad y tratamiento de datos personales." },
      { property: "og:title", content: "Política de privacidad | Aguaymanto Perú" },
      { property: "og:description", content: "Cómo tratamos los datos que nos envías." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <section className="container-page max-w-3xl py-20">
      <h1 className="text-4xl text-forest">Política de privacidad</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
        <p>
          [TEXTO PROVISIONAL] {siteConfig.name} utiliza los datos enviados mediante el formulario de
          contacto únicamente para responder consultas y cotizaciones.
        </p>
        <p>Este texto debe ser reemplazado por la política oficial de la empresa.</p>
      </div>
    </section>
  ),
});
