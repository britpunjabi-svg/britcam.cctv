import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Shield, Camera, CheckCircle, MapPin, Phone, Star } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

interface LocationPageProps {
  location: string;
  title: string;
  description: string;
  keywords: string[];
}

export const LocationPage: React.FC<LocationPageProps> = ({ location, title, description, keywords }) => {
  const faqs = [
    { q: `What is the cost of CCTV installation in ${location}?`, a: "The cost depends on the number of cameras and the type of technology (Analog vs IP). Our basic 4-camera setup starts at very affordable prices. Contact us for a detailed quote." },
    { q: "Can I view my cameras on my mobile phone?", a: "Yes, all our modern CCTV systems come with mobile app support, allowing you to view live footage from anywhere in the world." },
    { q: "Do you provide warranty on the products?", a: "Absolutely! We provide a standard 1-year manufacturer warranty on all cameras and recording equipment, plus our own installation guarantee." }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title={title}
        description={description}
        keywords={keywords.join(', ')}
        faqs={faqs}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin className="w-4 h-4" /> Best Service in {location}
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Professional <span className="text-gold">CCTV Installation</span> in {location}
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Secure your home and business with the most trusted security experts in {location}. We provide high-definition 4K surveillance, mobile monitoring, and 24/7 support.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded-xl hover:scale-105 transition-transform">Get Free Site Visit</a>
              <a href="tel:+917888380934" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call Experts
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-display font-bold text-white mb-6">Why Choose BritCAM for CCTV Installation in {location}?</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  When it comes to the safety of your family and assets, compromise is not an option. BritCAM is the leading provider of <strong>CCTV installation in {location}</strong>, offering state-of-the-art security solutions tailored to your specific needs. Whether you need a simple home security setup or a complex industrial surveillance system, our team of certified professionals is here to help.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 my-12">
                  <div className="glass-card p-6">
                    <Shield className="w-10 h-10 text-brand-gold mb-4" />
                    <h3 className="text-xl font-bold mb-2">Certified Experts</h3>
                    <p className="text-white/50 text-sm">Our technicians are highly trained and certified in the latest surveillance technologies.</p>
                  </div>
                  <div className="glass-card p-6">
                    <Camera className="w-10 h-10 text-brand-gold mb-4" />
                    <h3 className="text-xl font-bold mb-2">4K Ultra HD</h3>
                    <p className="text-white/50 text-sm">We only use high-quality cameras that provide crystal clear footage day and night.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-display font-bold text-white mb-6">Our Security Services in {location}</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  We offer a comprehensive range of security and automation services to residents and businesses in {location}. Our goal is to provide a one-stop-shop for all your technology needs.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'IP Camera Installation with Mobile View',
                    'Analog HD Camera Setup for Budget-Friendly Security',
                    'Wireless/WiFi CCTV Cameras for Easy Installation',
                    'Biometric Attendance & Access Control Systems',
                    'Smart Home Automation & Digital Locks',
                    'Solar Powered Security Cameras for Remote Areas',
                    'Annual Maintenance Contracts (AMC) for Businesses'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <CheckCircle className="w-5 h-5 text-brand-gold" /> {item}
                    </li>
                  ))}
                </ul>

                <h2 className="text-3xl font-display font-bold text-white mb-6">Affordable CCTV Camera Price in {location}</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  At BritCAM, we believe that security should be accessible to everyone. That's why we offer the most competitive <strong>CCTV camera prices in {location}</strong> without compromising on quality. We provide transparent pricing with no hidden costs. Our packages include everything from cameras and DVR/NVR to cabling and professional installation.
                </p>

                <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-2xl p-8 my-12">
                  <h3 className="text-2xl font-bold text-brand-gold mb-4">Special Offer for {location} Residents!</h3>
                  <p className="text-white/80 mb-6">Get a FREE site survey and a customized security audit for your property. Our experts will identify vulnerable spots and suggest the best camera placement.</p>
                  <a href="#contact" className="inline-block px-6 py-3 bg-brand-gold text-brand-dark font-bold rounded-lg">Claim Free Survey</a>
                </div>

                <h2 className="text-3xl font-display font-bold text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-white/10 pb-6">
                      <h4 className="text-lg font-bold text-white mb-2">{faq.q}</h4>
                      <p className="text-white/50">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 sticky top-24">
                <h3 className="text-2xl font-display font-bold mb-6">Get a Quote</h3>
                <ContactForm />
              </div>
              
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-6">Customer Reviews</h3>
                <div className="space-y-6">
                  {[
                    { name: "Amit Sharma", text: `Best CCTV shop in ${location}. Very professional installation and great after-sales service.`, rating: 5 },
                    { name: "Priya Gupta", text: "Installed solar cameras at my farmhouse. Working perfectly. Highly recommended!", rating: 5 }
                  ].map((rev, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex text-brand-gold">
                        {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-sm text-white/60 italic">"{rev.text}"</p>
                      <p className="text-xs font-bold text-white/40 uppercase tracking-widest">— {rev.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
