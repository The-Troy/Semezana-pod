import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-zinc-950/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center">
            {/* The white text contrasts much better, maybe we just use the colorful text like in Hero for now */}
            <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-yellow to-brand-red">
              SEMEZANA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-zinc-300 hover:text-white font-medium transition-colors">
              Home
            </a>
            <a href="#episodes" className="text-zinc-300 hover:text-white font-medium transition-colors">
              Episodes
            </a>
            <a href="#about" className="text-zinc-300 hover:text-white font-medium transition-colors">
              About
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-zinc-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-zinc-900/95 backdrop-blur-md absolute w-full left-0 px-4 shadow-xl">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-zinc-300 hover:text-brand-red font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#episodes"
                className="text-zinc-300 hover:text-brand-red font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Episodes
              </a>
              <a
                href="#about"
                className="text-zinc-300 hover:text-brand-red font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;