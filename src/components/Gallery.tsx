import React from 'react';
import { motion } from 'motion/react';
import { Camera, Lock, Smartphone, Shield, Sun, DoorOpen, Car, Zap, Users, Fingerprint, Construction } from 'lucide-react';

const galleryItems = [
  { category: "Surveillance", title: "4K IP Cameras", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800", icon: Camera },
  { category: "Solar", title: "10KV Solar Plant", image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800", icon: Sun },
  { category: "Biometrics", title: "Attendance Systems", image: "https://images.unsplash.com/photo-1551817958-c1993e11f8c9?auto=format&fit=crop&q=80&w=800", icon: Fingerprint },
  { category: "Automation", title: "Smart Home Hub", image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800", icon: Smartphone },
  { category: "Access Control", title: "Boom Barriers", image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=800", icon: Construction },
  { category: "Automotive", title: "Car Dash Cams", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800", icon: Car },
  { category: "Security", title: "Smart Door Locks", image: "https://images.unsplash.com/photo-1521225091412-4030c67486a5?auto=format&fit=crop&q=80&w=800", icon: Lock },
  { category: "Solar", title: "Solar Panels 5KV", image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800", icon: Zap },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">PROJECT <span className="text-gold">GALLERY</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">A showcase of our premium installations across Punjab and Chandigarh.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl glass-card"
            >
              <img
                src={item.image}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                alt={item.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-brand-gold mb-2">
                  <item.icon className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">{item.category}</span>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
