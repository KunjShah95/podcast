"use client";

import { useState } from "react";
import { Globe, Volume2, Play, SkipForward, Save } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GeneralSettingsPage() {
  const [settings, setSettings] = useState({
    language: "en",
    playbackSpeed: 1,
    autoPlay: true,
    skipSilence: false,
    continuousPlay: true,
    downloadsWifiOnly: true,
    explicitContent: true,
    darkMode: true,
  });

  const updateSetting = (key: string, value: boolean | string | number) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const hasChanges = true;

  return (
    <div className="space-y-8">
      {/* Playback Settings */}
      <div className="rounded-2xl bg-card p-6 border border-border/20">
        <h2 className="font-display text-lg font-semibold text-foreground mb-6">
          Playback
        </h2>
        <div className="space-y-6">
          {/* Playback Speed */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <Play className="h-5 w-5" fill="currentColor" />
              </div>
              <div>
                <p className="font-medium text-foreground">Default Playback Speed</p>
                <p className="text-sm text-muted-foreground">
                  Set your preferred listening speed
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                <button
                  key={speed}
                  onClick={() => updateSetting("playbackSpeed", speed)}
                  className={cn(
                    "flex h-10 w-14 items-center justify-center rounded-xl text-sm font-medium transition-all",
                    settings.playbackSpeed === speed
                      ? "bg-primary text-white"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  )}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>

          {/* Auto-Play Next Episode */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-info/20 text-info">
                <Play className="h-5 w-5" fill="currentColor" />
              </div>
              <div>
                <p className="font-medium text-foreground">Auto-play Next Episode</p>
                <p className="text-sm text-muted-foreground">
                  Automatically play the next episode in a series
                </p>
              </div>
            </div>
            <ToggleSwitch
              enabled={settings.autoPlay}
              onChange={(value) => updateSetting("autoPlay", value)}
            />
          </div>

          {/* Skip Silence */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/20 text-warning">
                <SkipForward className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-foreground">Skip Silence</p>
                <p className="text-sm text-muted-foreground">
                  Skip quiet sections automatically
                </p>
              </div>
            </div>
            <ToggleSwitch
              enabled={settings.skipSilence}
              onChange={(value) => updateSetting("skipSilence", value)}
            />
          </div>

          {/* Continuous Playback */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/20 text-success">
                <Volume2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-foreground">Continuous Playback</p>
                <p className="text-sm text-muted-foreground">
                  Keep playing when app is in background
                </p>
              </div>
            </div>
            <ToggleSwitch
              enabled={settings.continuousPlay}
              onChange={(value) => updateSetting("continuousPlay", value)}
            />
          </div>
        </div>
      </div>

      {/* Language Settings */}
      <div className="rounded-2xl bg-card p-6 border border-border/20">
        <h2 className="font-display text-lg font-semibold text-foreground mb-6">
          Language & Region
        </h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-foreground">Language</p>
                <p className="text-sm text-muted-foreground">
                  Set your preferred language
                </p>
              </div>
            </div>
            <select
              value={settings.language}
              onChange={(e) => updateSetting("language", e.target.value)}
              className="h-10 w-40 rounded-xl bg-secondary px-4 py-2 text-sm text-foreground border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="zh">中文</option>
              <option value="ja">日本語</option>
            </select>
          </div>
        </div>
      </div>

      {/* Content Settings */}
      <div className="rounded-2xl bg-card p-6 border border-border/20">
        <h2 className="font-display text-lg font-semibold text-foreground mb-6">
          Content
        </h2>
        <div className="space-y-6">
          {/* Explicit Content */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Show Explicit Content</p>
              <p className="text-sm text-muted-foreground">
                Display podcasts marked as explicit
              </p>
            </div>
            <ToggleSwitch
              enabled={settings.explicitContent}
              onChange={(value) => updateSetting("explicitContent", value)}
            />
          </div>
        </div>
      </div>

      {/* Download Settings */}
      <div className="rounded-2xl bg-card p-6 border border-border/20">
        <h2 className="font-display text-lg font-semibold text-foreground mb-6">
          Downloads
        </h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Download on Wi-Fi Only</p>
              <p className="text-sm text-muted-foreground">
                Prevent downloads on cellular data
              </p>
            </div>
            <ToggleSwitch
              enabled={settings.downloadsWifiOnly}
              onChange={(value) => updateSetting("downloadsWifiOnly", value)}
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      {hasChanges && (
        <div className="flex items-center justify-between rounded-2xl bg-primary/10 p-4 border border-primary/20">
          <p className="text-sm text-foreground">You have unsaved changes</p>
          <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover">
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      )}
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