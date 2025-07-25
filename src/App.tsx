import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Episodes from './components/Episodes';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
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
}

export default App;