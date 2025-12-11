
import Link from "next/link";


export function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Left Content */}
            <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="space-y-4">
                    <p className="text-neutral-400 text-lg flex items-center gap-2">
                        Hello there <span className="text-yellow-400">👋</span>
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        I'm, Kanivalan
                        <br />
                        <span className="text-neutral-400 font-normal">Product Designer</span>
                    </h1>
                </div>

                <p className="max-w-md text-lg text-neutral-400 leading-relaxed md:text-xl">
                    More than 6 years of experience designing high-quality products for businesses.
                </p>

                <div className="pt-4">
                    <Link
                        href="/contact"
                        className="inline-block rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white transition hover:bg-opacity-90 hover:scale-105 shadow-[0_0_20px_rgba(91,77,255,0.3)]"
                    >
                        Send Inquiry
                    </Link>
                </div>
            </div>

            {/* Right Content - Image Placeholder */}
            <div className="flex-1 relative flex justify-center md:justify-end animate-in fade-in zoom-in duration-700 delay-150">
                <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
                    {/* Gradient Background Glow */}
                    <div className="absolute inset-x-10 top-10 bottom-0 bg-accent/20 blur-[80px] rounded-full"></div>

                    {/* Main Image Container */}
                    <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 ease-out">
                        {/* Using a placeholder service or a local placeholder asset if available. 
                 Since I don't have the user's specific image, I'll use a style-neutral placeholder 
                 or a colored block for now. */}
                        <div className="w-full h-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-600">
                            <span className="text-sm">Hero Image Placeholder</span>
                        </div>
                        {/* If the user had an image, we would use <Image src="..." /> here */}
                    </div>
                </div>
            </div>
        </section>
    );
}
