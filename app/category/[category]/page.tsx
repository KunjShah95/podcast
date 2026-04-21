"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import PodcastCard from "@/components/podcast/podcast-card";
import {
  ChevronLeft,
  TrendingUp,
  Headphones,
  Play,
} from "lucide-react";

const categoryData: Record<string, {
  name: string;
  description: string;
  coverImage: string;
  podcastCount: number;
  trending: boolean;
  trendingCount: number;
}> = {
  technology: {
    name: "Technology",
    description: "Stay ahead with the latest in tech news, programming, AI, and the future of innovation.",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=400&fit=crop",
    podcastCount: 1240,
    trending: true,
    trendingCount: 85,
  },
  business: {
    name: "Business",
    description: "Insights from founders, investors, and industry leaders on building successful companies.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop",
    podcastCount: 890,
    trending: true,
    trendingCount: 42,
  },
  comedy: {
    name: "Comedy",
    description: "Laugh out loud with top comedians, funny stories, and hilarious conversations.",
    coverImage: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc4b5?w=1200&h=400&fit=crop",
    podcastCount: 720,
    trending: false,
    trendingCount: 0,
  },
  health: {
    name: "Health",
    description: "Expert advice on fitness, nutrition, mental health, and living your best life.",
    coverImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8?w=1200&h=400&fit=crop",
    podcastCount: 580,
    trending: true,
    trendingCount: 28,
  },
  science: {
    name: "Science",
    description: "Explore the wonders of science with researchers and thought leaders.",
    coverImage: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1200&h=400&fit=crop",
    podcastCount: 450,
    trending: false,
    trendingCount: 0,
  },
  history: {
    name: "History",
    description: "Journey through time with historians and storytellers.",
    coverImage: "https://images.unsplash.com/photo-1461360378756-1fef2e7f7c0b?w=1200&h=400&fit=crop",
    podcastCount: 380,
    trending: false,
    trendingCount: 0,
  },
};

const podcasts = [
  {
    id: "1",
    title: "Tech Talk Today",
    creator: "Sarah Chen",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop",
    listeners: 890000,
    duration: "32 min",
    isTrending: true,
  },
  {
    id: "2",
    title: "AI Frontiers",
    creator: "Sam Altman",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
    listeners: 750000,
    duration: "42 min",
    isNew: true,
  },
  {
    id: "3",
    title: "Code Stories",
    creator: "Kent C. Dodds",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop",
    listeners: 420000,
    duration: "55 min",
  },
  {
    id: "4",
    title: "The Debug Log",
    creator: "Bolkeley",
    coverImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=400&fit=crop",
    listeners: 680000,
    duration: "40 min",
  },
  {
    id: "5",
    title: "Syntax FM",
    creator: "Wes Bos",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
    listeners: 520000,
    duration: "45 min",
  },
  {
    id: "6",
    title: "JS Party",
    creator: "Changelog",
    coverImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=400&fit=crop",
    listeners: 380000,
    duration: "38 min",
  },
  {
    id: "7",
    title: "Changelog Nightly",
    creator: "Changelog",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
    listeners: 290000,
    duration: "25 min",
  },
  {
    id: "8",
    title: "Soft Skills Engineering",
    creator: "Dave Smith",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd1c1f8b4c?w=400&h=400&fit=crop",
    listeners: 450000,
    duration: "50 min",
    isTrending: true,
  },
];

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const categoryInfo = categoryData[category] || categoryData.technology;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-border/20 bg-card shadow-2xl shadow-black/10">
        <div className="absolute inset-0">
          <Image
            src={categoryInfo.coverImage}
            alt={categoryInfo.name}
            fill
            className="object-cover opacity-30 blur-xl"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="relative px-6 py-12 sm:px-8 lg:px-12">
          <button className="mb-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="h-4 w-4" />
            All Categories
          </button>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-md bg-primary px-3 py-1 text-sm font-semibold text-white">
              {categoryInfo.name}
            </span>
            {categoryInfo.trending && (
              <span className="inline-flex items-center gap-1 rounded-md bg-success/20 px-3 py-1 text-sm font-medium text-success">
                <TrendingUp className="h-4 w-4" />
                +{categoryInfo.trendingCount}% this week
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {categoryInfo.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6">
            {categoryInfo.description}
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Headphones className="h-5 w-5" />
              {categoryInfo.podcastCount} podcasts
            </span>
            <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25">
              <Play className="h-5 w-5" fill="currentColor" />
              Play All
            </button>
          </div>
        </div>
      </div>

      {/* Trending in Category */}
      {categoryInfo.trending && (
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-success" />
            Trending in {categoryInfo.name}
          </h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {podcasts
              .filter((p) => p.isTrending)
              .map((podcast) => (
                <PodcastCard key={podcast.id} {...podcast} />
              ))}
          </div>
        </section>
      )}

      {/* All Podcasts */}
      <section>
        <h2 className="font-display text-xl font-semibold text-foreground mb-4">
          All {categoryInfo.name} Podcasts
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-5">
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

      {/* Spacer for fixed player */}
      <div className="h-24" />
    </div>
  );
}