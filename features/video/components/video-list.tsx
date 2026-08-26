import VideoCard from '@/features/video/components/video-card';
import { getVideos } from '@/features/video/queries';
import VideoEmptyState from './video-empty-state';

export default async function VideoList({
  handle,
  sort,
}: {
  handle: string;
  sort: SortOrder;
}) {
  const videos = await getVideos(handle, sort);

  if (videos.length === 0) return <VideoEmptyState />;

  return (
    <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((video) => (
        <VideoCard key={video.slug} {...video} />
      ))}
    </ul>
  );
}
