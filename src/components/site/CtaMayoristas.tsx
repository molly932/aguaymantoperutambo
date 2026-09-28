import { Link } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { whatsappLink } from "@/config/site";

const puntos = [
  "Pedidos por volumen",
  "Atención personalizada",
  "Presentaciones comerciales",
  "Coordinación de entregas",
  "Cotizaciones",
];

export function CtaMayoristas() {
  return (
    <section className="bg-forest py-20">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionTitle
            eyebrow="Clientes mayoristas"
            tone="light"
            title="¿Buscas un proveedor de aguaymanto?"
            description="Atendemos consultas comerciales de restaurantes, tiendas, distribuidores, empresas y otros negocios que requieren aguaymanto."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {puntos.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-4 text-sm font-medium text-primary-foreground"
              >
                <BadgeCheck className="size-5 shrink-0 text-gold-soft" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
