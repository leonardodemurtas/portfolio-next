import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselSlide } from "../../components/ui/Carousel";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function DesignSystemPage() {
    return (
        <div className="w-full">
            {/* 1. Hero Section */}
            <section className="relative h-[85vh] min-h-[600px] w-full bg-[#040B16] text-white overflow-hidden">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_33%,rgba(4,11,22,0)_0%,rgba(4,11,22,1)_100%)] z-10" />
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src="/design-system-hero.png"
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 h-full max-w-[90rem] mx-auto px-6 md:px-12 flex items-end justify-start">
                    <div className="max-w-4xl">
                        <h1 className={`${inter.className} text-[52px] font-bold tracking-tight leading-[0.9] mb-8`} style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                            Ship enterprise-grade
                            <br />
                            experiences consistently
                        </h1>
                    </div>
                </div>
            </section>

            {/* 2. Intro & Stats Section - Dark Theme */}
            <section className="bg-[#040B16] text-white py-20 md:py-32 px-6 md:px-12 text-center flex flex-col justify-end items-center w-full">
                
                <div className="max-w-[90rem] mx-auto flex flex-col w-full">
                    <div className="space-y-8 max-w-[610px] text-left flex flex-col justify-start items-start">
                        <p className="text-xl md:text-2xl leading-relaxed text-neutral-300 w-full">
                            In 2024, after various acquisitions, the organization found itself with a product suite with 7 different tools.
                        </p>
                        <p className="text-lg text-neutral-400">
                            The original experience was disjointed and expensive to maintain.
                            Developers were shipping pages that looked different from one another,
                            users felt lost, and support tickets kept coming in.
                        </p>
                        <p className="text-lg text-neutral-400">
                            We needed a unified design system to reduce rework and create a consistent, trustworthy experience.
                        </p>
                        <p className="text-lg text-neutral-400">
                           I'm super proud of what we created.
                        </p>
                    </div>

                    <div className="space-y-8 max-w-[610px] text-left">
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-left w-fit">
                            One system.
                            <br />
                            Many brands.
                            <br />
                            Faster delivery.
                        </h2>                        
                    </div> 

                    <div className="mx-auto flex flex-col">
                        <div className="flex flex-col gap-16 md:gap-32">
                            <div className="flex flex-col">
                                <div className="flex flex-row w-full gap-12">
                                    {/* Stat 1 */}
                                    <div className="w-full">
                                        <div className="text-4xl md:text-5xl font-bold mb-2">7</div>
                                        <div className="text-neutral-400 text-sm uppercase tracking-wider">Products Adopted</div>
                                    </div>
                                    {/* Stat 2 */}
                                    <div className="w-full">
                                        <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                                        <div className="text-neutral-400 text-sm uppercase tracking-wider">Code match (parity)</div>
                                    </div>
                                    {/* Stat 3 */}
                                    <div className="w-full">
                                        <div className="text-4xl md:text-5xl font-bold mb-2">70%</div>
                                        <div className="text-neutral-400 text-sm uppercase tracking-wider">Faster development</div>
                                    </div>
                                    {/* Stat 4 */}
                                    <div className="w-full">
                                        <div className="text-4xl md:text-5xl font-bold mb-2">50%</div>
                                        <div className="text-neutral-400 text-sm uppercase tracking-wider">Less design rework</div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>

                    <div className="space-y-8 max-w-[610px] text-left">
                        <p className="text-lga leading-relaxed text-neutral-400">
                            CPM and Finbox were the first products to ship on the new design system. I led design on CPM and used it to harden patterns, starting with the dashboard template. The templates and color system now anchor delivery and improve UX across teams.
                        </p>
                        
                    </div>
                </div>
            </section>

            {/* 3. Shaping the system - Light Theme */}
            <section className="bg-[#fcfbf9] text-neutral-900 py-20 md:py-32 px-6 md:px-12">
                <div className="max-w-[90rem] mx-auto space-y-24">
                    {/* Header */}
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-medium mb-6">Shaping the design system</h2>
                        <p className="text-xl text-neutral-600 leading-relaxed">
                            I led the creation of a design system that serves multiple business units.
                            We kicked off by auditing existing products, identifying common components,
                            and defining a shared language for colors, type, and interaction.
                        </p>
                    </div>

                    {/* Laying the groundwork */}
                    <div className="bg-[#f0ede6] rounded-3xl p-12 md:p-16">
                        <h3 className="text-2xl font-medium mb-12">Laying the groundwork</h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                            <div className="aspect-square bg-white rounded-2xl flex items-center justify-center p-8 shadow-sm">
                                <Image src="/design-system/logo-material.png" alt="Material" width={64} height={64} className="object-contain" />
                            </div>
                            <div className="aspect-square bg-white rounded-2xl flex items-center justify-center p-8 shadow-sm">
                                <Image src="/design-system/logo-apple.png" alt="Apple" width={64} height={64} className="object-contain" />
                            </div>
                            <div className="aspect-square bg-white rounded-2xl flex items-center justify-center p-8 shadow-sm">
                                <Image src="/design-system/logo-carbon.png" alt="Carbon" width={64} height={64} className="object-contain" />
                            </div>
                            <div className="aspect-square bg-white rounded-2xl flex items-center justify-center p-8 shadow-sm">
                                <Image src="/design-system/logo-fluent.png" alt="Fluent" width={64} height={64} className="object-contain" />
                            </div>
                        </div>

                        <div className="max-w-3xl space-y-6 text-lg text-neutral-700">
                            <p>
                                I studied top design systems (Material 3, Carbon, Fluent, Apple) to find patterns that worked for enterprise data.
                                We needed a system that was dense enough for complex tables but spacious enough for readability.
                            </p>
                            <p>
                                WHY MATERIAL DESIGN?
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            <div className="bg-[#e8e4db] p-8 rounded-2xl flex items-start gap-6">
                                <Image src="/design-system/logo-material.png" alt="Material" width={48} height={48} className="shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-2">Material Design familiarity reduces learning curve</h4>
                                    <p className="text-neutral-600">Users were already accustomed to Material guidelines, which reduced the cognitive load.</p>
                                </div>
                            </div>
                            <div className="bg-[#e8e4db] p-8 rounded-2xl flex items-start gap-6">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-neutral-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">Accelerated scope of flexibility a common language across teams</h4>
                                    <p className="text-neutral-600">Its component library allowed us to move quickly while maintaining a polished look.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Principles */}
                    <div className="bg-[#e6f0ed] rounded-3xl p-12 md:p-16">
                        <h3 className="text-2xl font-medium mb-12 text-[#1a4d42]">The rules that made decisions faster</h3>
                        <p className="max-w-3xl text-lg text-[#2c5e53] mb-12">
                            To guide our component choices, we established three core principles.
                            Whenever we had a debate, we returned to these:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-[#cce3de] p-8 rounded-xl min-h-[200px] flex flex-col justify-between hover:bg-[#bce0d8] transition-colors">
                                <div className="w-12 h-12 border-2 border-[#1a4d42] rounded-full flex items-center justify-center mb-4">
                                    <span className="text-2xl">⚡️</span>
                                </div>
                                <h4 className="text-xl font-bold text-[#1a4d42]">Don't Make Me Think</h4>
                            </div>
                            <div className="bg-[#cce3de] p-8 rounded-xl min-h-[200px] flex flex-col justify-between hover:bg-[#bce0d8] transition-colors">
                                <div className="w-12 h-12 border-2 border-[#1a4d42] rounded-full flex items-center justify-center mb-4">
                                    <span className="text-2xl">🛠️</span>
                                </div>
                                <h4 className="text-xl font-bold text-[#1a4d42]">Help the User to Get It Done</h4>
                            </div>
                            <div className="bg-[#cce3de] p-8 rounded-xl min-h-[200px] flex flex-col justify-between hover:bg-[#bce0d8] transition-colors">
                                <div className="w-12 h-12 border-2 border-[#1a4d42] rounded-full flex items-center justify-center mb-4">
                                    <span className="text-2xl">👆</span>
                                </div>
                                <h4 className="text-xl font-bold text-[#1a4d42]">One click away</h4>
                            </div>
                        </div>
                    </div>

                    {/* Building the system backbone */}
                    <div className="space-y-12">
                        <div className="max-w-3xl">
                            <h3 className="text-3xl font-medium mb-6">Building the system backbone</h3>
                            <p className="text-lg text-neutral-600">
                                I defined the architecture starting from Tokens (colors, spacing, elevation)
                                up to Templates. We used Figma Variables to manage themes (Light/Dark)
                                and density.
                            </p>
                        </div>
                        
                        {/* Token Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#1e1e1e]">
                            <Image 
                                src="/design-system/tokens-2.png" 
                                alt="Design Tokens Interface" 
                                width={1400} 
                                height={800} 
                                className="w-full h-auto"
                            />
                        </div>

                        <p className="text-sm text-neutral-500 text-center italic">
                            The system supports multi-brand theming through primitive and semantic tokens.
                        </p>
                    </div>

                    {/* Micro reusable decisions */}
                    <div className="space-y-12">
                        <div className="max-w-3xl">
                            <h3 className="text-3xl font-medium mb-6">Micro reusable decisions (Tokens & Components)</h3>
                            <p className="text-lg text-neutral-600 mb-8">
                                Tokens are the atoms. We standardized the spacing scale (4px baseline),
                                typography (Inter), and semantic colors for risk levels (critical, warning, safe).
                                These tokens feed into our atomic components.
                            </p>
                        </div>

                        {/* Tokens Static Image */}
                        <div className="rounded-3xl overflow-hidden shadow-lg border border-white/10 bg-[#0d1117] mb-12">
                             <Image 
                                 src="/design-system/tokens-1.png" 
                                 alt="Color Tokens" 
                                 width={1200} 
                                 height={800} 
                                 className="w-full h-auto"
                             />
                        </div>

                        {/* Carousel 1: Components */}
                        <div className="py-8">
                            <h4 className="text-xl font-medium mb-6 px-2">Atomic Components</h4>
                            <Carousel options={{ align: 'start', loop: true }} className="w-full">
                                <CarouselSlide className="flex-[0_0_80%] md:flex-[0_0_40%] pl-4">
                                    <div className="bg-[#0d1117] rounded-2xl overflow-hidden shadow-md border border-white/10 aspect-[4/3] relative">
                                        <Image src="/design-system/components-buttons.png" alt="Buttons" fill className="object-contain" />
                                    </div>
                                </CarouselSlide>
                                <CarouselSlide className="flex-[0_0_80%] md:flex-[0_0_40%] pl-4">
                                    <div className="bg-[#0d1117] rounded-2xl overflow-hidden shadow-md border border-white/10 aspect-[4/3] relative">
                                        <Image src="/design-system/components-inputs.png" alt="Inputs" fill className="object-contain" />
                                    </div>
                                </CarouselSlide>
                                <CarouselSlide className="flex-[0_0_80%] md:flex-[0_0_40%] pl-4">
                                    <div className="bg-[#0d1117] rounded-2xl overflow-hidden shadow-md border border-white/10 aspect-[4/3] relative">
                                        <Image src="/design-system/components-chips.png" alt="Chips" fill className="object-contain" />
                                    </div>
                                </CarouselSlide>
                                <CarouselSlide className="flex-[0_0_80%] md:flex-[0_0_40%] pl-4">
                                    <div className="bg-[#0d1117] rounded-2xl overflow-hidden shadow-md border border-white/10 aspect-[4/3] relative">
                                        <Image src="/design-system/components-cards.png" alt="Cards" fill className="object-contain" />
                                    </div>
                                </CarouselSlide>
                                <CarouselSlide className="flex-[0_0_80%] md:flex-[0_0_40%] pl-4">
                                    <div className="bg-[#0d1117] rounded-2xl overflow-hidden shadow-md border border-white/10 aspect-[4/3] relative">
                                        <Image src="/design-system/components-states.png" alt="States" fill className="object-contain" />
                                    </div>
                                </CarouselSlide>
                                <CarouselSlide className="flex-[0_0_80%] md:flex-[0_0_40%] pl-4">
                                    <div className="bg-[#0d1117] rounded-2xl overflow-hidden shadow-md border border-white/10 aspect-[4/3] relative">
                                        <Image src="/design-system/components-other.png" alt="Other Components" fill className="object-contain" />
                                    </div>
                                </CarouselSlide>
                            </Carousel>
                        </div>
                    </div>

                     {/* Templates */}
                     <div className="bg-[#eef2ff] rounded-3xl p-12 md:p-16">
                        <h3 className="text-3xl font-medium mb-8 text-[#1e1b4b]">Templates that get the work done</h3>
                        <p className="max-w-3xl text-lg text-[#312e81] mb-12">
                            Instead of just giving parts, we gave full page templates.
                            Dashboards, Data Tables, and Detail Views were pre-assembled.
                        </p>

                        {/* Carousel 2: Templates */}
                        <div className="w-full">
                            <Carousel options={{ align: 'center', loop: true }} className="w-full">
                                <CarouselSlide className="flex-[0_0_90%] md:flex-[0_0_80%] pl-4">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#c7d2fe] aspect-[16/10] relative">
                                        <Image src="/design-system/dashboard-cpm.png" alt="CPM Dashboard" fill className="object-cover" />
                                    </div>
                                </CarouselSlide>
                                <CarouselSlide className="flex-[0_0_90%] md:flex-[0_0_80%] pl-4">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#c7d2fe] aspect-[16/10] relative">
                                        <Image src="/design-system/dashboard-powerbiz.png" alt="PowerBiz Dashboard" fill className="object-cover" />
                                    </div>
                                </CarouselSlide>
                                <CarouselSlide className="flex-[0_0_90%] md:flex-[0_0_80%] pl-4">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#c7d2fe] aspect-[16/10] relative">
                                        <Image src="/design-system/widget-table.png" alt="Data Table" fill className="object-cover" />
                                    </div>
                                </CarouselSlide>
                                <CarouselSlide className="flex-[0_0_90%] md:flex-[0_0_80%] pl-4">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#c7d2fe] aspect-[16/10] relative">
                                        <Image src="/design-system/widget-goal.png" alt="Goal Widget" fill className="object-cover" />
                                    </div>
                                </CarouselSlide>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Reflection / Footer Section - Dark */}
            <section className="bg-[#040B16] text-white py-20 md:py-32 px-6 md:px-12">
                <div className="max-w-[90rem] mx-auto border-t border-neutral-800 pt-20">
                    <h2 className="text-sm font-medium tracking-widest uppercase text-neutral-500 mb-8">
                        Reflection and Future Directions
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-medium">The design system introduced consistency and scalability.</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                It also taught me how to align designers and developers around a shared vision.
                                The biggest win wasn't the library itself, but the change in culture.
                                Teams started talking the same language.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-medium">What's next?</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                As we continue to expand, we plan to incorporate:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-neutral-400">
                                <li>Dark mode support across all legacy tools</li>
                                <li>Accessibility (WCAG 2.1 AA) audits</li>
                                <li>More advanced analytics components</li>
                                <li>AI-driven component suggestions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

