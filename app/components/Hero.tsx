
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center px-6 md:px-12 pt-32 pb-20 md:pt-0 md:pb-0">
            {/* Background Image */}
            <Image
                src="/hero-v2.jpg"
                alt="Portrait of Leonardo"
                fill
                className="object-cover object-center md:object-right-top -z-10"
                priority
            />
            
            {/* Overlay to ensure text readability if needed, though PDR assumes clean background */}
            {/* <div className="absolute inset-0 bg-white/20 -z-10" /> */}

            <div className="w-full max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">

                {/* Left Column: Content (occupies 2/3) */}
                <div className="md:col-span-2 flex flex-col items-start max-w-3xl">
                    <p className="text-neutral-500 text-sm md:text-base font-medium tracking-widest uppercase mb-6">
                        Product Designer focused on AI-ready design systems
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-8">
                        I design AI decision-support workflows for risk and credit teams.
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed text-balance">
                        I work on enterprise risk and credit platforms where analysts make high-stakes calls under time pressure. I turn complex signals into clear workflows and consistent UI patterns—so decisions feel faster, safer, and easier to justify.
                    </p>
                </div>

                {/* Right Column: Empty (occupies 1/3) */}
                <div className="hidden md:block">
                     {/* Empty column to reveal background image subject */}
                </div>
            </div>
        </section>
    );
}
