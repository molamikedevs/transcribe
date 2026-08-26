'use client';

import { Button } from '@/components/ui/button';
import { DEFAULT_SORT, SORT_ORDERS } from '@/constants/states';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const LABELS: Record<SortOrder, string> = {
  newest: 'newest',
  oldest: 'oldest',
  longest: 'longest',
  shortest: 'shortest',
};

export default function SortBy() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get('sort') ?? DEFAULT_SORT;

  function hrefFor(value: SortOrder) {
    const next = new URLSearchParams(searchParams);
    next.set('sort', value);
    next.delete('page');
    return `${pathname}?${next}`;
  }

  return (
    <menu className="flex items-center gap-2">
      {SORT_ORDERS.map((value) => (
        <li key={value}>
          <Button
            size="sm"
            variant="outline"
            className="rounded-full font-mono text-xs"
            data-active={active === value || undefined}
            render={
              <Link
                href={hrefFor(value)}
                aria-current={active === value ? 'true' : undefined}
                scroll={false}
              />
            }
          >
            {LABELS[value]}
          </Button>
        </li>
      ))}
    </menu>
  );
}
