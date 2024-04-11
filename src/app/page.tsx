'use client'
import Image from 'next/image';
import {useEffect} from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import data from './content.json';

export default function HomePage() {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    const serviceCards = data.services;

    return (
        <div className="flex flex-col font-sans">
            {/* Hero Section */}
            <section id="top" className="relative w-full h-screen overflow-hidden flex justify-center items-center text-center">
                <video className="hero-video absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 z-[-1] blur-[8px]" playsInline autoPlay muted loop disablePictureInPicture>
                    <source src="/herocontent.mp4" type="video/mp4"/>
                    Ваш браузер не поддерживает видео тег.
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"/>

                <div className="z-10 relative">
                    <h2 className="text-6xl text-white font-bold mb-6">Расширяйте горизонты вашего бизнеса</h2>
                    <p className="text-xl mb-8 text-blue-100">Создаем веб-решения, увеличивающие прибыль и открывающие новые возможности</p>
                    <Link href="/#contact" className="bg-[#333333] text-white px-6 py-4 rounded hover:bg-[#292929] transition duration-300">Заявка</Link>
                </div>
            </section>


            <div className="bg-[#1c1917] text-gray-300">

            {/* Services Section */}
                <section id="services" className="py-32" data-aos="fade-right" data-aos-delay="150">
                    <div className="container mx-auto text-center">
                        <h3 className="text-5xl font-bold mb-16">Услуги</h3>
                        <div className="flex flex-wrap justify-center gap-10">
                            {/* Service Cards */}
                            {serviceCards.map((service, index) => (
                                <div key={index} className="w-full md:w-1/3 card flex justify-center">
                                    <Image src={service.image} alt="" width={500} height={300} className="rounded-md object-cover" />
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

                {/*About us section*/}
                <section id="about" className="bg-[#1c1917] text-white py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center gap-10">
                            <div className="w-full lg:w-2/3 text-lg" data-aos="fade-right" data-aos-delay="150">
                                <h2 className="text-5xl font-bold mb-6">О нас</h2>
                                <p className="mb-4">Мы — команда профессионалов, специализирующихся на создании качественных веб-решений. Наша цель — помогать бизнесу расти и развиваться, предоставляя инновационные инструменты для достижения их целей.</p>
                                <p>С нами ваш проект получит не только функциональный и красивый сайт, но и надежного партнера в лице нашей команды.</p>
                            </div>
                            <div className="w-8/12 flex justify-center gap-6">
                                <div className="bg-[#333333] rounded-lg p-6 w-[400px] h-96 flex items-center justify-center" data-aos="fade-right" data-aos-delay="150">
                                    <span className="text-xl">Изображение 1</span>
                                </div>
                                <div className="bg-[#333333] rounded-lg p-6 w-[400px] h-96 flex items-center justify-center" data-aos="fade-up" data-aos-delay="150">
                                    <span className="text-xl">Изображение 2</span>
                                </div>
                                <div className="bg-[#333333] rounded-lg p-6 w-[400px] h-96 flex items-center justify-center" data-aos="fade-left" data-aos-delay="150">
                                    <span className="text-xl">Изображение 3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-32">
                    <div className="container mx-auto" >
                        <h3 className="text-5xl font-bold text-center text-white mb-16" data-aos="fade-up">Оставьте заявку</h3>
                        <div className="max-w-xl mx-auto">
                            <form action="#" method="POST" data-aos="fade-up">
                                <div className="mb-6">
                                    <input type="text" name="name" placeholder="Ваше имя *" required className="w-full px-4 py-2 rounded-lg focus:outline-none bg-[#333333] text-white"/>
                                </div>
                                <div className="mb-6">
                                    <input type="tel" name="phone" placeholder="Ваш телефон *" required className="w-full px-4 py-2 rounded-lg focus:outline-none bg-[#333333] text-white"/>
                                </div>
                                <div className="mb-6">
                                    <input type="email" name="email" placeholder="Ваш E-mail" className="w-full px-4 py-2 rounded-lg focus:outline-none bg-[#333333] text-white"/>
                                </div>
                                <div className="mb-6">
                                    <textarea name="message" placeholder="Описание проекта" rows={4} className="w-full px-4 py-2 rounded-lg focus:outline-none bg-[#333333] text-white"></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="mt-4 bg-[#333333] hover:bg-[#292929] text-white font-bold py-3 px-6 rounded-lg transition duration-300">Отправить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
