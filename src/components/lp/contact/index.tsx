import React from 'react';

const ContactSection = () => {
    return (
        <section id="contato" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Entre em Contato
                        </h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#259a43]"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#259a43]"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Mensagem
                                </label>
                                <textarea className="w-full px-4 py-2 border rounded-lg h-32 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#259a43] resize-none"></textarea>
                            </div>
                            <button className="!rounded-button bg-[#259a43] text-white px-6 py-3 hover:bg-[#1c7a33] transition-colors">
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Localização</h3>
                        <p className="text-gray-600 mb-4">
                            Av. Paulista, 1000 - Bela Vista
                            <br />
                            São Paulo - SP, 01310-100
                        </p>
                        <p className="text-gray-600 mb-4">
                            <strong>Telefone:</strong> (11) 3000-0000
                            <br />
                            <strong>Email:</strong> contato@instituto.com.br
                        </p>
                        <div className="h-80 bg-gray-200 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
