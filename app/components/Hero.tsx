
import Link from "next/link";
import Image from "next/image";


export function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 md:px-12 min-h-[90vh] flex items-center overflow-hidden">
            {/* Background Image - Positioned Right, Opaque */}
            <div className="absolute top-0 right-0 bottom-0 w-full md:w-[80%] z-0 select-none">
                <Image
                    src="/hero-final.png"
                    alt="Leonardo De Murtas"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, 80vw"
                />
                {/* Gradient Mask to blend into the dark background on the left */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10 w-full"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center relative z-20">
                {/* Left Content */}
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 py-10 md:py-0">
                    <div className="space-y-6">
                        <p className="text-neutral-400 text-xs font-medium tracking-[0.2em] uppercase">
                            Product Designer focused on AI-ready Design Systems
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                            I help risk and <br className="hidden md:block" />
                            credit teams make <br className="hidden md:block" />
                            confident calls on <br className="hidden md:block" />
                            complex data
                        </h1>
                    </div>

                    <p className="max-w-lg text-lg text-neutral-400 leading-relaxed">
                        Most of my work lives in enterprise risk and credit platforms, where analysts rely on clear interfaces to act fast. I focus on reusable patterns, decision-support dashboards, and workflows that reduce cognitive load instead of adding more charts.
                    </p>
                </div>

                {/* Right Area - Spacer & Badge */}
                <div className="flex-1 hidden md:flex justify-end items-end h-full min-h-[500px] pointer-events-none">
                    {/* Badge "7 Products Shipped" */}
                    <div className="flex flex-col items-center justify-center w-40 h-40 rounded-full bg-gradient-to-br from-[#4a042e] to-[#2d021b] text-center shadow-2xl border border-white/5 animate-in fade-in zoom-in duration-1000 delay-300 pointer-events-auto mt-auto mr-12 mb-12">
                        <span className="text-6xl font-light text-white leading-none">7</span>
                        <span className="text-sm font-medium text-white/90 leading-tight mt-1">
                            products<br />shipped.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
