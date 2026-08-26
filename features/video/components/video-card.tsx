import { Badge } from '@/components/ui/badge';
import { Play } from 'lucide-react';
import Link from 'next/link';

export default function VideoCard({
  slug,
  title,
  duration,
  lineCount,
  publishedLabel,
}: VideoParams) {
  return (
    <li>
      <article className="group relative">
        <figure className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-muted">
          <Play
            aria-hidden
            className="size-8 text-muted-foreground/40 transition-colors group-hover:text-muted-foreground/70"
          />
          <Badge
            variant="secondary"
            className="absolute bottom-2 right-2 rounded bg-background/90 font-mono text-xs tabular-nums"
          >
            {duration}
          </Badge>
        </figure>

        <h3 className="mt-3 line-clamp-2 font-heading text-sm font-semibold leading-snug tracking-tight">
          <Link
            href={`/videos/${slug}`}
            className="rounded-sm before:absolute before:inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {title}
          </Link>
        </h3>

        <p className="mt-1 truncate font-mono text-xs text-muted-foreground">
          {lineCount.toLocaleString()} lines <span aria-hidden> · </span>{' '}
          {publishedLabel}
        </p>
      </article>
    </li>
  );
}
