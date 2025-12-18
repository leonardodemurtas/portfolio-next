
import Link from "next/link";
import Image from "next/image";


export function Hero() {
    return (
        <section className="pt-32 pb-20 px-6 md:px-12 min-h-[85vh] flex items-center max-w-[90rem] mx-auto">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Column: Content */}
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="space-y-6">
                        <p className="text-neutral-500 text-sm font-medium tracking-[0.1em] uppercase">
                            Product Designer focused on AI-ready Design Systems
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-neutral-800 leading-[0.9]">
                            I help risk and <br className="hidden md:block" />
                            credit teams make <br className="hidden md:block" />
                            confident calls on <br className="hidden md:block" />
                            complex data
                        </h1>
                    </div>

                    <p className="max-w-xl text-lg text-neutral-500 leading-relaxed font-medium">
                        Most of my work lives in enterprise risk and credit platforms, where analysts rely on clear interfaces to act fast. I focus on reusable patterns, decision-support dashboards, and workflows that reduce cognitive load instead of adding more charts.
                    </p>
                </div>

                {/* Right Column: Image */}
                <div className="relative aspect-[4/5] w-full max-w-lg mx-auto md:ml-auto md:mr-0 rounded-3xl overflow-hidden bg-neutral-100">
                    <Image
                        src="/hero-sitting.png"
                        alt="Leonardo De Murtas"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </section>
    );
}
