import React from 'react';
import { Calendar, Users, Headphones } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-brand-yellow/10 to-brand-red/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-brand-dark">SEMEZANA</span>
              </h1>
              <p className="text-2xl text-gray-700 mt-4 font-medium">
                Conversations for Change
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Join us bi-weekly for meaningful conversations that inspire change,
              challenge perspectives, and build community. Every other week, we dive
              deep into topics that matter.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Calendar className="h-8 w-8 text-brand-red mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Bi-weekly</p>
                  <p className="font-semibold text-gray-900">Episodes</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Users className="h-8 w-8 text-brand-red mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Google Meet</p>
                  <p className="font-semibold text-gray-900">Live Sessions</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Headphones className="h-8 w-8 text-brand-red mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Podcast</p>
                  <p className="font-semibold text-gray-900">Format</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#episodes" className="bg-brand-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors shadow-lg text-center">
                Join Next Session
              </a>
              <a href="#contact" className="border-2 border-brand-red text-brand-red px-8 py-3 rounded-lg font-semibold hover:bg-brand-red hover:text-white transition-colors text-center">
                Suggest a Topic
              </a>
            </div>
          </div>

          {/* Image/Logo Section */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              {/* 
                DIRECTORY FOR IMAGES: /public/
                To change the logo image, replace the file in the /public/ directory
                Current logo path: /public/Semezana logo.jpg
                You can replace this with any image file and update the src below
              */}
              <img
                src="/Semezana logo.jpg"
                alt="SEMEZANA Logo"
                className="w-full h-64 object-contain rounded-lg"
              />
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                  Broadcasting live on Google Meet
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-yellow rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-red rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;