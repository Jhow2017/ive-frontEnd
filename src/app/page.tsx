'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import * as echarts from 'echarts';

const App: React.FC = () => {
    const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
    const [showDonateModal, setShowDonateModal] = useState(false);
    const statsChartRef = useRef<HTMLDivElement>(null);

    const initStatsChart = () => {
        if (statsChartRef.current) {
            const chart = echarts.init(statsChartRef.current);
            const option = {
                animation: false,
                tooltip: {
                    trigger: 'axis',
                },
                xAxis: {
                    type: 'category',
                    data: ['2020', '2021', '2022', '2023', '2024'],
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        data: [820, 932, 1250, 1600, 2100],
                        type: 'line',
                        smooth: true,
                        name: 'Pacientes Atendidos',
                        color: '#4F46E5',
                    },
                ],
            };
            chart.setOption(option);
        }
    };
    useEffect(() => {
        initStatsChart();
    }, []);
    const services = [
        {
            title: 'Psicologia',
            icon: 'fa-brain',
            desc: 'Atendimento psicológico para crianças e adultos',
        },
        {
            title: 'Neuropsicologia',
            icon: 'fa-neurons',
            desc: 'Avaliação e reabilitação neuropsicológica',
        },
        {
            title: 'Fonoaudiologia',
            icon: 'fa-comments',
            desc: 'Tratamento de distúrbios da fala e linguagem',
        },
        {
            title: 'Fisioterapia',
            icon: 'fa-hand-holding-heart',
            desc: 'Reabilitação física e motora',
        },
        {
            title: 'Terapia Ocupacional',
            icon: 'fa-hands-holding-child',
            desc: 'Desenvolvimento de habilidades diárias',
        },
        {
            title: 'Psicopedagogia',
            icon: 'fa-book-reader',
            desc: 'Suporte ao processo de aprendizagem',
        },
    ];
    const faqs = [
        {
            q: 'Como posso agendar uma consulta?',
            a: 'Você pode agendar através do nosso telefone ou preenchendo o formulário de contato.',
        },
        {
            q: 'Quais convênios são aceitos?',
            a: 'Trabalhamos com os principais convênios: Unimed, Bradesco Saúde, SulAmérica e outros.',
        },
        {
            q: 'Qual o horário de funcionamento?',
            a: 'Funcionamos de segunda a sexta, das 8h às 18h.',
        },
        {
            q: 'Como funciona a primeira consulta?',
            a: 'Na primeira consulta realizamos uma avaliação completa para definir o melhor tratamento.',
        },
    ];
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed w-full bg-white shadow-md z-50">
                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <img
                            src="https://public.readdy.ai/ai/img_res/df28edf5a91a8fa91b9fc8b7d634977f.jpg"
                            alt="Instituto Logo"
                            className="h-12"
                        />
                        <nav className="hidden md:flex space-x-6">
                            <a
                                href="#sobre"
                                className="text-gray-600 hover:text-indigo-600 transition-all duration-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .querySelector('#sobre')
                                        ?.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                                }}
                            >
                                Sobre
                            </a>
                            <a
                                href="#servicos"
                                className="text-gray-600 hover:text-indigo-600 transition-all duration-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .querySelector('#servicos')
                                        ?.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                                }}
                            >
                                Serviços
                            </a>
                            <a
                                href="#missao"
                                className="text-gray-600 hover:text-indigo-600 transition-all duration-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .querySelector('#missao')
                                        ?.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                                }}
                            >
                                Missão
                            </a>
                            <a
                                href="#doacao"
                                className="text-gray-600 hover:text-indigo-600 transition-all duration-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .querySelector('#doacao')
                                        ?.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                                }}
                            >
                                Doações
                            </a>
                            <a
                                href="#contato"
                                className="text-gray-600 hover:text-indigo-600 transition-all duration-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .querySelector('#contato')
                                        ?.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                                }}
                            >
                                Contato
                            </a>
                        </nav>
                    </div>
                    <button className="!rounded-button bg-[#259a43] text-white px-6 py-2 hover:bg-[#1c7a33] transition-colors scroll-m-0">
                        Agende uma Consulta
                    </button>
                </div>
            </header>
            {/* Hero Section */}
            <section className="pt-20 relative h-[600px]">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    className="h-full"
                >
                    <SwiperSlide>
                        <div className="relative h-full flex items-center overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src="https://public.readdy.ai/ai/img_res/8736af9e4257f36746111cb35862aae4.jpg"
                                    alt="Hero Background 1"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/30"></div>
                            </div>
                            <div className="max-w-7xl mx-auto px-4 relative">
                                <div className="max-w-2xl">
                                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                        Cuidando do seu bem-estar com excelência
                                    </h1>
                                    <p className="text-xl text-gray-700 mb-8">
                                        Oferecemos atendimento multidisciplinar
                                        personalizado para você e sua família,
                                        com uma equipe de profissionais
                                        altamente qualificados.
                                    </p>
                                    <button className="!rounded-button bg-[#259a43] text-white px-8 py-3 text-lg hover:bg-[#1c7a33] transition-colors">
                                        Agende uma Consulta
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative h-full flex items-center overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src="https://public.readdy.ai/ai/img_res/287d6a0a8cf6ada648c92fb3328c42ce.jpg"
                                    alt="Hero Background 2"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/30"></div>
                            </div>
                            <div className="max-w-7xl mx-auto px-4 relative">
                                <div className="max-w-2xl">
                                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                        Tecnologia e Inovação em Saúde
                                    </h1>
                                    <p className="text-xl text-gray-700 mb-8">
                                        Equipamentos de última geração e
                                        profissionais especializados para
                                        garantir os melhores resultados no seu
                                        tratamento.
                                    </p>
                                    <button className="!rounded-button bg-[#259a43] text-white px-8 py-3 text-lg hover:bg-[#1c7a33] transition-colors">
                                        Conheça Nossa Estrutura
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative h-full flex items-center overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src="https://public.readdy.ai/ai/img_res/784f7318b921d99a613e3daaf5450c7e.jpg"
                                    alt="Hero Background 3"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/30"></div>
                            </div>
                            <div className="max-w-7xl mx-auto px-4 relative">
                                <div className="max-w-2xl">
                                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                        Atendimento Humanizado
                                    </h1>
                                    <p className="text-xl text-gray-700 mb-8">
                                        Nossa equipe está comprometida em
                                        oferecer um cuidado personalizado e
                                        acolhedor para cada paciente e sua
                                        família.
                                    </p>
                                    <button className="!rounded-button bg-[#259a43] text-white px-8 py-3 text-lg hover:bg-[#1c7a33] transition-colors">
                                        Conheça Nossa Equipe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            {/* Services Section */}
            <section id="servicos" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Nossos Serviços
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <i
                                    className={`fas ${service.icon} text-4xl text-[#259a43] mb-4`}
                                ></i>
                                <h3 className="text-xl font-bold mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {service.desc}
                                </p>
                                <button className="!rounded-button text-[#259a43] border border-[#259a43] px-4 py-2 hover:bg-green-50 transition-colors">
                                    Saiba Mais
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* About Section */}
            <section id="sobre" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">
                                Sobre Nós
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Desde 2010, o Instituto tem se dedicado a
                                proporcionar cuidados de saúde excepcionais,
                                combinando expertise profissional com um
                                atendimento verdadeiramente humanizado. Nossa
                                abordagem multidisciplinar integrada permite que
                                cada paciente receba um tratamento personalizado
                                e abrangente.
                            </p>
                            <p className="text-gray-600 mb-8">
                                Com uma equipe de mais de 30 profissionais
                                altamente qualificados e instalações modernas,
                                nos empenhamos em oferecer o que há de mais
                                avançado em tratamentos terapêuticos, sempre
                                priorizando o bem-estar e a recuperação de
                                nossos pacientes.
                            </p>
                            <button className="!rounded-button bg-[#259a43] text-white px-6 py-3 hover:bg-[#1c7a33] transition-colors">
                                Conheça Nossa História
                            </button>
                        </div>
                        <div className="relative">
                            <img
                                src="https://public.readdy.ai/ai/img_res/9ed2c8c3f5e61ea40521bd7485b61527.jpg"
                                alt="Sobre o Instituto"
                                className="rounded-lg shadow-xl"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg">
                                <p className="text-4xl font-bold text-[#259a43]">
                                    12+
                                </p>
                                <p className="text-gray-600">
                                    Anos de Excelência
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials Section */}
            <section className="py-20 bg-green-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        O Que Dizem Nossos Pacientes
                    </h2>
                    <Swiper
                        modules={[Pagination, Autoplay, EffectFade]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        effect="fade"
                        className="testimonial-slider"
                    >
                        <SwiperSlide>
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <div className="flex items-center mb-6">
                                    <img
                                        src="https://public.readdy.ai/ai/img_res/2eb355ae44774969d75d494b1b41ed7e.jpg"
                                        alt="Paciente 1"
                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="text-xl font-bold">
                                            Isabella Martins
                                        </h4>
                                        <p className="text-gray-600">
                                            Empresária
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-lg italic">
                                    "O atendimento no Instituto superou todas as
                                    minhas expectativas. A equipe
                                    multidisciplinar trabalhou de forma
                                    integrada no meu tratamento, e os resultados
                                    foram surpreendentes. Me sinto uma nova
                                    pessoa!"
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <div className="flex items-center mb-6">
                                    <img
                                        src="https://public.readdy.ai/ai/img_res/962cdb7f6599bcd3ff743b9dfacf30ce.jpg"
                                        alt="Paciente 2"
                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="text-xl font-bold">
                                            Ricardo Mendes
                                        </h4>
                                        <p className="text-gray-600">
                                            Professor Universitário
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-lg italic">
                                    "A dedicação e profissionalismo da equipe
                                    são excepcionais. O ambiente acolhedor e o
                                    tratamento personalizado fizeram toda a
                                    diferença na minha recuperação."
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <div className="flex items-center mb-6">
                                    <img
                                        src="https://public.readdy.ai/ai/img_res/141ca1cd5c53efce8d7808a5831fde29.jpg"
                                        alt="Paciente 3"
                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="text-xl font-bold">
                                            Carolina Santos
                                        </h4>
                                        <p className="text-gray-600">Atleta</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-lg italic">
                                    "Encontrei no Instituto não apenas
                                    profissionais competentes, mas uma equipe
                                    que realmente se importa com o bem-estar dos
                                    pacientes. O acompanhamento é completo e os
                                    resultados são visíveis."
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            {/* Partnership Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">
                                Seja Nosso Parceiro
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Junte-se a nós na missão de proporcionar saúde e
                                bem-estar de qualidade para mais pessoas.
                                Buscamos parcerias estratégicas com organizações
                                que compartilham nossos valores e compromisso
                                com a excelência.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center">
                                    <i className="fas fa-check-circle text-[#259a43] mr-3"></i>
                                    <span className="text-gray-600">
                                        Acesso a uma rede de profissionais
                                        qualificados
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check-circle text-[#259a43] mr-3"></i>
                                    <span className="text-gray-600">
                                        Programas de benefícios exclusivos
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check-circle text-[#259a43] mr-3"></i>
                                    <span className="text-gray-600">
                                        Condições especiais para colaboradores
                                    </span>
                                </li>
                            </ul>
                            <button className="!rounded-button bg-[#259a43] text-white px-6 py-3 hover:bg-[#1c7a33] transition-colors">
                                Seja um Parceiro
                            </button>
                        </div>
                        <div className="relative">
                            <img
                                src="https://public.readdy.ai/ai/img_res/604109ab5d17757874c63c18e9b81d71.jpg"
                                alt="Parceria"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Stats Section */}
            <section className="py-20 bg-gray-50 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">
                                Nossa História em Números
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Ao longo dos anos, temos orgulho de ter feito a
                                diferença na vida de milhares de pessoas através
                                de nosso atendimento humanizado e profissional.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-[#259a43]">
                                        12+
                                    </p>
                                    <p className="text-gray-600">
                                        Anos de Experiência
                                    </p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-indigo-600">
                                        15k+
                                    </p>
                                    <p className="text-gray-600">
                                        Pacientes Atendidos
                                    </p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-indigo-600">
                                        30+
                                    </p>
                                    <p className="text-gray-600">
                                        Profissionais
                                    </p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-indigo-600">
                                        98%
                                    </p>
                                    <p className="text-gray-600">Satisfação</p>
                                </div>
                            </div>
                        </div>
                        <div ref={statsChartRef} className="h-[400px]"></div>
                    </div>
                </div>
            </section>
            {/* Mission Section */}
            <section id="missao" className="py-20 bg-green-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center p-8 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:transform hover:-translate-y-2">
                            <i className="fas fa-heart text-4xl text-indigo-600 mb-6"></i>
                            <h3 className="text-2xl font-bold mb-4">Missão</h3>
                            <p className="text-gray-600">
                                Proporcionar atendimento de excelência e
                                transformar positivamente a vida das pessoas
                                através de cuidados integrados e humanizados.
                            </p>
                        </div>
                        <div className="text-center p-8 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:transform hover:-translate-y-2">
                            <i className="fas fa-eye text-4xl text-indigo-600 mb-6"></i>
                            <h3 className="text-2xl font-bold mb-4">Visão</h3>
                            <p className="text-gray-600">
                                Ser referência em atendimento multidisciplinar,
                                reconhecidos pela excelência e inovação em
                                nossas práticas.
                            </p>
                        </div>
                        <div className="text-center p-8 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:transform hover:-translate-y-2">
                            <i className="fas fa-star text-4xl text-indigo-600 mb-6"></i>
                            <h3 className="text-2xl font-bold mb-4">Valores</h3>
                            <p className="text-gray-600">
                                Ética, compromisso, respeito, inovação e
                                excelência em tudo o que fazemos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Parallax Banner */}
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
            {/* Partners Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Nossos Parceiros
                    </h2>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={4}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        className="partner-slider"
                    >
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={`https://readdy.ai/api/search-image?query=modern minimalist medical company logo design professional healthcare business symbol on white background&width=200&height=100&orientation=landscape&flag=c9df8dad7a00f2a7699034b8419a6189`}
                                    alt={`Partner ${index}`}
                                    className="w-full h-24 object-contain"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="py-20 bg-gray-50 scroll-mt-20">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Dúvidas Frequentes
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow"
                            >
                                <button
                                    className="w-full px-6 py-4 text-left flex justify-between items-center"
                                    onClick={() =>
                                        setSelectedFaq(
                                            selectedFaq === index ? null : index
                                        )
                                    }
                                >
                                    <span className="font-medium">{faq.q}</span>
                                    <i
                                        className={`fas fa-chevron-down transition-transform ${
                                            selectedFaq === index
                                                ? 'rotate-180'
                                                : ''
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
                </div>
            </section>
            {/* Contact Section */}
            {/* Donation Section */}
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
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="text-center p-6 border border-[#259a43] rounded-lg hover:bg-green-50 cursor-pointer">
                                    <p className="text-2xl font-bold text-[#259a43] mb-2">
                                        R$ 50
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Doação Mensal
                                    </p>
                                </div>
                                <div className="text-center p-6 border border-[#259a43] rounded-lg hover:bg-green-50 cursor-pointer">
                                    <p className="text-2xl font-bold text-[#259a43] mb-2">
                                        R$ 100
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Doação Mensal
                                    </p>
                                </div>
                                <div className="text-center p-6 border border-[#259a43] rounded-lg hover:bg-green-50 cursor-pointer">
                                    <p className="text-2xl font-bold text-[#259a43] mb-2">
                                        R$ 200
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Doação Mensal
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowDonateModal(true)}
                                className="!rounded-button bg-[#259a43] text-white px-8 py-3 text-lg hover:bg-[#1c7a33] transition-colors"
                            >
                                Doar Agora
                            </button>
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
                            <h3 className="text-2xl font-bold mb-6">
                                Localização
                            </h3>
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
            {/* Footer */}
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
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#sobre"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .querySelector('#sobre')
                                                ?.scrollIntoView({
                                                    behavior: 'smooth',
                                                });
                                        }}
                                    >
                                        Sobre
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#servicos"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .querySelector('#servicos')
                                                ?.scrollIntoView({
                                                    behavior: 'smooth',
                                                });
                                        }}
                                    >
                                        Serviços
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contato"
                                        className="text-gray-400 hover:text-white transition-all duration-300"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .querySelector('#contato')
                                                ?.scrollIntoView({
                                                    behavior: 'smooth',
                                                });
                                        }}
                                    >
                                        Contato
                                    </a>
                                </li>
                            </ul>
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
                        <p>
                            &copy; 2025 Instituto. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </footer>
            {showDonateModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full">
                        <h3 className="text-2xl font-bold mb-4">
                            Faça sua Doação
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Sua contribuição ajuda a manter nossos projetos
                            sociais e permite que mais pessoas tenham acesso aos
                            nossos serviços.
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
            )}
        </div>
    );
};
export default App;
