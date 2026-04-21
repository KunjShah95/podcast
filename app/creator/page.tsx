import Image from "next/image";
import Link from "next/link";
import PodcastCard from "@/components/podcast/podcast-card";
import {
  Play,
  Plus,
  MoreHorizontal,
  Verified,
  TrendingUp,
  Users,
  Headphones,
  BarChart3,
  Calendar,
  Globe,
  Star,
} from "lucide-react";

const creator = {
  id: "1",
  name: "Lex Fridman",
  avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  bannerImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=400&fit=crop",
  isVerified: true,
  monthlyListeners: 2500000,
  totalEpisodes: 650,
  avgCompletionRate: 78,
  growthRate: 12.5,
  category: "Technology",
  bio: "Research scientist in robotics and AI. Host of the Lex Fridman Podcast. Exploring the frontiers of artificial intelligence, robotics, neuroscience, and the future of humanity.",
  socialLinks: [
    { platform: "Twitter", url: "#" },
    { platform: "YouTube", url: "#" },
    { platform: "Website", url: "#" },
  ],
};

const podcasts = [
  {
    id: "1",
    title: "The Future of AI with Sam Altman",
    creator: "Lex Fridman",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
    listeners: 850000,
    duration: "2h 15m",
    episodeCount: 450,
    isTrending: true,
  },
  {
    id: "2",
    title: "Elon Musk: SpaceX, Tesla, and Humanity",
    creator: "Lex Fridman",
    coverImage: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=400&fit=crop",
    listeners: 1200000,
    duration: "3h 45m",
    episodeCount: 280,
    isNew: true,
  },
  {
    id: "3",
    title: "Jordan Peterson: Life, Meaning, and Purpose",
    creator: "Lex Fridman",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    listeners: 980000,
    duration: "2h 30m",
    episodeCount: 320,
  },
  {
    id: "4",
    title: "David Sinclair: Aging, Longevity, and Health",
    creator: "Lex Fridman",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop",
    listeners: 720000,
    duration: "2h 10m",
    episodeCount: 180,
  },
];

const analyticsData = {
  monthlyListeners: [
    { month: "Jan", count: 2100000 },
    { month: "Feb", count: 2200000 },
    { month: "Mar", count: 2350000 },
    { month: "Apr", count: 2400000 },
    { month: "May", count: 2500000 },
    { month: "Jun", count: 2500000 },
  ],
  topCountries: [
    { country: "United States", listeners: 1200000, percentage: 48 },
    { country: "United Kingdom", listeners: 350000, percentage: 14 },
    { country: "Canada", listeners: 280000, percentage: 11 },
    { country: "Australia", listeners: 190000, percentage: 8 },
    { country: "Germany", listeners: 150000, percentage: 6 },
  ],
  deviceBreakdown: [
    { device: "Mobile", percentage: 65 },
    { device: "Desktop", percentage: 25 },
    { device: "Smart Speaker", percentage: 7 },
    { device: "Other", percentage: 3 },
  ],
};

