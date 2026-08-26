export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 24;
export const MAX_PAGE_SIZE = 100;

export const DEFAULT_SORT: SortOrder = 'newest';
export const SORT_ORDERS = ['newest', 'oldest', 'longest', 'shortest'] as const;

export const SORT_COLUMNS: Record<
  SortOrder,
  { column: string; ascending: boolean }
> = {
  newest: { column: 'published_at', ascending: false },
  oldest: { column: 'published_at', ascending: true },
  longest: { column: 'duration_seconds', ascending: false },
  shortest: { column: 'duration_seconds', ascending: true },
};
