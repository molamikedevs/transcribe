import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function ChannelHeader({ handle }: { handle: string }) {
  return (
    <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <hgroup className="flex min-w-0 items-start gap-4">
        <Avatar className="size-14 shrink-0 sm:size-16">
          <AvatarImage src="" alt="" />
          <AvatarFallback className="bg-info/15 font-mono text-sm text-info">
            AI
          </AvatarFallback>
        </Avatar>

        <span className="min-w-0">
          <h1 className="truncate font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            All-In Podcast
          </h1>
          <p className="truncate font-mono text-sm text-info">@{handle}</p>

          <dl className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-sm">
            <dt className="text-muted-foreground">videos</dt>
            <dd className="font-medium tabular-nums">1,164</dd>
            <Separator orientation="vertical" className="mx-2 h-4" />
            <dt className="text-muted-foreground">lines</dt>
            <dd className="font-medium tabular-nums">1,842,309</dd>
            <Separator orientation="vertical" className="mx-2 h-4" />
            <dt className="text-muted-foreground">hours</dt>
            <dd className="font-medium tabular-nums">1,930</dd>
            <Separator orientation="vertical" className="mx-2 h-4" />
            <dt className="text-muted-foreground">last sync</dt>
            <dd className="font-medium">2h ago</dd>
          </dl>
        </span>
      </hgroup>

      <menu className="flex shrink-0 items-center gap-2">
        <li>
          <Button variant="outline" size="sm" className="font-mono text-info">
            <RefreshCw aria-hidden className="size-4 mr-1" />
            Resync
          </Button>
        </li>
        <li>
          <Button
            variant="outline"
            size="sm"
            className="font-mono"
            render={
              <Link
                href={`https://youtube.com/@${handle}`}
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            <ExternalLink
              data-icon="inline-end"
              aria-hidden
              className="size-3.5 mr-1"
            />
            On YouTube
          </Button>
        </li>
      </menu>
    </header>
  );
}
