"use client";

import Link from "next/link";
import MarketingNavbar from "@/components/layout/marketing-navbar";
import {
  Play,
  Check,
  ArrowLeft,
  Sparkles,
  Crown,
  Mic,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started with podcast listening",
    icon: Play,
    features: [
      "Access to 500K+ podcasts",
      "Standard audio quality (128kbps)",
      "Basic recommendations",
      "5 skips per hour",
      "Web player access",
      "Create playlists",
    ],
    notIncluded: [
      "Offline downloads",
      "Ad-free experience",
      "High-quality audio",
      "Advanced analytics",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "per month",
    description: "For serious podcast enthusiasts",
    icon: Crown,
    features: [
      "Everything in Free",
      "Lossless audio quality (320kbps)",
      "AI-powered recommendations",
      "Unlimited skips",
      "Offline downloads",
      "Ad-free experience",
      "Priority support",
      "Early access to new features",
    ],
    notIncluded: [
      "Creator analytics",
      "Monetization tools",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Creator",
    price: "$19.99",
    period: "per month",
    description: "For podcast creators and hosts",
    icon: Mic,
    features: [
      "Everything in Premium",
      "Creator analytics dashboard",
      "Custom podcast profile",
      "Monetization tools",
      "Audience insights",
      "Priority support",
      "Early access to new features",
      "Publish unlimited episodes",
    ],
    notIncluded: [],
    cta: "Start Creating",
    popular: false,
  },
];

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any payment.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes! Premium comes with a 30-day free trial. No credit card required to start. You can cancel anytime.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and Apple Pay. For Creator plans, we also accept bank transfers for annual billing.",
  },
  {
    q: "Can I get a refund?",
    a: "We offer a 14-day money-back guarantee for Premium. If you're not satisfied, contact support for a full refund.",
  },
];

export default function PricingPage() {
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
              Simple, transparent
              <span className="block text-[#FF6B35]">pricing</span>
            </h1>
            
            <p className="mt-6 text-xl text-white/50 max-w-xl mx-auto">
              Choose the plan that fits your listening style. Upgrade or downgrade anytime.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl p-8 transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-b from-[#1A1F2E] to-[#252B3E] border-2 border-[#FF6B35] shadow-xl shadow-[#FF6B35]/10 scale-105"
                      : "bg-[#1A1F2E] border border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A4D] px-5 py-2 text-sm font-semibold text-white">
                        <Sparkles className="h-4 w-4" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      plan.popular
                        ? "bg-gradient-to-br from-[#FF6B35] to-[#FF8A4D]"
                        : "bg-[#252B3E]"
                    } text-white`}>
                      <plan.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">{plan.name}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-5xl font-bold text-white">{plan.price}</span>
                      {plan.period && (
                        <span className="text-white/50 ml-1">/{plan.period}</span>
                      )}
                    </div>
                    <p className="mt-2 text-white/50">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-white/80">
                        <Check className="h-5 w-5 text-[#10B981] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-white/30">
                        <div className="h-5 w-5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/signup"
                    className={`flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold transition-all w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#FF6B35] to-[#FF8A4D] text-white hover:shadow-xl hover:shadow-[#FF6B35]/30"
                        : "bg-[#252B3E] text-white hover:bg-[#252B3E]/80"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-gradient-to-b from-[#0F1419] to-[#1A1F2E]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
              Frequently asked questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-2xl bg-[#1A1F2E] border border-white/5 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <span className="font-semibold text-white">{faq.q}</span>
                    <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#252B3E] text-white/60 group-open:rotate-180 transition-transform">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-white/50">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-white/50 mb-8">
              Still have questions? <Link href="/contact" className="text-[#FF6B35] hover:underline">Contact us</Link>
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF6B35] to-[#FF8A4D] px-8 py-4 text-lg font-semibold text-white transition-all hover:shadow-xl hover:shadow-[#FF6B35]/30 hover:scale-105"
            >
              Get Started Free
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}