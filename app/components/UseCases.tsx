"use client";

import Link from "next/link";
import Image from "next/image";
import { featuredProjects } from "../data/projects";

export function UseCases() {
    return (
        <section id="use-cases" className="pt-8 pb-12 px-6 md:px-12 max-w-[90rem] mx-auto scroll-mt-20">
            {/* Heading */}
            <div className="flex justify-start mb-12">
                <h2 className="text-[92px] font-thin text-[#B2B2B2] uppercase leading-normal font-['SF_Pro_Display',_sans-serif]">
                    USE CASES
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-12">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end items-start">
                            <div className="max-w-3xl space-y-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl md:text-5xl font-medium text-white leading-tight drop-shadow-sm">
                                    {project.cardHeadline || project.title}
                                </h3>

                                <Link
                                    href={`/featured/${project.slug}`}
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-neutral-900 text-sm font-medium tracking-wide hover:bg-neutral-100 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
