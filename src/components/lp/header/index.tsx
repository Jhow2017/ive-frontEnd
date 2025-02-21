import React from 'react';
import Navigation from './navigation';

const HeaderSection = () => {
    return (
        <header className="fixed w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                <div className="flex items-center space-x-8">
                    <img
                        src="https://public.readdy.ai/ai/img_res/df28edf5a91a8fa91b9fc8b7d634977f.jpg"
                        alt="Instituto Logo"
                        className="h-12"
                    />
                    <Navigation />
                </div>
                <button className="!rounded-button bg-[#259a43] text-white px-6 py-2 hover:bg-[#1c7a33] transition-colors scroll-m-0">
                    Agende uma Consulta
                </button>
            </div>
        </header>
    );
};

export default HeaderSection;
