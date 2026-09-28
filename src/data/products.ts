import productoFresco from "@/assets/producto-fresco.jpg";
import heroAguaymanto from "@/assets/hero-aguaymanto.jpg";
import heroCosecha from "@/assets/hero-cosecha.jpg";

export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  /** Campos ampliables: presentación, peso, disponibilidad, precio, ficha técnica. */
  details: { label: string; value: string }[];
  features: string[];
};

export const products: Product[] = [
  {
    slug: "aguaymanto-fresco",
    name: "Aguaymanto fresco",
    description:
      "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.",
    image: productoFresco,
    alt: "Aguaymanto fresco seleccionado en presentación comercial",
    cta: "Solicitar información",
    details: [
      { label: "Presentación", value: "[PRESENTACIÓN]" },
      { label: "Peso", value: "[PESO]" },
      { label: "Disponibilidad", value: "[DISPONIBILIDAD]" },
      { label: "Precio", value: "[PRECIO]" },
    ],
    features: ["Selección manual", "Empaque cuidado", "Origen peruano"],
  },
  {
    slug: "aguaymanto-distribucion",
    name: "Aguaymanto para distribución",
    description: "Presentaciones orientadas a clientes comerciales y distribuidores.",
    image: heroAguaymanto,
    alt: "Cajas de aguaymanto listas para distribución comercial",
    cta: "Consultar",
    details: [
      { label: "Presentación", value: "[PRESENTACIÓN]" },
      { label: "Volumen mínimo", value: "[VOLUMEN]" },
      { label: "Disponibilidad", value: "[DISPONIBILIDAD]" },
      { label: "Precio", value: "[PRECIO]" },
    ],
    features: ["Pedidos por volumen", "Coordinación de entregas", "Atención comercial"],
  },
  {
    slug: "presentaciones-especiales",
    name: "Presentaciones especiales",
    description: "Opciones de acuerdo con las necesidades del cliente y disponibilidad.",
    image: heroCosecha,
    alt: "Cosecha de aguaymanto en el campo peruano",
    cta: "Consultar presentación",
    details: [
      { label: "Presentación", value: "[A COORDINAR]" },
      { label: "Peso", value: "[A COORDINAR]" },
      { label: "Disponibilidad", value: "[DISPONIBILIDAD]" },
      { label: "Precio", value: "[PRECIO]" },
    ],
    features: ["Requerimientos a medida", "Evaluación por pedido", "Asesoría previa"],
  },
];
