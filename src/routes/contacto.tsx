import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ContactForm } from "@/components/site/ContactForm";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { siteConfig, whatsappLink } from "@/config/site";
import { services } from "@/data/services";

const searchSchema = z.object({
  producto: z.string().optional(),
  servicio: z.string().optional(),
});

export const Route = createFileRoute("/contacto")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Contacto | Solicita una cotización de aguaymanto" },
      {
        name: "description",
        content: "Contáctanos por WhatsApp, teléfono o formulario para comprar aguaymanto o solicitar una cotización mayorista.",
      },
      { property: "og:title", content: "Contacto | Aguaymanto Perú" },
      { property: "og:description", content: "Solicita una cotización de aguaymanto peruano." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const { producto, servicio } = Route.useSearch();
  const servicioNombre = services.find((s) => s.slug === servicio)?.title;
  const c = siteConfig.contact;
  const datos = [
    { Icon: MessageCircle, label: "WhatsApp", value: c.whatsappLabel, href: whatsappLink() },
    { Icon: Phone, label: "Teléfono", value: c.phone },
    { Icon: Mail, label: "Correo electrónico", value: c.email },
    { Icon: MapPin, label: "Dirección", value: `${c.address}, ${c.city}` },
    { Icon: Clock, label: "Horario de atención", value: c.hours },
  ];

  return (
    <>
      <section className="surface-cream py-16 sm:py-20">
        <div className="container-page">
          <SectionTitle
            as="h1"
            eyebrow="Contacto"
            title="Estamos aquí para atenderte"
            description="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos."
          />
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <aside>
            <ul className="space-y-5">
              {datos.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-forest">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-forest hover:underline">
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-forest">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild variant="forest" size="xl" className="mt-8 w-full">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
          </aside>
          <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-9">
            <h2 className="mb-6 text-2xl text-forest">Solicitar cotización</h2>
            <ContactForm
              defaultProduct={producto}
              defaultSubject={servicioNombre ? `Consulta: ${servicioNombre}` : undefined}
            />
          </div>
        </div>
      </section>
      <section className="surface-cream py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <SectionTitle eyebrow="Preguntas frecuentes" title="Antes de escribirnos" align="center" />
          <div className="mt-10 rounded-xl border border-border bg-card p-6 sm:p-8">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
