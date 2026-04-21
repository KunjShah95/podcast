const podcasts = [
  {
    id: "1",
    title: "The Design Matters Podcast",
    creator: "Debbie Millman",
    category: "design",
    description: "Conversations about design, creativity, and the people shaping visual culture.",
    coverImage: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=400&fit=crop",
    listeners: 1250000,
    duration: "45 min",
    isNew: true,
    isTrending: false,
  },
  {
    id: "2",
    title: "Design Systems Handbook",
    creator: "DesignCo",
    category: "design",
    description: "Practical lessons for building scalable design systems and UI libraries.",
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
    listeners: 450000,
    duration: "38 min",
    isNew: false,
    isTrending: true,
  },
  {
    id: "3",
    title: "UX Podcast",
    creator: "Freddy Cudd",
    category: "design",
    description: "Weekly conversations about user experience, research, and product design.",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
    listeners: 320000,
    duration: "40 min",
    isNew: false,
    isTrending: false,
  },
  {
    id: "4",
    title: "Tech Talk Today",
    creator: "Sarah Chen",
    category: "technology",
    description: "The latest in software, AI, startups, and product engineering.",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop",
    listeners: 890000,
    duration: "32 min",
    isNew: false,
    isTrending: true,
  },
  {
    id: "5",
    title: "AI Frontiers",
    creator: "Sam Altman",
    category: "technology",
    description: "Exploring the people, tools, and ideas pushing artificial intelligence forward.",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
    listeners: 750000,
    duration: "42 min",
    isNew: true,
    isTrending: false,
  },
  {
    id: "6",
    title: "Code Stories",
    creator: "Kent C. Dodds",
    category: "technology",
    description: "Stories from builders who ship real products and keep systems reliable.",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop",
    listeners: 420000,
    duration: "55 min",
    isNew: false,
    isTrending: false,
  },
  {
    id: "7",
    title: "The Debug Log",
    creator: "Bolkeley",
    category: "technology",
    description: "A behind-the-scenes look at debugging, architecture, and team workflows.",
    coverImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=400&fit=crop",
    listeners: 680000,
    duration: "40 min",
    isNew: false,
    isTrending: false,
  },
  {
    id: "8",
    title: "Soft Skills Engineering",
    creator: "Dave Smith",
    category: "technology",
    description: "Career advice and people skills for software engineers and product teams.",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd1c1f8b4c?w=400&h=400&fit=crop",
    listeners: 450000,
    duration: "50 min",
    isNew: false,
    isTrending: true,
  },
];

const categories = [
  {
    slug: "technology",
    name: "Technology",
    description: "Stay ahead with the latest in tech news, programming, AI, and the future of innovation.",
    podcastCount: 1240,
    trending: true,
    trendingCount: 85,
  },
  {
    slug: "business",
    name: "Business",
    description: "Insights from founders, investors, and industry leaders on building successful companies.",
    podcastCount: 890,
    trending: true,
    trendingCount: 42,
  },
  {
    slug: "design",
    name: "Design",
    description: "The best shows covering product design, UX, visual systems, and creativity.",
    podcastCount: 410,
    trending: true,
    trendingCount: 31,
  },
];

function normalize(value) {
  return value.trim().toLowerCase();
}

function getPodcasts() {
  return podcasts;
}

function getPodcastById(id) {
  return podcasts.find((podcast) => podcast.id === id) ?? null;
}

function getPodcastsByCategory(category) {
  const slug = normalize(category);
  return podcasts.filter((podcast) => podcast.category === slug);
}

function searchPodcasts(query) {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return getPodcasts();
  }

  return podcasts.filter((podcast) => {
    const searchableText = [
      podcast.title,
      podcast.creator,
      podcast.category,
      podcast.description,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

export {
  categories,
  getPodcastById,
  getPodcasts,
  getPodcastsByCategory,
  searchPodcasts,
};