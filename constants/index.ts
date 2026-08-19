export const channels: ChannelCardProps[] = [
  // 1. Empty. Dashed border, "No videos yet", no progress bar.
  {
    handle: '@frontendmasters',
    name: 'Frontend Masters',
    avatarUrl: '/avatars/frontend-masters.png',
    videoCount: 0,
    indexedCount: 0,
    syncedLabel: '1 day ago',
  },
  // 2. Has videos, none captioned. Dashed border, different copy from #1.
  {
    handle: '@silentchannel',
    name: 'Silent Channel',
    avatarUrl: '/avatars/silent.png',
    videoCount: 44,
    indexedCount: 0,
    syncedLabel: '2 days ago',
    hasCaptions: false,
  },
  // 3. Freshly added, nothing indexed. Amber bar at zero, "Indexing 0 / 93".
  // This is the state the old logic rendered as green and "Synced".
  {
    handle: '@fireship',
    name: 'Fireship',
    avatarUrl: '/avatars/fireship.png',
    videoCount: 93,
    indexedCount: 0,
  },
  // 4. Mid indexing. Amber border, amber bar, amber footer.
  {
    handle: '@javascriptdaily',
    name: 'JavaScript Daily',
    avatarUrl: '/avatars/javascript-daily.png',
    videoCount: 75,
    indexedCount: 72,
    syncedLabel: '3 hours ago',
  },
];
