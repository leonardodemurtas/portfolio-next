"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    const handleScrollToUseCases = () => {
        const el = document.getElementById('use-cases');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="absolute top-0 left-0 right-0 z-50 py-8 px-6 md:px-12">
            <div className="max-w-[90rem] mx-auto w-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 overflow-hidden rounded-full">
                        <Image
                            src="/logo.png"
                            alt="Leonardo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <span className={`text-xl font-bold tracking-tighter ${isHomePage ? "text-neutral-700" : "text-neutral-50"}`}>
                        Leonardo.
                    </span>
                </Link>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleScrollToUseCases}
                        className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 transition-all"
                    >
                        Use cases
                    </button>
                    <a
                        href="https://www.linkedin.com/in/leonardodemurtas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-neutral-200 bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 transition-all shadow-sm"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </header>
    );
}
