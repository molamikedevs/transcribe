type SyncStatus = 'pending' | 'indexing' | 'synced' | 'failed';

type CaptionSource = 'auto' | 'manual';

type ChannelCardProps = {
  handle: string;
  name: string;
  avatarUrl: string | null;
  videoCount: number;
  indexedCount: number;
  syncStatus: SyncStatus;
  syncedLabel?: string;
  syncError?: string;
};

type VideoParams = {
  slug: string;
  title: string;
  thumbnailUrl: string | null;
  duration: string;
  lineCount: number;
  publishedLabel: string;
  captionSource: CaptionSource | null;
};
type SortOrder = 'newest' | 'oldest' | 'longest' | 'shortest';

type PaginatedParams = {
  page: number;
  pageSize: number;
  query?: string;
};

type SortedPaginatedParams = PaginatedParams & {
  sort: SortOrder;
};

type PaginatedResult<T> = {
  items: T[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

type RouteParams<
  TParams extends Record<string, string> = Record<string, never>,
> = {
  params: Promise<TParams>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

type TranscriptLine = {
  id: string;
  timestamp: string;
  seconds: number;
  text: string;
};

type VideoDetail = {
  slug: string;
  youtubeId: string;
  title: string;
  channelName: string;
  channelHandle: string;
  publishedLabel: string;
  duration: string;
  lineCount: number;
  captionSource: CaptionSource | null;
  captionsPulledLabel?: string;
  lines: TranscriptLine[];
};

type VideoPlayerProps = Pick<VideoDetail, 'title' | 'youtubeId'>;

type VideoMetaProps = Pick<
  VideoDetail,
  'title' | 'channelName' | 'channelHandle' | 'lineCount' | 'publishedLabel'
>;

type VideoActionsProps = Pick<VideoDetail, 'youtubeId'>;

type TranscriptPanelProps = Pick<
  VideoDetail,
  'lineCount' | 'lines' | 'captionSource'
>;
