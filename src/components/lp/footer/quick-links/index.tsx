'use client';
import React from 'react';

const quickLinks = [
    { id: '#sobre', label: 'Sobre' },
    { id: '#servicos', label: 'Serviços' },
    { id: '#contato', label: 'Contato' },
];

const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
};

const QuickLinks = () => {
    return (
        <ul className="space-y-2">
            {quickLinks.map((link) => (
                <li key={link.id}>
                    <a
                        href={link.id}
                        className="text-gray-400 hover:text-white transition-all duration-300"
                        onClick={scrollToSection(link.id)}
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default QuickLinks;
