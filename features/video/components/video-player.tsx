import { Play } from 'lucide-react';

export default function VideoPlayer({ title }: VideoPlayerProps) {
  return (
    <figure className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
      <p
        aria-hidden
        className="absolute inset-0 grid place-items-center text-muted-foreground"
      >
        <Play className="size-12" />
      </p>
      <figcaption className="sr-only">Player for {title}</figcaption>
    </figure>
  );
}
