

import React from 'react';
import Image from 'next/image';
import content from './content.json'

function PortfolioPage() {
    const projects = [
        { id: 1, title: 'Проект 1', image: '/seo.png' },
        { id: 2, title: 'Проект 2', image: '/path/to/image2.jpg' },
        { id: 3, title: 'Проект 3', image: '/path/to/image3.jpg' },
        { id: 3, title: 'Проект 3', image: '/path/to/image3.jpg' },
        { id: 3, title: 'Проект 3', image: '/path/to/image3.jpg' },
        { id: 3, title: 'Проект 3', image: '/path/to/image3.jpg' },
        // Добавьте дополнительные проекты по аналогии
    ];

    return (
        <main className="bg-[#1c1917] text-gray-300 min-h-screen pt-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-right" data-aos-delay="150">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-4xl font-bold mb-8">{content.portfolioPage.title}</h1>
                        <p>{content.portfolioPage.description}</p>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-wrap justify-end gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="relative w-48 h-48 card">
                                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-sm transition duration-300 ease-in-out"/>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-sm opacity-0 hover:opacity-100 hover:bg-opacity-50 transition duration-300 ease-in-out backdrop-blur-sm card">
                                    <button className="px-4 py-2 bg-white text-black font-semibold rounded">Подробнее</button>
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
