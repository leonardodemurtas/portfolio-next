import Link from "next/link";

const featured = [
    {
        title: "Design System",
        description: "Product design / UX (2023–2024)",
        link: "/featured/design-system",
        tags: "Design System",
    },
    {
        title: "Credit Portfolio Monitoring",
        description: "Product design / UX / Interaction design / UI (2023)",
        link: "/featured/credit-portfolio-monitoring",
        tags: "Fintech",
    },
];

export function FeaturedProjects() {
    return (
        <section id="featured" className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-medium mb-12">Featured Projects</h2>
            <div className="space-y-12">
                {featured.map((project, idx) => (
                    <div key={idx} className="group relative rounded-3xl bg-[#0A0A0A] border border-white/5 overflow-hidden hover:border-white/10 transition-colors">
                        <div className="flex flex-col md:flex-row min-h-[400px]">
                            <div className="flex-1 p-10 flex flex-col justify-center space-y-6">
                                <span className="text-sm text-neutral-400">{project.tags}</span>
                                <h3 className="text-4xl font-medium text-white">{project.title}</h3>
                                <p className="text-neutral-400 text-lg">{project.description}</p>
                                <Link href={project.link} className="inline-block mt-4 text-white hover:text-accent font-medium">
                                    View Project →
                                </Link>
                            </div>
                            <div className="flex-1 bg-gradient-to-br from-neutral-800 to-neutral-900">
                                {/* Image Placeholder */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
