import { formatRelativeTime } from '@/lib/format';
import { createClient } from '@/lib/supabase/server';
import 'server-only';

export async function getLibraryChannels(): Promise<ChannelCardProps[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('channels')
    .select(
      'handle, name, avatar_url, video_count, indexed_count, sync_status, sync_error, synced_at',
    )
    .order('name');

  if (error) throw error;

  return data.map((channel) => ({
    handle: channel.handle,
    name: channel.name,
    avatarUrl: channel.avatar_url,
    videoCount: channel.video_count,
    indexedCount: channel.indexed_count,
    syncStatus: channel.sync_status,
    syncedLabel: formatRelativeTime(channel.synced_at),
    syncError: channel.sync_error ?? undefined,
  }));
}
