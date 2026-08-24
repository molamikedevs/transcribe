import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';

export default function VideoMeta({
  title,
  channelName,
  channelHandle,
  lineCount,
  publishedLabel,
}: VideoMetaProps) {
  return (
    <hgroup className="mt-6">
      <h1 className="font-heading text-xl font-bold tracking-tight text-balance sm:text-2xl">
        {title}
      </h1>
      <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground sm:text-sm">
        <Avatar className="size-6">
          <AvatarFallback className="bg-info/15 text-[0.6rem] text-info">
            {channelName.slice(0, 1)}
          </AvatarFallback>
        </Avatar>
        <Link
          href={`/channels/${channelHandle}`}
          className="text-foreground hover:text-info"
        >
          {channelName}
        </Link>
        <span aria-hidden>·</span>
        <span>{publishedLabel}</span>
        <span aria-hidden>·</span>
        <span>{lineCount.toLocaleString()} lines</span>
      </p>
    </hgroup>
  );
}
