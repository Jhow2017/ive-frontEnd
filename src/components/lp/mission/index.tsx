import React from 'react';

const MissionSection = () => {
    return (
        <section id="missao" className="py-20 bg-green-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center p-8 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:transform hover:-translate-y-2">
                        <i className="fas fa-heart text-4xl text-indigo-600 mb-6"></i>
                        <h3 className="text-2xl font-bold mb-4">Missão</h3>
                        <p className="text-gray-600">
                            Proporcionar atendimento de excelência e transformar
                            positivamente a vida das pessoas através de cuidados
                            integrados e humanizados.
                        </p>
                    </div>
                    <div className="text-center p-8 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:transform hover:-translate-y-2">
                        <i className="fas fa-eye text-4xl text-indigo-600 mb-6"></i>
                        <h3 className="text-2xl font-bold mb-4">Visão</h3>
                        <p className="text-gray-600">
                            Ser referência em atendimento multidisciplinar,
                            reconhecidos pela excelência e inovação em nossas
                            práticas.
                        </p>
                    </div>
                    <div className="text-center p-8 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:transform hover:-translate-y-2">
                        <i className="fas fa-star text-4xl text-indigo-600 mb-6"></i>
                        <h3 className="text-2xl font-bold mb-4">Valores</h3>
                        <p className="text-gray-600">
                            Ética, compromisso, respeito, inovação e excelência
                            em tudo o que fazemos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
