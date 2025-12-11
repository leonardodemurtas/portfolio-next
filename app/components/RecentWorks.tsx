
import Link from "next/link";


// Fallback icon if lucide-react is not installed
function ArrowIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
    );
}

const works = [
    {
        title: "Transformed AgencyAnalytics with Enhanced Reports",
        tags: "3rd Easiest use in Marketing Analytics Software",
        description: "Enhanced Reports, Dashboards, and a UI Refresh",
        link: "/works/agency-analytics",
        image: null, // Placeholder
    },
    // Add more recent works here if needed
];

export function RecentWorks() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <h2 className="text-3xl font-medium text-center text-white">Recent Works</h2>

                <div className="grid gap-8">
                    {works.map((work, index) => (
                        <div
                            key={index}
                            className="group relative rounded-3xl bg-[#0A0A0A] border border-white/5 overflow-hidden hover:border-white/10 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row min-h-[500px]">
                                {/* Text Content */}
                                <div className="flex-1 p-10 md:p-16 flex flex-col justify-center space-y-8 z-10">
                                    <div className="inline-flex items-center gap-2 text-sm text-neutral-400">
                                        <span>🏆</span>
                                        <span>{work.tags}</span>
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-medium text-white leading-tight max-w-lg">
                                        {work.title}
                                    </h3>

                                    <div className="pt-4">
                                        <Link
                                            href={work.link}
                                            className="inline-flex items-center gap-2 text-white font-medium hover:text-accent transition-colors"
                                        >
                                            View Live Project <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>

                                {/* Image Preview / Gradient Background */}
                                <div className="flex-1 bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative min-h-[300px] md:min-h-auto flex items-end justify-center overflow-hidden">
                                    {/* Abstract UI representation */}
                                    <div className="w-[90%] h-[80%] bg-neutral-900/80 rounded-t-xl border border-white/10 shadow-2xl translate-y-6 md:translate-y-10 group-hover:-translate-y-2 transition-transform duration-500 p-4">
                                        <div className="w-full h-full bg-neutral-800/50 rounded flex items-center justify-center text-neutral-600">
                                            UI Preview
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
