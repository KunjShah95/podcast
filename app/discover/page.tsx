"use client";

import { useState } from "react";
import PodcastCard from "@/components/podcast/podcast-card";
import { Search, X, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const filterOptions = {
  sort: [
    { value: "relevance", label: "Relevance" },
    { value: "newest", label: "Newest" },
    { value: "trending", label: "Trending" },
    { value: "popular", label: "Popular" },
  ],
  duration: [
    { value: "short", label: "< 30 min" },
    { value: "medium", label: "30-60 min" },
    { value: "long", label: "> 60 min" },
  ],
  frequency: [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
  ],
  language: [
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "zh", label: "Chinese" },
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
  {
    id: "7",
    title: "The Joe Rogan Experience",
    creator: "Joe Rogan",
    coverImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=400&fit=crop",
    listeners: 15000000,
    duration: "2h 30m",
  },
  {
    id: "8",
    title: "How I Built This",
    creator: "Guy Raz",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    listeners: 2800000,
    duration: "45 min",
  },
];

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero Search */}
      <div className="relative rounded-2xl bg-gradient-to-br from-secondary to-secondary/60 p-8 border border-primary/10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Discover Your Next Favorite
          </h1>
          <p className="text-muted-foreground mb-6">
            Search millions of podcasts or browse by category
          </p>
          
          {/* Large Search Bar */}
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search podcasts, creators, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-14 pr-14 rounded-xl bg-background border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex items-center gap-3">
          {/* Sort Dropdown */}
          <select className="h-10 rounded-xl bg-secondary px-4 py-2 text-sm text-foreground border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/30">
            {filterOptions.sort.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Duration Filter */}
          <div className="flex items-center gap-1 rounded-xl bg-secondary p-1 border border-border/40">
            {filterOptions.duration.map((option) => (
              <button
                key={option.value}
                onClick={() => toggleFilter(option.value)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                  selectedFilters.includes(option.value)
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* More Filters Button */}
          <button className="flex items-center gap-2 h-10 px-4 rounded-xl bg-secondary border border-border/40 text-sm text-foreground hover:bg-secondary/80 transition-colors">
            <Filter className="h-4 w-4" />
            More Filters
          </button>

          {/* Active Filters Count */}
          {selectedFilters.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                {selectedFilters.length}
              </span>
              <button
                onClick={clearFilters}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-muted-foreground whitespace-nowrap">
          Showing <span className="font-medium text-foreground">{podcasts.length}</span> results
        </p>
      </div>

      {/* Results Grid */}
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

      {/* Load More */}
      <div className="flex justify-center py-8">
        <button className="flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors">
          Load More
        </button>
      </div>

      {/* Empty State */}
      {podcasts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            No podcasts found
          </h3>
          <p className="text-muted-foreground text-center max-w-md">
            Try adjusting your search or filters to find what you&apos;re looking for
          </p>
        </div>
      )}
    </div>
  );
}
