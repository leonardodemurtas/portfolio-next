import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
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
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/ai-patterns-writing", label: "AI Patterns & Writing" },
  { href: "/mentoring-training", label: "Mentoring & Training" },
  { href: "/archive", label: "Archive" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-neutral-900`}
      >
        <div className="min-h-screen">
          <header className="border-b border-neutral-200 bg-white/70 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-base font-semibold tracking-tight">
                Leonardo De Murtas
              </Link>
              <nav className="flex flex-wrap gap-4 text-sm font-medium text-neutral-700">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-2 py-1 transition hover:bg-neutral-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
          <footer className="mx-auto max-w-5xl px-6 pb-12 pt-8 text-sm text-neutral-500">
            AI Product Designer · Design systems · Decision tools · Risk & credit
          </footer>
        </div>
      </body>
    </html>
  );
}
