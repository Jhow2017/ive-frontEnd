import React from 'react';

//components
import FaqSection from 'ds/components/lp/faq';
import HeroSection from 'ds/components/lp/hero';
import StatsSection from 'ds/components/lp/stats';
import AboutSection from 'ds/components/lp/about';
import HeaderSection from 'ds/components/lp/header';
import FooterSection from 'ds/components/lp/footer';
import MissionSection from 'ds/components/lp/mission';
import ContactSection from 'ds/components/lp/contact';
import PartnersSection from 'ds/components/lp/partners';
import ServicesSection from 'ds/components/lp/services';
import DonationSection from 'ds/components/lp/donation';
import ParallaxBanner from 'ds/components/lp/parallax-banner';
import PartnershipSection from 'ds/components/lp/partnership';
import TestimonialsSection from 'ds/components/lp/testimonials';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <HeaderSection />

            {/* Hero Section */}
            <HeroSection />

            {/* Services Section */}
            <ServicesSection />

            {/* About Section */}
            <AboutSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Partnership Section */}
            <PartnershipSection />

            {/* Stats Section */}
            <StatsSection />

            {/* Mission Section */}
            <MissionSection />

            {/* Parallax Banner */}
            <ParallaxBanner />

            {/* Partners Section */}
            <PartnersSection />

            {/* FAQ Section */}
            <FaqSection />

            {/* Donation Section */}
            <DonationSection />

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <FooterSection />
        </div>
    );
};
export default App;
