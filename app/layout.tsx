import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { headers } from "next/headers";
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
  metadataBase: new URL("https://leonardodemurtas.com"),
  title: {
    default: "AI Product Designer | Leonardo Demurtas",
    template: "%s | Leonardo Demurtas",
  },
  description:
    "HAI designer exploring how AI empowers digital tools by blending user needs with AI capabilities. I’ve spent more than a decade designing banking, wealth-management, and risk tools, always around people who make complex, high-stakes decisions. That work taught me how to turn dense data and regulation into flows experts can trust and move through quickly.",
  keywords: [
    "AI Product Designer",
    "Design Systems",
    "FinTech UX",
    "Enterprise Design",
    "Credit Risk Management",
    "User Experience",
    "Leonardo Demurtas",
  ],
  authors: [{ name: "Leonardo Demurtas" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leonardodemurtas.com",
    siteName: "Leonardo Demurtas AI Product Designer",
    title: "AI Product Designer Portfolio",
    description: "AI design systems, decision tools, and patterns for risk & credit.",
    images: [
      {
        url: "/design-system-hero.png",
        width: 1200,
        height: 630,
        alt: "Leonardo Demurtas AI Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Demurtas - AI Product Designer",
    description: "Specialized in AI design systems and enterprise risk tools.",
    images: ["/design-system-hero.png"],
  },
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const headerList = await headers();
  const host = headerList
    .get("host")
    ?.split(":")[0]
    ?.toLowerCase();
  const isRealDomain = host === "leonardodemurtas.com";
  const isVercelProd = process.env.VERCEL_ENV === "production";
  const shouldLoadGA = isVercelProd && isRealDomain && !!gaId;

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
        {shouldLoadGA ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
