import TravelWatcher from "@/components/entities/travel/watcher";
import type { Metadata, Viewport } from "next";
import { Geologica } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "ui/dist/style.css";
import "./globals.css";
const first_font = Geologica({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "500", "400", "300", "200"],
  variable: "--root-font",
});

export const metadata: Metadata = {
  title: "Darkmaterial",
  description: "Created by DM Family",
};
export const viewport: Viewport = {
  themeColor: "#000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html
      lang="en"
      className={`${first_font.className} ${first_font.variable}`}
    >
      <body className="min-h-screen dark">
        <TravelWatcher />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
