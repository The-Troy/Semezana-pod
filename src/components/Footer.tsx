import { Mic, Mail, Calendar, Heart, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-brand-yellow to-brand-red p-2 rounded-lg">
                <Mic className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">SEMEZANA</h3>
                <p className="text-brand-yellow font-medium">Conversations for Change</p>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6 max-w-md">
              Join us bi-weekly for meaningful conversations that inspire change,
              challenge perspectives, and build community. Every conversation matters.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>Next session: Every other Thursday</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-zinc-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#episodes" className="text-zinc-400 hover:text-white transition-colors">
                  Episodes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get Involved</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-yellow" />
                <span className="text-zinc-400 text-sm">Suggest topics anytime</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-brand-yellow" />
                <span className="text-zinc-400 text-sm">Join live sessions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-brand-yellow" />
                <span className="text-zinc-400 text-sm">Be part of change</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-zinc-500 text-sm text-center lg:text-left">
              © 2025 SEMEZANA. All rights reserved. Built with passion for meaningful conversations.
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-5">
              <a href="https://www.instagram.com/s_emezana?igsh=MTh0NW5sdzJuYWF0Ng==" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#E31E24] transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@s_emezana?_r=1&_t=ZM-933xKnrG9Vr" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#E31E24] transition-colors" aria-label="TikTok">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.46.33-5.06 1.95-6.9 1.48-1.66 3.66-2.6 5.86-2.58l.05 4.26c-1.29.07-2.6.72-3.23 1.86-.68 1.1-.64 2.61.05 3.66.75 1.1 2.21 1.56 3.51 1.05 1.1-.42 1.81-1.49 1.86-2.67.09-3.95.05-7.91.04-11.86.01-1.46.01-2.92.01-4.38z" />
                </svg>
              </a>
              <a href="https://x.com/s_emezana?s=21" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#E31E24] transition-colors" aria-label="X / Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://youtube.com/@semezanalive?si=CWvlrvfKqJyTXabN" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#E31E24] transition-colors" aria-label="YouTube">
                <Youtube className="h-6 w-6" />
              </a>
            </div>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;