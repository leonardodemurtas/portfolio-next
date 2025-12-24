import Image from "next/image";
import { Inter } from "next/font/google";
import { TemplateCarousel } from "../../components/ui/LegacyTemplateCarousel";
import { Footer } from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

// Template images for carousel
const TEMPLATES = [
    { src: "/cpm/01.png", title: "Screen 01" },
    { src: "/cpm/02.png", title: "Screen 02" },
    { src: "/cpm/03.png", title: "Screen 03" },
    { src: "/cpm/04.png", title: "Screen 04" },
    { src: "/cpm/05.png", title: "Screen 05" },
    { src: "/cpm/06.png", title: "Screen 06" },
    { src: "/cpm/07.png", title: "Screen 07" },
    { src: "/cpm/08.png", title: "Screen 08" },
    { src: "/cpm/09.png", title: "Screen 09" },
    { src: "/cpm/10.png", title: "Screen 10" },
    { src: "/cpm/11.png", title: "Screen 11" },
    { src: "/cpm/a01.png", title: "Screen a01" },
    { src: "/cpm/a02.png", title: "Screen a02" },
    { src: "/cpm/a03.png", title: "Screen a03" },
    { src: "/cpm/a04.png", title: "Screen a04" },
];

// KPI Tile Component
function KpiTile({ value, label }: { value: string; label: string }) {
    return (
        <div className="backdrop-blur-md border border-white/10 rounded-2xl p-5 pt-6 pb-4 w-full"
            style={{
                background: "linear-gradient(137deg, rgba(255,255,255,0.06) 0%, rgba(23,23,23,0.01) 93%)",
            }}>
            <p className="text-5xl font-semibold text-white leading-tight mb-2">
                {value}
            </p>
            <p className="text-xl text-neutral-400 leading-relaxed">
                {label}
            </p>
        </div>
    );
}

