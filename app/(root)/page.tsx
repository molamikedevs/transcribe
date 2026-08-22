import BackgroundWrapper from '@/components/ui/layout/background-wrapper';
import AddChannelForm from '@/features/channel/components/add-channel-form';
import ChannelList from '@/features/channel/components/channel-list';

export default function Home() {
  return (
    <BackgroundWrapper>
      <section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <hgroup className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-widest text-info">
              Full-text search for spoken words
            </p>
            <h1 className="mt-2 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Library
            </h1>
          </hgroup>

          <AddChannelForm className="w-full md:max-w-md" />
        </div>

        <div className="mt-8">
          <ChannelList />
        </div>
      </section>
    </BackgroundWrapper>
  );
}
