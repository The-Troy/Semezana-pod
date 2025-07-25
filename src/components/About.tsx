import React from 'react';
import { User, Heart, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-600">SEMEZANA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A bi-weekly conversation series that brings together diverse voices 
            to discuss topics that matter, inspire change, and build meaningful connections.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <Heart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              SEMEZANA exists to create a platform where meaningful conversations happen. 
              We believe that through open dialogue, shared experiences, and diverse perspectives, 
              we can inspire positive change in our communities and beyond.
            </p>
          </div>
        </div>

        {/* Hosts Section */}
        <div id="hosts" className="pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Your Hosts</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate voices behind SEMEZANA, bringing you meaningful conversations every Thursday.
            </p>
          </div>
        </div>

        {/* Hosts */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Host */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                {/* 
                  DIRECTORY FOR HOST IMAGES: /public/hosts/
                  To add host photos, create a /public/hosts/ directory and add images
                  Example: /public/hosts/devlins.jpg
                  Then replace the User icon below with:
                  <img src="/hosts/devlins.jpg" alt="Devlins Jeremiah Muuo" className="w-full h-full object-cover rounded-full" />
                */}
                <img src="/Devlins.jpg" alt="Devlins Jeremiah Muuo" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Devlins Jeremiah Muuo
              </h3>
              <p className="text-orange-600 font-semibold mb-4">Host</p>
              <p className="text-gray-600 leading-relaxed">
                Passionate about meaningful conversations and community building, 
                Devlins brings energy and insight to every SEMEZANA session, 
                creating space for authentic dialogue and connection.
              </p>
            </div>
          </div>

          {/* Co-Host */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                {/* 
                  DIRECTORY FOR HOST IMAGES: /public/hosts/
                  To add Meek's photo, add the provided image to /public/hosts/ directory
                  Example: /public/hosts/meek.jpg
                  Then replace the User icon below with:
                  <img src="/hosts/meek.jpg" alt="Meek Amani" className="w-full h-full object-cover rounded-full" />
                */}
                <img src="/meek .jpg" alt="Meek Amani" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Meek Amani
              </h3>
              <p className="text-orange-600 font-semibold mb-4">Co-Host</p>
              <p className="text-gray-600 leading-relaxed">
                With a keen eye for detail and a heart for community, 
                Meek co-hosts SEMEZANA with wisdom and warmth, 
                ensuring every voice is heard and valued in our conversations.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <MessageCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Bi-weekly Sessions</h4>
              <p className="text-gray-600">
                Regular conversations every two weeks on Thursdays, creating consistency and community.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Live on Google Meet</h4>
              <p className="text-gray-600">
                Interactive sessions where participants can engage directly with hosts and guests.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Community-Driven Topics</h4>
              <p className="text-gray-600">
                We discuss what matters to our community, with topics suggested by our audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;