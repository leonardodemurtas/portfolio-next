
import Link from "next/link";

export function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 py-8 px-6 md:px-12">
            <div className="max-w-[90rem] mx-auto w-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tighter text-neutral-900">
                    Leonardo.
                </Link>

                {/* Right Actions */}
                <Link
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                >
                    LinkedIn
                </Link>
            </div>
        </header>
    );
}
