import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Leaf, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { navItems, siteConfig, whatsappLink } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10">
              <Leaf className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold">{siteConfig.shortName}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            {siteConfig.name} — {siteConfig.tagline}
          </p>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-soft">
            Enlaces
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/80 transition-colors hover:text-gold-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-soft">
            Información
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">
                WhatsApp {siteConfig.contact.whatsappLabel}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{siteConfig.contact.phone}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{siteConfig.contact.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>
                {siteConfig.contact.address}, {siteConfig.contact.city}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-soft">
            Redes sociales
          </h2>
          <ul className="mt-4 flex gap-3">
            {[
              { href: siteConfig.social.facebook, label: "Facebook", Icon: Facebook },
              { href: siteConfig.social.instagram, label: "Instagram", Icon: Instagram },
              { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:border-gold-soft hover:text-gold-soft"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/25 text-xs font-semibold transition-colors hover:border-gold-soft hover:text-gold-soft"
              >
                TT
              </a>
            </li>
          </ul>
          <p className="mt-5 text-sm text-primary-foreground/70">
            Horario: {siteConfig.contact.hours}
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link to="/politica-de-privacidad" className="hover:text-gold-soft">
              Política de privacidad
            </Link>
            <Link to="/terminos-y-condiciones" className="hover:text-gold-soft">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
