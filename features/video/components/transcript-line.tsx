import { cn } from '@/lib/utils';

type TranscriptLineProps = {
  timestamp: string;
  text: string;
  active?: boolean;
};

export default function TranscriptLine({
  timestamp,
  text,
  active = false,
}: TranscriptLineProps) {
  return (
    <li
      className={cn(
        'group grid grid-cols-[auto_1fr] items-baseline gap-4 border-l-2 px-4 py-2.5 transition-colors sm:gap-6',
        active
          ? 'border-l-info bg-info/10'
          : 'border-l-transparent hover:bg-muted/40',
      )}
    >
      <span
        className={cn(
          'font-mono text-xs tabular-nums transition-colors sm:text-sm',
          active
            ? 'text-info'
            : 'text-muted-foreground group-hover:text-foreground',
        )}
      >
        {timestamp}
      </span>
      <p className="text-sm leading-relaxed sm:text-[0.95rem]">{text}</p>
    </li>
  );
}
