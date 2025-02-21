'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const HeroSection = () => {
    const slides = [
        {
            title: 'Cuidando do seu bem-estar com excelência',
            description:
                'Oferecemos atendimento multidisciplinar personalizado para você e sua família, com uma equipe de profissionais altamente qualificados.',
            buttonText: 'Agende uma Consulta',
            image: 'https://public.readdy.ai/ai/img_res/8736af9e4257f36746111cb35862aae4.jpg',
        },
        {
            title: 'Tecnologia e Inovação em Saúde',
            description:
                'Equipamentos de última geração e profissionais especializados para garantir os melhores resultados no tratamento.',
            buttonText: 'Conheça Nossa Estrutura',
            image: 'https://public.readdy.ai/ai/img_res/287d6a0a8cf6ada648c92fb3328c42ce.jpg',
        },
        {
            title: 'Atendimento Humanizado',
            description: `Nossa equipe está comprometida em oferecer um cuidado personalizado e acolhedor para cada paciente e sua família.`,
            buttonText: 'Conheça Nossa Equipe',
            image: 'https://public.readdy.ai/ai/img_res/784f7318b921d99a613e3daaf5450c7e.jpg',
        },
    ];

    return (
        <section className="pt-20 relative h-[600px]">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                className="h-full"
            >
                {slides?.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full flex items-center overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src={slide?.image}
                                    alt={`Hero Background ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/30"></div>
                            </div>
                            <div className="max-w-7xl mx-auto px-4 relative">
                                <div className="max-w-2xl">
                                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                        {slide?.title}
                                    </h1>
                                    <p className="text-xl text-gray-700 mb-8">
                                        {slide?.description}
                                    </p>
                                    <button className="!rounded-button bg-[#259a43] text-white px-8 py-3 text-lg hover:bg-[#1c7a33] transition-colors">
                                        {slide?.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSection;
