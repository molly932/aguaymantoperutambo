import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="¿Necesitas información? Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-4 z-50 flex items-center gap-3 rounded-full bg-leaf px-4 py-3 text-primary-foreground shadow-elegant transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="size-6 shrink-0" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">¿Necesitas información?</span>
    </a>
  );
}
