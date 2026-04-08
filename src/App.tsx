import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroCarousel } from './components/HeroCarousel';
import { Gallery } from './components/Gallery';
import { SolarPage } from './pages/SolarPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ContactForm } from './components/ContactForm';
import { Testimonials } from './components/Testimonials';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AIChatBot } from './components/AIChatBot';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { PhoneCall, MapPin, Shield, Camera, Lock, Smartphone, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const HomePage = () => (
  <>
    <HeroCarousel />
    
    <section id="services" className="py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">ELITE <span className="text-gold">SOLUTIONS</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">Serving Chandigarh and 100km radius with premium security and solar technology.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard icon={Camera} title="4K Surveillance" description="Ultra-HD monitoring with AI human detection." delay={0.1} id="cctv" />
          <ServiceCard icon={Lock} title="Biometric Access" description="Facial & fingerprint secure entry systems." delay={0.2} id="biometrics" />
          <ServiceCard icon={Smartphone} title="Home Automation" description="Smart living controlled from your phone." delay={0.3} id="automation" />
          <ServiceCard icon={Shield} title="Solar Power" description="High-efficiency solar panels 1KV to 10KV." delay={0.4} id="solar" />
        </div>
      </div>
    </section>

    <Gallery />

    <Testimonials />

    <section id="contact" className="py-32 relative overflow-hidden bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-display font-bold mb-8">VISIT OUR <span className="text-gold">OFFICE</span></h2>
            <p className="text-white/60 text-lg mb-12">Expert consultation for your security and energy needs. Serving Punjab, Haryana, and HP.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Address</p>
                  <p className="text-xl font-bold">OFFICE NO 12, ANGREJ SINGH COMPLEX, BADHERI MAIN MARKET, SECTOR 41 D, CHANDIGARH 160036</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Direct Contacts</p>
                  <p className="text-xl font-bold">98769 05782, 78883 80934</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 h-64 rounded-2xl overflow-hidden glass-card">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.245642426861!2d76.7384!3d30.7284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0b55555555%3A0x0!2zMzDCsDQzJzQyLjIiTiA3NsKwNDQnMTguMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  </>
);

const ServiceCard = ({ icon: Icon, title, description, delay, id }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass-card p-8 group hover:border-brand-gold/50 transition-all duration-500"
  >
    <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-500">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
    <p className="text-white/50 leading-relaxed mb-6">{description}</p>
    <Link 
      to={`/services/${id}`}
      className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-xs hover:gap-3 transition-all"
    >
      Explore Details <ChevronRight className="w-4 h-4" />
    </Link>
  </motion.div>
);

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
              <Route path="/solar" element={<SolarPage />} />
              <Route path="/gallery" element={<div className="pt-20"><Gallery /></div>} />
              <Route path="/contact" element={<div className="pt-20"><section className="py-32 bg-brand-dark"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><ContactForm /></div></section></div>} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <AIChatBot />
          <PWAInstallPrompt />
        </div>
      </Router>
    </AuthProvider>
  );
}