export default function CreatorProfilePage() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl border border-border/20 bg-card shadow-2xl shadow-black/10">
        <div className="absolute inset-0">
          <Image
            src={creator.bannerImage}
            alt={creator.name}
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="relative px-6 pb-8 pt-40 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-end">
            {/* Avatar */}
            <div className="relative">
              <div className="h-32 w-32 lg:h-40 lg:w-40 rounded-full overflow-hidden ring-4 ring-background shadow-2xl">
                <Image
                  src={creator.avatar}
                  alt={creator.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-success ring-4 ring-background">
                <Play className="h-3 w-3 text-white ml-0.5" fill="currentColor" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                  {creator.name}
                </h1>
                {creator.isVerified && (
                  <Verified className="h-6 w-6 text-info" fill="currentColor" />
                )}
              </div>
              <p className="text-muted-foreground max-w-xl mb-4">{creator.bio}</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <span className="inline-flex items-center rounded-md bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                  {creator.category}
                </span>
                {creator.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 btn-press">
                <Play className="h-5 w-5" fill="currentColor" />
                Play Random
              </button>
              <button className="flex items-center gap-2 rounded-xl border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10 btn-press">
                <Plus className="h-5 w-5" />
                Follow
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl bg-card p-5 border border-border/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
              <Headphones className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground">Monthly Listeners</span>
          </div>
          <p className="font-display text-2xl font-bold text-foreground">
            {(creator.monthlyListeners / 1000000).toFixed(1)}M
          </p>
          <p className="flex items-center gap-1 text-xs text-success mt-1">
            <TrendingUp className="h-3 w-3" />
            +{creator.growthRate}% from last month
          </p>
        </div>

        <div className="rounded-2xl bg-card p-5 border border-border/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-info/20">
              <Calendar className="h-5 w-5 text-info" />
            </div>
            <span className="text-xs text-muted-foreground">Total Episodes</span>
          </div>
          <p className="font-display text-2xl font-bold text-foreground">
            {creator.totalEpisodes}
          </p>
          <p className="text-xs text-muted-foreground mt-1">All time</p>
        </div>

        <div className="rounded-2xl bg-card p-5 border border-border/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/20">
              <BarChart3 className="h-5 w-5 text-success" />
            </div>
            <span className="text-xs text-muted-foreground">Completion Rate</span>
          </div>
          <p className="font-display text-2xl font-bold text-foreground">
            {creator.avgCompletionRate}%
          </p>
          <p className="text-xs text-success mt-1">Above average</p>
        </div>

        <div className="rounded-2xl bg-card p-5 border border-border/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/20">
              <TrendingUp className="h-5 w-5 text-warning" />
            </div>
            <span className="text-xs text-muted-foreground">Growth Rate</span>
          </div>
          <p className="font-display text-2xl font-bold text-foreground">
            +{creator.growthRate}%
          </p>
          <p className="text-xs text-success mt-1">Growing steadily</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border/40">
        <div className="flex gap-8">
          <button className="relative pb-4 text-sm font-medium text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary">
            All Podcasts
          </button>
          <button className="relative pb-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Analytics
          </button>
          <button className="relative pb-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </button>
        </div>
      </div>

      {/* All Podcasts Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-semibold text-foreground">
            All Podcasts
          </h2>
          <div className="flex items-center gap-2">
            <select className="h-10 rounded-xl bg-secondary px-4 py-2 text-sm text-foreground border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option>Latest</option>
              <option>Most Popular</option>
              <option>Most Listened</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {podcasts.map((podcast) => (
            <PodcastCard key={podcast.id} {...podcast} />
          ))}
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Listeners Chart */}
        <div className="lg:col-span-2 rounded-2xl bg-card p-6 border border-border/20">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            Monthly Listeners
          </h3>
          <div className="h-48 flex items-end gap-2">
            {analyticsData.monthlyListeners.map((data, index) => (
              <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-primary/80 rounded-t-lg transition-all hover:bg-primary"
                  style={{ height: `${(data.count / 2500000) * 100}%` }}
                />
                <span className="text-xs text-muted-foreground">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Countries */}
        <div className="rounded-2xl bg-card p-6 border border-border/20">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            Top Countries
          </h3>
          <div className="space-y-4">
            {analyticsData.topCountries.map((country, index) => (
              <div key={country.country} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground">{country.country}</span>
                  <span className="text-muted-foreground">
                    {country.listeners.toLocaleString()} ({country.percentage}%)
                  </span>
                </div>
                <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${country.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Device Breakdown */}
      <div className="rounded-2xl bg-card p-6 border border-border/20">
        <h3 className="font-display text-lg font-semibold text-foreground mb-4">
          Device Breakdown
        </h3>
        <div className="flex items-center gap-8">
          {analyticsData.deviceBreakdown.map((item) => (
            <div key={item.device} className="text-center">
              <div className="relative h-20 w-20 mx-auto mb-2">
                <svg className="h-full w-full -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-secondary"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-primary"
                    strokeDasharray={`${item.percentage * 2.26} 226`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-foreground">
                    {item.percentage}%
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{item.device}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
