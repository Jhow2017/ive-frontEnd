import React from 'react';

const AboutSection = () => {
    return (
        <section id="sobre" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Sobre Nós</h2>
                        <p className="text-gray-600 mb-6">
                            Desde 2010, o Instituto tem se dedicado a
                            proporcionar cuidados de saúde excepcionais,
                            combinando expertise profissional com um atendimento
                            verdadeiramente humanizado. Nossa abordagem
                            multidisciplinar integrada permite que cada paciente
                            receba um tratamento personalizado e abrangente.
                        </p>
                        <p className="text-gray-600 mb-8">
                            Com uma equipe de mais de 30 profissionais altamente
                            qualificados e instalações modernas, nos empenhamos
                            em oferecer o que há de mais avançado em tratamentos
                            terapêuticos, sempre priorizando o bem-estar e a
                            recuperação de nossos pacientes.
                        </p>
                        <button className="!rounded-button bg-[#259a43] text-white px-6 py-3 hover:bg-[#1c7a33] transition-colors">
                            Conheça Nossa História
                        </button>
                    </div>
                    <div className="relative">
                        <img
                            src="https://public.readdy.ai/ai/img_res/9ed2c8c3f5e61ea40521bd7485b61527.jpg"
                            alt="Sobre o Instituto"
                            className="rounded-lg shadow-xl"
                        />
                        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg">
                            <p className="text-4xl font-bold text-[#259a43]">
                                12+
                            </p>
                            <p className="text-gray-600">Anos de Excelência</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
