
import Link from "next/link";
import Image from "next/image";
import { featuredProjects } from "../data/projects";

export function FeaturedProjects() {
    return (
        <section id="featured" className=" pb-20 pt-6 px-6 md:px-12 max-w-[90rem] mx-auto relative">
            {/* Heading */}
            <div className="flex pt-0 justify-center mb-16 md:mb-10 ">
                <h2 className=" text-[12vw] md:text-[10rem] font-thin text-neutral-900/5 tracking-tight leading-[0.8] select-none w-full">
                    PROJECTS
                </h2>
            </div>

            <div className="space-y-8 md:space-y-16">
                {featuredProjects.map((project, idx) => (
                    <div
                        key={project.slug}
                        className="group relative block w-full aspect-video rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-neutral-900">
                            {project.cardImage && (
                                <Image
                                    src={project.cardImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 90vw"
                                    priority={idx === 0}
                                />
                            )}
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end items-start pointer-events-none">
                            <div className="max-w-2xl space-y-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl md:text-5xl font-medium text-white leading-tight drop-shadow-sm">
                                    {project.cardHeadline || project.title}
                                </h3>

                                <Link
                                    href={`/featured/${project.slug}`}
                                    className="pointer-events-auto inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium tracking-wide group-hover:bg-white group-hover:text-black hover:border-white transition-all duration-300"
                                >
                                    View work
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
