import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import content from '../content.json'; // Убедитесь, что путь к файлу content.json верный

function PortfolioPage() {
    const projects = content.projectsData;

    return (
        <main className="bg-[#1c1917] text-gray-300 min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 " >
                <div className="flex flex-wrap justify-between">
                    <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-delay="150">
                        <h1 className="text-4xl font-bold mb-8">{content.portfolioPage.title}</h1>
                        <p>{content.portfolioPage.description}</p>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-wrap justify-end gap-8" data-aos="fade-left" data-aos-delay="150">
                        {projects.map((project, index) => (
                            <div key={index} className="relative w-48 h-48 card">
                                <Image src={project.image} alt="" layout="fill" objectFit="cover" className="rounded-sm"/>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-sm opacity-0 hover:opacity-100 transition duration-300 ease-in-out backdrop-blur-sm card">
                                    <Link href={`/portfolio/${project.name}`} className="px-4 py-2 bg-white text-black font-semibold rounded">
                                        Подробнее
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default PortfolioPage;
