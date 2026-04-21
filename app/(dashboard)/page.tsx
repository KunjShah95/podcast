import PodcastCard from "@/components/podcast/podcast-card";
import { ChevronRight, Sparkles } from "lucide-react";

const podcasts = [
  {
    id: "1",
    title: "The Design Matters Podcast",
    creator: "Debbie Millman",
    coverImage: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=400&fit=crop",
    listeners: 1250000,
    duration: "45 min",
    isNew: true,
  },
  {
    id: "2",
    title: "Tech Talk Today",
    creator: "Sarah Chen",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop",
    listeners: 890000,
    duration: "32 min",
    isTrending: true,
  },
  {
    id: "3",
    title: "Startup Stories",
    creator: "Jason Calacanis",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
    listeners: 2100000,
    duration: "58 min",
  },
  {
    id: "4",
    title: "The Tim Ferriss Show",
    creator: "Tim Ferriss",
    coverImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop",
    listeners: 3500000,
    duration: "1h 15m",
  },
  {
    id: "5",
    title: "AI Frontiers",
    creator: "Sam Altman",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
    listeners: 750000,
    duration: "42 min",
    isNew: true,
  },
  {
    id: "6",
    title: "Crime & Justice",
    creator: "BBC Podcasts",
    coverImage: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=400&h=400&fit=crop",
    listeners: 1800000,
    duration: "38 min",
    isTrending: true,
  },
];

const categories = [
  { name: "Technology", count: 1240 },
  { name: "Business", count: 890 },
  { name: "Comedy", count: 720 },
  { name: "Health", count: 580 },
  { name: "Science", count: 450 },
  { name: "History", count: 380 },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero - Featured Continue Listening */}
      <section>
        <h2 className="font-display text-xl font-semibold text-white mb-5">
          Continue Listening
        </h2>
        <PodcastCard
          id="featured"
          title="The Future of AI in Creative Industries"
          creator="Lex Fridman"
          coverImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=600&fit=crop"
          listeners={2100000}
          duration="1h 23m"
          progress={35}
          variant="featured"
        />
      </section>

      {/* Your Interests */}
      <section>
        <h2 className="font-display text-xl font-semibold text-white mb-5">
          Your Interests
        </h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex items-center gap-2.5 rounded-xl bg-[#1A1F2E] px-5 py-3 text-sm font-medium text-white/80 transition-all hover:bg-[#FF6B35] hover:text-white"
            >
              {category.name}
              <span className="text-xs opacity-60">{category.count}</span>
            </button>
          ))}
          <button className="flex items-center gap-2 rounded-xl border border-dashed border-white/20 px-5 py-3 text-sm font-medium text-white/40 transition-all hover:border-[#FF6B35] hover:text-[#FF6B35]">
            <Sparkles className="h-4 w-4" />
            Customize
          </button>
        </div>
      </section>

      {/* Recommended For You */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="font-display text-xl font-semibold text-white">
              Recommended For You
            </h2>
            <p className="text-sm text-white/40 mt-1">Based on your listening history</p>
          </div>
          <button className="flex items-center gap-1 text-sm font-medium text-[#FF6B35] hover:text-[#FF8A4D] transition-colors">
            See all <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {podcasts.slice(0, 5).map((podcast, index) => (
            <div
              key={podcast.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <PodcastCard {...podcast} />
            </div>
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-xl font-semibold text-white">
              Trending Now
            </h2>
            <span className="flex items-center gap-1 rounded-lg bg-[#10B981]/20 px-3 py-1 text-xs font-medium text-[#10B981]">
              +15% this week
            </span>
          </div>
          <button className="flex items-center gap-1 text-sm font-medium text-[#FF6B35] hover:text-[#FF8A4D] transition-colors">
            See all <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {podcasts.slice(0, 4).map((podcast, index) => (
            <div key={podcast.id} className="relative">
              <span className="absolute -left-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B35] font-display text-xl font-bold text-white shadow-lg shadow-[#FF6B35]/30">
                {index + 1}
              </span>
              <PodcastCard {...podcast} />
            </div>
          ))}
        </div>
      </section>

      {/* New Episodes */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="font-display text-xl font-semibold text-white">
              New Episodes from Followed Creators
            </h2>
            <p className="text-sm text-white/40 mt-1">Released in the last 24 hours</p>
          </div>
          <button className="flex items-center gap-1 text-sm font-medium text-[#FF6B35] hover:text-[#FF8A4D] transition-colors">
            See all <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-4">
          {podcasts.slice(0, 3).map((podcast) => (
            <PodcastCard key={podcast.id} {...podcast} variant="horizontal" />
          ))}
        </div>
      </section>

      {/* Browse Categories */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-xl font-semibold text-white">
            Browse Categories
          </h2>
          <button className="flex items-center gap-1 text-sm font-medium text-[#FF6B35] hover:text-[#FF8A4D] transition-colors">
            See all <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1F2E] to-[#252B3E] p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-[#FF6B35]/20 border border-transparent"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="font-display text-lg font-semibold text-white relative">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-white/40 relative">
                {category.count} podcasts
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Spacer for player */}
      <div className="h-8" />
    </div>
  );
}