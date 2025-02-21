'use client';
import React from 'react';

type DonationOptionsProps = {
    setShowDonateModal: (show: boolean) => void;
};

const donationValues = [{ value: 50 }, { value: 100 }, { value: 200 }];

const DonationOptions = ({ setShowDonateModal }: DonationOptionsProps) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 mb-8">
                {donationValues.map((donation, index) => (
                    <div
                        key={index}
                        className="text-center p-6 border border-[#259a43] rounded-lg hover:bg-green-50 cursor-pointer"
                    >
                        <p className="text-2xl font-bold text-[#259a43] mb-2">
                            R$ {donation.value}
                        </p>
                        <p className="text-sm text-gray-600">Doação Mensal</p>
                    </div>
                ))}
            </div>
            <button
                onClick={() => setShowDonateModal(true)}
                className="!rounded-button bg-[#259a43] text-white px-8 py-3 text-lg hover:bg-[#1c7a33] transition-colors"
            >
                Doar Agora
            </button>
        </>
    );
};

export default DonationOptions;
