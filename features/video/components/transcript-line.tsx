type TranscriptLineProps = {
  timestamp: string;
  text: string;
};

export default function TranscriptLine({
  timestamp,
  text,
}: TranscriptLineProps) {
  return (
    <li className="group grid grid-cols-[auto_1fr] items-baseline gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-muted/50 sm:gap-4 sm:px-3">
      <span className="font-mono text-xs text-muted-foreground tabular-nums transition-colors group-hover:text-info sm:text-sm">
        {timestamp}
      </span>
      <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
        {text}
      </p>
    </li>
  );
}
