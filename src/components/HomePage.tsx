import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Episodes from './Episodes';
import Contact from './Contact';
import Footer from './Footer';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Navigation Header */}
            <Header />

            {/* Main Content Sections */}
            <main>
                {/* Hero Section - Landing area with main branding */}
                <Hero />

                {/* About Section - Information about SEMEZANA and hosts */}
                <About />

                {/* Episodes Section - Recent and upcoming episodes */}
                <Episodes />

                {/* Contact Section - Topic suggestion form */}
                <Contact />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomePage;
