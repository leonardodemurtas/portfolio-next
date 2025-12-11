
import Link from "next/link";

const navLinks = [
    { href: "/works", label: "Works" },
    { href: "/about", label: "About Me" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 bg-background/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold italic tracking-tighter text-white">
                        kanivalan
                    </span>
                    {/* Placeholder for the emoji/icon */}
                    <span className="text-xl">🦜</span>
                </Link>

                {/* Navigation - Centered on desktop, hidden on mobile for now */}
                <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-2 text-xs font-medium text-neutral-400">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        Open for work
                    </div>

                    <Link
                        href="/book"
                        className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-opacity-90 hover:scale-105"
                    >
                        Book a Call
                    </Link>
                </div>
            </div>
        </header>
    );
}
