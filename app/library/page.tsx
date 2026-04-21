import PodcastCard from "@/components/podcast/podcast-card";
import { Play, Heart, Clock, Download, History } from "lucide-react";

const playlists = [
  {
    id: "1",
    title: "Favorites",
    count: 45,
    coverImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    title: "Tech & AI",
    count: 28,
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Morning Commute",
    count: 15,
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Learning",
    count: 32,
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
  },
];

const recentlyPlayed = [
  {
    id: "1",
    title: "The Future of AI",
    creator: "Lex Fridman",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=400&fit=crop",
    listeners: 2100000,
    duration: "2h 15m",
    progress: 65,
  },
  {
    id: "2",
    title: "Design Matters",
    creator: "Debbie Millman",
    coverImage: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=400&fit=crop",
    listeners: 1250000,
    duration: "45 min",
    progress: 30,
  },
];

export default function LibraryPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Quick Access */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="group flex items-center gap-4 rounded-2xl bg-card p-5 border border-border/20 transition-all hover:border-primary/30 hover:bg-secondary/30">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <Play className="h-6 w-6" fill="currentColor" />
          </div>
          <div className="text-left">
            <p className="font-display font-semibold text-foreground">Recently Played</p>
            <p className="text-sm text-muted-foreground">15 episodes</p>
          </div>
        </button>

        <button className="group flex items-center gap-4 rounded-2xl bg-card p-5 border border-border/20 transition-all hover:border-primary/30 hover:bg-secondary/30">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-error/20 text-error transition-colors group-hover:bg-error group-hover:text-white">
            <Heart className="h-6 w-6" fill="currentColor" />
          </div>
          <div className="text-left">
            <p className="font-display font-semibold text-foreground">Liked Episodes</p>
            <p className="text-sm text-muted-foreground">48 episodes</p>
          </div>
        </button>

        <button className="group flex items-center gap-4 rounded-2xl bg-card p-5 border border-border/20 transition-all hover:border-primary/30 hover:bg-secondary/30">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-info/20 text-info transition-colors group-hover:bg-info group-hover:text-white">
            <Download className="h-6 w-6" />
          </div>
          <div className="text-left">
            <p className="font-display font-semibold text-foreground">Downloads</p>
            <p className="text-sm text-muted-foreground">8 episodes</p>
          </div>
        </button>

        <button className="group flex items-center gap-4 rounded-2xl bg-card p-5 border border-border/20 transition-all hover:border-primary/30 hover:bg-secondary/30">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-warning/20 text-warning transition-colors group-hover:bg-warning group-hover:text-black">
            <Clock className="h-6 w-6" />
          </div>
          <div className="text-left">
            <p className="font-display font-semibold text-foreground">Listen Later</p>
            <p className="text-sm text-muted-foreground">22 episodes</p>
          </div>
        </button>
      </div>

      {/* Continue Listening */}
      <section>
        <h2 className="font-display text-xl font-semibold text-foreground mb-4">
          Continue Listening
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {recentlyPlayed.map((podcast) => (
            <PodcastCard key={podcast.id} {...podcast} />
          ))}
        </div>
      </section>

      {/* Playlists */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Your Playlists
          </h2>
          <button className="text-sm text-primary hover:text-primary-hover transition-colors">
            Create playlist
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {playlists.map((playlist) => (
            <button
              key={playlist.id}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/20 transition-all hover:border-primary/30 hover:scale-[1.02]"
            >
              <div className="aspect-square relative">
                <img
                  src={playlist.coverImage}
                  alt={playlist.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                    <Play className="h-6 w-6" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-4 text-left">
                <p className="font-medium text-foreground">{playlist.title}</p>
                <p className="text-sm text-muted-foreground">{playlist.count} episodes</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Subscribed Creators */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Following
          </h2>
          <button className="text-sm text-primary hover:text-primary-hover transition-colors">
            See all
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {[
            { name: "Lex Fridman", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" },
            { name: "Tim Ferriss", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
            { name: "Debbie Millman", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
            { name: "Joe Rogan", avatar: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=100&h=100&fit=crop&crop=face" },
            { name: "Guy Raz", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
          ].map((creator) => (
            <button
              key={creator.name}
              className="flex flex-col items-center gap-2 flex-shrink-0"
            >
              <div className="h-20 w-20 rounded-full overflow-hidden ring-4 ring-card hover:ring-primary transition-all">
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-sm text-foreground">{creator.name}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
