
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[var(--ink-extra)] py-12 px-6">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-white/60 text-sm">
                    © {new Date().getFullYear()} Leonardo De Murtas. All rights reserved.
                </div>

                <div className="flex gap-6 text-sm text-white/60">
                    <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                    <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                    <Link href="#" className="hover:text-white transition-colors">Dribbble</Link>
                </div>
            </div>
        </footer>
    );
}
