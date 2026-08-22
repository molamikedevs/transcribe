import { Button } from '@/components/ui/button';
import { RefreshCw, VideoOff } from 'lucide-react';

export default function VideoEmptyState() {
  return (
    <section className="flex flex-col items-center px-4 py-16 text-center sm:py-24">
      <p
        aria-hidden
        className="grid size-14 place-items-center rounded-full border border-border text-muted-foreground"
      >
        <VideoOff className="size-5" />
      </p>

      <hgroup className="mt-6 max-w-md">
        <h2 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
          No videos indexed
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          This channel has no captioned videos yet. If it published recently,
          try syncing again in a few minutes.
        </p>
      </hgroup>

      <Button variant="outline" size="sm" className="mt-8 font-mono">
        <RefreshCw data-icon="inline-start" aria-hidden className="size-3.5" />
        Resync channel
      </Button>
    </section>
  );
}
