import React from 'react';
import FaqItem from './faq-item';

const faqs = [
    {
        q: 'Como posso agendar uma consulta?',
        a: 'Você pode agendar através do nosso telefone ou preenchendo o formulário de contato.',
    },
    {
        q: 'Quais convênios são aceitos?',
        a: 'Trabalhamos com os principais convênios: Unimed, Bradesco Saúde, SulAmérica e outros.',
    },
    {
        q: 'Qual o horário de funcionamento?',
        a: 'Funcionamos de segunda a sexta, das 8h às 18h.',
    },
    {
        q: 'Como funciona a primeira consulta?',
        a: 'Na primeira consulta realizamos uma avaliação completa para definir o melhor tratamento.',
    },
];

const FaqSection = () => {
    return (
        <section className="py-20 bg-gray-50 scroll-mt-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Dúvidas Frequentes
                </h2>
                <FaqItem faqs={faqs} />
            </div>
        </section>
    );
};

export default FaqSection;
