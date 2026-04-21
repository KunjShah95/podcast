"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  ListMusic,
  Heart,
  Share2,
  Maximize2,
  MoreHorizontal,
} from "lucide-react";

interface PlayerProps {
  episode?: {
    title: string;
    podcast: string;
    coverImage: string;
    duration: number;
    currentTime: number;
  };
  className?: string;
}

export default function Player({ episode, className }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [volume] = useState(75);

  const progress = episode ? (episode.currentTime / episode.duration) * 100 : 0;
  const currentTimeDisplay = episode ? formatTime(episode.currentTime) : "0:00";
  const durationDisplay = episode ? formatTime(episode.duration) : "0:00";

  function formatTime(seconds: number): string {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    }
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  if (!episode) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-64 right-0 z-50 border-t border-white/5 bg-[#0F1419]/95 backdrop-blur-xl",
        className
      )}
    >
      {/* Progress Bar */}
      <div className="group absolute -top-0.5 left-0 right-0 h-1 bg-[#252B3E] cursor-pointer">
        <div
          className="absolute inset-y-0 left-0 bg-[#FF6B35] transition-all"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-1/2 left-[40px] -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>

      <div className="flex h-24 items-center px-6">
        {/* Episode Info */}
        <div className="flex items-center gap-4 w-80 flex-shrink-0">
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl">
            <Image
              src={episode.coverImage}
              alt={episode.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-medium text-sm text-white truncate leading-tight">
              {episode.title}
            </h4>
            <p className="text-xs text-white/50 truncate mt-0.5">
              {episode.podcast}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
                isLiked
                  ? "text-red-500"
                  : "text-white/50 hover:text-white"
              )}
            >
              <Heart className="h-4 w-4" fill={isLiked ? "currentColor" : "none"} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl text-white/50 hover:text-white transition-colors">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Player Controls - Center */}
        <div className="flex-1 flex flex-col items-center justify-center px-8">
          <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full text-white/50 hover:text-white transition-colors">
              <SkipBack className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B35] text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B35]/30"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" fill="currentColor" />
              ) : (
                <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
              )}
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full text-white/50 hover:text-white transition-colors">
              <SkipForward className="h-5 w-5" />
            </button>
          </div>
          
          {/* Progress Bar with Time */}
          <div className="mt-3 flex items-center gap-3 w-full max-w-lg">
            <span className="text-xs text-white/50 font-mono w-12 text-right tabular-nums">
              {currentTimeDisplay}
            </span>
            <div className="flex-1 h-1.5 bg-[#252B3E] rounded-full overflow-hidden">
              <div
                className="h-full bg-white/60 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs text-white/50 font-mono w-12 tabular-nums">
              {durationDisplay}
            </span>
          </div>
        </div>

        {/* Volume & Extra Controls - Right */}
        <div className="flex items-center gap-3 w-80 justify-end flex-shrink-0">
          <button className="flex h-10 w-10 items-center justify-center rounded-xl text-white/50 hover:text-white transition-colors">
            <ListMusic className="h-4 w-4" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl text-white/50 hover:text-white transition-colors">
            <Maximize2 className="h-4 w-4" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl text-white/50 hover:text-white transition-colors">
            <MoreHorizontal className="h-4 w-4" />
          </button>
          
          {/* Volume Control */}
          <div className="flex items-center gap-3 ml-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white/50 hover:text-white transition-colors"
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </button>
            <div className="h-1.5 w-24 bg-[#252B3E] rounded-full overflow-hidden">
              <div
                className="h-full bg-white/60 rounded-full"
                style={{ width: `${isMuted ? 0 : volume}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}