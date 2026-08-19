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
  // 5. Fully synced. Green bar, "Synced 12 hours ago", hover border.
  {
    handle: '@devtips',
    name: 'Dev Tips',
    avatarUrl: '/avatars/dev-tips.png',
    videoCount: 183,
    indexedCount: 183,
    syncedLabel: '12 hours ago',
  },
  // 6. Overcount from deleted videos. Must clamp to green 431 / 431,
  // not overflow the bar or read as a broken ratio.
  {
    handle: '@lexfridman',
    name: 'Lex Fridman',
    avatarUrl: '/avatars/lex.png',
    videoCount: 431,
    indexedCount: 439,
    syncedLabel: '2 hours ago',
  },
  // 7. Synced with no label. Footer reads "Synced" with no trailing space.
  {
    handle: '@nolabel',
    name: 'No Label Channel',
    avatarUrl: '/avatars/no-label.png',
    videoCount: 12,
    indexedCount: 12,
  },
  // 8. Emoji initial and thousands separators. Fallback must be one whole
  // glyph, and both header and footer must read "1,204".
  {
    handle: '@rocketdev',
    name: '🚀 Rocket Dev',
    avatarUrl: '/avatars/missing.png',
    videoCount: 2000,
    indexedCount: 1204,
  },
  // 9. Blank name. Falls back to the handle, initial is "N".
  {
    handle: '@nonamechannel',
    name: '   ',
    avatarUrl: '/avatars/missing.png',
    videoCount: 5,
    indexedCount: 5,
    syncedLabel: '4 days ago',
  },
  // 10. Singular noun and a long unbroken name. Header says "1 video",
  // the avatar must not shrink, the name must truncate.
  {
    handle: '@averylongchannelhandlethatkeepsgoingkj',
    name: 'Supercalifragilisticexpialidociouschannelnameddc',
    avatarUrl: '/avatars/missing.png',
    videoCount: 1,
    indexedCount: 0,
  },
];
