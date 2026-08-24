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

export const videos: VideoCardProps[] = [
  {
    slug: 'e187-unit-economics-ai-capex-cycle',
    title:
      'E187: Unit economics, the AI capex cycle, and why marketplaces break at scale',
    duration: '1:52:04',
    lineCount: 2481,
    publishedLabel: 'Mar 14, 2026',
  },
  {
    slug: 'e186-rate-cuts-compute-glut',
    title:
      'E186: Rate cuts, the compute glut, and a bull case for boring software',
    duration: '1:38:12',
    lineCount: 2104,
    publishedLabel: 'Mar 7, 2026',
  },
  {
    slug: 'e185-building-a-data-centre',
    title: 'E185: Interview, building a data centre in eighteen months',
    duration: '2:04:47',
    lineCount: 3012,
    publishedLabel: 'Feb 28, 2026',
  },
  {
    slug: 'e184-retention-curve',
    title: 'E184: The retention curve nobody wants to publish',
    duration: '1:44:20',
    lineCount: 2288,
    publishedLabel: 'Feb 21, 2026',
  },
  {
    slug: 'e183-cold-start-problems',
    title: 'E183: Cold start problems and the marketplace liquidity trap',
    duration: '1:29:55',
    lineCount: 1942,
    publishedLabel: 'Feb 14, 2026',
  },
  {
    slug: 'e182-series-a-pricing',
    title:
      'E182: Series A pricing, secondaries, and the discipline of saying no',
    duration: '1:51:33',
    lineCount: 2417,
    publishedLabel: 'Feb 7, 2026',
  },
  {
    slug: 'e181-four-earnings-calls',
    title: 'E181: What the last four earnings calls actually told us',
    duration: '1:36:08',
    lineCount: 2051,
    publishedLabel: 'Jan 31, 2026',
  },
  {
    slug: 'e180-two-hundred-episodes',
    title: 'E180: Two hundred episodes in, what we got wrong',
    duration: '2:11:19',
    lineCount: 3304,
    publishedLabel: 'Jan 24, 2026',
  },
  {
    slug: 'e179-open-weights',
    title: 'E179: Open weights, closed margins',
    duration: '58:41',
    lineCount: 1188,
    publishedLabel: 'Jan 17, 2026',
  },
  {
    slug: 'e178-quick-hits',
    title: 'E178: Quick hits',
    duration: '9:07',
    lineCount: 214,
    publishedLabel: 'Jan 10, 2026',
  },
];

export const video: VideoDetail = {
  slug: 'e187-unit-economics-ai-capex-cycle',
  youtubeId: 'dQw4w9WgXcQ',
  title:
    'E187: Unit economics, the AI capex cycle, and why marketplaces break at scale',
  channelName: 'All-In Podcast',
  channelHandle: 'allin',
  publishedLabel: 'Mar 14, 2026',
  duration: '1:52:04',
  lineCount: 2481,
  captionSource: 'auto-captions',
  captionsPulledLabel: 'Mar 15, 2026',
  lines: [
    {
      id: 'l-2496',
      timestamp: '41:36',
      seconds: 2496,
      text: 'and I think that is the part people skip over when they pitch this.',
    },
    {
      id: 'l-2504',
      timestamp: '41:44',
      seconds: 2504,
      text: 'right, because the deck always shows the blended number.',
    },
    {
      id: 'l-2511',
      timestamp: '41:51',
      seconds: 2511,
      text: 'the blended number hides two businesses stacked on top of each other.',
    },
    {
      id: 'l-2522',
      timestamp: '42:02',
      seconds: 2522,
      text: 'one of them is a software business with eighty point margins.',
    },
    {
      id: 'l-2531',
      timestamp: '42:11',
      seconds: 2531,
      text: 'and the other one is a logistics company that loses four dollars a delivery.',
    },
    {
      id: 'l-2538',
      timestamp: '42:18',
      seconds: 2538,
      text: 'the whole argument falls apart once you look at the unit economics of the delivery leg.',
    },
    {
      id: 'l-2549',
      timestamp: '42:29',
      seconds: 2549,
      text: 'so what would have to be true for that to work at this scale?',
    },
    {
      id: 'l-2557',
      timestamp: '42:37',
      seconds: 2557,
      text: 'you would need route density that nobody outside the top four cities has.',
    },
    {
      id: 'l-2566',
      timestamp: '42:46',
      seconds: 2566,
      text: 'or you raise prices eleven percent and hope the cohort holds.',
    },
    {
      id: 'l-2575',
      timestamp: '42:55',
      seconds: 2575,
      text: 'nobody holds at eleven percent. that is not a real option.',
    },
    {
      id: 'l-2584',
      timestamp: '43:04',
      seconds: 2584,
      text: 'which is why the answer is always the same, shrink the footprint first.',
    },
    {
      id: 'l-2594',
      timestamp: '43:14',
      seconds: 2594,
      text: 'and that is the conversation the board never wants to have in year three.',
    },
    {
      id: 'l-2603',
      timestamp: '43:23',
      seconds: 2603,
      text: 'because shrinking looks like failure even when it is the only path.',
    },
    {
      id: 'l-2611',
      timestamp: '43:31',
      seconds: 2611,
      text: 'it looks like failure for exactly two quarters and then it looks like discipline.',
    },
    {
      id: 'l-2620',
      timestamp: '43:40',
      seconds: 2620,
      text: 'assuming you survive the two quarters, which is the whole bet.',
    },
    {
      id: 'l-2628',
      timestamp: '43:48',
      seconds: 2628,
      text: 'ok.',
    },
  ],
};
