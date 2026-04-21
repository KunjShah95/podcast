"use client";

import { useState } from "react";
import { Bell, Mail, Smartphone, Save } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NotificationSettingsPage() {
  const [settings, setSettings] = useState({
    newEpisodes: {
      enabled: true,
      frequency: "immediate",
    },
    trending: {
      enabled: true,
      frequency: "daily",
    },
    recommendations: {
      enabled: true,
      frequency: "weekly",
    },
    resumeEpisode: {
      enabled: true,
      threshold: 15,
    },
    weeklyDigest: {
      enabled: true,
      day: "sunday",
      time: "09:00",
    },
    emailNotifications: true,
    pushNotifications: true,
    inAppNotifications: true,
  });

  const updateSetting = (section: string, key: string, value: string | number | boolean) => {
    setSettings((prev) => {
      const sectionKey = section as keyof typeof prev;
      const currentSection = prev[sectionKey] as Record<string, unknown>;
      return {
        ...prev,
        [sectionKey]: {
          ...currentSection,
          [key]: value,
        },
      };
    });
  };

  const frequencies = [
    { value: "immediate", label: "As soon as released" },
    { value: "daily", label: "Daily digest" },
    { value: "weekly", label: "Weekly digest" },
  ];

  const days = [
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" },
    { value: "sunday", label: "Sunday" },
  ];

  return (
    <div className="space-y-8">
      {/* New Episodes */}
      <div className="rounded-2xl bg-card p-6 border border-border/20">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                New Episodes
              </h2>
              <p className="text-sm text-muted-foreground">
                Get notified when followed creators release new episodes
              </p>
            </div>
          </div>
          <ToggleSwitch
            enabled={settings.newEpisodes.enabled}
            onChange={(value) =>
              updateSetting("newEpisodes", "enabled", value)
            }
          />
        </div>
        {settings.newEpisodes.enabled && (
          <div className="ml-13 pl-13 space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Frequency
              </label>
              <div className="flex gap-2">
                {frequencies.map((freq) => (
                  <button
                    key={freq.value}
                    onClick={() =>
                      updateSetting("newEpisodes", "frequency", freq.value)
                    }
                    className={cn(
                      "flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
                      settings.newEpisodes.frequency === freq.value
                        ? "bg-primary text-white"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {freq.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Trending */}
      <div className="rounded-2xl bg-card p-6 border border-border/20">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/20 text-warning">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Trending in Your Interests
              </h2>
              <p className="text-sm text-muted-foreground">
                Get notified about trending podcasts in your favorite categories
              </p>
            </div>
          </div>
          <ToggleSwitch
            enabled={settings.trending.enabled}
            onChange={(value) => updateSetting("trending", "enabled", value)}
          />
        </div>
        {settings.trending.enabled && (
          <div className="ml-13 pl-13 space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Frequency
              </label>
              <div className="flex gap-2">
                {frequencies.map((freq) => (
                  <button
                    key={freq.value}
                    onClick={() =>
                      updateSetting("trending", "frequency", freq.value)
                    }
                    className={cn(
                      "flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
                      settings.trending.frequency === freq.value
                        ? "bg-primary text-white"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {freq.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Recommendations */}
      <div className="rounded-2xl bg-card p-6 border border-border/20">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-info/20 text-info">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Personalized Recommendations
              </h2>
              <p className="text-sm text-muted-foreground">
                Receive personalized podcast suggestions
              </p>
            </div>
          </div>
          <ToggleSwitch
            enabled={settings.recommendations.enabled}
            onChange={(value) =>
              updateSetting("recommendations", "enabled", value)
            }
          />
        </div>
        {settings.recommendations.enabled && (
          <div className="ml-13 pl-13 space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Update frequency
              </label>
              <div className="flex gap-2">
                {frequencies.map((freq) => (
                  <button
                    key={freq.value}
                    onClick={() =>
                      updateSetting("recommendations", "frequency", freq.value)
                    }
                    className={cn(
                      "flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
                      settings.recommendations.frequency === freq.value
                        ? "bg-primary text-white"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {freq.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Resume Episodes */}
      <div className="rounded-2xl bg-card p-6 border border-border/20">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/20 text-success">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Resume Incomplete Episodes
              </h2>
              <p className="text-sm text-muted-foreground">
                Get reminded to finish episodes you&apos;ve started
              </p>
            </div>
          </div>
          <ToggleSwitch
            enabled={settings.resumeEpisode.enabled}
            onChange={(value) =>
              updateSetting("resumeEpisode", "enabled", value)
            }
          />
        </div>
        {settings.resumeEpisode.enabled && (
          <div className="ml-13 pl-13 space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Show if more than X minutes invested
              </label>
              <select className="h-11 w-48 rounded-xl bg-secondary px-4 py-2 text-sm text-foreground border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/30">
                <option value={5}>5 minutes</option>
                <option value={10}>10 minutes</option>
                <option value={15}>15 minutes</option>
                <option value={30}>30 minutes</option>
                <option value={60}>1 hour</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Weekly Digest */}
      <div className="rounded-2xl bg-card p-6 border border-border/20">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-error/20 text-error">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Weekly Digest
              </h2>
              <p className="text-sm text-muted-foreground">
                Get a weekly summary of your listening activity
              </p>
            </div>
          </div>
          <ToggleSwitch
            enabled={settings.weeklyDigest.enabled}
            onChange={(value) =>
              updateSetting("weeklyDigest", "enabled", value)
            }
          />
        </div>
        {settings.weeklyDigest.enabled && (
          <div className="ml-13 pl-13 space-y-4">
            <div className="flex gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Day
                </label>
                <select className="h-11 w-40 rounded-xl bg-secondary px-4 py-2 text-sm text-foreground border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/30">
                  {days.map((day) => (
                    <option key={day.value} value={day.value}>
                      {day.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Time
                </label>
                <input
                  type="time"
                  defaultValue="09:00"
                  className="h-11 w-36 rounded-xl bg-secondary px-4 py-2 text-sm text-foreground border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Delivery Methods */}
      <div className="rounded-2xl bg-card p-6 border border-border/20">
        <h2 className="font-display text-lg font-semibold text-foreground mb-6">
          Delivery Methods
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">
                  Receive notifications via email
                </p>
              </div>
            </div>
            <ToggleSwitch
              enabled={settings.emailNotifications}
              onChange={(value) =>
                setSettings((prev) => ({
                  ...prev,
                  emailNotifications: value,
                }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Smartphone className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium text-foreground">Push Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Receive push notifications on your device
                </p>
              </div>
            </div>
            <ToggleSwitch
              enabled={settings.pushNotifications}
              onChange={(value) =>
                setSettings((prev) => ({
                  ...prev,
                  pushNotifications: value,
                }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium text-foreground">In-App Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Show notifications in the app
                </p>
              </div>
            </div>
            <ToggleSwitch
              enabled={settings.inAppNotifications}
              onChange={(value) =>
                setSettings((prev) => ({
                  ...prev,
                  inAppNotifications: value,
                }))
              }
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center justify-end">
        <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover">
          <Save className="h-4 w-4" />
          Save Preferences
        </button>
      </div>
    </div>
  );
}

function ToggleSwitch({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={cn(
        "relative h-7 w-12 rounded-full transition-colors",
        enabled ? "bg-primary" : "bg-secondary"
      )}
    >
      <span
        className={cn(
          "absolute top-1 h-5 w-5 rounded-full bg-white shadow-md transition-transform",
          enabled ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );
}