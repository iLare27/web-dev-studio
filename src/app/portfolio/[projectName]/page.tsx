import data from "@/app/content.json"
import Image from "next/image";
import React from "react";
import { getProject } from "./utils";

export async function generateStaticParams() {
    const projects = data.projectsData;

    // @ts-ignore
    return projects.map((project) => ({
        params: { projectName: project.urlName }
    }));
}

// @ts-ignore
export default function Page({ params }) {
    const project = getProject(data, params.projectName);

    return (
        <main className="text-gray-300 min-h-screen pt-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {project ? (
                    project.status ? (
                        // Отображение основного контента, если проект активен (status = true)
                        <div className="flex flex-wrap justify-start items-start">
                            <div className="w-full lg:w-1/2 pr-8" data-aos="fade-right" data-aos-delay="150">
                                <h1 className="text-5xl font-extrabold mb-8">{project.name}</h1>
                                <p className="mb-4 font-medium">{project.description}</p>
                                <h1 className="text-4xl font-bold mb-8 pt-8">Стек:</h1>
                                <p className="font-medium pb-8">{project.stack}</p>
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-wrap justify-start lg:justify-end gap-8" data-aos="fade-left" data-aos-delay="150">
                                <div className="w-full max-w-4xl h-auto">
                                    <Image
                                        src={project.image}
                                        alt="Project image"
                                        layout="responsive"
                                        width={500}
                                        height={700}
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <h1 className="text-4xl font-bold text-white" data-aos="fade-right" data-aos-delay="150">Проект в разработке</h1>
                    )
                ) : (
                    <h1 className="text-4xl font-bold text-white">Проект не найден</h1>
                )}
            </div>
        </main>
    );
}
