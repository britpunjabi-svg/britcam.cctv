import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner, Chandigarh",
    content: "Britcam installed a complete 4K CCTV and Biometric system at our warehouse. The clarity is amazing, and the team was very professional.",
    rating: 5
  },
  {
    name: "Sandeep Singh",
    role: "Homeowner, Mohali",
    content: "The 5KV solar installation has reduced our electricity bill to almost zero. Highly recommend their solar services in the Tricity area.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Villa Owner, Panchkula",
    content: "Excellent home automation setup. I can control my lights and security from my phone easily. Great after-sales support too.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-brand-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">CLIENT <span className="text-gold">REVIEWS</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">Don't just take our word for it. Hear from our satisfied customers across the region.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-gold/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-white/70 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div>
                <h4 className="text-lg font-bold">{t.name}</h4>
                <p className="text-brand-gold text-sm font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
