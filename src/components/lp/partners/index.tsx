'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const PartnersSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Nossos Parceiros
                </h2>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={4}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    className="partner-slider"
                >
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={`https://readdy.ai/api/search-image?query=modern minimalist medical company logo design professional healthcare business symbol on white background&width=200&height=100&orientation=landscape&flag=c9df8dad7a00f2a7699034b8419a6189`}
                                alt={`Partner ${index}`}
                                className="w-full h-24 object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PartnersSection;
