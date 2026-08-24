import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import TranscriptLine from '@/features/video/components/transcript-line';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

export default function TranscriptPanel({
  lineCount,
  lines,
  captionSource,
}: TranscriptPanelProps) {
  return (
    <aside className="flex min-w-0 flex-col border-border lg:border-l">
      <header className="px-4 pt-6 lg:px-6 lg:pt-8">
        <hgroup className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-heading text-lg font-semibold tracking-tight">
            Transcript
          </h2>
          <p className="font-mono text-xs text-muted-foreground sm:text-sm">
            {lineCount.toLocaleString()} lines
            <span aria-hidden> · </span>
            {captionSource}
          </p>
        </hgroup>

        <search className="relative mt-4 flex items-center">
          <Label htmlFor="transcript-search" className="sr-only">
            Search this transcript
          </Label>
          <Search
            aria-hidden
            className="pointer-events-none absolute left-3 size-4 text-muted-foreground"
          />
          <Input
            id="transcript-search"
            type="search"
            placeholder="Search this transcript"
            className="h-11 rounded-lg bg-card pl-9 pr-24 font-mono text-sm"
          />
          <span className="absolute right-2 flex items-center gap-1">
            <span className="font-mono text-xs text-muted-foreground tabular-nums">
              3/11
            </span>
            <Button variant="ghost" size="icon-sm" aria-label="Previous match">
              <ChevronUp aria-hidden className="size-3.5" />
            </Button>
            <Button variant="ghost" size="icon-sm" aria-label="Next match">
              <ChevronDown aria-hidden className="size-3.5" />
            </Button>
          </span>
        </search>
      </header>

      <ol className="mt-4 min-h-0 flex-1 overflow-y-auto pb-8">
        {lines.map((line) => (
          <TranscriptLine
            key={line.id}
            timestamp={line.timestamp}
            text={line.text}
            active={line.id === 'l-2538'}
          />
        ))}
      </ol>
    </aside>
  );
}
