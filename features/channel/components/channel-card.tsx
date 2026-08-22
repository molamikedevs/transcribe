import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { cva, type VariantProps } from 'class-variance-authority';
import { MoreVertical } from 'lucide-react';
import Link from 'next/link';

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

type Props = VariantProps<typeof card> & ChannelCardProps;

export default function ChannelCard({
  state = 'synced',
  handle,
  name,
  avatarUrl,
  videoCount,
  indexedCount,
  syncedLabel,
}: Props) {
  const percent =
    videoCount > 0 ? Math.round((indexedCount / videoCount) * 100) : 0;

  return (
    <li>
      <article className={card({ state })}>
        <header className="flex items-start gap-3">
          <Avatar className="size-11 shrink-0">
            <AvatarImage src={avatarUrl} alt="" />
            <AvatarFallback className="bg-info/15 font-mono text-xs text-info">
              {[...name][0]?.toUpperCase() ?? '?'}
            </AvatarFallback>
          </Avatar>

          <hgroup className="min-w-0 flex-1">
            <h3 className="truncate font-heading text-base font-semibold tracking-tight">
              <Link
                href={`/channels/${handle}`}
                className="rounded-sm before:absolute before:inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {name}
              </Link>
            </h3>
            <p className="truncate font-mono text-sm text-muted-foreground">
              @{handle}
            </p>
          </hgroup>

          <Button
            variant="ghost"
            size="icon"
            aria-label={`Options for ${name}`}
            className="relative z-10 -mr-1 -mt-1 size-8 shrink-0 text-muted-foreground"
          >
            <MoreVertical aria-hidden className="size-4" />
          </Button>
        </header>

        <p className="mt-4 truncate font-mono text-sm text-muted-foreground">
          {videoCount.toLocaleString()} videos
        </p>

        <Separator className="mt-4" />

        {state === 'indexing' ? (
          <footer className="mt-3">
            <p className="flex items-baseline gap-2 font-mono text-sm text-info">
              <span className="truncate">
                Indexing {indexedCount.toLocaleString()}/
                {videoCount.toLocaleString()}
              </span>
              <span className="ml-auto shrink-0 tabular-nums">{percent}%</span>
            </p>
            <Progress
              value={percent}
              aria-label={`${percent}% indexed`}
              className="mt-2 [&_[data-slot=progress-indicator]]:bg-info"
            />
          </footer>
        ) : (
          <footer className="mt-3 flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <span aria-hidden className={dot({ state })} />
            <span className="truncate">
              {syncedLabel ? `Synced ${syncedLabel}` : 'Not synced yet'}
            </span>
          </footer>
        )}
      </article>
    </li>
  );
}
