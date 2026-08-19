import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { cva, type VariantProps } from 'class-variance-authority';
import { MoreVertical } from 'lucide-react';

const card = cva(
  'relative flex h-full flex-col rounded-xl border bg-card p-4 text-card-foreground transition-colors',
  {
    variants: {
      state: {
        synced: 'hover:border-ring/40',
        queued: 'hover:border-ring/40',
        indexing: 'border-info/40',
      },
    },
    defaultVariants: { state: 'synced' },
  },
);

const dot = cva('size-1.5 shrink-0 rounded-full', {
  variants: {
    state: {
      synced: 'bg-success',
      queued: 'bg-muted-foreground',
      indexing: 'bg-info',
    },
  },
  defaultVariants: { state: 'synced' },
});

type ChannelCardProps = VariantProps<typeof card>;

export default function ChannelCard({ state = 'synced' }: ChannelCardProps) {
  return (
    <li>
      <article className={card({ state })}>
        <header className="flex items-start gap-3">
          <Avatar className="size-11 shrink-0">
            <AvatarFallback className="bg-info/15 font-mono text-xs text-info">
              AI
            </AvatarFallback>
          </Avatar>

          <hgroup className="min-w-0 flex-1">
            <h3 className="truncate font-heading text-base font-semibold tracking-tight">
              All-In Podcast
            </h3>
            <p className="truncate font-mono text-sm text-muted-foreground">
              @allin
            </p>
          </hgroup>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Channel options"
            className="-mr-1 -mt-1 size-8 shrink-0 text-muted-foreground"
          >
            <MoreVertical aria-hidden className="size-4" />
          </Button>
        </header>

        <p className="mt-4 truncate font-mono text-sm text-muted-foreground">
          1,164 videos <span aria-hidden> · </span> 1.84M lines
        </p>

        <Separator className="mt-4" />

        {state === 'indexing' ? (
          <footer className="mt-3">
            <p className="flex items-baseline gap-2 font-mono text-sm text-info">
              <span className="truncate">Indexing 342/1208</span>
              <span className="ml-auto shrink-0 tabular-nums">28%</span>
            </p>
            <Progress
              value={28}
              aria-label="28% indexed"
              className="mt-2 [&_[data-slot=progress-indicator]]:bg-info"
            />
          </footer>
        ) : (
          <footer className="mt-3 flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <span aria-hidden className={dot({ state })} />
            <span className="truncate">Synced 2h ago</span>
          </footer>
        )}
      </article>
    </li>
  );
}
