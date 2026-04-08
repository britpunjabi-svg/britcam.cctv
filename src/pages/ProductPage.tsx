import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ShoppingCart, Shield, Zap, Smartphone, Check, ArrowRight } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

interface ProductPageProps {
  productId: string;
  name: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  specs: { [key: string]: string };
  priceRange: string;
}

export const ProductPage: React.FC<ProductPageProps> = ({ name, title, description, image, features, specs, priceRange }) => {
  return (
    <div className="pt-20">
      <SEO 
        title={title}
        description={description}
        image={image}
      />
      
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square rounded-3xl overflow-hidden glass-card group"
            >
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="px-4 py-2 bg-brand-gold text-brand-dark font-bold rounded-lg text-sm mb-2">Premium Quality</div>
                <h1 className="text-4xl font-display font-bold">{name}</h1>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm mb-4">Product Details</h2>
                <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">{title}</h3>
                <p className="text-white/60 text-lg leading-relaxed">{description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/40 uppercase tracking-widest text-xs font-bold">Estimated Price</span>
                  <span className="text-2xl font-display font-bold text-brand-gold">{priceRange}</span>
                </div>
                <p className="text-xs text-white/30 italic">*Prices may vary based on installation requirements and brand selection.</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" /> Order Now
                </a>
                <a href="tel:+917888380934" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">Request Callback</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold mb-8">Technical Specifications</h2>
                <div className="grid gap-4">
                  {Object.entries(specs).map(([key, value], i) => (
                    <div key={i} className="flex justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                      <span className="text-white/40 font-bold uppercase tracking-widest text-xs">{key}</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-10">
                <h2 className="text-3xl font-display font-bold mb-6">Why this {name}?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold">High Security</h4>
                    <p className="text-sm text-white/50">Advanced encryption and secure remote access protocols.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold">Fast Performance</h4>
                    <p className="text-sm text-white/50">Zero lag streaming and instant motion alerts.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold">Mobile App</h4>
                    <p className="text-sm text-white/50">Full control from your Android or iOS device.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 sticky top-24">
                <h3 className="text-2xl font-display font-bold mb-6">Inquire Now</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
