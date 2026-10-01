import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { products } from "@/data/products";

type Field = "nombre" | "email" | "telefono" | "mensaje";
type Errors = Partial<Record<Field, string>>;

const tiposCliente = [
  "Cliente particular",
  "Restaurante / hotel / cafetería",
  "Tienda o minorista",
  "Distribuidor",
  "Empresa",
  "Otro",
];

export function ContactForm({
  defaultProduct,
  defaultSubject,
}: {
  defaultProduct?: string | undefined;
  defaultSubject?: string | undefined;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Partial<Record<Field, string>>;
    const next: Errors = {};

    if (!data.nombre?.trim()) next.nombre = "Ingresa tu nombre completo.";
    if (!data.email?.trim()) next.email = "Ingresa tu correo electrónico.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email))
      next.email = "Ingresa un correo válido.";
    if (!data.telefono?.trim()) next.telefono = "Ingresa un teléfono de contacto.";
    if (!data.mensaje?.trim() || data.mensaje.trim().length < 10)
      next.mensaje = "Cuéntanos brevemente tu consulta (mínimo 10 caracteres).";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    // TODO: conectar con servicio de email, CRM o backend.
    setSent(true);
    form.reset();
  };

  if (sent) {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-xl border border-leaf/30 bg-secondary p-8"
      >
        <CheckCircle2 className="size-10 text-leaf" aria-hidden="true" />
        <p className="font-display text-xl text-forest">
          Gracias por contactarnos. Hemos recibido tu consulta y nos comunicaremos contigo pronto.
        </p>
        <Button variant="forest" onClick={() => setSent(false)}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  const fieldClass = (name: string) =>
    errors[name as Field] ? "border-destructive focus-visible:ring-destructive" : "";

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div className="grid gap-2">
        <Label htmlFor="nombre">Nombre completo *</Label>
        <Input id="nombre" name="nombre" autoComplete="name" className={fieldClass("nombre")} />
        {errors.nombre && (
          <p className="text-xs text-destructive" role="alert">
            {errors.nombre}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="empresa">Empresa</Label>
        <Input id="empresa" name="empresa" autoComplete="organization" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Correo electrónico *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="telefono">Teléfono *</Label>
        <Input
          id="telefono"
          name="telefono"
          type="tel"
          autoComplete="tel"
          className={fieldClass("telefono")}
        />
        {errors.telefono && (
          <p className="text-xs text-destructive" role="alert">
            {errors.telefono}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="ciudad">Ciudad</Label>
        <Input id="ciudad" name="ciudad" autoComplete="address-level2" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="tipoCliente">Tipo de cliente</Label>
        <select
          id="tipoCliente"
          name="tipoCliente"
          className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          defaultValue=""
        >
          <option value="">Selecciona una opción</option>
          {tiposCliente.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="producto">Producto de interés</Label>
        <select
          id="producto"
          name="producto"
          defaultValue={defaultProduct ?? ""}
          className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <option value="">Selecciona un producto</option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="cantidad">Cantidad aproximada</Label>
        <Input id="cantidad" name="cantidad" placeholder="Ej. 50 kg por semana" />
      </div>

      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="asunto">Asunto</Label>
        <Input id="asunto" name="asunto" defaultValue={defaultSubject ?? ""} />
      </div>

      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="mensaje">Mensaje *</Label>
        <Textarea id="mensaje" name="mensaje" rows={5} className={fieldClass("mensaje")} />
        {errors.mensaje && (
          <p className="text-xs text-destructive" role="alert">
            {errors.mensaje}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" variant="gold" size="xl" className="w-full sm:w-auto">
          Enviar consulta
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          Los campos marcados con * son obligatorios.
        </p>
      </div>
    </form>
  );
}
