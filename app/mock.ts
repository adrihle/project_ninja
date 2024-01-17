const VIDEOS = [
  { name: 'Exciting Adventures', date: '2023-01-15', visits: 2300, image: 'https://picsum.photos/202/20*' },
  { name: 'Funny Moments Compilation', date: '2023-02-28', visits: 4500, image: 'https://picsum.photos/200/20*' },
  { name: 'Tech Reviews Unleashed', date: '2023-03-10', visits: 1800, image: 'https://picsum.photos/200/20*' },
  { name: 'Cooking Masterclass', date: '2023-04-05', visits: 3200, image: 'https://picsum.photos/200/20*' },
  { name: 'Gaming Extravaganza', date: '2023-05-20', visits: 5500, image: 'https://picsum.photos/200/20*' },
  { name: 'Travel Vlog Bonanza', date: '2023-06-08', visits: 2900, image: 'https://picsum.photos/200/20*' },
  { name: 'Music Festival Highlights', date: '2023-07-12', visits: 4200,  image: 'https://picsum.photos/202/20*' },
  { name: 'DIY Home Decor', date: '2023-08-19', visits: 1700,  image: 'https://picsum.photos/202/20*' },
  { name: 'Fitness Freaks Unite', date: '2023-09-22', visits: 3800,  image: 'https://picsum.photos/202/20*' },
  { name: 'Mind-bending Science Experiments', date: '2023-10-01', visits: 2100,  image: 'https://picsum.photos/202/20*' },
  { name: 'Epic Movie Reviews', date: '2023-11-10', visits: 4100,  image: 'https://picsum.photos/202/20*' },
  { name: 'Science Fiction Marathon', date: '2023-12-05', visits: 2700,  image: 'https://picsum.photos/202/20*' },
  { name: 'Pet Care Tips', date: '2024-01-08', visits: 5000,  image: 'https://picsum.photos/202/20*' },
  { name: 'Book Club Discussions', date: '2024-02-14', visits: 3300,  image: 'https://picsum.photos/202/20*' },
  { name: 'Virtual Reality Adventures', date: '2024-03-22', visits: 4800,  image: 'https://picsum.photos/202/20*' },
  { name: 'Artistic Creations Showcase', date: '2024-04-18', visits: 2000,  image: 'https://picsum.photos/202/20*' },
  { name: 'Culinary Delights Journey', date: '2024-05-30', visits: 4200,  image: 'https://picsum.photos/202/20*' },
  { name: 'Fitness Challenges Galore', date: '2024-06-15', visits: 3100,  image: 'https://picsum.photos/202/20*' },
  { name: 'Tech Innovations Unboxed', date: '2024-07-07', visits: 5500,  image: 'https://picsum.photos/202/20*' },
  { name: 'Hilarious Comedy Special', date: '2024-08-12', visits: 1800,  image: 'https://picsum.photos/202/20*' },
  { name: 'Nature Documentary Marathon', date: '2024-09-02', visits: 3600,  image: 'https://picsum.photos/202/20*' },
  { name: 'DIY Crafts and Projects', date: '2024-10-15', visits: 2400,  image: 'https://picsum.photos/202/20*' },
  { name: 'Cryptocurrency Explained', date: '2024-11-20', visits: 4900, image: 'https://picsum.photos/202/20*' },
  { name: 'Celebrity Interview Extravaganza', date: '2024-12-12', visits: 3000, image: 'https://picsum.photos/202/20*' },
  { name: 'Historical Facts Unveiled', date: '2025-01-05', visits: 4300, image: 'https://picsum.photos/202/20*' },
  { name: 'Space Exploration Chronicles', date: '2025-02-18', visits: 2600, image: 'https://picsum.photos/202/20*' },
  { name: 'Virtual Concert Experience', date: '2025-03-25', visits: 5200, image: 'https://picsum.photos/202/20*' },
  { name: 'Home Renovation Tips', date: '2025-04-30', visits: 1900, image: 'https://picsum.photos/202/20*' },
  { name: 'Meditation and Wellness Series', date: '2025-05-22', visits: 4400, image: 'https://picsum.photos/202/20*' },
  { name: 'Game Development Insights', date: '2025-06-08', visits: 3300, image: 'https://picsum.photos/202/20*' },
  { name: 'Photography Masterclass', date: '2025-07-12', visits: 5700, image: 'https://picsum.photos/202/20*' },
  { name: 'Healthy Cooking Adventures', date: '2025-08-19', visits: 2800, image: 'https://picsum.photos/202/20*' },
  { name: 'Exploring Mythical Creatures', date: '2025-09-22', visits: 4100, image: 'https://picsum.photos/202/20*' },
  { name: 'Political Debates Unleashed', date: '2025-10-01', visits: 2300, image: 'https://picsum.photos/202/20*' },
  { name: 'Artificial Intelligence Demystified', date: '2025-11-10', visits: 4900, image: 'https://picsum.photos/202/20*' },
  { name: 'Educational Kids Shows', date: '2025-12-05', visits: 3200, image: 'https://picsum.photos/202/20*' },
  { name: 'Bike Tours Around the World', date: '2026-01-08', visits: 5100, image: 'https://picsum.photos/202/20*' },
  { name: 'Car Maintenance Tips and Tricks', date: '2026-02-14', visits: 2400, image: 'https://picsum.photos/202/20*' },
  { name: 'Fitness Challenges Reloaded', date: '2026-03-22', visits: 4700, image: 'https://picsum.photos/202/20*' },
  { name: 'Fashion Trends Unveiled', date: '2026-04-18', visits: 1800, image: 'https://picsum.photos/202/20*' },
  { name: 'Tech Gadgets Unboxed', date: '2026-05-30', visits: 3900, image: 'https://picsum.photos/202/20*' },
  { name: 'Dance Choreography Showcase', date: '2026-06-15', visits: 3300, image: 'https://picsum.photos/202/20*' },
  { name: 'Movie Trivia Night', date: '2026-07-07', visits: 5500, image: 'https://picsum.photos/202/20*' },
  { name: 'Language Learning Adventures', date: '2026-08-12', visits: 2900, image: 'https://picsum.photos/202/20*' },
  { name: 'DIY Garden Makeover', date: '2026-09-02', visits: 4200, image: 'https://picsum.photos/202/20*' },
  { name: 'Culinary Adventures Around the Globe', date: '2026-10-15', visits: 2600, image: 'https://picsum.photos/202/20*' },
  { name: 'Inspiring Success Stories', date: '2026-11-20', visits: 4900, image: 'https://picsum.photos/202/20*' },
  { name: 'Virtual Museum Tours', date: '2026-12-12', visits: 3100, image: 'https://picsum.photos/202/20*' },
];

const CHANNEL_STATS = {
  channelCreationDate: '2019-01-10',
  totalVisits: 500000,
  totalUploadedVideos: 80,
  channelTimeline: 3,
  channelTags: ['Travel', 'Adventure', 'Culture', 'Explore', 'Vacation'],
};

export {
  VIDEOS,
  CHANNEL_STATS,
}
