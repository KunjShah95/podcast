"use client";

import { useState } from "react";
import Link from "next/link";
import MarketingNavbar from "@/components/layout/marketing-navbar";
import {
  Play,
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  Globe,
  Link2,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "support@podcastr.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "1-800-PODCAST",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "San Francisco, CA",
    description: "Come say hi!",
  },
];

const topics = [
  "General Inquiry",
  "Technical Support",
  "Billing Question",
  "Creator Tools",
  "Partnerships",
  "Press & Media",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0F1419]">
      <MarketingNavbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl" />
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
              Get in
              <span className="block text-[#FF6B35]">touch</span>
            </h1>
            
            <p className="mt-6 text-xl text-white/50 max-w-xl mx-auto">
              Have a question or feedback? We'd love to hear from you. Our team is here to help.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method) => (
                <div key={method.title} className="text-center p-8 rounded-3xl bg-[#1A1F2E] border border-white/5">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF6B35]/20 text-[#FF6B35] mb-4">
                    <method.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="font-medium text-[#FF6B35]">{method.value}</p>
                  <p className="text-sm text-white/50 mt-2">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gradient-to-b from-[#0F1419] to-[#1A1F2E]">
          <div className="max-w-2xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl bg-[#1A1F2E] border border-white/5 p-8 lg:p-12">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#10B981]/20 text-[#10B981] mb-6">
                    <Send className="h-10 w-10" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/50 mb-6">We'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#FF6B35] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full px-5 py-4 rounded-2xl bg-[#0F1419] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF6B35]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className="w-full px-5 py-4 rounded-2xl bg-[#0F1419] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF6B35]"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Topic</label>
                    <select
                      value={form.topic}
                      onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      required
                      className="w-full px-5 py-4 rounded-2xl bg-[#0F1419] border border-white/10 text-white focus:outline-none focus:border-[#FF6B35]"
                    >
                      <option value="">Select a topic</option>
                      {topics.map((topic) => (
                        <option key={topic} value={topic}>{topic}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-5 py-4 rounded-2xl bg-[#0F1419] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF6B35] resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#FF6B35] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#FF8A4D] hover:shadow-xl hover:shadow-[#FF6B35]/30"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Social */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-white/50 mb-6">Or follow us on social media</p>
            <div className="flex items-center justify-center gap-4">
              {[
                { icon: MessageCircle, label: "Twitter" },
                { icon: Globe, label: "Instagram" },
                { icon: Link2, label: "GitHub" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1A1F2E] text-white/60 hover:text-[#FF6B35] hover:bg-[#1A1F2E]/80 transition-all"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}