import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
  as = "h2",
}: Props) {
  const Heading = as;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        tone === "light" ? "text-primary-foreground" : "text-foreground",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.22em]",
            tone === "light" ? "text-gold-soft" : "text-leaf",
          )}
        >
          {eyebrow}
        </p>
      )}
      <Heading className="text-balance text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
      <span
        className={cn(
          "mt-6 block h-1 w-16 rounded-full bg-accent",
          align === "center" && "mx-auto",
        )}
      />
    </div>
  );
}
