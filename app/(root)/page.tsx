import BackgroundWrapper from '@/components/ui/layout/background-wrapper';
import { channels } from '@/constants/index';
import AddChannelCard from '@/features/channel/components/add-channel-card';
import AddChannelForm from '@/features/channel/components/add-channel-form';
import ChannelCard from '@/features/channel/components/channel-card';

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
            <p className="mt-1 font-mono text-sm text-muted-foreground">
              6 channels <span aria-hidden> · </span> last sync 12 minutes ago
            </p>
          </hgroup>

          <AddChannelForm className="w-full md:max-w-md" />
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel) => (
            <ChannelCard key={channel.handle} {...channel} />
          ))}

          <AddChannelCard />
        </ul>
      </section>
    </BackgroundWrapper>
  );
}
