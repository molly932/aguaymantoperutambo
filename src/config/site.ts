/**
 * Configuración central del sitio.
 * Edita aquí los datos de la empresa: nombre, contacto, WhatsApp y redes.
 * Los valores entre corchetes son placeholders y deben reemplazarse.
 */

export const siteConfig = {
  name: "Aguaymanto Perú Miskiaco",
  shortName: "AGUAYMANTO PERÚ",
  tagline: "Calidad y compromiso desde el campo peruano.",
  url: "https://aguaymantoperu.com",
  description:
    "Producción y comercialización de aguaymanto peruano seleccionado. Venta al por mayor y atención a restaurantes, tiendas y distribuidores.",
  featuredVideo: {
    title: "Conoce el cultivo del aguaymanto",
    youtubeEmbedUrl: "https://www.youtube.com/embed/KquI_AS5ChY?autoplay=1&rel=0",
  },
  contact: {
    phone: "+51 932026015",
    // Número en formato internacional sin signos, ej: 51987654321
    whatsapp: "51948700621",
    whatsappLabel: "948700621",
    email: "ventas@aguaymantoperumiskiaco.com",
    address: "Comunidad Miskiaco S/N",
    city: "Limatambo - Anta - Cusco",
    hours: "Lunes - Viernes, de 8:30am - 5:30pm",
  },
  whatsappMessage:
    "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    linkedin: "#",
  },
} as const;

export const whatsappLink = (message: string = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const navItems = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Productos", to: "/productos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Noticias", to: "/noticias" },
  { label: "Contacto", to: "/contacto" },
] as const;
