"use client";

import Link from "next/link";
import Image from "next/image";
import MarketingNavbar from "@/components/layout/marketing-navbar";
import {
  ArrowLeft,
  Heart,
  Users,
  Globe,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Built with Love",
    description: "We genuinely care about creating the best podcast experience. Every feature is crafted with intention.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Listeners and creators are at the heart of everything we do. Your feedback shapes our roadmap.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Podcasts should be accessible to everyone, everywhere, in any language.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We're constantly pushing boundaries with AI and new technologies to improve discovery.",
  },
];

const timeline = [
  {
    year: "2023",
    title: "The Beginning",
    description: "Podcastr was born from a simple idea: make podcast discovery better.",
  },
  {
    year: "2024",
    title: "Launch & Growth",
    description: "We launched to the public and reached 1 million users in just 3 months.",
  },
  {
    year: "2025",
    title: "AI Revolution",
    description: "Introduced AI-powered recommendations that transformed how people discover podcasts.",
  },
  {
    year: "2026",
    title: "Going Global",
    description: "Now serving listeners in 150+ countries with content in 50+ languages.",
  },
];

const team = [
  {
    name: "Alex Rivera",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "Former Spotify executive with 10+ years in audio.",
  },
  {
    name: "Sarah Chen",
    role: "CTO & Co-founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "AI researcher turned product builder.",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Award-winning designer from Apple.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Growth",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Scaled three startups to IPO.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0F1419]">
      <MarketingNavbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF8A4D]/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight">
              We&apos;re on a mission to
              <span className="block text-[#FF6B35]">
                change podcasting
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-white/50 max-w-2xl mx-auto">
              We believe podcasts are one of the most powerful mediums for learning, entertainment, and connection. Our goal is to help everyone discover their perfect shows.
            </p>
          </div>
        </section>

        {/* Mission Stats */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { value: "10M+", label: "Active Users" },
                { value: "500K+", label: "Podcasts" },
                { value: "50M+", label: "Episodes" },
                { value: "150+", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-8 rounded-3xl bg-[#1A1F2E] border border-white/5">
                  <p className="font-display text-4xl font-bold text-[#FF6B35]">{stat.value}</p>
                  <p className="mt-2 text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-to-b from-[#0F1419] to-[#1A1F2E]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white text-center mb-16">
              Our Values
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="text-center p-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF6B35]/20 text-[#FF6B35] mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-white/50">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white text-center mb-16">
              Our Journey
            </h2>
            
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6B35] to-[#FF8A4D] hidden md:block" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={item.year} className={`flex items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1 text-right hidden md:block">
                      <h3 className="font-display text-2xl font-bold text-white">{item.year}</h3>
                      <p className="font-semibold text-[#FF6B35] mt-1">{item.title}</p>
                      <p className="text-white/50 mt-2">{item.description}</p>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-[#FF6B35] shadow-lg shadow-[#FF6B35]/50 z-10">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="flex-1 md:hidden">
                      <h3 className="font-display text-2xl font-bold text-white">{item.year}</h3>
                      <p className="font-semibold text-[#FF6B35] mt-1">{item.title}</p>
                      <p className="text-white/50 mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gradient-to-b from-[#0F1419] to-[#1A1F2E]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white text-center mb-16">
              Meet the Team
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="group relative rounded-3xl overflow-hidden bg-[#1A1F2E] border border-white/5">
                  <div className="aspect-square relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-[#FF6B35] font-medium">{member.role}</p>
                    <p className="text-sm text-white/60 mt-2">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-6">
              Join us on our mission
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Whether you&apos;re a listener or creator, there&apos;s a place for you in the Podcastr community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="flex items-center gap-2 rounded-2xl bg-[#FF6B35] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#FF8A4D] hover:shadow-xl hover:shadow-[#FF6B35]/30"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="text-white/60 hover:text-white transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}