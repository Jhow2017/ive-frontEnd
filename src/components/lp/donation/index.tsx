'use client';
import React from 'react';
import { useState } from 'react';
import DonationModal from './DonationModal';
import DonationOptions from './DonationOptions';

const DonationSection = () => {
    const [showDonateModal, setShowDonateModal] = useState(false);

    return (
        <>
            <section id="doacao" className="py-20 bg-green-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">
                                Faça a Diferença
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Sua doação ajuda a manter nossos projetos
                                sociais e permite que mais pessoas tenham acesso
                                aos nossos serviços de qualidade. Cada
                                contribuição faz a diferença na vida de quem
                                precisa.
                            </p>
                            <DonationOptions
                                setShowDonateModal={setShowDonateModal}
                            />
                        </div>
                        <div className="relative">
                            <img
                                src="https://public.readdy.ai/ai/img_res/8420024473446da74287989da55c92e2.jpg"
                                alt="Donation Impact"
                                className="rounded-lg shadow-xl"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg">
                                <p className="text-4xl font-bold text-[#259a43] mb-2">
                                    1.500+
                                </p>
                                <p className="text-gray-600">
                                    Vidas Impactadas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <DonationModal
                showDonateModal={showDonateModal}
                setShowDonateModal={setShowDonateModal}
            />
        </>
    );
};

export default DonationSection;
