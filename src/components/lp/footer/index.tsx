import React from 'react';
import QuickLinks from './quick-links';

const FooterSection = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <img
                            src="https://public.readdy.ai/ai/img_res/1015b57ff743d821d6774bd95255ec36.jpg"
                            alt="Instituto Logo"
                            className="h-12 mb-4"
                        />
                        <p className="text-gray-400">
                            Cuidando do seu bem-estar com excelência e
                            dedicação.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">
                            Links Rápidos
                        </h4>
                        <QuickLinks />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contato</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Av. Paulista, 1000</li>
                            <li>São Paulo - SP</li>
                            <li>(11) 3000-0000</li>
                            <li>contato@instituto.com.br</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">
                            Redes Sociais
                        </h4>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                <i className="fab fa-facebook text-2xl"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                <i className="fab fa-instagram text-2xl"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                <i className="fab fa-linkedin text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Instituto. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
