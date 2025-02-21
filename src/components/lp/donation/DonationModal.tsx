'use client';
import React from 'react';

type DonationModalProps = {
    showDonateModal: boolean;
    setShowDonateModal: (show: boolean) => void;
};

const DonationModal = ({
    showDonateModal,
    setShowDonateModal,
}: DonationModalProps) => {
    if (!showDonateModal) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <h3 className="text-2xl font-bold mb-4">Faça sua Doação</h3>
                <p className="text-gray-600 mb-6">
                    Sua contribuição ajuda a manter nossos projetos sociais e
                    permite que mais pessoas tenham acesso aos nossos serviços.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <button className="!rounded-button border border-indigo-600 px-4 py-2 hover:bg-indigo-50">
                        R$ 50
                    </button>
                    <button className="!rounded-button border border-indigo-600 px-4 py-2 hover:bg-indigo-50">
                        R$ 100
                    </button>
                    <button className="!rounded-button border border-indigo-600 px-4 py-2 hover:bg-indigo-50">
                        R$ 200
                    </button>
                </div>
                <button className="!rounded-button w-full bg-[#259a43] text-white px-6 py-3 hover:bg-[#1c7a33] mb-4">
                    Doar Agora
                </button>
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={() => setShowDonateModal(false)}
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};

export default DonationModal;
