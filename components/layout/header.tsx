"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Bell, X, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <header className="sticky top-0 z-40 h-20 border-b border-white/5 bg-[#0F1419]/95 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between px-8">
        {/* Greeting */}
        <div>
          <h1 className="font-display text-xl font-semibold text-white">
            {getGreeting()}, Marvin 👋
          </h1>
          <p className="text-sm text-white/40 mt-0.5">
            Discover your next favorite podcast
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-8 relative">
          <div
            className={cn(
              "relative flex items-center rounded-2xl bg-[#1A1F2E] transition-all duration-200",
              isFocused && "ring-2 ring-[#FF6B35]/30 bg-[#1A1F2E]"
            )}
          >
            <Search className="absolute left-5 h-5 w-5 text-white/40" />
            <input
              type="text"
              placeholder="Search podcasts, creators, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full bg-transparent py-4 pl-14 pr-12 text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="h-4 w-4 text-white/40" />
              </button>
            )}
          </div>

          {/* Search Dropdown */}
          {isFocused && (
            <div className="absolute top-full left-0 right-0 mt-2 max-h-96 overflow-auto rounded-2xl border border-white/10 bg-[#1A1F2E] shadow-2xl animate-fade-in">
              {/* Trending Searches */}
              <div className="p-4">
                <div className="flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white/40">
                  <TrendingUp className="h-4 w-4 text-[#FF6B35]" />
                  Trending Searches
                </div>
                <div className="space-y-1">
                  {["Tech News Today", "True Crime Stories", "Startup Lessons", "AI & Machine Learning"].map(
                    (term) => (
                      <Link
                        key={term}
                        href={`/search?q=${encodeURIComponent(term)}`}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors"
                      >
                        <Search className="h-4 w-4 text-white/40" />
                        {term}
                      </Link>
                    )
                  )}
                </div>
              </div>

              <div className="border-t border-white/5" />

              {/* Recent Searches */}
              <div className="p-4">
                <div className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-white/40">
                  Recent Searches
                </div>
                <div className="space-y-1">
                  {["Design Matters", "The Tim Ferriss Show"].map((term) => (
                    <Link
                      key={term}
                      href={`/search?q=${encodeURIComponent(term)}`}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors"
                    >
                      <Search className="h-4 w-4 text-white/40" />
                      {term}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <Link
            href="/notifications"
            className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1A1F2E] text-white/60 hover:text-white hover:bg-[#1A1F2E]/80 transition-all"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B35] text-xs font-bold text-white">
              3
            </span>
          </Link>

          {/* User Avatar */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8A4D] text-white font-bold text-sm">
            M
          </div>
        </div>
      </div>
    </header>
  );
}