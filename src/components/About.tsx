import { Heart, MessageCircle } from 'lucide-react';
import TeamCarousel from './TeamCarousel';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-brand-dark">SEMEZANA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A bi-weekly conversation series that brings together diverse voices
            to discuss topics that matter, inspire change, and build meaningful connections.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-brand-yellow/10 to-brand-red/10 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <Heart className="h-12 w-12 text-brand-red mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              SEMEZANA exists to create a platform where meaningful conversations happen.
              We believe that through open dialogue, shared experiences, and diverse perspectives,
              we can inspire positive change in our communities and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* 3D Hosts Section (Full Width layout wrapper inside the carousel itself) */}
      <div id="hosts">
        <div className="text-center mb-2 mt-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">The Team</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The passionate voices behind SEMEZANA, bringing you meaningful conversations every Thursday.
          </p>
        </div>
        <TeamCarousel />
      </div>

      {/* What We Do */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-12">
          <MessageCircle className="h-12 w-12 text-brand-red mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-brand-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-brand-red">1</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Bi-weekly Sessions</h4>
            <p className="text-gray-600">
              Regular conversations every two weeks on Thursdays, creating consistency and community.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-brand-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-brand-red">2</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Live on Google Meet</h4>
            <p className="text-gray-600">
              Interactive sessions where participants can engage directly with hosts and guests.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-brand-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-brand-red">3</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Community-Driven Topics</h4>
            <p className="text-gray-600">
              We discuss what matters to our community, with topics suggested by our audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;