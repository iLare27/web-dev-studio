import React from 'react';
import Image from "next/image";
// @ts-ignore
import data from '../content.json';

function Services() {

    const serviceCards = data.services;

    return (
        <div className="container mx-auto text-center" data-aos="fade-right" data-aos-delay="150">
            <h3 className="text-5xl font-bold mb-16">Услуги</h3>
            <div className="flex flex-wrap justify-center gap-10">
                {serviceCards.map((service, index) => (
                    <div key={index} className="w-full md:w-1/3 card flex justify-center">
                        <Image src={service.image} alt="" width={500} height={300}
                               className="rounded-md object-cover"/>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <div className="backdrop-blur-md bg-black/50 p-4 rounded-b-md rounded-md">
                                <h4 className="text-2xl font-semibold text-white">{service.title}</h4>
                                <p className="text-gray-400">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
