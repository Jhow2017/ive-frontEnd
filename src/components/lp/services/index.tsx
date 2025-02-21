import React from 'react';

const ServicesSection = () => {
    const services = [
        {
            title: 'Psicologia',
            icon: 'fa-brain',
            desc: 'Atendimento psicológico para crianças e adultos',
        },
        {
            title: 'Neuropsicologia',
            icon: 'fa-neurons',
            desc: 'Avaliação e reabilitação neuropsicológica',
        },
        {
            title: 'Fonoaudiologia',
            icon: 'fa-comments',
            desc: 'Tratamento de distúrbios da fala e linguagem',
        },
        {
            title: 'Fisioterapia',
            icon: 'fa-hand-holding-heart',
            desc: 'Reabilitação física e motora',
        },
        {
            title: 'Terapia Ocupacional',
            icon: 'fa-hands-holding-child',
            desc: 'Desenvolvimento de habilidades diárias',
        },
        {
            title: 'Psicopedagogia',
            icon: 'fa-book-reader',
            desc: 'Suporte ao processo de aprendizagem',
        },
    ];
    return (
        <section id="servicos" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Nossos Serviços
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services?.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <i
                                className={`fas ${service?.icon} text-4xl text-[#259a43] mb-4`}
                            ></i>
                            <h3 className="text-xl font-bold mb-4">
                                {service?.title}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {service?.desc}
                            </p>
                            <button className="!rounded-button text-[#259a43] border border-[#259a43] px-4 py-2 hover:bg-green-50 transition-colors">
                                Saiba Mais
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
