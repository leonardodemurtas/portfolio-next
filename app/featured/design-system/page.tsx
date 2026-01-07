import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../components/ui/shadcn-carousel";
import { ProjectTemplatesCarousel } from "../../components/ui/ProjectTemplatesCarousel";
import { Footer } from "../../components/Footer";
import { Inter } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Design System Case Study",
    description: "Building a unified design system for 7 products. Reduced design rework by 50% and accelerated development by 70%.",
    openGraph: {
        title: "Enterprise Design System - UX Case Study",
        description: "One system. Many brands. Faster delivery. How we shipped a unified design system for 7 different enterprise tools.",
        images: [{ url: "/design-system-hero.png" }],
    },
};

const inter = Inter({ subsets: ["latin"] });

const TEMPLATES = [
    { src: "/design-system/companysheet.png", title: "Company sheet" },
    { src: "/design-system/table.png", title: "Data Table" },
    { src: "/design-system/dashboard.png", title: "Dashboard" },
    { src: "/design-system/wizzard.png", title: "Wizzard" },
    
];

export default function DesignSystemPage() {
    return (
        <div className="w-full">
            {/* 1. Hero Section */}
            <section className="relative h-[85vh] min-h-[600px] w-full bg-[#040B16] text-white overflow-hidden">
                
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src="/design-system-hero.png"
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 w-full flex items-end justify-center h-full px-6 md:px-12">
                    <div className="w-full max-w-[1200px]">
                        <h1 className={`${inter.className} text-6xl leading-[0.9] font-bold tracking-tight mb-8`} style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                            Ship enterprise-grade
                            <br />
                            experiences consistently
                        </h1>
                    </div>
                </div>
            </section>

            {/* 2. Problem */}
            <section className="relative bg-[#040B16] text-white pt-8 px-6 md:px-12 text-center flex flex-col justify-end items-center w-full overflow-hidden gap-[204px] h-fit">
                
                <div className="relative z-10 max-w-[90rem] mx-auto flex flex-col w-full justify-start gap-4 items-center pt-6">
                    <div className="space-y-8 max-w-[610px] text-left flex flex-col justify-start items-start w-full pt-[163px] pb-[163px]">
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
                        <p className="text-lg text-neutral-400 w-full">
                            I'm super proud of what we created.
                        </p>
                    </div>
                </div>
            </section>

            
            <section className="relative text-white px-0 py-0 text-center flex flex-col justify-start items-center w-full overflow-hidden gap-[204px] h-fit">
                <div className="absolute bg-color-black w-full flex flex-col items-center justify-end">
                    <img
                        src="/design-system/KPI-bg.jpg"
                        alt="Background"
                        className="object-cover opacity-100"
                        style={{ width: 'fit-content' }}
                    />
                    <div className="absolute inset-0 bg-[#040B16]/30" />
                </div>

                <div className="relative z-10 max-w-[90rem] mx-auto md-0 flex flex-col w-full justify-start  items-center pt-0">
                    
                    <div className="w-full flex flex-col items-center justify-center p-0 m-0 " style={{ background: 'linear-gradient(180deg, #040B16 0%, rgba(4, 11, 22, 0.00) 100%)' }}>
                        <div className="max-w-[610px] text-left w-full h-fit ">

                            <h2 className="text-4xl md:text-5xl font-bold text-left w-full pb-[280px]">
                                One system.
                                <br />
                                Many brands.
                                <br />
                                Faster delivery.
                            </h2>  

                        </div> 
                    </div>

                    <div className="mx-auto flex flex-col w-full px-6 md:px-12">
                        <div className="flex flex-col gap-16 md:gap-32">
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row w-full gap-6">
                                    {/* Stat 1 */}
                                    <div className="w-full p-6 rounded-2xl border border-white/[0.06] bg-[#040B16]/30 backdrop-blur-[18px] text-left">
                                        <div className="text-4xl md:text-5xl font-bold mb-2">7</div>
                                        <div className="text-neutral-400 text-sm uppercase tracking-wider">Products Adopted</div>
                                    </div>
                                    {/* Stat 2 */}
                                    <div className="w-full p-6 rounded-2xl border border-white/[0.06] bg-[#040B16]/30 backdrop-blur-[18px] text-left">
                                        <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                                        <div className="text-neutral-400 text-sm uppercase tracking-wider">Code match (parity)</div>
                                    </div>
                                    {/* Stat 3 */}
                                    <div className="w-full p-6 rounded-2xl border border-white/[0.06] bg-[#040B16]/30 backdrop-blur-[18px] text-left">
                                        <div className="text-4xl md:text-5xl font-bold mb-2">70%</div>
                                        <div className="text-neutral-400 text-sm uppercase tracking-wider">Faster development</div>
                                    </div>
                                    {/* Stat 4 */}
                                    <div className="w-full p-6 rounded-2xl border border-white/[0.06] bg-[#040B16]/30 backdrop-blur-[18px] text-left">
                                        <div className="text-4xl md:text-5xl font-bold mb-2">50%</div>
                                        <div className="text-neutral-400 text-sm uppercase tracking-wider">Less design rework</div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center  w-full" style={{ background: 'linear-gradient(180deg, rgba(4, 11, 22, 0.00) 0%, #040B16 100%)' }}>
                        <div className="w-full max-w-[610px] text-left py-24 ">
                            <p className="text-lg leading-relaxed text-neutral-200">
                                CPM and Finbox were the first products to ship on the new design system. I led design on CPM and used it to harden patterns, starting with the dashboard template. The templates and color system now anchor delivery and improve UX across teams.
                            </p>
                        </div>
                    </div>
                </div>
                
                
            </section>

            

            

            {/* 3. Shaping the system - Light Theme */}
            <section className="bg-[#fcfbf9] text-neutral-900 md:pt-32 px-0 gap-0">
                <div className="w-full flex flex-col justify-start items-center gap-0">
                    {/* Header */}
                    <div className="w-full mx-auto md-0 flex flex-col w-full justify-start  items-center pt-0">   
                        <div className="w-full max-w-[610px] pb-24">
                            <h2 className="text-3xl md:text-4xl font-medium mb-6">Shaping the design system</h2>
                            <p className="text-xl text-neutral-600 leading-relaxed">
                                I led the creation of a design system that serves multiple business units.
                                We kicked off by auditing existing products, identifying common components,
                                and defining a shared language for colors, type, and interaction.
                            </p>
                        </div>
                    </div>
                    

                    {/* Laying the groundwork */}
                    <div className="bg-[#f0ede6] rounded-3xl max-w-[1200px] w-full p-0 pt-20 mb-2">
                        <div className="w-full flex flex-col items-center align-center gap-0 mb-0"> 
                            <div className="w-full max-w-[610px] mb-0 "> 
                                <h3 className="text-3xl font-semibold leading-tight mb-12">Laying the groundwork</h3>
                                <div className="flex flex-row mb-12 justify-between items-cente w-full">
                                    
                                    <div className="aspect-square rounded-2xl flex items-center justify-center ">
                                        <Image src="/design-system/logo-material.png" alt="Material" width={64} height={64} className="object-contain" />
                                    </div>
                                    <div className="aspect-square rounded-2xl flex items-center justify-center ">
                                        <Image src="/design-system/logo-apple.png" alt="Apple" width={64} height={64} className="object-contain" />
                                    </div>
                                    <div className="aspect-square rounded-2xl flex items-center justify-center ">
                                        <Image src="/design-system/logo-carbon.png" alt="Carbon" width={64} height={64} className="object-contain" />
                                    </div>
                                    <div className="aspect-square rounded-2xl flex items-center justify-center">
                                        <Image src="/design-system/logo-fluent.png" alt="Fluent" width={64} height={64} className="object-contain" />
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="max-w-[610px] mb-2 text-lg text-neutral-700 ">
                                <p>
                                    I studied top design systems (Material 3, Carbon, Fluent, Apple) to find patterns that worked for enterprise data.
                                    We needed a system that was dense enough for complex tables but spacious enough for readability.
                                </p>
                                <p className="py-10 font-normal">
                                    WHY MATERIAL DESIGN?
                                </p>
                            </div>
                            
                        </div>
                        

                        <div className="flex flex-col md:flex-row mx-12 mb-12 gap-6 ">
                            <div className="bg-[#e8e4db] w-full p-8 rounded-2xl flex flex-col justify-between transition-colors hover:bg-[#dcd8cf]">
                                <div className="w-full flex justify-center items-center mb-6">
                                    <Image src="/design-system/img-1.png" alt="Material" width={160} height={180} className="" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">Material Design familiarity reduces learning curve</h4>
                                </div>
                            </div>
                            <div className="bg-[#e8e4db] p-8 rounded-2xl w-full flex flex-col gap-6 transition-colors hover:bg-[#dcd8cf]">
                                <div className="w-full flex justify-center items-center mb-6">
                                    <Image src="/design-system/img-2.png" alt="Material" width={200} height={180} className="" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">Accelerated scope of flexibility a common language across teams</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Principles */}
                    <div className="bg-[#e6f0ed] rounded-3xl max-w-[1200px] w-full flex flex-col items-center align-center justify-center p-12 pt-20 my-8">
                        <div className="w-full mb-0"> 
                            <div className="w-full flex flex-col items-center align-center justify-center">
                                <div className="w-full max-w-[610px] px-0 mb-0"> 
                                    <h3 className="text-3xl text-neutral-900 font-semibold leading-tight mb-6">The rules that made decisions faster</h3>
                                    <p className="max-w-3xl text-lg text-neutral-600 mb-12">
                                        To guide our component choices, we established three core principles.
                                        Whenever we had a debate, we returned to these:
                                    </p>
                                </div>
                            </div>                        

                            <div className="flex flex-col md:flex-row gap-6 w-full">
                                <div className="bg-[#cce3de] rounded-2xl flex-1 p-8 min-h-[200px] flex flex-col justify-between transition-colors hover:bg-[#bce0d8]">
                                    <Image src="/design-system/img-05.png" alt="Don't Make Me Think" width={280} height={140} className="w-full" />
                                    <h4 className="text-xl font-bold text-[#1a4d42]">Don't Make Me Think</h4>
                                </div>
                                <div className="bg-[#cce3de] rounded-2xl flex-1 p-8 min-h-[200px] flex flex-col justify-between hover:bg-[#bce0d8] transition-colors">
                                    <Image src="/design-system/img-04.png" alt="Help the User to Get It Done" width={280} height={140} className="w-full" />
                                    <h4 className="text-xl font-bold text-[#1a4d42]">Help the User to Get It Done</h4>
                                </div>
                                <div className="bg-[#cce3de] rounded-2xl flex-1 p-8 min-h-[200px] flex flex-col justify-between hover:bg-[#bce0d8] transition-colors">
                                    <Image src="/design-system/img-03.png" alt="One click away" width={280} height={140} className="w-full" />
                                    <h4 className="text-xl font-bold text-[#1a4d42]">One click away</h4>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Building the system backbone */}
                    <div className="bg-[#CBCADE3D] rounded-3xl space-y-12 max-w-[1200px] p-0 pt-8 mb-16 w-full overflow-hidden">
                        
                        <div className="flex flex-col gap-0">
                            
                            <div className="w-full flex flex-col items-center align-center justify-center">
                                <div className="w-full max-w-[610px] px-0 mb-0"> 
                                    <div className="w-full">
                                        <h3 className="text-3xl text-neutral-900 font-semibold leading-tight mb-6 ">Micro reusable decisions (Tokens & Components)</h3>
                                        <p className="text-lg text-neutral-600 mb-8">
                                            Tokens are the atoms. We standardized the spacing scale (4px baseline),
                                            typography (Inter), and semantic colors for risk levels (critical, warning, safe).
                                            These tokens feed into our atomic components.
                                        </p>
                                    </div>
                                
                                    <div className="w-full mb-8">
                                        <h3 className="text-2xl text-neutral-900 font-semibold leading-tight mb-6">Building the system backbone</h3>
                                        <p className="text-lg text-neutral-600">
                                            I defined the architecture starting from Tokens (colors, spacing, elevation)
                                            up to Templates. We used Figma Variables to manage themes (Light/Dark)
                                            and density.
                                        </p>
                                    </div>
                                </div>
                            </div>



                        
                            <div className="flex flex-col md:flex-row gap-[1px]">
                                {/* Token Image */}
                                <div className="overflow-hidden border border-white/10 w-full md:w-[50%]">
                                    <Image 
                                        src="/design-system/tokens-2.png" 
                                        alt="Design Tokens Interface" 
                                        width={1400} 
                                        height={800} 
                                        className="w-full h-auto"
                                    />
                                </div>
                                {/* Tokens Static Image */}
                                <div className="overflow-hidden shadow-lg border border-white/10 bg-[#0d1117] w-full md:w-[50%]">
                                    <Image 
                                        src="/design-system/tokens-1.png" 
                                        alt="Color Tokens" 
                                        width={1200} 
                                        height={800} 
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>                        
                        </div>

                        <p className="px-12 md:px-24 pb-16 pt-0 text-lg text-neutral-500 text-center italic">
                        The token system is organized as Figma variable collections for implementation and review. Figma variable collections cover color roles and states, spacing, typography, radius, elevation, borders and opacity, motion, breakpoints and grid, and icon sizes. One token change cascades through components, modes, and brands in minutes.
                        </p>
                    </div>

                    {/* Token-driven building blocks */}
                    <div className="bg-[#5A9DD13D] p-12 md:p-20 rounded-3xl space-y-12 max-w-[1200px] mb-16 w-full">
                        <div className="w-full flex flex-col items-center align-center justify-center">
                           <div className="w-full max-w-[610px] px-0 mb-0"> 
                            
                            <h3 className="text-3xl font-medium mb-8 text-[#1e1b4b]">Token-driven building blocks</h3>
                            <p className="max-w-2xl text-lg text-neutral-900 mb-12">
                                Components are the UI’s building blocks. To make them read the same in light and dark, we tuned not just color but elevation, shadows, strokes, and focus states. Shadows are crisper in light and softer in dark to keep hierarchy without glare. Tokens drive these rules, so components stay consistent across modes without per-component overrides.
                            
                            </p>
                            </div>
                        </div>
                        

                        {/* Carousel 1: Components */}
                        <div className="py-8">
                            <h4 className="text-xl font-medium mb-6">Atomic Components</h4>
                            <Carousel opts={{ align: 'start', loop: true }} className="w-full">
                                <CarouselContent className="-ml-4">
                                    <CarouselItem className="pl-4 basis-[80%] md:basis-[40%]">
                                        <div className="bg-[#0d1117] rounded-2xl overflow-hidden shadow-md border border-white/10 aspect-[4/3] relative">
                                            <Image src="/design-system/components-buttons.png" alt="Buttons" fill className="object-contain" />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 basis-[80%] md:basis-[40%]">
                                        <div className="bg-[#0d1117] rounded-2xl overflow-hidden shadow-md border border-white/10 aspect-[4/3] relative">
                                            <Image src="/design-system/components-inputs.png" alt="Inputs" fill className="object-contain" />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 basis-[80%] md:basis-[40%]">
                                        <div className="bg-[#0d1117] rounded-2xl overflow-hidden shadow-md border border-white/10 aspect-[4/3] relative">
                                            <Image src="/design-system/components-chips.png" alt="Chips" fill className="object-contain" />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 basis-[80%] md:basis-[40%]">
                                        <div className="bg-[#0d1117] rounded-2xl overflow-hidden shadow-md border border-white/10 aspect-[4/3] relative">
                                            <Image src="/design-system/components-cards.png" alt="Cards" fill className="object-contain" />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 basis-[80%] md:basis-[40%]">
                                        <div className="bg-[#0d1117] rounded-2xl overflow-hidden shadow-md border border-white/10 aspect-[4/3] relative">
                                            <Image src="/design-system/components-states.png" alt="States" fill className="object-contain" />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 basis-[80%] md:basis-[40%]">
                                        <div className="bg-[#0d1117] rounded-2xl overflow-hidden shadow-md border border-white/10 aspect-[4/3] relative">
                                            <Image src="/design-system/components-other.png" alt="Other Components" fill className="object-contain" />
                                        </div>
                                    </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>

                    {/* Templates */}
                    <div className="w-full flex flex-col items-center justify-center bg-[#F7F5EE] py-20 pt-32 pb-0">
                        <div className="max-w-2xl w-full md:px-12 mb-12 h-fit">
                            <h3 className="text-3xl font-medium mb-12 text-[#1e1b4b]">Templates that get the work done</h3>
                            <p className="text-g text-neutral-900 mb-12">
                                Templates serve as specialized layouts for different user tasks. They include various formats such as the archive template for presenting multiple content types and the entity layout for detailed presentations of single items. These templates standardize the presentation of information, ensuring clarity and consistency across different products and scenarios.
                            </p>
                        </div>
                        
                        <ProjectTemplatesCarousel slides={TEMPLATES} />
                    </div>
                </div>
                
            
            </section>

            {/* Reflection and future directions */}
            <section className="bg-[var(--foreground)] py-14 px-6">
                <div className="max-w-[610px] mx-auto">
                    <h3 className="text-2xl font-semibold text-neutral-400 mb-8">
                        REFLECTION AND FUTURE DIRECTIONS
                    </h3>
                   
                    {/* Challenges */}
                    <div className="space-y-8 mb-12">
                        <div>
                            <p className="text-xl text-neutral-200 leading-relaxed">
                                This project had a profound impact on my professional skills, expanding my strategic thinking and ability to design scalable solutions. As the design lead, I developed a broader perspective, moving beyond immediate problem-solving to a more strategic approach to design.
                            </p>
                        </div>
                        <div>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                            The design system itself has become a critical strategic asset, especially during a transformative period for the company. Its implementation has enabled rapid product development, allowing the company to quickly adapt and evolve its business model to meet the challenge of transforming from a service-based company to a product-service company.
                            </p>
                        </div>
                        <div>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                Aligning the new product vision with the broader company strategy was critical. We worked to ensure that the redesign went beyond usability improvements to become a strategic asset that supported the bank's long-term goals and compliance requirements.
                            </p>
                        </div>
                    </div>

                    
                </div>
            </section>
            <Footer/>
        </div>
    );
}
