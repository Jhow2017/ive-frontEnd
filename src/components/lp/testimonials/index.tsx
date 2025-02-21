'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-green-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">
                    O Que Dizem Nossos Pacientes
                </h2>
                <Swiper
                    modules={[Pagination, Autoplay, EffectFade]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    effect="fade"
                    className="testimonial-slider"
                >
                    <SwiperSlide>
                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <div className="flex items-center mb-6">
                                <img
                                    src="https://public.readdy.ai/ai/img_res/2eb355ae44774969d75d494b1b41ed7e.jpg"
                                    alt="Paciente 1"
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="text-xl font-bold">
                                        Isabella Martins
                                    </h4>
                                    <p className="text-gray-600">Empresária</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg italic">
                                " O atendimento no Instituto superou todas as
                                minhas expectativas. A equipe multidisciplinar
                                trabalhou de forma integrada no meu tratamento,
                                e os resultados foram surpreendentes. Me sinto
                                uma nova pessoa!"
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <div className="flex items-center mb-6">
                                <img
                                    src="https://public.readdy.ai/ai/img_res/962cdb7f6599bcd3ff743b9dfacf30ce.jpg"
                                    alt="Paciente 1"
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />

                                <div>
                                    <h4 className="text-xl font-bold">
                                        Ricardo Mendes
                                    </h4>
                                    <p className="text-gray-600">
                                        Professor Universitário
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg italic">
                                "A dedicação e profissionalismo da equipe são
                                excepcionais. O ambiente acolhedor e o
                                tratamento personalizado fizeram toda a
                                diferença na minha recuperação."
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <div className="flex items-center mb-6">
                                <img
                                    src="https://public.readdy.ai/ai/img_res/141ca1cd5c53efce8d7808a5831fde29.jpg"
                                    alt="Paciente 1"
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />

                                <div>
                                    <h4 className="text-xl font-bold">
                                        Carolina Santos
                                    </h4>
                                    <p className="text-gray-600">Atleta</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg italic">
                                "Encontrei no Instituto não apenas profissionais
                                competentes, mas uma equipe que realmente se
                                importa com o bem-estar dos pacientes. O
                                acompanhamento é completo e os resultados são
                                visíveis."
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialsSection;
