import Link from "next/link";
import { archiveProjects } from "../data/projects";

export default function ArchivePage() {
    return (
        <div className="container mx-auto py-20 px-6 max-w-7xl">
            <div className="mb-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Projects Archive</h1>
                <p className="text-neutral-600 max-w-3xl text-lg">
                    With over a decade in digital design, I've worked across a wide mix of projects. Here are a few—early ideas that later grew into larger work, shown here for their outcomes rather than the process behind them.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {archiveProjects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/archive/${project.slug}`}
                        className="block p-6 rounded-xl bg-[var(--brand-ancient)] hover:bg-[var(--brand-ancient)]/80 border border-black/5 hover:border-black/10 transition-colors"
                    >
                        <p className="text-sm text-neutral-500 mb-2">{project.role}</p>
                        <h3 className="font-medium text-lg text-foreground">{project.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}




