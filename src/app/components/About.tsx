import React from 'react';
import Image from "next/image";

function About() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-y-24">
                <div className="text-lg flex-col" data-aos="fade-right" data-aos-delay="150">
                    <h2 className="text-5xl font-bold mb-6">О нас</h2>
                    <p className="mb-4">Мы — команда профессионалов, специализирующихся на создании качественных
                        веб-решений. Наша цель — помогать бизнесу расти и развиваться, предоставляя
                        инновационные инструменты для достижения их целей.</p>
                    <p>С нами ваш проект получит не только функциональный и красивый сайт, но и надежного
                        партнера в лице нашей команды.</p>
                </div>
                <div className="w-full lg:flex lg:justify-center gap-6">
                    <div
                        className="rounded-lg p-6 w-full lg:w-[400px] h-auto lg:h-96 flex items-center justify-center"
                        data-aos="fade-right" data-aos-delay="150">
                        <Image
                            src="/about1.jpg"
                            alt="Описание изображения 1"
                            layout="responsive"
                            width={400} // Ширина изображения на десктопах
                            height={300} // Высота изображения на десктопах
                            className="rounded-lg card"
                        />
                    </div>
                    <div
                        className="rounded-lg p-6 w-full lg:w-[400px] h-auto lg:h-96 flex items-center justify-center"
                        data-aos="fade-up" data-aos-delay="150">
                        <Image
                            src="/about2.jpg"
                            alt="Описание изображения 2"
                            layout="responsive"
                            width={400}
                            height={300}
                            className="rounded-lg card"
                        />
                    </div>
                    <div
                        className="rounded-lg p-6 w-full lg:w-[400px] h-auto lg:h-96 flex items-center justify-center"
                        data-aos="fade-left" data-aos-delay="150">
                        <Image
                            src="/about3.jpg"
                            alt="Описание изображения 3"
                            layout="responsive"
                            width={400}
                            height={300}
                            className="rounded-lg card"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
