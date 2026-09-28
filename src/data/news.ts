import heroAguaymanto from "@/assets/hero-aguaymanto.jpg";
import heroCampos from "@/assets/hero-campos.jpg";
import heroCosecha from "@/assets/hero-cosecha.jpg";

export type NewsPost = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  author: string;
  excerpt: string;
  image: string;
  alt: string;
  content: string[];
  gallery?: { src: string; alt: string }[];
};

/** Contenido de ejemplo. Editable o eliminable. */
export const news: NewsPost[] = [
  {
    slug: "aguaymanto-peruano-nuevos-mercados",
    title: "El aguaymanto peruano y su presencia en nuevos mercados",
    category: "Mercado",
    date: "2026-08-14",
    author: "[AUTOR]",
    excerpt:
      "El interés comercial por el aguaymanto continúa creciendo y abre oportunidades para los productores peruanos.",
    image: heroAguaymanto,
    alt: "Aguaymanto peruano en cajas de madera con paisaje andino de fondo",
    content: [
      "El aguaymanto es un fruto originario de los Andes que ha ganado presencia en distintos mercados por su sabor característico y su versatilidad en la gastronomía.",
      "Para las empresas dedicadas a su producción y comercialización, este interés representa una oportunidad de trabajo sostenido: mejorar la selección, cuidar la presentación y ofrecer un servicio comercial confiable.",
      "Desde nuestra empresa seguimos enfocados en entregar un producto cuidado y en acompañar a cada cliente en la definición de la presentación que mejor se ajuste a sus necesidades.",
    ],
    gallery: [
      { src: heroCampos, alt: "Plantación de aguaymanto en terrazas andinas" },
      { src: heroCosecha, alt: "Cosecha manual de aguaymanto" },
    ],
  },
  {
    slug: "conoce-el-cultivo-del-aguaymanto",
    title: "Conoce más sobre el cultivo del aguaymanto",
    category: "Agricultura",
    date: "2026-07-02",
    author: "[AUTOR]",
    excerpt:
      "El cultivo del aguaymanto requiere atención constante en campo para lograr un fruto uniforme y de buena presentación.",
    image: heroCampos,
    alt: "Campos de cultivo de aguaymanto al atardecer en los Andes",
    content: [
      "El aguaymanto se desarrolla en zonas de altura, donde las condiciones de clima y suelo favorecen su crecimiento.",
      "El trabajo en campo incluye el manejo de la planta, el control del cultivo y una cosecha cuidadosa que permita conservar el capuchón que protege al fruto.",
      "Estas prácticas influyen directamente en la presentación final del producto que llega a nuestros clientes.",
    ],
  },
  {
    slug: "apuesta-por-la-calidad",
    title: "Nuestra apuesta por la calidad y la producción responsable",
    category: "Noticias de la empresa",
    date: "2026-05-20",
    author: "[AUTOR]",
    excerpt:
      "Trabajamos en procesos que nos permitan mantener estándares consistentes en cada entrega.",
    image: heroCosecha,
    alt: "Manos de agricultores peruanos cosechando aguaymanto",
    content: [
      "La calidad no es un resultado puntual: es la consecuencia de procesos ordenados en campo, selección y despacho.",
      "Por eso revisamos de forma continua nuestras prácticas, buscando que cada pedido mantenga las características que nuestros clientes esperan.",
      "Este compromiso también incluye el cuidado del entorno y el respeto por el trabajo de quienes participan en la cadena productiva.",
    ],
  },
];

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
