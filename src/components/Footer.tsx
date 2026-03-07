import { Mic, Mail, Calendar, Heart } from 'lucide-react';

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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zinc-500 text-sm mb-4 md:mb-0">
              © 2025 SEMEZANA. All rights reserved. Built with passion for meaningful conversations.
            </div>
            <div className="flex items-center space-x-6 text-sm text-zinc-500">
              <span>Hosted by Devlins Jeremiah Muuo & Meek Amani</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;