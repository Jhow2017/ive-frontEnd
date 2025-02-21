'use client';
import React from 'react';

const navigationItems = ['sobre', 'servicos', 'missao', 'doacao', 'contato'];

const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Navigation = () => {
    return (
        <nav className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
                <a
                    key={item}
                    href={`#${item}`}
                    className="text-gray-600 hover:text-indigo-600 transition-all duration-300"
                    onClick={(e) => handleScrollTo(e, `#${item}`)}
                >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
            ))}
        </nav>
    );
};

export default Navigation;
