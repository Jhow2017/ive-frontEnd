import React from 'react';
import StatsChart from './stats-chart';

const stats = [
    {
        number: '12+',
        label: 'Anos de Experiência',
    },
    {
        number: '10k+',
        label: 'Pacientes Atendidos',
    },
    {
        number: '50+',
        label: 'Profissionais',
    },
    {
        number: '95%',
        label: 'Satisfação',
    },
];

const StatsSection = () => {
    return (
        <section className="py-20 bg-gray-50 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            Nossa História em Números
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Ao longo dos anos, temos orgulho de ter feito a
                            diferença na vida de milhares de pessoas através de
                            nosso atendimento humanizado e profissional.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            {stats?.map((stat, index) => (
                                <div key={index}>
                                    <p className="text-4xl font-bold text-[#259a43]">
                                        {stat?.number}
                                    </p>
                                    <p className="text-gray-600">
                                        {stat?.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <StatsChart />
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
