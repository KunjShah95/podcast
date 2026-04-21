"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function MarketingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
  );
}