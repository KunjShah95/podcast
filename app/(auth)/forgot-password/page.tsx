"use client";

import { useState } from "react";
import Link from "next/link";
import MarketingNavbar from "@/components/layout/marketing-navbar";
import {
  Play,
  Mail,
  ArrowLeft,
  Check,
} from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0F1419]">
        <MarketingNavbar />
        <div className="pt-32 flex items-center justify-center p-8">
          <div className="w-full max-w-md text-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#10B981]/20 text-[#10B981] mb-6">
              <Check className="h-10 w-10" />
            </div>
            <h1 className="font-display text-3xl font-bold text-white mb-2">
              Check your email
            </h1>
            <p className="text-white/50 mb-8">
              We've sent password reset instructions to <span className="text-white">{email}</span>
            </p>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-[#FF8A4D] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to sign in
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F1419]">
      <MarketingNavbar />
      <div className="pt-32 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to sign in
            </Link>
            <h1 className="font-display text-3xl font-bold text-white mb-2">
              Forgot password?
            </h1>
            <p className="text-white/50">
              No worries, we'll send you reset instructions
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-14 pr-5 py-4 rounded-2xl bg-[#1A1F2E] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF6B35] transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#FF6B35] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#FF8A4D] hover:shadow-xl hover:shadow-[#FF6B35]/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Reset password"
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-white/50">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#FF6B35] font-semibold hover:text-[#FF8A4D] transition-colors">
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}