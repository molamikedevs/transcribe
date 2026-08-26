import { SORT_COLUMNS } from '@/constants/states';
import { formatDuration, formatRelativeTime } from '@/lib/format';
import { createClient } from '@/lib/supabase/server';
import 'server-only';

export async function getVideos(
  handle: string,
  sort: SortOrder = 'newest',
): Promise<VideoParams[]> {
  const supabase = await createClient();
  const { column, ascending } = SORT_COLUMNS[sort];

  const { data, error } = await supabase
    .from('videos')
    .select(
      'slug, title, thumbnail_url, duration_seconds, published_at, caption_source, channels!inner(handle), transcript_lines(count)',
    )
    .eq('channels.handle', handle)
    .order(column, { ascending })
    .order('id', { ascending: true });

  if (error) throw error;

  return data.map((video) => ({
    slug: video.slug,
    title: video.title,
    thumbnailUrl: video.thumbnail_url,
    duration: formatDuration(video.duration_seconds),
    lineCount: video.transcript_lines[0]?.count ?? 0,
    publishedLabel: formatRelativeTime(video.published_at) ?? '',
    captionSource: video.caption_source,
  }));
}
