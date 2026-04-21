"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Bell,
  Play,
  Plus,
  UserPlus,
  TrendingUp,
  Calendar,
  Check,
  Trash2,
  Settings,
  Clock,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const notifications = [
  {
    id: "1",
    type: "new_episode",
    title: "New Episode Available",
    description: "Debbie Millman released a new episode: 'The Future of Design'",
    time: "2 hours ago",
    read: false,
    avatar: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=100&h=100&fit=crop",
    podcast: "Design Matters",
    episodeImage: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=200&h=200&fit=crop",
  },
  {
    id: "2",
    type: "follower",
    title: "New Follower",
    description: "Sarah Chen started following you",
    time: "5 hours ago",
    read: false,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "3",
    type: "trending",
    title: "Podcast Trending",
    description: "Your subscribed podcast 'Tech Talk Today' is trending +25% this week",
    time: "1 day ago",
    read: true,
    avatar: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100&h=100&fit=crop",
    trend: "+25%",
  },
  {
    id: "4",
    type: "new_episode",
    title: "New Episode Available",
    description: "Lex Fridman released a new episode: 'AI and the Future of Humanity'",
    time: "2 days ago",
    read: true,
    avatar: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&h=100&fit=crop",
    podcast: "The Lex Fridman Podcast",
    episodeImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop",
  },
  {
    id: "5",
    type: "reminder",
    title: "Continue Listening",
    description: "You left off at 1:23:45 in 'The Tim Ferriss Show'",
    time: "3 days ago",
    read: true,
    avatar: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=100&h=100&fit=crop",
    podcast: "The Tim Ferriss Show",
    progress: 65,
  },
  {
    id: "6",
    type: "new_episode",
    title: "New Episode Available",
    description: "Tim Ferriss released a new episode: 'Building a Second Brain'",
    time: "1 week ago",
    read: true,
    avatar: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=100&h=100&fit=crop",
    podcast: "The Tim Ferriss Show",
    episodeImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=200&fit=crop",
  },
];

const filterTabs = ["All", "New Episodes", "Followers", "Trending"];

export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([]);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "new_episode":
        return <Play className="h-4 w-4" fill="currentColor" />;
      case "follower":
        return <UserPlus className="h-4 w-4" />;
      case "trending":
        return <TrendingUp className="h-4 w-4" />;
      case "reminder":
        return <Clock className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "new_episode":
        return "bg-primary text-white";
      case "follower":
        return "bg-info text-white";
      case "trending":
        return "bg-warning text-black";
      case "reminder":
        return "bg-success text-white";
      default:
        return "bg-muted text-foreground";
    }
  };

  const filteredNotifications =
    activeFilter === "All"
      ? notifications
      : activeFilter === "New Episodes"
      ? notifications.filter((n) => n.type === "new_episode")
      : activeFilter === "Followers"
      ? notifications.filter((n) => n.type === "follower")
      : notifications.filter((n) => n.type === "trending");

  const toggleSelect = (id: string) => {
    setSelectedNotifications((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Notifications
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {unreadCount > 0
              ? `You have ${unreadCount} unread notification${unreadCount > 1 ? "s" : ""}`
              : "You're all caught up!"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {selectedNotifications.length > 0 && (
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Trash2 className="h-4 w-4" />
              Delete selected
            </button>
          )}
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-muted-foreground hover:text-foreground transition-colors">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={cn(
              "flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all whitespace-nowrap",
              activeFilter === tab
                ? "bg-primary text-white"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
            {tab === "All" && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/20 px-1.5 text-xs">
                {notifications.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-2">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={cn(
              "group relative flex items-start gap-4 rounded-2xl bg-card p-4 border border-border/20 transition-all hover:border-primary/30",
              !notification.read && "bg-secondary/30"
            )}
          >
            {/* Unread Indicator */}
            {!notification.read && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary" />
            )}

            {/* Selection Checkbox */}
            <button
              onClick={() => toggleSelect(notification.id)}
              className={cn(
                "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg border transition-all mt-1",
                selectedNotifications.includes(notification.id)
                  ? "bg-primary border-primary text-white"
                  : "border-border/40 opacity-0 group-hover:opacity-100"
              )}
            >
              {selectedNotifications.includes(notification.id) && (
                <Check className="h-4 w-4" />
              )}
            </button>

            {/* Icon */}
            <div
              className={cn(
                "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full",
                getNotificationColor(notification.type)
              )}
            >
              {getNotificationIcon(notification.type)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-3">
                {notification.avatar && !notification.episodeImage && (
                  <Image
                    src={notification.avatar}
                    alt={notification.title}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                )}
                {notification.episodeImage && (
                  <div className="relative h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={notification.episodeImage}
                      alt={notification.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground line-clamp-1">
                      {notification.title}
                    </h3>
                    {notification.trend && (
                      <span className="flex items-center gap-1 rounded-md bg-success/20 px-2 py-0.5 text-xs font-medium text-success">
                        {notification.trend}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                    {notification.description}
                  </p>
                  {notification.podcast && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {notification.podcast}
                    </p>
                  )}
                  {notification.progress && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-1.5 flex-1 rounded-full bg-secondary/50 overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${notification.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {notification.progress}%
                      </span>
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {notification.time}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {notification.type === "new_episode" && (
                <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white hover:bg-primary-hover transition-colors">
                  <Play className="h-4 w-4" fill="currentColor" />
                </button>
              )}
              {notification.type === "new_episode" && (
                <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                  <Plus className="h-4 w-4" />
                </button>
              )}
              <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredNotifications.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
            <Bell className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            No notifications
          </h3>
          <p className="text-muted-foreground text-center max-w-md">
            You&apos;re all caught up! Check back later for new updates from your favorite
            podcasts.
          </p>
        </div>
      )}
    </div>
  );
}