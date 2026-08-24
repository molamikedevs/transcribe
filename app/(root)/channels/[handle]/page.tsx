import BackgroundWrapper from '@/components/ui/layout/background-wrapper';
import ChannelHeader from '@/features/channel/components/channel-header';
import SortBy from '@/features/video/components/sort-by';
import VideoList from '@/features/video/components/video-list';

export default async function ChannelHandle({
  params,
  searchParams,
}: RouteParams) {
  const { handle } = await params;
  const { sort = 'newest' } = await searchParams;

  return (
    <BackgroundWrapper>
      <ChannelHeader handle={handle} />

      <section className="mt-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <hgroup className="flex items-baseline gap-3">
            <h2 className="font-heading text-xl font-bold tracking-tight">
              Videos
            </h2>
            <p className="font-mono text-sm text-muted-foreground">
              1,164 indexed <span aria-hidden> · </span> 44 skipped
            </p>
          </hgroup>

          <SortBy handle={handle} active={sort} />
        </header>

        <VideoList />
      </section>
    </BackgroundWrapper>
  );
}
