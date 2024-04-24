'use client'
import Image from 'next/image';
import {useEffect} from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Contact from "@/app/components/Contact";
import About from "@/app/components/About";
import Services from "@/app/components/Services";

export default function HomePage() {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

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
            <section id="services" className="py-32">
                <Services/>
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
