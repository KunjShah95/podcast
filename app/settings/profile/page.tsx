"use client";

import { useState } from "react";
import Image from "next/image";
import {
  User,
  Mail,
  Calendar,
  Camera,
  Save,
  Check,
  Link2,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProfileSettingsPage() {
  const [profile, setProfile] = useState({
    name: "Marvin",
    email: "marvin@example.com",
    username: "@marvin",
    bio: "Podcast enthusiast and tech lover",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    website: "https://marvin.example.com",
    location: "San Francisco, CA",
    joinedDate: "January 2024",
  });

  const [isVerified, setIsVerified] = useState(false);
  const [connectedAccounts, setConnectedAccounts] = useState({
    google: true,
    twitter: false,
    apple: false,
  });

  const updateProfile = (key: string, value: string) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Profile Picture */}
      <div className="rounded-2xl bg-card p-6 border border-border/20">
        <h2 className="font-display text-lg font-semibold text-foreground mb-6">
          Profile Picture
        </h2>
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="h-24 w-24 rounded-full overflow-hidden ring-4 ring-primary/20">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary-hover transition-colors">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <div>
            <p className="font-medium text-foreground">{profile.name}</p>
            <p className="text-sm text-muted-foreground mb-3">
              JPG, GIF or PNG. Max 2MB
            </p>
            <button className="rounded-xl bg-secondary px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors">
              Upload New Photo
            </button>
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <div className="rounded-2xl bg-card p-6 border border-border/20">
        <h2 className="font-display text-lg font-semibold text-foreground mb-6">
          Basic Information
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Display Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => updateProfile("name", e.target.value)}
                  className="w-full h-11 pl-12 pr-4 rounded-xl bg-secondary border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  @
                </span>
                <input
                  type="text"
                  value={profile.username}
                  onChange={(e) => updateProfile("username", e.target.value)}
                  className="w-full h-11 pl-8 pr-4 rounded-xl bg-secondary border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="email"
                value={profile.email}
                onChange={(e) => updateProfile("email", e.target.value)}
                className="w-full h-11 pl-12 pr-4 rounded-xl bg-secondary border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Bio
            </label>
            <textarea
              value={profile.bio}
              onChange={(e) => updateProfile("bio", e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Website
              </label>
              <div className="relative">
                <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="url"
                  value={profile.website}
                  onChange={(e) => updateProfile("website", e.target.value)}
                  className="w-full h-11 pl-12 pr-4 rounded-xl bg-secondary border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Location
              </label>
              <input
                type="text"
                value={profile.location}
                onChange={(e) => updateProfile("location", e.target.value)}
                className="w-full h-11 px-4 rounded-xl bg-secondary border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Account Info */}
      <div className="rounded-2xl bg-card p-6 border border-border/20">
        <h2 className="font-display text-lg font-semibold text-foreground mb-6">
          Account Information
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-border/20">
            <div>
              <p className="font-medium text-foreground">Member Since</p>
              <p className="text-sm text-muted-foreground">{profile.joinedDate}</p>
            </div>
            <Calendar className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-foreground">Account Status</p>
              <p className="text-sm text-success flex items-center gap-1">
                <Check className="h-4 w-4" /> Active
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Connected Accounts */}
      <div className="rounded-2xl bg-card p-6 border border-border/20">
        <h2 className="font-display text-lg font-semibold text-foreground mb-6">
          Connected Accounts
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-border/20">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 text-red-500 font-bold">
                G
              </div>
              <div>
                <p className="font-medium text-foreground">Google</p>
                <p className="text-sm text-success">
                  {connectedAccounts.google ? "Connected" : "Not connected"}
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                setConnectedAccounts((prev) => ({
                  ...prev,
                  google: !prev.google,
                }))
              }
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                connectedAccounts.google
                  ? "bg-secondary text-foreground hover:bg-secondary/80"
                  : "bg-primary text-white hover:bg-primary-hover"
              )}
            >
              {connectedAccounts.google ? "Disconnect" : "Connect"}
            </button>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-border/20">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 text-blue-500 font-bold">
                X
              </div>
              <div>
                <p className="font-medium text-foreground">Twitter</p>
                <p className="text-sm text-muted-foreground">
                  {connectedAccounts.twitter ? "Connected" : "Not connected"}
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                setConnectedAccounts((prev) => ({
                  ...prev,
                  twitter: !prev.twitter,
                }))
              }
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                connectedAccounts.twitter
                  ? "bg-secondary text-foreground hover:bg-secondary/80"
                  : "bg-primary text-white hover:bg-primary-hover"
              )}
            >
              {connectedAccounts.twitter ? "Disconnect" : "Connect"}
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/20 text-foreground font-bold">
                🍎
              </div>
              <div>
                <p className="font-medium text-foreground">Apple</p>
                <p className="text-sm text-muted-foreground">
                  {connectedAccounts.apple ? "Connected" : "Not connected"}
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                setConnectedAccounts((prev) => ({
                  ...prev,
                  apple: !prev.apple,
                }))
              }
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                connectedAccounts.apple
                  ? "bg-secondary text-foreground hover:bg-secondary/80"
                  : "bg-primary text-white hover:bg-primary-hover"
              )}
            >
              {connectedAccounts.apple ? "Disconnect" : "Connect"}
            </button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="rounded-2xl bg-card p-6 border border-error/20">
        <h2 className="font-display text-lg font-semibold text-error mb-6">
          Danger Zone
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-foreground">Delete Account</p>
            <p className="text-sm text-muted-foreground">
              Permanently delete your account and all data
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl border-2 border-error px-4 py-2 text-sm font-medium text-error hover:bg-error/10 transition-colors">
            <LogOut className="h-4 w-4" />
            Delete Account
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center justify-end">
        <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover">
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </div>
    </div>
  );
}