import React from 'react';

const ParallaxBanner = () => {
    return (
        <section
            className="relative h-[400px] bg-fixed bg-center bg-cover"
            style={{
                backgroundImage: `url('https://public.readdy.ai/ai/img_res/5542923d4eaa5e28279c05212ecba2ec.jpg')`,
            }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center justify-center text-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Transformando Vidas com Excelência
                    </h2>
                    <p className="text-xl text-white mb-8 max-w-2xl">
                        Nossa dedicação à saúde e bem-estar tem impactado
                        positivamente milhares de vidas ao longo dos anos
                    </p>
                    <button className="!rounded-button bg-white text-[#259a43] px-8 py-3 text-lg hover:bg-gray-100 transition-colors">
                        Agende sua Consulta
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ParallaxBanner;
