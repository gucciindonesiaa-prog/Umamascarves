import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://www.umamascarves.co.id/wp-content/uploads/2025/02/39042006-d280-4cc6-b5ef-8bd8ae98b21e.jpg",
    content: null
  },
  {
    id: 2,
    image: "https://www.umamascarves.co.id/wp-content/uploads/2025/02/banner-1-2.jpg",
    content: null
  },
  {
    id: 3,
    image: "https://www.umamascarves.co.id/wp-content/uploads/2024/07/banner-umamascarves-new-2.jpg",
    content: null
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide effect (3 seconds)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-[220px] sm:h-[400px] md:h-[600px] overflow-hidden bg-white group">
      {/* Slides Container */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={`Slide ${slide.id}`} 
            className="w-full h-full object-contain md:object-cover object-center"
          />
        </div>
      ))}

      {/* Navigation Arrows - Hidden on Mobile */}
      <button 
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white text-white hover:text-primary p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10 pointer-events-auto"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white text-white hover:text-primary p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10 pointer-events-auto"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10 pointer-events-auto">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full transition-all ${
              index === currentSlide ? 'bg-secondary w-4 md:w-8' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;