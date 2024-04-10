import data from "../content.json"
import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
    const projects = data.projectsData;

    // @ts-ignore
    return projects.map((project) => ({
        name: project.name
    }))
}

export function getProject(name: string) {
    return data.projectsData.find(project => project.name === name);
}

// @ts-ignore
export default function Page({ params }) {
    const project = getProject(params.projectName);

    if (!project) {
        return (<main className="bg-[#1c1917] text-gray-300 min-h-screen pt-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-right" data-aos-delay="150">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full lg:w-1/2">
                        <h1>Проект не найден</h1>
                    </div>
                </div>
            </div>
        </main>)
    }

    return (
        <main className="bg-[#1c1917] text-gray-300 min-h-screen pt-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-right" data-aos-delay="150">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full lg:w-1/2">
                        <h1>{project.name}</h1>
                        <p>{project.description}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}