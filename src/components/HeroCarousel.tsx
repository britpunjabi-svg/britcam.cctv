import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2000",
    title: "SOLAR ENERGY SOLUTIONS",
    subtitle: "Empowering Punjab with 1KV to 10KV Solar Panel Installations",
    cta: "Go Solar Today"
  },
  {
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2000",
    title: "ADVANCED SURVEILLANCE",
    subtitle: "4K AI-Powered CCTV Systems for Elite Security",
    cta: "Secure Your Property"
  },
  {
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=2000",
    title: "SMART HOME AUTOMATION",
    subtitle: "Control Your World with Precision and Ease",
    cta: "Experience Smart Living"
  }
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/60 to-brand-dark z-10" />
          <img
            src={slides[current].image}
            className="w-full h-full object-cover"
            alt={slides[current].title}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          key={`text-${current}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8">
            {slides[current].title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-gold" : ""}>{word} </span>
            ))}
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-xl leading-relaxed font-medium">
            {slides[current].subtitle}
          </p>
          <button className="px-10 py-5 bg-brand-gold text-brand-dark font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 text-lg">
            {slides[current].cta} <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 z-30 flex gap-4">
        <button onClick={prev} className="p-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={next} className="p-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1 transition-all duration-500 rounded-full ${i === current ? "w-12 bg-brand-gold" : "w-4 bg-white/20"}`}
          />
        ))}
      </div>
    </section>
  );
};
