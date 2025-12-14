import { trainingVideos } from "../../data/projects";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
    return trainingVideos.map((project) => ({
        slug: project.slug,
    }));
}

export default async function TrainingPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = trainingVideos.find((p) => p.slug === slug);

    if (!project) {
        return notFound();
    }

    return (
        <div className="container mx-auto py-20 px-6 max-w-4xl">
            <div className="mb-8">
                <p className="text-neutral-500 text-sm mb-2 uppercase tracking-widest">Training Pill</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{project.title}</h1>
            </div>

            <div className="aspect-video bg-neutral-100 rounded-xl flex items-center justify-center mb-12 border border-black/5 shadow-lg">
                <span className="text-neutral-400">Video Player Placeholder</span>
            </div>

            <div className="space-y-10">
                {project.sections.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                        {section.title !== "Description" && <h2 className="text-xl font-bold text-foreground">{section.title}</h2>}
                        <div className="prose prose-lg max-w-none text-neutral-600">
                            <ReactMarkdown>{section.content}</ReactMarkdown>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
