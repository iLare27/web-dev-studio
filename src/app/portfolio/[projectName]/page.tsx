import data from "../../content.json"
import Image from "next/image";
import React from "react";
import content from "@/app/content.json";
import Link from "next/link";
import {getProject} from "@/app/portfolio/[projectName]/utils";

export async function generateStaticParams() {
    const projects = data.projectsData;

    // @ts-ignore
    return projects.map((project) => ({
        name: project.name
    }))
}

// @ts-ignore
export default function Page({ params }) {
    const project = getProject(data ,params.projectName);

    if (!project) {
        return (<main className="bg-[#1c1917] text-gray-300 min-h-screen pt-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-right" data-aos-delay="150">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-4xl font-bold mb-8">Проект не найден</h1>
                    </div>
                </div>
            </div>
        </main>)
    }

    return (
        <main className="bg-[#1c1917] text-gray-300 min-h-screen pt-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-start items-start">
                    <div className="w-full lg:w-1/2 pr-8" data-aos="fade-right" data-aos-delay="150">
                        <h1 className="text-4xl font-bold mb-8">{project.name}</h1>
                        <p className="mb-4">{project.description}</p>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-wrap justify-start lg:justify-end gap-8" data-aos="fade-left" data-aos-delay="150">
                        <div className="w-full max-w-4xl h-auto">
                            <Image
                                src={project.image}
                                alt="Project image"
                                layout="responsive"
                                width={500} // Укажите желаемую ширину
                                height={700} // Укажите желаемую высоту, сохраняя пропорции
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}
