import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Globe } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    { 
      title: "Intrasphere Dashboard", 
      cat: "Business Automation", 
      img: "https://www.image2url.com/r2/default/images/1778576027618-16bc867c-2f32-4747-b1a5-06566cd1037b.jpeg" 
    },
    { 
      title: "Operations Hub", 
      cat: "Enterprise Solution", 
      img: "https://cdn.corenexis.com/view/9173371720" 
    },
    { 
      title: "Secure Portal", 
      cat: "AI Integration", 
      img: "https://cdn.corenexis.com/files/c/9644282720.png" 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="portfolio" className="py-24 bg-grid overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Our Projects</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full" />
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden glass-card border-white/10 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img 
                src={projects[currentIndex].img} 
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=60';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-xs text-primary-neon font-bold uppercase tracking-[0.3em] mb-2">{projects[currentIndex].cat}</div>
                  <h3 className="text-3xl lg:text-5xl font-black text-white mb-2 uppercase tracking-tighter">{projects[currentIndex].title}</h3>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="absolute top-8 right-8 flex gap-2">
            {projects.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/20'}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
