'use client'
import Image from 'next/image';
import {useEffect} from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import data from './content.json';
import Contact from "@/app/components/Contact";
import About from "@/app/components/About";

export default function HomePage() {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    const serviceCards = data.services;

    return (
        <div className="flex flex-col font-sans">
            {/* Hero Section */}
            <section id="top"
                     className="relative w-full min-h-screen h-auto sm:h-screen overflow-hidden flex justify-center items-center text-center">
                <video
                    className="hero-video absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 z-[-1] blur-[8px]"
                    playsInline autoPlay muted loop disablePictureInPicture>
                    <source src="/herocontent.mp4" type="video/mp4"/>
                    Ваш браузер не поддерживает видео тег.
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"/>

                <div className="z-10 relative">
                    <h2 className="text-6xl text-white font-bold mb-6">Расширяйте горизонты вашего бизнеса</h2>
                    <p className="text-xl mb-8 text-blue-100">Создаем веб-решения, увеличивающие прибыль и открывающие
                        новые возможности</p>
                    <Link href="/#contact"
                          className="bg-[#333333] text-white px-6 py-4 rounded hover:bg-[#292929] transition duration-300">Заявка</Link>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-32" data-aos="fade-right" data-aos-delay="150">
                <div className="container mx-auto text-center">
                    <h3 className="text-5xl font-bold mb-16">Услуги</h3>
                    <div className="flex flex-wrap justify-center gap-10">
                        {/* Service Cards */}
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
            </section>

            <section id="about" className="text-white py-32">
                <About/>
            </section>

                {/* Contact Section */}
            <section id="contact" className="py-32">
                <Contact/>
            </section>
        </div>
);
}
