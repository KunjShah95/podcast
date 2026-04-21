"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Pause, Plus, MoreHorizontal, TrendingUp, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface PodcastCardProps {
  id: string;
  title: string;
  creator: string;
  coverImage: string;
  listeners?: number;
  duration?: string;
  progress?: number;
  isNew?: boolean;
  isTrending?: boolean;
  variant?: "default" | "featured" | "horizontal";
  className?: string;
}

export default function PodcastCard({
  id,
  title,
  creator,
  coverImage,
  listeners = 0,
  duration,
  progress,
  isNew,
  isTrending,
  variant = "default",
  className,
}: PodcastCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const formatListeners = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  if (variant === "horizontal") {
    return (
      <Link
        href={`/podcast/${id}`}
        className={cn(
          "group flex gap-5 rounded-2xl bg-[#1A1F2E] p-4 border border-white/5 transition-all duration-300 hover:bg-[#1A1F2E]/80 hover:border-white/10",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {progress !== undefined && (
            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#FF6B35]/20">
              <div
                className="h-full bg-[#FF6B35]"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col justify-center min-w-0">
          <h3 className="font-display text-base font-semibold text-white line-clamp-2 leading-tight">
            {title}
          </h3>
          <p className="mt-2 text-sm text-white/50">{creator}</p>
          <div className="mt-3 flex items-center gap-4 text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <Play className="h-3.5 w-3.5" />
              {formatListeners(listeners)} listeners
            </span>
            {duration && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {duration}
              </span>
            )}
          </div>
        </div>
        <button
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B35] text-white transition-all opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 hover:bg-[#FF8A4D] hover:shadow-lg hover:shadow-[#FF6B35]/30",
            isHovered && "opacity-100 scale-100"
          )}
          onClick={(e) => {
            e.preventDefault();
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
        </button>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <div
        className={cn(
          "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1F2E] to-[#252B3E] border border-white/10 p-8 transition-all duration-300",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-transparent" />
        <div className="relative flex gap-8 items-center">
          <div className="relative h-56 w-56 flex-shrink-0 overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-200",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            >
              <button className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FF6B35] text-white transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#FF6B35]/40">
                <Play className="h-8 w-8 ml-1" fill="currentColor" />
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <div className="mb-4 flex items-center gap-3">
              {isNew && (
                <span className="inline-flex items-center rounded-lg bg-[#10B981] px-3 py-1.5 text-xs font-bold text-white">
                  NEW
                </span>
              )}
              {isTrending && (
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#F59E0B] px-3 py-1.5 text-xs font-bold text-black">
                  <TrendingUp className="h-3.5 w-3.5" />
                  TRENDING
                </span>
              )}
            </div>
            <h3 className="font-display text-3xl font-bold text-white leading-tight">
              {title}
            </h3>
            <p className="mt-3 text-lg text-white/60">{creator}</p>
            <div className="mt-5 flex items-center gap-5 text-sm text-white/40">
              <span>{formatListeners(listeners)} listeners</span>
              {duration && <span>{duration}</span>}
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button className="flex items-center gap-2.5 rounded-2xl bg-[#FF6B35] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#FF8A4D] hover:shadow-lg hover:shadow-[#FF6B35]/25">
                <Play className="h-5 w-5" fill="currentColor" />
                Play Episode
              </button>
              <button className="flex items-center justify-center rounded-2xl border-2 border-[#FF6B35] h-14 w-14 text-[#FF6B35] transition-all hover:bg-[#FF6B35]/10">
                <Plus className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default card
  return (
    <Link
      href={`/podcast/${id}`}
      className={cn(
        "group relative block overflow-hidden rounded-2xl bg-[#1A1F2E] border border-white/5 transition-all duration-300 hover:bg-[#1A1F2E]/80 hover:border-[#FF6B35]/30",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-200",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <button
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6B35] text-white shadow-xl shadow-[#FF6B35]/30 transition-all hover:scale-110 hover:shadow-2xl"
            onClick={(e) => {
              e.preventDefault();
              setIsPlaying(!isPlaying);
            }}
          >
            {isPlaying ? (
              <Pause className="h-7 w-7" />
            ) : (
              <Play className="h-7 w-7 ml-0.5" fill="currentColor" />
            )}
          </button>
        </div>
        
        {/* Badges - Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="inline-flex items-center rounded-lg bg-[#10B981] px-2.5 py-1 text-xs font-bold text-white">
              NEW
            </span>
          )}
          {isTrending && (
            <span className="inline-flex items-center gap-1 rounded-lg bg-[#F59E0B] px-2.5 py-1 text-xs font-bold text-black">
              <TrendingUp className="h-3 w-3" />
              +15%
            </span>
          )}
        </div>
        
        {/* More Button - Top Right */}
        <button 
          className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-all hover:bg-black/60 group-hover:opacity-100"
          onClick={(e) => e.preventDefault()}
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
        
        {/* Progress Bar - Bottom */}
        {progress !== undefined && (
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#FF6B35]/20">
            <div className="h-full bg-[#FF6B35]" style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-base font-semibold text-white line-clamp-2 leading-tight">
          {title}
        </h3>
        <p className="mt-1.5 text-sm text-white/50 line-clamp-1">{creator}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-white/40">
          <span className="flex items-center gap-1.5">
            <Play className="h-3.5 w-3.5" />
            {formatListeners(listeners)}
          </span>
          {duration && (
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {duration}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}