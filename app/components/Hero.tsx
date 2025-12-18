
import Link from "next/link";
import Image from "next/image";


export function Hero() {
    return (
        <section className="relative w-full h-screen max-h-[900px] flex items-center justify-start px-6">
            <Image
                src="/hero.jpg"
                alt="Hero Background"
                fill
                className="object-cover object-center object-bottom -z-10"
                priority
            />
            <div className="absolute inset-0 bg-white/20 -z-10" />
            <div className="w-full x-full px-6 pt-0 flex items-start">

                {/* Left Column: Content */}
                <div className="w-full max-w-[50rem] ">
                    <div className="space-y-6 flex flex-col gap-6 mb-16">
                        <p className="text-neutral-500 text-sm font-medium tracking-[0.1em] uppercase">
                            Product Designer focused on AI-ready Design Systems
                        </p>
                        <h1 className="text-6xl font-bold tracking-tight text-neutral-900 leading-[0.9]">
                            I help risk and credit teams <br className="hidden md:block" />
                            make confident choices on complex data <br className="hidden md:block" />
                        </h1>
                    </div>

                    <p className="max-w-xl pt-16text-lg text-neutral-600 leading-relaxed font-medium">
                        Most of my work lives in enterprise risk and credit platforms, where analysts rely on clear interfaces to act fast. I focus on reusable patterns, decision-support dashboards, and workflows that reduce cognitive load instead of adding more charts.
                    </p>
                </div>

                {/* Right Column: Empty or transparent to show background */}
                <div className="hidden md:block"></div>
            </div>
        </section>
    );
}
