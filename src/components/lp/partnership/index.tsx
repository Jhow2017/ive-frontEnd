import React from 'react';

const PartnershipSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            Seja Nosso Parceiro
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Junte-se a nós na missão de proporcionar saúde e
                            bem-estar de qualidade para mais pessoas. Buscamos
                            parcerias estratégicas com organizações que
                            compartilham nossos valores e compromisso com a
                            excelência.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[#259a43] mr-3"></i>
                                <span className="text-gray-600">
                                    Acesso a uma rede de profissionais
                                    qualificados
                                </span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[#259a43] mr-3"></i>
                                <span className="text-gray-600">
                                    Programas de benefícios exclusivos
                                </span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[#259a43] mr-3"></i>
                                <span className="text-gray-600">
                                    Condições especiais para colaboradores
                                </span>
                            </li>
                        </ul>
                        <button className="!rounded-button bg-[#259a43] text-white px-6 py-3 hover:bg-[#1c7a33] transition-colors">
                            Seja um Parceiro
                        </button>
                    </div>
                    <div className="relative">
                        <img
                            src="https://public.readdy.ai/ai/img_res/604109ab5d17757874c63c18e9b81d71.jpg"
                            alt="Parceria"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnershipSection;
