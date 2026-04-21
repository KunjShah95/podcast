"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PodcastCard from "@/components/podcast/podcast-card";
import {
  Search,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

const filterOptions = {
  type: [
    { value: "all", label: "All" },
    { value: "podcasts", label: "Podcasts" },
    { value: "episodes", label: "Episodes" },
    { value: "creators", label: "Creators" },
  ],
  sort: [
    { value: "relevance", label: "Relevance" },
    { value: "newest", label: "Newest" },
    { value: "trending", label: "Trending" },
  ],
};

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
    title: "Design Systems Handbook",
    creator: "DesignCo",
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
    listeners: 450000,
    duration: "38 min",
    isTrending: true,
  },
  {
    id: "3",
    title: "UX Podcast",
    creator: "Freddy Cudd",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
    listeners: 320000,
    duration: "40 min",
  },
  {
    id: "4",
    title: "The Deeply Design Show",
    creator: "Josh Comeau",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop",
    listeners: 280000,
    duration: "35 min",
  },
];

const creators = [
  {
    id: "1",
    name: "Debbie Millman",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    podcastCount: 1,
    totalListeners: 1250000,
  },
  {
    id: "2",
    name: "DesignCo Studio",
    avatar: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&fit=crop",
    podcastCount: 3,
    totalListeners: 850000,
  },
];

const episodes = [
  {
    id: "1",
    title: "The Future of Design in the Age of AI",
    podcast: "Design Matters",
    description: "Exploring how artificial intelligence is reshaping the design industry.",
    date: "2 days ago",
    duration: "52 min",
  },
  {
    id: "2",
    title: "Building Sustainable Design Systems",
    podcast: "Design Systems Podcast",
    description: "A deep dive into creating design systems that are both beautiful.",
    date: "1 week ago",
    duration: "45 min",
  },
];

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [activeType, setActiveType] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Search Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Results for "{query}"
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Found {podcasts.length + creators.length + episodes.length} results
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filterOptions.type.map((type) => (
            <button
              key={type.value}
              onClick={() => setActiveType(type.value)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap",
                activeType === type.value
                  ? "bg-primary text-white"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {type.label}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="h-10 rounded-xl bg-secondary px-4 py-2 text-sm text-foreground border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          {filterOptions.sort.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Podcasts Section */}
      {(activeType === "all" || activeType === "podcasts") && podcasts.length > 0 && (
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground mb-4">
            Podcasts
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {podcasts.map((podcast, index) => (
              <div
                key={podcast.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <PodcastCard {...podcast} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Creators Section */}
      {(activeType === "all" || activeType === "creators") && creators.length > 0 && (
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground mb-4">
            Creators
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {creators.map((creator) => (
              <a
                key={creator.id}
                href={`/creator`}
                className="group flex items-center gap-4 rounded-2xl bg-card p-4 border border-border/20 transition-all hover:border-primary/30"
              >
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {creator.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {(creator.totalListeners / 1000).toFixed(0)}K listeners
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Episodes Section */}
      {(activeType === "all" || activeType === "episodes") && episodes.length > 0 && (
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground mb-4">
            Episodes
          </h2>
          <div className="space-y-3">
            {episodes.map((episode) => (
              <div
                key={episode.id}
                className="group flex items-start gap-4 rounded-xl bg-card p-4 border border-border/20 transition-all hover:border-primary/30"
              >
                <button className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                  <svg className="h-5 w-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {episode.podcast}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                    {episode.description}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {episode.date}
                    </span>
                    <span>{episode.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {podcasts.length === 0 && creators.length === 0 && episodes.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            No results found
          </h3>
          <p className="text-muted-foreground text-center max-w-md">
            Try different keywords or browse by category to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}