import { Button } from '@/components/ui/button';
import { Copy, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function VideoActions({ youtubeId }: VideoActionsProps) {
  return (
    <menu className="mt-6 flex flex-wrap items-center gap-2">
      <li>
        <Button variant="outline" size="sm">
          <Copy data-icon="inline-start" aria-hidden className="size-3.5" />
          Copy transcript
        </Button>
      </li>
      <li>
        <Button variant="outline" size="sm">
          <Download data-icon="inline-start" aria-hidden className="size-3.5" />
          Download .srt
        </Button>
      </li>
      <li>
        <Button
          variant="outline"
          size="sm"
          render={
            <Link
              href={`https://youtube.com/watch?v=${youtubeId}`}
              target="_blank"
              rel="noreferrer"
            />
          }
        >
          <ExternalLink
            data-icon="inline-start"
            aria-hidden
            className="size-3.5"
          />
          Open on YouTube
        </Button>
      </li>
    </menu>
  );
}
