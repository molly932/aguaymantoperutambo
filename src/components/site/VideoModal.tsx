import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { siteConfig } from "@/config/site";

export function VideoModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="onDark"
          size="xl"
          className="mt-4 border-primary-foreground/80 bg-forest/65"
        >
          <Play className="size-5 fill-current" aria-hidden="true" />
          Ver video
        </Button>
      </DialogTrigger>
      <DialogContent className="h-dvh max-h-none w-screen max-w-none border-0 bg-foreground p-0 sm:rounded-none [&>button]:right-5 [&>button]:top-5 [&>button]:z-10 [&>button]:bg-background [&>button]:p-3 [&>button]:text-foreground [&>button]:opacity-100">
        <DialogTitle className="sr-only">{siteConfig.featuredVideo.title}</DialogTitle>
        <DialogDescription className="sr-only">
          Video sobre el cultivo y producción del aguaymanto.
        </DialogDescription>
        {open && (
          <iframe
            className="size-full"
            src={siteConfig.featuredVideo.youtubeEmbedUrl}
            title={siteConfig.featuredVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </DialogContent>
    </Dialog>
  );
}