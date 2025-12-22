
import Link from "next/link";
import Image from "next/image";

export function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 py-8 px-6 md:px-12">
            <div className="max-w-[90rem] mx-auto w-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-white">
                        Leonardo.
                    </span>
                </Link>

                {/* Right Actions */}
            </div>
        </header>
    );
}
