'use client';
import React, { useState } from 'react';

type FaqItemProps = {
    faqs: Array<{
        q: string;
        a: string;
    }>;
};

const FaqItem = ({ faqs }: FaqItemProps) => {
    const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow">
                    <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center"
                        onClick={() =>
                            setSelectedFaq(selectedFaq === index ? null : index)
                        }
                    >
                        <span className="font-medium">{faq.q}</span>
                        <i
                            className={`fas fa-chevron-down transition-transform ${
                                selectedFaq === index ? 'rotate-180' : ''
                            }`}
                        ></i>
                    </button>
                    {selectedFaq === index && (
                        <div className="px-6 py-4 border-t">
                            <p className="text-gray-600">{faq.a}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FaqItem;
