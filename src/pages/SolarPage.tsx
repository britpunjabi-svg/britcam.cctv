import React from 'react';
import { motion } from 'motion/react';
import { Sun, Zap, Battery, ShieldCheck, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { SEO } from '../components/SEO';

const solarPlans = [
  { capacity: "1 KV", ideal: "Small Homes / Shops", features: ["2-3 Fans", "4-5 Lights", "TV / Laptop"], price: "Starting ₹55,000" },
  { capacity: "3 KV", ideal: "Medium Residences", features: ["1 AC (1 Ton)", "Fans & Lights", "Refrigerator"], price: "Starting ₹1,65,000" },
  { capacity: "5 KV", ideal: "Large Residences", features: ["2 ACs", "Washing Machine", "Water Pump"], price: "Starting ₹2,75,000" },
  { capacity: "10 KV", ideal: "Commercial / Industrial", features: ["Central AC", "Heavy Machinery", "Full Power Backup"], price: "Custom Quote" },
];

export const SolarPage = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Solar Panel Installation Chandigarh & Punjab"
        description="Switch to clean energy with Britcam Solar. 1KV to 10KV solar panel installations in Chandigarh, Mohali, and Punjab. Reduce your electricity bills today."
        keywords="Solar Panels Chandigarh, Solar Installation Punjab, 5KV Solar System, Solar Energy Mohali, Britcam Solar"
      />
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20"
            alt="Solar Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">SOLAR <span className="text-gold">POWER</span></h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Sustainable energy solutions for Punjab, Chandigarh, and Haryana. Reduce your bills to zero.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solarPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 border-t-4 border-t-brand-gold"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-display font-bold text-gold">{plan.capacity}</h3>
                  <Zap className="w-6 h-6 text-brand-gold" />
                </div>
                <p className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">{plan.ideal}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/60 text-sm">
                      <ShieldCheck className="w-4 h-4 text-brand-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xl font-bold mb-6">{plan.price}</p>
                <button className="w-full py-3 border border-brand-gold text-brand-gold font-bold rounded-xl hover:bg-brand-gold hover:text-brand-dark transition-all">
                  Inquire Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-display font-bold mb-8">WHY CHOOSE <span className="text-gold">BRITCAM SOLAR?</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <Sun className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Premium Panels</h4>
                    <p className="text-white/50">We use only Tier-1 high-efficiency monocrystalline panels for maximum output even in low light.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <Battery className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Smart Inverters</h4>
                    <p className="text-white/50">Monitor your generation and consumption in real-time with our mobile-connected smart inverters.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Local Expertise</h4>
                    <p className="text-white/50">Expert installation team serving Chandigarh and 100km radius with 24/7 support.</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};
