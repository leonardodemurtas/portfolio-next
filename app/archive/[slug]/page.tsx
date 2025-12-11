import { archiveProjects } from "../../data/projects";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
    return archiveProjects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ArchiveProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = archiveProjects.find((p) => p.slug === slug);

    if (!project) {
        return notFound();
    }

    return (
        <div className="container mx-auto py-20 px-6 max-w-4xl">
            <div className="mb-12">
                <p className="text-neutral-400 text-lg mb-2">{project.role}</p>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">{project.title}</h1>
            </div>

            <div className="space-y-10">
                {project.sections.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                        {section.title !== "Description" && <h2 className="text-xl font-bold text-white">{section.title}</h2>}
                        <div className="prose prose-invert prose-lg max-w-none text-neutral-300">
                            <ReactMarkdown>{section.content}</ReactMarkdown>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
