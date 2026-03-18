import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-zinc-950/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Flexible Container */}
        <div className="flex justify-between items-center min-h-[72px]">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="SEMEZANA Logo" className="h-10 w-10 object-cover rounded-full shadow-lg" />
            <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-yellow to-brand-red">
              SEMEZANA
            </span>
          </div>

          {/* Desktop Navigation (min 769px layout per desktop rules) */}
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#home" className="flex items-center justify-center px-4 min-h-[44px] min-w-[44px] text-zinc-300 hover:text-white font-medium transition-colors text-base">
              Home
            </a>
            <a href="#episodes" className="flex items-center justify-center px-4 min-h-[44px] min-w-[44px] text-zinc-300 hover:text-white font-medium transition-colors text-base">
              Episodes
            </a>
            <a href="#about" className="flex items-center justify-center px-4 min-h-[44px] min-w-[44px] text-zinc-300 hover:text-white font-medium transition-colors text-base">
              About
            </a>
          </nav>

          {/* Mobile menu button (< 768px layout) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center p-2 min-h-[44px] min-w-[44px] text-zinc-300 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Collapsible Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden absolute w-full left-0 bg-zinc-900/95 backdrop-blur-md border-t border-white/10 shadow-xl"
            >
              <nav className="flex flex-col px-4 py-4 space-y-2">
                <a
                  href="#home"
                  className="flex items-center px-4 min-h-[44px] text-zinc-300 hover:text-brand-red font-medium transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#episodes"
                  className="flex items-center px-4 min-h-[44px] text-zinc-300 hover:text-brand-red font-medium transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Episodes
                </a>
                <a
                  href="#about"
                  className="flex items-center px-4 min-h-[44px] text-zinc-300 hover:text-brand-red font-medium transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;