// Archetype Tile Component
function ArchetypeTile({ 
    title, 
    description, 
    bgImage 
}: { 
    title: string; 
    description: string; 
    bgImage?: string;
}) {
    return (
        <div className="relative aspect-square rounded-3xl overflow-hidden p-6 flex flex-col justify-between min-h-[330px]">
            {/* Background */}
            {bgImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={bgImage}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            {/* Gradient overlay */}
            <div 
                className="absolute inset-0 z-10"
                style={{
                    background: "radial-gradient(circle at 70% 30%, rgba(23,23,23,0.05) 0%, rgba(23,23,23,0.6) 100%)",
                }}
            />
            {/* Content */}
            <div className="relative z-20 flex flex-col justify-between h-full">
                <h3 className="text-2xl font-semibold text-neutral-50 leading-tight">
                    {title}
                </h3>
                <p className="text-base text-neutral-50 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

// Video/Prototype Card Component
function VideoCard({ 
    title, 
    description, 
    imageSrc,
    videoSrc,
    variant = "default"
}: { 
    title: string; 
    description: string; 
    imageSrc?: string;
    videoSrc?: string;
    variant?: "default" | "beige";
}) {
    const bgClass = variant === "beige" 
        ? "bg-[rgba(230,219,203,0.64)] border-[rgba(230,219,203,0.64)]" 
        : "border-[rgba(23,23,23,0.05)]";
    
    return (
        <div className={`border-8 rounded-2xl p-6 max-w-[680px] w-full ${bgClass}`}>
            <div className="mb-4">
                <h4 className="text-lg font-semibold text-neutral-600 mb-3">
                    {title}
                </h4>
                <p className="text-sm text-neutral-800 leading-relaxed">
                    {description}
                </p>
            </div>
            {videoSrc ? (
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-neutral-200">
                    <iframe 
                        src={videoSrc}
                        title={title}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            ) : imageSrc && (
                <div className="relative aspect-[1158/862] w-full rounded-lg overflow-hidden bg-neutral-200">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
        </div>
    );
}

export default function CreditPortfolioMonitoringPage() {
    return (
        <div className="w-full bg-[var(--background)]">
            {/* 1. Hero Section */}
            <section className="relative h-[715px] w-full overflow-hidden">
                {/* Background Images */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/cpm/hero-v2.png"
                        alt="Office background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Gradient overlay */}
                <div 
                    className="absolute inset-0 z-10"
                    style={{
                        background: "radial-gradient(ellipse at 50% 33%, rgba(23,23,23,0.05) 0%, rgba(23,23,23,1) 100%)",
                    }}
                />
                {/* Content */}
                <div className="relative z-20 h-full flex items-end p-16">
                    <h1 className={`${inter.className} text-[52px] font-semibold leading-[56px] text-white max-w-[717px]`}>
                        Turning user research
                        <br />
                        into a new concept that unblocked progress
                    </h1>
                </div>
            </section>

            {/* 2. Problem Statement Section (Dark) */}
            <section className="bg-[var(--foreground)] text-white py-36 px-14">
                <div className="max-w-[610px] mx-auto space-y-8">
                    <p className="text-xl leading-relaxed">
                        Banks use this tool to handle risky loans (distressed positions). It helps teams spot early warning signs, understand why a loan is in trouble, and choose the next step.
                    </p>
                    <p className="text-xl leading-relaxed">
                        The goal of this tool is to support decisions such as stabilize, restructure, or exit while meeting compliance and audit needs.
                    </p>
                    <p className="text-lg text-neutral-400 leading-relaxed pt-4">
                        When I joined, the product had many features but no clear focus. There was no shared picture of the users, their goals, or what success looked like. My task was to center the work on real users, define a simple scope for a first slice, and align design, data, and engineering. I also needed to prepare an internal pilot that could be shown to clients and used by pre‑sales.
                    </p>
                </div>
            </section>

            {/* 3. Goal Section with KPI Cards */}
            <section className="relative bg-[var(--foreground)] min-h-[960px] overflow-hidden flex flex-col justify-start items-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/design-system/Goal-2.png"
                        alt="Dashboard background"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                {/* Top gradient fade */}
                <div 
                    className="absolute inset-0 z-10"
                    style={{
                        background: "linear-gradient(to bottom, var(--foreground) 15%, rgba(23,23,23,0.05) 40%, var(--foreground) 85%)",
                    }}
                />
                
                {/* Content */}
                <div className="relative z-20 flex flex-col items-center pt-0 pb-0">
                    {/* Statement */}
                    <div className="max-w-[610px] w-full px-0 pt-0 pb-[92px]">
                        <h2 className={`${inter.className} text-4xl md:text-[40px] font-medium leading-[56px] text-white`}>
                            A research-backed concept.
                            <br />
                            Three user archetypes.
                            <br />
                            Progress unblocked.
                        </h2>
                    </div>

                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-40 pb-12 px-0 mb-16 w-full max-w-[1200px]">
                        <KpiTile value="7" label="Time to concept approval" />
                        <KpiTile value="+50%" label="Redesign time reduced" />
                        <KpiTile value="3" label="New archetypes" />
                        <KpiTile value="8" label="Use cases validated" />
                    </div>

                    {/* The Pivot */}
                    <div className="max-w-[610px] flex flex-col gap-4 h-auto w-full px-0 text-white">
                        <div className="pb-6"><p className="text-2xl text-neutral-400 leading-relaxed">The pivot</p></div>
                        <div className="text-lg text-neutral-400 leading-relaxed h-auto"><span className="font-semibold text-lg text-white ">Decision:</span> split one product into 3 modules</div>
                        <div className="text-lg text-neutral-400 leading-relaxed pb-0"><span className="font-semibold text-lg text-white ">Why:</span> different goals, different workflows, different success metricss</div>
                        <div className="text-lg text-neutral-400 leading-relaxed pb-0"><span className="font-semibold text-lg text-white ">Trade-off:</span> more surface area, but clearer ownership and roadmap</div>
                        
                    </div>
                </div>
            </section>

            {/* 4. How we unblocked progress (Light theme) */}
            <section className="bg-[var(--background)] pt-14 pb-0">
                {/* Header */}
                <div className="max-w-[610px] mx-auto px-6 mb-8">
                    <h2 className={`${inter.className} text-4xl md:text-[40px] font-medium leading-[56px] text-neutral-900 mb-4`}>
                        How we unblocked progress
                    </h2>
                    <p className="text-xl text-neutral-800 leading-relaxed">
                        Ran semi‑structured interviews with internal banking experts to understand real usage and reframe the problem around user needs.
                    </p>
                </div>

                {/* Ground Truth Container */}
                <div className="flex justify-center px-2 mb-8">
                    <div className="bg-[rgba(230,219,203,0.24)] backdrop-blur-sm rounded-2xl max-w-[1200px] w-full py-14 px-6">
                        {/* Ground Truth */}
                        <div className="max-w-[610px] mx-auto mb-12">
                            <h3 className="text-2xl font-semibold text-neutral-900 mb-8">
                                Ground truth
                            </h3>
                            <p className="text-xl text-neutral-800 leading-relaxed">
                                I ran semi-structured interviews with internal banking SMEs to understand how distressed loans are managed in practice, and where the current tool was failing.
                            </p>
                        </div>

                        {/* Discovery */}
                        <div className="max-w-[610px] mx-auto mb-12">
                            <h3 className={`${inter.className} text-2xl font-medium text-neutral-900 mb-8 pt-8`}>
                                Discovery
                            </h3>
                            <p className="text-xl text-neutral-800 leading-relaxed">
                                Through these interviews, I identified a critical insight: the presence of three main archetypes, each with distinct objectives and requirements. They are:
                            </p>
                        </div>

                        {/* Three Archetype Tiles */}
                        <div className="flex flex-col md:flex-row gap-6 justify-center max-w-[1040px] mx-auto pt-8">
                            <div className="flex-1">
                                <ArchetypeTile
                                    title="Loan Manager"
                                    description="Handles individual distressed loans. Analyzes causes, assesses risk, and defines whether to stabilize, restructure, or exit."
                                    bgImage="/cpm/loanManger.png"
                                />
                            </div>
                            <div className="flex-1">
                                <ArchetypeTile
                                    title="Portfolio Manager"
                                    description="Manages a pipeline of distressed loans. Balances risk, resources, and time across multiple cases."
                                    bgImage="/cpm/hero-v2.png"
                                />
                            </div>
                            <div className="flex-1">
                                <ArchetypeTile
                                    title="Head of business"
                                    description="Oversees portfolio strategy. Defines policies, allocates resources, and monitors high-level performance."
                                    bgImage="/cpm/HoB.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Feature Cards Row */}
            <section className="bg-[var(--background)] py-14 px-6">
                <div className="flex flex-col md:flex-row gap-8 justify-center max-w-[1200px] mx-auto">
                    {/* Make the work visible */}
                    <div 
                        className="flex-1 rounded-2xl p-14 flex flex-col justify-between min-h-[600px]"
                        style={{
                            background: "linear-gradient(90deg, rgba(203,202,222,0.24) 0%, rgba(203,202,222,0.24) 100%), #FEFEFD",
                        }}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                                Make the work visible
                            </h3>
                            <p className="text-xl text-neutral-800 leading-relaxed">
                                I mapped the end-to-end user journeys to make the workflow visible, align the team on what "done" means, and define MVP scope and priorities.
                            </p>
                        </div>
                        <div className="pt-8">
                            <button className="bg-neutral-900 text-neutral-50 px-6 py-3 rounded-full text-lg flex items-center gap-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                vedi
                            </button>
                        </div>
                    </div>

                    {/* Turn scope into build steps */}
                    <div 
                        className="flex-1 rounded-2xl p-14 flex flex-col justify-between min-h-[600px]"
                        style={{
                            background: "linear-gradient(90deg, rgba(183,211,202,0.24) 0%, rgba(183,211,202,0.24) 100%), #FEFEFD",
                        }}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                                Turn scope into build steps
                            </h3>
                            <p className="text-xl text-neutral-800 leading-relaxed">
                                I translated the journeys into user flows and clear requirements, so the team could prioritize the backlog and build with confidence.
                            </p>
                        </div>
                        <div className="pt-8">
                            <button className="bg-neutral-900 text-neutral-50 px-6 py-3 rounded-full text-lg flex items-center gap-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                vedi
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Templates Carousel */}
            <section className="bg-[var(--background)] py-14">
                <div className="max-w-[610px] mx-auto px-6 mb-12">
                    <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                        Design once, scale fast
                    </h3>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                        Early sketches evolved into flows and mockups, accelerated by the design system. Using real components, we quickly built and refined reusable templates that kept the experience consistent and sped up future feature work.
                    </p>
                </div>
                <TemplateCarousel slides={TEMPLATES} />
            </section>

            {/* 7. Prototypes Section */}
            <section className="bg-[var(--background)] py-14 px-6">
                <div className="max-w-[1200px] mx-auto">
                    {/* Header */}
                    <div className="max-w-[610px] mx-auto mb-12">
                        <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                            Prototype to validate and align
                        </h3>
                        <p className="text-xl text-neutral-800 leading-relaxed">
                            I built high-fidelity prototypes to test the concept and key interactions early—before development locked decisions in. Prototyping supported co-design, clearer stakeholder alignment, and faster iteration based on feedback.
                        </p>
                    </div>

                    {/* Video Cards */}
                    <div className="flex flex-col items-center gap-10 pb-14">
                        <VideoCard
                            title="Loan manager overview"
                            description="This video shows the high-fidelity prototype that has been built, which represents the main feature of the tool for the loan manager."
                            videoSrc="https://www.youtube.com/embed/PLZpMINtvmg?si=nCHm5F-8m0RjvSlJ"
                        />
                        <VideoCard
                            title="Test and iterate"
                            description="The prototyping phase served as a critical idea validation tool. It allowed us to test concepts with real users and gather feedback that directly informed subsequent iterations. This iterative process of prototyping and testing ensured that the final product would meet the needs and expectations of our users.

Video of the prototype demonstrating the user workflow and essential functions of the dashboard feature for the Head of Business tool."
                            videoSrc="https://www.youtube.com/embed/FlJzjo3AJ5E?si=HSp21BJQs1sTpZQL"
                        />
                        <VideoCard
                            title="Prototyping"
                            description="Prototyping is integral to my design methodology, enabling collaborative feature development and co-design of the product. These prototypes facilitated clearer communication between team members and stakeholders, giving everyone a clear understanding of the product's design intent and functionality.

The benefits of the design work were many. Not only did it improve internal communication and align our team's vision, but it also significantly accelerated our time to market. By identifying and addressing potential issues early in the development cycle, we streamlined the entire design and development process, paving the way for a more efficient and effective product launch."
                            videoSrc="https://www.youtube.com/embed/dBuIoqBSNhk?si=7I-RBntnqBxeRYL_"
                            variant="beige"
                        />
                    </div>
                </div>
            </section>

            {/* 8. Reflections Section (Dark footer) */}
            <section className="bg-[var(--foreground)] py-14 px-6">
                <div className="max-w-[610px] mx-auto">
                    <h3 className="text-2xl font-semibold text-neutral-400 mb-8">
                        REFLECTION AND FUTURE DIRECTIONS
                    </h3>
                    <h4 className="text-xl font-semibold text-white mb-8">
                        Main Challenges
                    </h4>

                    {/* Challenges */}
                    <div className="space-y-8 mb-12">
                        <div>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                Joining an existing project presented initial challenges, particularly in redirecting the focus from an assumption-based to a user-centric approach. Overcoming this required clear communication and strategic persuasion to realign the project goals.
                            </p>
                        </div>
                        <div>
                            <h5 className="text-xl text-white mb-2">
                                Conceptual Shift
                            </h5>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                The transition from a single software solution to three distinct applications tailored to different personas was a complex but rewarding endeavor. It challenged conventional thinking and demanded a robust understanding of diverse user needs.
                            </p>
                        </div>
                        <div>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                            
                            </p>
                        </div>
                    </div>

                    {/* Closing paragraph */}
                    <p className="text-xl text-white leading-relaxed">
                        This project profoundly impacted my development as a product designer, enhancing my ability to empathize with users, navigate team dynamics, and champion user-centric solutions. It has refined my design thinking and problem-solving skills, setting a new benchmark for my future projects.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}
