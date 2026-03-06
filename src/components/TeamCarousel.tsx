import React, { useState, useEffect, useCallback, KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// We add a third placeholder host to make the 3D carousel effect work properly
const teamMembers = [
    {
        id: 'host-1',
        name: 'Devlins Jeremiah Muuo',
        role: 'Host',
        image: '/Devlins.jpg',
    },
    {
        id: 'host-2',
        name: 'Meek Amani',
        role: 'Co-Host',
        image: '/meek_new.jpg',
    },
];

const TeamCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    }, []);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
    }, []);

    const goToSlide = (index: number) => {
        setActiveIndex(index);
    };

    // Keyboard navigation
    const handleKeyDown = useCallback(
        (e: KeyboardEvent | globalThis.KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        },
        [nextSlide, prevSlide]
    );

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown as any);
        return () => {
            window.removeEventListener('keydown', handleKeyDown as any);
        };
    }, [handleKeyDown]);

    // Auto-play
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [isHovered, nextSlide]);

    return (
        <div
            className="relative w-full overflow-hidden bg-[#fdfaf7] py-24 flex items-center justify-center font-sans"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Title Mask */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <h2 className="text-[15vw] font-black leading-none text-[#8c6239] opacity-10 uppercase tracking-tighter mix-blend-multiply text-center">
                    OUR TEAM
                </h2>
            </div>

            <div className="relative w-full max-w-5xl mx-auto px-4 perspective-[1200px] flex items-center justify-center h-[550px] z-10">
                <div className="relative w-full h-full transform-style-preserve-3d flex justify-center items-center">
                    {teamMembers.map((member, index) => {
                        // Calculate relative position based on activeIndex
                        let offset = index - activeIndex;

                        // Handle wrap-around for smooth infinite effect (assuming at least 3 items)
                        if (offset < -1) offset += teamMembers.length;
                        if (offset > 1) offset -= teamMembers.length;

                        const isCenter = offset === 0;
                        const isLeft = offset === -1;
                        const isRight = offset === 1;
                        // Any other card is hidden out of view in the back
                        const isHidden = !isCenter && !isLeft && !isRight;

                        // Dynamic inline styles for the scale, translateZ, and translateX
                        // Using the requested cubic-bezier animation in the CSS transition
                        const cardStyle: React.CSSProperties = {
                            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            transform: isCenter
                                ? 'translateX(0px) translateZ(50px) scale(1.1)'
                                : isLeft
                                    ? 'translateX(-30%) translateZ(-150px) scale(0.85)'
                                    : isRight
                                        ? 'translateX(30%) translateZ(-150px) scale(0.85)'
                                        : 'translateX(0px) translateZ(-300px) scale(0.5)',
                            opacity: isHidden ? 0 : 1,
                            zIndex: isCenter ? 30 : isHidden ? 0 : 10,
                            pointerEvents: isHidden ? 'none' : 'auto',
                        };

                        const imageFilterClass = isCenter
                            ? 'filter-none'
                            : 'sepia-[.60] brightness-90 cursor-pointer';

                        return (
                            <div
                                key={member.id}
                                style={cardStyle}
                                className="absolute w-[300px] h-[400px] sm:w-[350px] sm:h-[450px] flex flex-col items-center justify-end rounded-2xl shadow-2xl overflow-hidden bg-white/50 backdrop-blur-sm group"
                                onClick={() => !isCenter && goToSlide(index)}
                            >
                                {/* Image Background */}
                                <div
                                    className={`absolute inset-0 bg-cover bg-center transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${imageFilterClass}`}
                                    style={{ backgroundImage: `url(${member.image})` }}
                                />

                                {/* Text Gradient Overlay - Only fully visible on center card */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t from-[#8c6239]/90 via-[#8c6239]/20 to-transparent transition-opacity duration-[800ms] ${isCenter ? 'opacity-100' : 'opacity-0'
                                        }`}
                                />

                                {/* Member Info Text - Fades out/in during transitions */}
                                <div
                                    className={`relative z-20 w-full text-center p-6 transition-all duration-[600ms] delay-100 ${isCenter
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-8 opacity-0'
                                        }`}
                                >
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#fdfaf7]/90 font-medium uppercase tracking-wider text-sm">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation Contols */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-40">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#8c6239] text-[#fdfaf7] hover:bg-[#735030] transition-colors shadow-lg"
                        aria-label="Previous team member"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-40">
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#8c6239] text-[#fdfaf7] hover:bg-[#735030] transition-colors shadow-lg"
                        aria-label="Next team member"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-40">
                    {teamMembers.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                ? 'bg-[#8c6239] scale-125'
                                : 'bg-[#8c6239]/30 hover:bg-[#8c6239]/50'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamCarousel;
