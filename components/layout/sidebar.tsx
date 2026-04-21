"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  Compass,
  PlaySquare,
  Settings,
  LogOut,
  Podcast,
  Bell,
  Plus,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/discover", label: "Discover", icon: Compass },
  { href: "/library", label: "Library", icon: PlaySquare },
  { href: "/notifications", label: "Notifications", icon: Bell },
];

const creatorItems = [
  { href: "/creator", label: "Creator Studio", icon: Podcast },
];

const bottomItems = [
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-64 border-r border-white/5 bg-[#0F1419]">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-20 items-center gap-3 px-6 border-b border-white/5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FF8A4D] shadow-lg shadow-[#FF6B35]/20">
            <PlaySquare className="h-6 w-6 text-white" fill="currentColor" />
          </div>
          <span className="font-display text-2xl font-bold text-white">
            Podcastr
          </span>
        </div>

        {/* Create Button */}
        <div className="px-4 py-6">
          <button className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#FF6B35] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#FF8A4D] hover:shadow-lg hover:shadow-[#FF6B35]/20 active:scale-[0.98]">
            <Plus className="h-5 w-5" />
            Create Episode
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 space-y-1 px-3 overflow-y-auto">
          <div className="mb-3 px-4 pt-2 text-xs font-medium uppercase tracking-wider text-white/40">
            Menu
          </div>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-sm font-medium transition-all mx-2",
                  isActive
                    ? "bg-[#1A1F2E] text-white border-l-4 border-[#FF6B35] -ml-0.5 pl-3.5"
                    : "text-white/60 hover:bg-[#1A1F2E]/50 hover:text-white"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-[#FF6B35]" : "text-white/60 group-hover:text-white"
                  )}
                />
                {item.label}
                {item.label === "Notifications" && (
                  <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6B35] text-xs font-bold text-white">
                    3
                  </span>
                )}
              </Link>
            );
          })}

          {/* Creator Section */}
          <div className="mt-8 mb-3 px-4 pt-4 text-xs font-medium uppercase tracking-wider text-white/40 border-t border-white/5">
            Creator
          </div>
          {creatorItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-sm font-medium transition-all mx-2",
                  isActive
                    ? "bg-[#1A1F2E] text-white"
                    : "text-white/60 hover:bg-[#1A1F2E]/50 hover:text-white"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-[#FF6B35]" : "text-white/60 group-hover:text-white"
                  )}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-white/5 p-3">
          {bottomItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-sm font-medium transition-all mx-2",
                  isActive
                    ? "bg-[#1A1F2E] text-white"
                    : "text-white/60 hover:bg-[#1A1F2E]/50 hover:text-white"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}

          {/* User Profile */}
          <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#1A1F2E]/50 px-4 py-3.5 mx-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8A4D] text-white font-bold text-sm">
              M
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-white">Marvin</p>
              <p className="truncate text-xs text-white/40">marvin@example.com</p>
            </div>
            <button className="text-white/40 hover:text-white transition-colors">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}