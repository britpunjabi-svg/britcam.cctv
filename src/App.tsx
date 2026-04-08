import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './components/SEO';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroCarousel } from './components/HeroCarousel';
import { Gallery } from './components/Gallery';
import { SolarPage } from './pages/SolarPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { LocationPage } from './pages/LocationPage';
import { ProductPage } from './pages/ProductPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactForm } from './components/ContactForm';
import { Testimonials } from './components/Testimonials';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AIChatBot } from './components/AIChatBot';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { PhoneCall, MapPin, Shield, Camera, Lock, Smartphone, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const HomePage = () => (
  <>
    <SEO 
      title="Best CCTV Installation in Chandigarh | Free Site Visit – BritCAM"
      description="Get affordable CCTV installation in Chandigarh with HD cameras, mobile view & 1-year warranty. Serving Mohali, Panchkula, Zirakpur. Call 7888380934 now!"
      keywords="CCTV installation in Chandigarh, CCTV camera price in Mohali, Best CCTV camera shop near me, IP camera installation Punjab, WiFi CCTV camera for home India"
    />
    <HeroCarousel />
    
    <section id="services" className="py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-6 uppercase">Best <span className="text-gold">CCTV Installation</span> in Chandigarh</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">BritCAM is your trusted partner for high-quality security and solar solutions. We provide professional <strong>CCTV camera installation in Chandigarh, Mohali, and Panchkula</strong> with 4K technology and mobile monitoring.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard icon={Camera} title="IP Camera Installation" description="High-definition IP camera installation in Punjab with AI human detection." delay={0.1} id="cctv" />
          <ServiceCard icon={Lock} title="Biometric Systems" description="Facial & fingerprint attendance systems for offices in Chandigarh." delay={0.2} id="biometrics" />
          <ServiceCard icon={Smartphone} title="Home Automation" description="Smart locks and automation controlled from your phone." delay={0.3} id="automation" />
          <ServiceCard icon={Shield} title="Solar Panel Setup" description="Affordable solar panel installation in Chandigarh (1KV-10KV)." delay={0.4} id="solar" />
        </div>
      </div>
    </section>

    <section className="py-24 bg-brand-gray border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-gold">CCTV Camera Price in Mohali</h3>
            <p className="text-sm text-white/50">Get the best CCTV camera shop near me experience with transparent pricing and top brands like Hikvision and CP Plus.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-gold">WiFi CCTV Camera for Home</h3>
            <p className="text-sm text-white/50">Secure your home with the best WiFi CCTV camera in India. Easy setup, 360-degree view, and instant mobile alerts.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-gold">Solar Camera Installation</h3>
            <p className="text-sm text-white/50">Specialized solar powered security cameras for remote areas in Punjab and Haryana. No electricity required.</p>
          </div>
        </div>
      </div>
    </section>

    <Gallery />

    <Testimonials />

    <section id="contact" className="py-32 relative overflow-hidden bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-8">VISIT OUR <span className="text-gold">OFFICE</span></h2>
            <p className="text-white/60 text-lg mb-12">Expert consultation for your security and energy needs. Serving Punjab, Haryana, and HP.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Address</p>
                  <p className="text-lg sm:text-xl font-bold">OFFICE NO 12, ANGREJ SINGH COMPLEX, BADHERI MAIN MARKET, SECTOR 41 D, CHANDIGARH 160036</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Direct Contacts</p>
                  <p className="text-lg sm:text-xl font-bold">78883 80934, 98769 05782</p>
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
      <HelmetProvider>
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
                
                {/* Location Pages */}
                <Route path="/cctv-installation-chandigarh" element={
                  <LocationPage 
                    location="Chandigarh"
                    title="Best CCTV Installation in Chandigarh | Free Site Visit – BritCAM"
                    description="Get professional CCTV installation in Chandigarh. We offer 4K IP cameras, WiFi cameras, and mobile monitoring at the best prices. Call 7888380934."
                    keywords={['CCTV installation in Chandigarh', 'Best CCTV camera shop Chandigarh', 'CCTV camera price Chandigarh']}
                  />
                } />
                <Route path="/cctv-installation-mohali" element={
                  <LocationPage 
                    location="Mohali"
                    title="Professional CCTV Camera Installation in Mohali | BritCAM"
                    description="Looking for CCTV installation in Mohali? BritCAM provides high-quality surveillance systems for homes and offices in Mohali and Zirakpur."
                    keywords={['CCTV installation in Mohali', 'CCTV camera price in Mohali', 'Security cameras Mohali']}
                  />
                } />
                <Route path="/cctv-installation-panchkula" element={
                  <LocationPage 
                    location="Panchkula"
                    title="CCTV Installation in Panchkula | Top Security Services"
                    description="Secure your property in Panchkula with BritCAM's expert CCTV installation services. 4K cameras, night vision, and mobile view included."
                    keywords={['CCTV installation in Panchkula', 'Security camera shop Panchkula', 'CCTV price Panchkula']}
                  />
                } />
                <Route path="/cctv-installation-zirakpur" element={
                  <LocationPage 
                    location="Zirakpur"
                    title="CCTV Installation in Zirakpur | Best Price & Service"
                    description="BritCAM offers affordable and reliable CCTV installation in Zirakpur. Protect your home with our advanced IP and WiFi camera systems."
                    keywords={['CCTV installation in Zirakpur', 'CCTV camera Zirakpur', 'Security systems Zirakpur']}
                  />
                } />
                <Route path="/cctv-installation-kharar" element={
                  <LocationPage 
                    location="Kharar"
                    title="Expert CCTV Installation in Kharar | Home & Business Security"
                    description="Professional CCTV installation services in Kharar. High-definition cameras with remote mobile access. Get a free quote today!"
                    keywords={['CCTV installation in Kharar', 'CCTV camera shop Kharar', 'Security cameras Kharar']}
                  />
                } />

                {/* Product Pages */}
                <Route path="/products/ip-camera" element={
                  <ProductPage 
                    productId="ip-camera"
                    name="4K IP Camera"
                    title="High-Definition IP Camera Installation Punjab"
                    description="Our 4K IP cameras provide crystal clear surveillance with advanced AI human detection and Power over Ethernet (PoE) support."
                    image="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg"
                    features={['4K Ultra HD', 'AI Human Detection', 'PoE Support', 'Night Vision', 'Weatherproof', 'Mobile App']}
                    specs={{
                      'Resolution': '8MP (3840 x 2160)',
                      'Lens': '2.8mm / 4mm Fixed',
                      'IR Distance': '30 Meters',
                      'Storage': 'SD Card / NVR',
                      'Audio': 'Two-Way Built-in'
                    }}
                    priceRange="₹3,500 - ₹8,500"
                  />
                } />
                <Route path="/products/wifi-camera" element={
                  <ProductPage 
                    productId="wifi-camera"
                    name="WiFi CCTV Camera"
                    title="Best WiFi CCTV Camera for Home India"
                    description="Easy to install wireless security cameras for your home. Features 360-degree rotation, motion tracking, and cloud storage."
                    image="https://images.pexels.com/photos/23319107/pexels-photo-23319107.jpeg"
                    features={['Wireless Setup', '360° Rotation', 'Motion Tracking', 'Cloud Storage', 'Two-Way Talk', 'Siren Alarm']}
                    specs={{
                      'Resolution': '4MP Quad HD',
                      'Connectivity': '2.4GHz / 5GHz WiFi',
                      'Rotation': '355° Pan / 90° Tilt',
                      'Power': '5V DC / Battery',
                      'Night Vision': 'Full Color'
                    }}
                    priceRange="₹2,500 - ₹5,500"
                  />
                } />
                <Route path="/products/nvr-dvr" element={
                  <ProductPage 
                    productId="nvr-dvr"
                    name="NVR / DVR Systems"
                    title="Professional NVR & DVR Recording Systems"
                    description="Reliable recording solutions for your surveillance network. Supports multi-channel recording, remote backup, and 4K output."
                    image="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
                    features={['Multi-Channel', '4K HDMI Output', 'H.265+ Compression', 'Remote Backup', 'SATA Support', 'Mobile Access']}
                    specs={{
                      'Channels': '4 / 8 / 16 / 32',
                      'Storage': 'Up to 10TB per SATA',
                      'Compression': 'H.265+ / H.264',
                      'Network': 'Gigabit Ethernet',
                      'App': 'Hik-Connect / DMSS'
                    }}
                    priceRange="₹4,500 - ₹25,000"
                  />
                } />
                <Route path="/products/solar-camera" element={
                  <ProductPage 
                    productId="solar-camera"
                    name="Solar Security Camera"
                    title="Solar Powered Security Camera for Remote Areas"
                    description="No electricity? No problem. Our solar cameras work 24/7 using sunlight, perfect for farmhouses, construction sites, and remote locations."
                    image="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg"
                    features={['Solar Powered', '4G SIM Support', 'Battery Backup', 'Low Power Mode', 'PIR Detection', 'IP66 Rated']}
                    specs={{
                      'Solar Panel': '6W / 10W Monocrystalline',
                      'Battery': '15,000mAh Lithium',
                      'Network': '4G LTE / WiFi',
                      'Resolution': '4MP HD',
                      'Standby': 'Up to 365 Days'
                    }}
                    priceRange="₹8,500 - ₹15,000"
                  />
                } />

                {/* Blog Routes */}
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:blogId" element={<BlogPostPage />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
            <AIChatBot />
            <PWAInstallPrompt />
          </div>
        </Router>
      </HelmetProvider>
    </AuthProvider>
  );
}
