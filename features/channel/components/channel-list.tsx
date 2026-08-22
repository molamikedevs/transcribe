import { channels } from '@/constants/index';
import AddChannelCard from './add-channel-card';
import ChannelCard from './channel-card';
import EmptyChannelState from './empty-channel-state';

export default async function ChannelList() {
  if (channels.length === 0) return <EmptyChannelState />;

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {channels.map((channel) => (
        <ChannelCard key={channel.handle} {...channel} />
      ))}
      <AddChannelCard />
    </ul>
  );
}
