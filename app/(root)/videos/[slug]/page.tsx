import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { video } from '@/constants/index';
import TranscriptLine from '@/features/video/components/transcript-line';
import {
  ChevronDown,
  ChevronUp,
  Copy,
  Download,
  ExternalLink,
  Play,
  Search,
} from 'lucide-react';
import Link from 'next/link';

export default function VideoSlug() {
  return (
    <section className="grid gap-8 lg:h-[calc(100vh-5rem)] lg:grid-cols-[minmax(0,1fr)_28rem] lg:gap-0">
      <div className="min-w-0 px-4 sm:px-6 lg:overflow-y-auto lg:py-8 lg:pr-8">
        <figure className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
          <p
            aria-hidden
            className="absolute inset-0 grid place-items-center text-muted-foreground"
          >
            <Play className="size-12" />
          </p>
          <figcaption className="sr-only">Player for {video.title}</figcaption>
        </figure>

        <hgroup className="mt-6">
          <h1 className="font-heading text-xl font-bold tracking-tight text-balance sm:text-2xl">
            {video.title}
          </h1>
          <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground sm:text-sm">
            <Avatar className="size-6">
              <AvatarFallback className="bg-info/15 text-[0.6rem] text-info">
                {video.channelName.slice(0, 1)}
              </AvatarFallback>
            </Avatar>
            <Link
              href={`/channels/${video.channelHandle}`}
              className="text-foreground hover:text-info"
            >
              {video.channelName}
            </Link>
            <span aria-hidden>·</span>
            <span>{video.publishedLabel}</span>
            <span aria-hidden>·</span>
            <span>{video.lineCount.toLocaleString()} lines</span>
          </p>
        </hgroup>

        <menu className="mt-6 flex flex-wrap items-center gap-2">
          <li>
            <Button variant="outline" size="sm">
              <Copy data-icon="inline-start" aria-hidden className="size-3.5" />
              Copy transcript
            </Button>
          </li>
          <li>
            <Button variant="outline" size="sm">
              <Download
                data-icon="inline-start"
                aria-hidden
                className="size-3.5"
              />
              Download .srt
            </Button>
          </li>
          <li>
            <Button
              variant="outline"
              size="sm"
              render={
                <Link
                  href={`https://youtube.com/watch?v=${video.youtubeId}`}
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

        <Separator className="mt-8" />

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Captions pulled from YouTube on {video.captionsPulledLabel}.
          Auto-generated, so speaker labels are approximate and punctuation is
          inferred.
        </p>
      </div>

      <aside className="flex min-w-0 flex-col border-border lg:border-l">
        <header className="px-4 pt-6 lg:px-6 lg:pt-8">
          <hgroup className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-heading text-lg font-semibold tracking-tight">
              Transcript
            </h2>
            <p className="font-mono text-xs text-muted-foreground sm:text-sm">
              {video.lineCount.toLocaleString()} lines
              <span aria-hidden> · </span>
              {video.captionSource}
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
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Previous match"
              >
                <ChevronUp aria-hidden className="size-3.5" />
              </Button>
              <Button variant="ghost" size="icon-sm" aria-label="Next match">
                <ChevronDown aria-hidden className="size-3.5" />
              </Button>
            </span>
          </search>
        </header>

        <ol className="mt-4 min-h-0 flex-1 overflow-y-auto pb-8">
          {video.lines.map((line) => (
            <TranscriptLine
              key={line.id}
              timestamp={line.timestamp}
              text={line.text}
              active={line.id === 'l-2538'}
            />
          ))}
        </ol>
      </aside>
    </section>
  );
}
