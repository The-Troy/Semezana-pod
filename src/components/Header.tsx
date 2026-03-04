import React, { useState } from 'react';
import { Menu, X, Mic } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-brand-yellow to-brand-red p-2 rounded-lg">
              <Mic className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-brand-dark">SEMEZANA</h1>
              <p className="text-sm text-brand-red font-medium">Conversations for Change</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              About
            </a>
            <a href="#hosts" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Hosts
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-red transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-brand-red font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-brand-red font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#hosts"
                className="text-gray-700 hover:text-brand-red font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hosts
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-brand-red font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;