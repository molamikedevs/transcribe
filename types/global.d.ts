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

type VideoCardProps = {
  slug: string;
  title: string;
  thumbnailUrl: string | null;
  duration: string;
  lineCount: number;
  publishedLabel: string;
  captionSource: CaptionSource | null;
};

type ChannelRouteParams = {
  params: Promise<{ handle: string }>;
  searchParams: Promise<{
    sort?: string;
    query?: string;
    page?: string;
    pageSize?: string;
  }>;
};

type VideoRouteParams = {
  params: Promise<{ slug: string }>;
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
