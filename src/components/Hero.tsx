import { motion } from "framer-motion";
import { AuroraBackground } from './ui/aurora-background';
import { Button } from './ui/button';

const Hero = () => {
  const handleJoinClick = () => {
    document.getElementById('episodes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center px-4 max-w-4xl text-center"
      >
        <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
          Conversations for Change
        </div>
        <div className="font-light text-lg md:text-2xl text-neutral-200 py-2 leading-relaxed max-w-2xl mx-auto">
          Join us bi-weekly for meaningful conversations that inspire change, challenge perspectives, and build community.
          Every other week, we dive deep into topics that matter.
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Button
            size="lg"
            className="bg-white text-zinc-950 hover:bg-zinc-200 rounded-full font-semibold px-8 h-12 text-base"
            onClick={handleJoinClick}
          >
            Join Next Session
          </Button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;