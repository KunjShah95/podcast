/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import PodcastCard from "@/components/podcast/podcast-card";
import {
  Play,
  Plus,
  Share2,
  MoreHorizontal,
  Heart,
  Clock,
  Calendar,
  Star,
  ChevronRight,
  Verified,
  Headphones,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

const podcast = {
  id: "1",
  title: "The Design Matters Podcast",
  creator: "Debbie Millman",
  creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  coverImage: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&h=800&fit=crop",
  description:
    "Design Matters is the world's first podcast about design and an inquiry into the broader world of creative culture. Hosted by Debbie Millman, one of the most well-known designers working today, the show features bold, fresh voices from the design world and beyond — including artists, writers, creative directors, filmmakers, entrepreneurs, and thought leaders.",
  listeners: 1250000,
  rating: 4.8,
  totalEpisodes: 450,
  category: "Design",
  language: "English",
  frequency: "Weekly",
  startedDate: "January 2007",
  isVerified: true,
};

const episodes = [
  {
    id: "1",
    title: "The Future of Design in the Age of AI",
    date: "2 days ago",
    duration: "52 min",
    description: "Exploring how artificial intelligence is reshaping the design industry and what it means for creative professionals.",
  },
  {
    id: "2",
    title: "Building Sustainable Design Systems",
    date: "1 week ago",
    duration: "45 min",
    description: "A deep dive into creating design systems that are both beautiful and environmentally conscious.",
  },
  {
    id: "3",
    title: "The Art of Typography in Digital Spaces",
    date: "2 weeks ago",
    duration: "38 min",
    description: "Understanding the nuances of typography for screens and how to create readable, engaging text experiences.",
  },
  {
    id: "4",
    title: "Color Theory for Modern Interfaces",
    date: "3 weeks ago",
    duration: "41 min",
    description: "How to use color effectively in digital products while maintaining accessibility and emotional resonance.",
  },
  {
    id: "5",
    title: "Interview with Design Legend",
    date: "1 month ago",
    duration: "58 min",
    description: "A conversation with one of the most influential designers of our time.",
  },
];

const reviews = [
  {
    id: "1",
    user: "Alex K.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Absolutely love this podcast! Debbie brings such unique perspectives from the design world. Every episode leaves me inspired.",
    helpful: 124,
  },
  {
    id: "2",
    user: "Sarah M.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Best design podcast out there. The guests are always fascinating and the production quality is top-notch.",
    helpful: 89,
  },
  {
    id: "3",
    user: "James L.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    comment: "Great content and insights. Would love to see more episodes focused on UX research.",
    helpful: 45,
  },
];

const similarPodcasts = [
  {
    id: "1",
    title: "UX Podcast",
    creator: "Freddy Cudd",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
    listeners: 450000,
    duration: "40 min",
  },
  {
    id: "2",
    title: "The Deeply Design Show",
    creator: "Josh Comeau",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop",
    listeners: 320000,
    duration: "35 min",
  },
  {
    id: "3",
    title: "ShopTalk Show",
    creator: "Chris Coyier",
    coverImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=400&fit=crop",
    listeners: 680000,
    duration: "55 min",
  },
  {
    id: "4",
    title: "Syntax FM",
    creator: "Wes Bos",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
    listeners: 520000,
    duration: "45 min",
  },
];

export default function PodcastDetailPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl border border-border/20 bg-card shadow-2xl shadow-black/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        <div className="absolute inset-0">
          <Image
            src={podcast.coverImage}
            alt={podcast.title}
            fill
            className="object-cover opacity-20 blur-3xl"
          />
        </div>
        
        <div className="relative px-6 pb-8 pt-32 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Cover Image */}
            <div className="relative h-48 w-48 lg:h-64 lg:w-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={podcast.coverImage}
                alt={podcast.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center rounded-md bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                  {podcast.category}
                </span>
                {podcast.isVerified && (
                  <span className="inline-flex items-center gap-1 text-xs text-info">
                    <Verified className="h-3 w-3" />
                    Verified
                  </span>
                )}
              </div>

              <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3">
                {podcast.title}
              </h1>

              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={podcast.creatorAvatar}
                  alt={podcast.creator}
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <span className="font-medium text-foreground">{podcast.creator}</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Headphones className="h-4 w-4" />
                  {(podcast.listeners / 1000000).toFixed(1)}M listeners
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-warning fill-warning" />
                  {podcast.rating} rating
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {podcast.frequency}
                </span>
              </div>

              <p className="text-muted-foreground mb-6 max-w-2xl line-clamp-3">
                {podcast.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 btn-press">
                  <Play className="h-5 w-5" fill="currentColor" />
                  Play Latest
                </button>
                <button className="flex items-center gap-2 rounded-xl border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10 btn-press">
                  <Plus className="h-5 w-5" />
                  Subscribe
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border/40">
        <div className="flex gap-8">
          <button className="relative pb-4 text-sm font-medium text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary">
            Overview
          </button>
          <button className="relative pb-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Episodes ({podcast.totalEpisodes})
          </button>
          <button className="relative pb-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Community
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Details */}
          <div className="rounded-2xl bg-card p-6 border border-border/20">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">
              About This Podcast
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {podcast.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <Headphones className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Total Episodes</p>
                  <p className="font-semibold text-foreground">{podcast.totalEpisodes}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Started</p>
                  <p className="font-semibold text-foreground">{podcast.startedDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Frequency</p>
                  <p className="font-semibold text-foreground">{podcast.frequency}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Avg. Duration</p>
                  <p className="font-semibold text-foreground">45 min</p>
                </div>
              </div>
            </div>
          </div>

          {/* Episodes */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Latest Episodes
              </h2>
              <button className="text-sm text-primary hover:text-primary-hover transition-colors">
                See all episodes
              </button>
            </div>
            <div className="space-y-3">
              {episodes.map((episode) => (
                <div
                  key={episode.id}
                  className="group rounded-xl bg-card p-4 border border-border/20 transition-all hover:border-primary/30 hover:bg-secondary/30"
                >
                  <div className="flex items-start gap-4">
                    <button className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                      <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                    </button>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {episode.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {episode.description}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {episode.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {episode.duration}
                        </span>
                      </div>
                    </div>
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Ratings & Reviews
              </h2>
              <button className="text-sm text-primary hover:text-primary-hover transition-colors">
                Write a review
              </button>
            </div>
            
            <div className="flex items-center gap-4 mb-6 p-4 rounded-xl bg-card border border-border/20">
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-foreground">{podcast.rating}</p>
                <div className="flex gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${star <= Math.round(podcast.rating) ? "text-warning fill-warning" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-1">12.5K reviews</p>
              </div>
              <div className="flex-1 space-y-1.5">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-3">{rating}</span>
                    <div className="flex-1 h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-warning"
                        style={{ width: rating === 5 ? "85%" : rating === 4 ? "10%" : "5%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="rounded-xl bg-card p-4 border border-border/20"
                >
                  <div className="flex items-start gap-3">
                    <Image
                      src={review.avatar}
                      alt={review.user}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{review.user}</span>
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-3 w-3 ${star <= review.rating ? "text-warning fill-warning" : "text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{review.comment}</p>
                      <button className="flex items-center gap-1 mt-3 text-xs text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle className="h-3 w-3" />
                        Helpful ({review.helpful})
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Similar Podcasts */}
          <div className="rounded-2xl bg-card p-5 border border-border/20">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">
              Fans Also Enjoyed
            </h2>
            <div className="space-y-3">
              {similarPodcasts.map((podcast) => (
                <PodcastCard key={podcast.id} {...podcast} />
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-secondary p-5 border border-primary/20">
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">
              Never Miss an Episode
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Get notified when new episodes are released
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-background border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 mb-3"
            />
            <button className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary-hover transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
