import { Separator } from '@/components/ui/separator';
import { video } from '@/constants/index';
import TranscriptPanel from '@/features/video/components/transcript-panel';
import VideoActions from '@/features/video/components/video-actions';
import VideoMeta from '@/features/video/components/video-meta';
import VideoPlayer from '@/features/video/components/video-player';

export default function VideoSlug() {
  return (
    <section className="grid gap-8 lg:h-[calc(100vh-5rem)] lg:grid-cols-[minmax(0,1fr)_28rem] lg:gap-0">
      <div className="min-w-0 px-4 sm:px-6 lg:overflow-y-auto lg:py-8 lg:pr-8">
        <VideoPlayer {...video} />
        <VideoMeta {...video} />
        <VideoActions {...video} />

        <Separator className="mt-8" />

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Captions pulled from YouTube on {video.captionsPulledLabel}.
          Auto-generated, so speaker labels are approximate and punctuation is
          inferred.
        </p>
      </div>

      <TranscriptPanel {...video} />
    </section>
  );
}
