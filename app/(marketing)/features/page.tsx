"use client";

import Link from "next/link";
import MarketingNavbar from "@/components/layout/marketing-navbar";
import {
  Play,
  Sparkles,
  Headphones,
  Mic,
  Zap,
  Globe,
  Download,
  Radio,
  TrendingUp,
  Users,
  BarChart3,
  Clock,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Discovery",
    description: "Our advanced AI analyzes your listening patterns to recommend podcasts you'll genuinely love. The more you listen, the smarter it gets.",
    color: "from-[#FF6B35] to-[#FF8A4D]",
  },
  {
    icon: Headphones,
    title: "Immersive Audio",
    description: "Experience studio-quality audio with support for lossless, spatial, and hi-res audio formats. Hear every detail.",
    color: "from-[#10B981] to-[#34D399]",
  },
  {
    icon: Download,
    title: "Offline Listening",
    description: "Download unlimited episodes and listen anywhere, anytime. Perfect for commutes, flights, or areas with poor connectivity.",
    color: "from-[#3B82F6] to-[#60A5FA]",
  },
  {
    icon: Mic,
    title: "Voice Search",
    description: "Find podcasts hands-free with natural voice commands. Just say what you're in the mood for.",
    color: "from-[#8B5CF6] to-[#A78BFA]",
  },
  {
    icon: TrendingUp,
    title: "Smart Playlists",
    description: "Auto-generated playlists based on your mood, activity, or interests. Always have the perfect playlist ready.",
    color: "from-[#F59E0B] to-[#FBBF24]",
  },
  {
    icon: Globe,
    title: "Global Content",
    description: "Access podcasts from 150+ countries in their original languages. Discover international voices and perspectives.",
    color: "from-[#EC4899] to-[#F472B6]",
  },
];

const creatorFeatures = [
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Track listener demographics, engagement metrics, and growth trends with comprehensive analytics.",
  },
  {
    icon: Users,
    title: "Audience Insights",
    description: "Understand who your listeners are, where they&apos;re from, and what episodes resonate most.",
  },
  {
    icon: Radio,
    title: "Easy Distribution",
    description: "Upload once, distribute everywhere. Your podcast reaches all major platforms automatically.",
  },
  {
    icon: Zap,
    title: "Monetization",
    description: "Multiple ways to earn: subscriptions, donations, sponsorships, and premium content.",
  },
];

const playbackFeatures = [
  { name: "Variable speed", desc: "0.5x to 3x" },
  { name: "Sleep timer", desc: "Customizable" },
  { name: "Skip silence", desc: "Auto-skip" },
  { name: "Chapter support", desc: "Navigate easily" },
  { name: "Transcripts", desc: "Read along" },
  { name: "Cross-device sync", desc: "Seamless" },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#0F1419]">
      <MarketingNavbar />

      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF8A4D]/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight">
              Features designed for
              <span className="block bg-gradient-to-r from-[#FF6B35] to-[#FF8A4D] bg-clip-text text-transparent">
                true listeners
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-white/50 max-w-2xl mx-auto">
              Every feature we&apos;ve built is designed to make your podcast experience more enjoyable, more personalized, and more seamless.
            </p>
          </div>
        </section>

        {/* Listener Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">
                For Listeners
              </h2>
              <p className="mt-3 text-white/50">Everything you need for the perfect listening experience</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative rounded-3xl bg-[#1A1F2E] border border-white/5 p-8 transition-all duration-300 hover:border-white/10 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Playback Controls */}
        <section className="py-20 bg-gradient-to-b from-[#0F1419] to-[#1A1F2E]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Ultimate playback
                  <span className="block text-[#FF6B35]">control</span>
                </h2>
                <p className="mt-4 text-lg text-white/50">
                  Fine-tune your listening experience with powerful playback controls designed for power users.
                </p>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {playbackFeatures.map((feature) => (
                    <div key={feature.name} className="flex items-center gap-3 p-4 rounded-2xl bg-[#1A1F2E]/50 border border-white/5">
                      <div className="h-2 w-2 rounded-full bg-[#FF6B35]" />
                      <div>
                        <p className="font-medium text-white">{feature.name}</p>
                        <p className="text-xs text-white/40">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A4D]/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl bg-[#1A1F2E] border border-white/10 p-8">
                  {/* Player UI Mock */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FF8A4D] flex items-center justify-center">
                        <Play className="h-8 w-8 text-white" fill="currentColor" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">The Design Matters Podcast</h4>
                        <p className="text-sm text-white/50">Debbie Millman</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="h-2 bg-[#252B3E] rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-gradient-to-r from-[#FF6B35] to-[#FF8A4D]" />
                      </div>
                      <div className="flex justify-between text-xs text-white/40">
                        <span>12:34</span>
                        <span>45:00</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-6">
                      <button className="text-white/60 hover:text-white"><Clock className="h-5 w-5" /></button>
                      <button className="text-white/60 hover:text-white"><Zap className="h-5 w-5" /></button>
                      <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B35] text-white hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 ml-1" fill="currentColor" />
                      </button>
                      <button className="text-white/60 hover:text-white"><Download className="h-5 w-5" /></button>
                      <button className="text-white/60 hover:text-white"><Heart className="h-5 w-5" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creator Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">
                For Creators
              </h2>
              <p className="mt-3 text-white/50">Everything you need to grow your podcast and connect with your audience</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {creatorFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-3xl bg-[#1A1F2E] border border-white/5 p-6 transition-all duration-300 hover:border-[#FF6B35]/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B35]/20 text-[#FF6B35] mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/50">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#FF6B35] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#FF8A4D] hover:shadow-xl hover:shadow-[#FF6B35]/30"
              >
                Start Creating Today
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#1A1F2E] to-[#252B3E] border border-[#FF6B35]/20 p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A4D]/10" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold text-white">
                  Ready to experience the difference?
                </h2>
                <p className="mt-4 text-white/50 max-w-md mx-auto">
                  Join millions of listeners who have discovered their perfect podcasts with Podcastr.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/signup"
                    className="flex items-center gap-2 rounded-2xl bg-[#FF6B35] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#FF8A4D]"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}