import { featuredProjects } from "../../data/projects";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return featuredProjects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = featuredProjects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} | Case Study`,
        description: project.cardHeadline || `Case study for ${project.title}`,
        openGraph: {
            title: `${project.title} - UX Case Study`,
            description: project.cardHeadline || `Case study for ${project.title}`,
            images: project.cardImage ? [{ url: project.cardImage }] : [],
        },
    };
}

export default async function FeaturedProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = featuredProjects.find((p) => p.slug === slug);

    if (!project) {
        return notFound();
    }

    return (
        <div className="container mx-auto py-20 px-6 max-w-4xl">
            <div className="mb-12">
                <p className="text-neutral-500 text-lg mb-2">{project.role} {project.period && `• ${project.period}`}</p>
                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">{project.title}</h1>
            </div>

            <div className="space-y-12">
                {project.sections.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                        <div className="prose prose-lg max-w-none text-neutral-600">
                            <ReactMarkdown>{section.content}</ReactMarkdown>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
