import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import AppShell from "@/components/layout/app-shell";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark antialiased",
        sora.variable,
        inter.variable,
        jetbrainsMono.variable
      )}
      style={{
        "--font-display": "var(--font-display), Sora, sans-serif",
        "--font-body": "var(--font-body), Inter, sans-serif",
        "--font-mono": "var(--font-mono), JetBrains Mono, monospace",
      } as React.CSSProperties}
    >
      <body className="min-h-screen bg-[#0F1419] font-body text-white">
        <ThemeProvider>
          <AppShell>
            {children}
          </AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}