
import { AnimatedHero } from './ui/animated-hero-section-1';
import { Button } from './ui/button';

const Hero = () => {
  const navLinks = [
    { label: "Episodes", href: "#episodes" },
    { label: "Community", href: "#" },
    { label: "About", href: "#" },
  ];

  const handleJoinClick = () => {
    // Scroll to episodes section or open external link
    document.getElementById('episodes')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSuggestClick = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatedHero
      // Using an Unsplash image of a community/group setting
      backgroundImageUrl="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
      logo={
        <div className="flex items-center gap-2">
          {/* Using a smaller version of the logo or just text if the image is too complex for this top bar */}
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-yellow to-brand-red">
            SEMEZANA
          </span>
        </div>
      }
      navLinks={navLinks}
      topRightAction={
        <Button
          className="bg-brand-red hover:bg-brand-dark text-white border-none"
          onClick={handleJoinClick}
        >
          Join Session
        </Button>
      }
      title="Conversations for Change"
      description="Join us bi-weekly for meaningful conversations that inspire change, challenge perspectives, and build community. Every other week, we dive deep into topics that matter."
      ctaButton={{
        text: "Join Next Session",
        onClick: handleJoinClick,
      }}
      secondaryCta={{
        text: "Suggest a Topic",
        onClick: handleSuggestClick,
      }}
      className="!min-h-[85vh]" // Slightly shorter than full screen so we can see content below
    />
  );
};

export default Hero;