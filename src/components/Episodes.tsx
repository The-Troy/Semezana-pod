import { Calendar, Clock } from 'lucide-react';

const Episodes = () => {
  // Upcoming episode data - you can replace this with real data
  const upcomingEpisode = {
    id: 1,
    title: "Climate Action in Our Communities",
    description: "Join us as we discuss practical ways to address climate change at the local level and how each of us can make a meaningful impact in our communities.",
    date: "2025-02-06",
    duration: "TBD",
    participants: 0,
    status: "upcoming"
  };

  return (
    <section id="episodes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Next <span className="text-brand-dark">Episode</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for our next meaningful conversation on Thursday.
          </p>
        </div>

        {/* Upcoming Episode */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-brand-red/20">
            <div className="p-8">
              {/* Episode Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-brand-yellow/10 text-brand-dark">
                  Upcoming
                </span>
              </div>

              {/* Episode Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {upcomingEpisode.title}
              </h3>

              {/* Episode Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {upcomingEpisode.description}
              </p>

              {/* Episode Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(upcomingEpisode.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Duration: {upcomingEpisode.duration}</span>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-brand-red text-white py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors">
                Join This Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Episodes;