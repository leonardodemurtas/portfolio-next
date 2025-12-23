
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[var(--foreground)] py-12 px-6">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-white/60 text-sm">
                    © {new Date().getFullYear()} Leonardo Demurtas. All rights reserved.
                </div>

                <div className="flex gap-6 text-sm text-white/60">
                    <Link href="http://www.linkedin.com/in/leonardodemurtas" className="hover:text-white transition-colors" target="_blank">LinkedIn</Link>
                </div>
            </div>
        </footer>
    );
}
