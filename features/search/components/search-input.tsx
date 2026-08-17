import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
  className?: string;
  iconPosition?: 'left' | 'right';
}

export default function SearchInput({
  className,
  iconPosition = 'left',
}: Props) {
  return (
    <search className={cn('relative flex w-full items-center', className)}>
      <label htmlFor="site-search" className="sr-only">
        Search every transcript
      </label>

      {iconPosition === 'left' && (
        <Image
          src="/icons/search.svg"
          width={20}
          height={20}
          alt="search"
          className="pointer-events-none absolute left-4 text-muted-foreground"
        />
      )}

      <input
        id="site-search"
        name="q"
        type="search"
        placeholder="Search every transcript"
        autoComplete="off"
        className={cn(
          'h-11 w-full rounded-full border border-border bg-muted/40',
          'pl-11 pr-4 text-sm sm:pr-12 md:h-12 md:text-base',
          'placeholder:text-muted-foreground',
          'transition-colors duration-200 hover:bg-muted/60',
          'focus-visible:border-ring focus-visible:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30',
          '[&::-webkit-search-cancel-button]:appearance-none',
        )}
      />

      {iconPosition === 'right' && (
        <Image
          src="/icons/search.svg"
          width={20}
          height={20}
          alt="search"
          className="pointer-events-none absolute right-4 text-muted-foreground"
        />
      )}
    </search>
  );
}
