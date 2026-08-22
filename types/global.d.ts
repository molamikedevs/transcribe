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
