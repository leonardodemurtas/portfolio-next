import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Product Designer Portfolio",
  description:
    "AI design systems, decision tools, and patterns for risk & credit.",
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};



import { Header } from "./components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
          backgroundColor: 'var(--background)',
        }}
      >
        <div className="w-full flex flex-col mx-auto ">
          <Header />
          <main className="flex-grow w-full mx-auto">
            {children}
          </main>
        </div>
        <GoogleAnalytics gaId="G-9P1N4YSR4X" />
      </body>
    </html>
  );
}
