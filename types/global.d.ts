type ChannelCardProps = {
  handle: string;
  name: string;
  avatarUrl: string;
  videoCount: number;
  indexedCount: number;
  syncedLabel?: string;
  hasCaptions?: boolean;
};

type VideoCardProps = {
  slug: string;
  title: string;
  duration: string;
  lineCount: number;
  publishedLabel: string;
};

type RouteParams = {
  params: Promise<{ handle: string }>;
  searchParams: Promise<{ sort?: string; query?: string }>;
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
  captionSource: 'auto-captions' | 'manual';
  captionsPulledLabel: string;
  lines: TranscriptLine[];
};

type VideoPlayerProps = Pick<VideoDetail, 'title'>;

type VideoMetaProps = Pick<
  VideoDetail,
  'title' | 'channelName' | 'channelHandle' | 'lineCount' | 'publishedLabel'
>;

type VideoActionsProps = Pick<VideoDetail, 'youtubeId'>;

type TranscriptPanelProps = Pick<
  VideoDetail,
  'lineCount' | 'lines' | 'captionSource'
>;
