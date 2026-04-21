"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Bell,
  Settings,
  Shield,
  User,
  Palette,
  Globe,
  HelpCircle,
  Info,
  ChevronRight,
} from "lucide-react";

const settingsNav = [
  {
    title: "Preferences",
    items: [
      {
        href: "/settings",
        label: "General",
        icon: Settings,
        description: "Language, theme, playback",
      },
      {
        href: "/settings/notifications",
        label: "Notifications",
        icon: Bell,
        description: "Email, push, recommendations",
      },
      {
        href: "/settings/privacy",
        label: "Privacy & Data",
        icon: Shield,
        description: "Data usage, cookies",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        href: "/settings/profile",
        label: "Profile",
        icon: User,
        description: "Your account details",
      },
      {
        href: "/settings/appearance",
        label: "Appearance",
        icon: Palette,
        description: "Theme, colors",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        href: "/settings/help",
        label: "Help Center",
        icon: HelpCircle,
        description: "FAQs, contact support",
      },
      {
        href: "/settings/about",
        label: "About",
        icon: Info,
        description: "Version, licenses",
      },
    ],
  },
];

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex gap-8 animate-fade-in">
      {/* Sidebar Navigation */}
      <aside className="w-64 flex-shrink-0">
        <h1 className="font-display text-2xl font-bold text-foreground mb-6">
          Settings
        </h1>
        <nav className="space-y-6">
          {settingsNav.map((section) => (
            <div key={section.title}>
              <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {section.title}
              </h2>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-start gap-3 rounded-xl px-4 py-3 transition-all",
                        isActive
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                      )}
                    >
                      <item.icon
                        className={cn(
                          "h-5 w-5 flex-shrink-0 mt-0.5",
                          isActive ? "text-primary" : ""
                        )}
                      />
                      <div>
                        <p className="font-medium text-sm">{item.label}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
