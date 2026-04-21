"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Play,
  ChevronRight,
  Headphones,
  TrendingUp,
  Sparkles,
  Mic,
  Globe,
  Zap,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F1419]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0F1419]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FF8A4D] shadow-lg shadow-[#FF6B35]/20">
                <Play className="h-5 w-5 text-white" fill="currentColor" />
              </div>
              <span className="font-display text-2xl font-bold text-white">Podcastr</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm font-medium text-white hover:text-[#FF6B35] transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="flex items-center gap-2 rounded-xl bg-[#FF6B35] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#FF8A4D] hover:shadow-lg hover:shadow-[#FF6B35]/20"
              >
                Sign up free
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl bg-[#1A1F2E] text-white"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#0F1419]">
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block py-3 text-base font-medium text-white/60 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="/login"
                  className="block py-3 text-base font-medium text-white/60 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#FF6B35] px-5 py-3.5 text-sm font-semibold text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up free
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF8A4D]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1A1F2E] border border-white/10 px-4 py-2 mb-8 animate-fade-in">
              <Sparkles className="h-4 w-4 text-[#FF6B35]" />
              <span className="text-sm text-white/80">Powered by AI for personalized discovery</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white leading-tight animate-slide-up">
              Discover Your Next
              <span className="block mt-2 bg-gradient-to-r from-[#FF6B35] to-[#FF8A4D] bg-clip-text text-transparent">
                Favorite Podcast
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-xl text-white/50 max-w-2xl mx-auto animate-slide-up stagger-1">
              Millions of podcasts at your fingertips. Smart recommendations that actually understand your taste. Join millions of listeners today.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-2">
              <Link
                href="/signup"
                className="flex items-center gap-2.5 rounded-2xl bg-[#FF6B35] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#FF8A4D] hover:shadow-xl hover:shadow-[#FF6B35]/30 hover:scale-105"
              >
                Start Listening Free
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="flex items-center gap-2.5 rounded-2xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-[#FF6B35] hover:text-[#FF6B35]"
              >
                View Pricing
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up stagger-3">
              {[
                { value: "10M+", label: "Active Users" },
                { value: "500K+", label: "Podcasts" },
                { value: "50M+", label: "Episodes" },
                { value: "150+", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl lg:text-4xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Podcasts */}
      <section className="py-20 bg-[#0F1419]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">
              Trending Podcasts
            </h2>
            <p className="mt-3 text-white/50">Listen to what the world is talking about</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "The Design Matters Podcast", creator: "Debbie Millman", cover: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=300&h=300&fit=crop" },
              { title: "Tech Talk Today", creator: "Sarah Chen", cover: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=300&fit=crop" },
              { title: "The Tim Ferriss Show", creator: "Tim Ferriss", cover: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop" },
            ].map((podcast, index) => (
              <div
                key={podcast.title}
                className="group relative overflow-hidden rounded-3xl bg-[#1A1F2E] border border-white/5 transition-all duration-300 hover:border-[#FF6B35]/30 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-square">
                  <Image
                    src={podcast.cover}
                    alt={podcast.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">{podcast.title}</h3>
                        <p className="text-sm text-white/50">{podcast.creator}</p>
                      </div>
                      <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6B35] text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-[#FF6B35]/30">
                        <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gradient-to-b from-[#0F1419] to-[#1A1F2E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight">
                Features that make
                <span className="block text-[#FF6B35]">listening better</span>
              </h2>
              <p className="mt-4 text-lg text-white/50">
                From AI-powered recommendations to seamless cross-device sync, we&apos;ve built every feature with listeners in mind.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  { icon: Sparkles, title: "AI Recommendations", desc: "Personalized picks based on your taste" },
                  { icon: Headphones, title: "High Quality Audio", desc: "Lossless and spatial audio support" },
                  { icon: Zap, title: "Offline Mode", desc: "Download episodes for anywhere listening" },
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4 p-4 rounded-2xl bg-[#1A1F2E]/50 border border-white/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B35]/20 text-[#FF6B35]">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                      <p className="text-sm text-white/50">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/features"
                className="inline-flex items-center gap-2 mt-6 text-[#FF6B35] font-medium hover:gap-3 transition-all"
              >
                Explore all features <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A4D]/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl bg-[#1A1F2E] border border-white/10 p-8">
                <div className="space-y-4">
                  {[
                    { icon: Mic, title: "Voice Search", desc: "Find podcasts hands-free", color: "from-[#FF6B35] to-[#FF8A4D]" },
                    { icon: TrendingUp, title: "Smart Playlists", desc: "Auto-generated for your mood", color: "from-[#10B981] to-[#34D399]" },
                    { icon: Globe, title: "Global Content", desc: "Podcasts from 150+ countries", color: "from-[#3B82F6] to-[#60A5FA]" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-4 p-4 rounded-2xl bg-[#0F1419] border border-white/5">
                      <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-white/40">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F1419]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#1A1F2E] to-[#252B3E] border border-[#FF6B35]/20 p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A4D]/10" />
            <div className="relative">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">
                Ready to discover your next favorite?
              </h2>
              <p className="mt-4 text-lg text-white/50 max-w-xl mx-auto">
                Join millions of listeners who have already found their perfect podcasts. Start your free journey today.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/signup"
                  className="flex items-center gap-2.5 rounded-2xl bg-[#FF6B35] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#FF8A4D] hover:shadow-xl hover:shadow-[#FF6B35]/30 hover:scale-105"
                >
                  Get Started Free
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0F1419] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8A4D]">
                  <Play className="h-5 w-5 text-white" fill="currentColor" />
                </div>
                <span className="font-display text-xl font-bold text-white">Podcastr</span>
              </Link>
              <p className="mt-4 text-sm text-white/50">
                Discover, listen, and share millions of podcasts from around the world.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                {["Features", "Pricing", "Mobile App", "Integrations"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {["About", "Careers", "Blog", "Press"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                {["Help Center", "Contact", "Privacy", "Terms"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">© 2026 Podcastr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}