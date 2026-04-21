"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import Player from "@/components/podcast/player";

const marketingRoutes = ["/", "/features", "/pricing", "/about", "/contact", "/login", "/signup", "/forgot-password"];
const authRoutes = ["/login", "/signup", "/forgot-password"];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const isMarketingPage = marketingRoutes.some(route => route === pathname);
  const isAuthPage = authRoutes.includes(pathname);

  // Marketing pages (including landing) - no sidebar
  if (isMarketingPage) {
    return <>{children}</>;
  }

  // App pages - with sidebar and player
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-8 pt-6 overflow-x-hidden">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
      <Player
        episode={{
          title: "The Future of AI in Creative Industries",
          podcast: "Lex Fridman",
          coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=200&fit=crop",
          duration: 5015,
          currentTime: 1755,
        }}
      />
    </div>
  );
}