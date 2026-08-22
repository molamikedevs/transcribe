import { Button } from '@/components/ui/button';
import Link from 'next/link';

const options = [
  { value: 'newest', label: 'newest' },
  { value: 'longest', label: 'longest' },
  { value: 'lines', label: 'most lines' },
];

type Props = { handle: string; active: string };

export default function SortBy({ handle, active }: Props) {
  return (
    <menu className="flex items-center gap-2">
      {options.map(({ value, label }) => (
        <li key={value}>
          <Button
            size="sm"
            className={`rounded-full font-mono text-xs border hover:bg-foreground hover:text-background border-secondary ${active === value ? 'bg-info text-foreground' : 'bg-transparent border text-foreground'}`}
          >
            <Link
              href={`/channels/${handle}?sort=${value}`}
              aria-current={active === value ? 'true' : undefined}
              scroll={false}
            >
              {label}
            </Link>
          </Button>
        </li>
      ))}
    </menu>
  );
}
