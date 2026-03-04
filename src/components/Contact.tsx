import React, { useState } from 'react';
import { Send, MessageSquare, Mail, Calendar, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    description: '',
    urgency: 'medium'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        topic: '',
        description: '',
        urgency: 'medium'
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Your topic suggestion has been received. We'll review it and consider it for an upcoming SEMEZANA session.
            </p>
            <div className="bg-brand-yellow/10 rounded-lg p-6">
              <p className="text-brand-dark">
                We typically respond within 48 hours. Keep an eye on your email for updates!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Suggest a <span className="text-brand-dark">Topic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a topic you'd like us to discuss on SEMEZANA? We'd love to hear from you!
            Your suggestions help shape our conversations and ensure we're talking about what matters most to our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-red/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-red p-2 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Topic Suggestions</h4>
                    <p className="text-gray-600 text-sm">
                      Share ideas for meaningful conversations
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-red p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Direct Contact</h4>
                    <p className="text-gray-600 text-sm">
                      Reach out to our hosts directly
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-red p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Join Sessions</h4>
                    <p className="text-gray-600 text-sm">
                      Participate in bi-weekly conversations
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Response Time:</strong> We typically review and respond to topic suggestions within 48 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="topic" className="block text-sm font-semibold text-gray-700 mb-2">
                  Suggested Topic *
                </label>
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  required
                  value={formData.topic}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="What topic would you like us to discuss?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">
                  Topic Priority
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent transition-colors"
                >
                  <option value="low">General Interest</option>
                  <option value="medium">Important to Community</option>
                  <option value="high">Urgent/Timely Topic</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Topic Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent transition-colors resize-none"
                  placeholder="Please provide more details about the topic you'd like us to discuss. Why is this important? What aspects should we focus on?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-red text-white py-4 rounded-lg font-semibold hover:bg-brand-dark transition-colors flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="h-5 w-5" />
                <span>Submit Topic Suggestion</span>
              </button>

              <p className="text-sm text-gray-500 mt-4 text-center">
                * Required fields. We respect your privacy and will only use your information to respond to your suggestion.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;