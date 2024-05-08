import React from 'react';
import Link from 'next/link';
import content from '../content.json';

function PortfolioPage() {
    const projects = content.projectsData;

    return (
        <main className="bg-[#1c1917] text-gray-300 min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8">
                    <div className="text-left" data-aos="fade-right">
                        <h1 className="text-4xl font-bold mb-8">{content.portfolioPage.title}</h1>
                        <p>{content.portfolioPage.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-right">
                        {projects.map((project, index) => (
                            <Link href={`/portfolio/${project.urlName}`} passHref className="text-lg font-semibold card">
                                <div key={index} className="bg-neutral-800 p-4 rounded-md">
                                    {project.name}
                                    <p className="text-sm text-gray-400 mt-1">{project.type}</p>
                                    <hr className="my-2 border-gray-600"/>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}


export default PortfolioPage;
