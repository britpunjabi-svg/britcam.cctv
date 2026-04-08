import React from 'react';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { 
  Camera, Shield, Lock, Smartphone, Fingerprint, 
  Zap, Car, DoorOpen, PhoneCall, Bell, 
  Cpu, HardDrive, ArrowLeft, CheckCircle2
} from 'lucide-react';

const serviceDetails: Record<string, any> = {
  'cctv': {
    title: '4K Surveillance Systems',
    icon: Camera,
    description: 'High-definition security cameras with AI-powered human detection and night vision.',
    features: ['4K Ultra HD Resolution', 'AI Human & Vehicle Detection', 'Color Night Vision', 'Remote Mobile Viewing', 'Cloud & Local Storage'],
    images: [
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1524143878510-e3b8d6312402?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551709076-89f2499d383b?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'biometrics': {
    title: 'Biometric & Attendance',
    icon: Fingerprint,
    description: 'Advanced biometric solutions including Aadhaar-enabled machines for government and private sectors.',
    features: ['Aadhaar Enabled Biometric System (AEBAS)', 'Face Recognition Technology', 'Fingerprint & Palm Print', 'Cloud-based Attendance Management', 'Integration with Payroll'],
    images: [
      'https://images.unsplash.com/photo-1551817958-c1993e11f8c9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'solar': {
    title: 'Solar Energy Solutions',
    icon: Zap,
    description: 'Complete solar panel installations from 1KV to 10KV for homes and businesses.',
    features: ['High-Efficiency Mono PERC Panels', 'On-Grid & Off-Grid Systems', 'Net Metering Support', '25-Year Performance Warranty', 'Smart Monitoring App'],
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'automation': {
    title: 'Home & Gate Automation',
    icon: Smartphone,
    description: 'Smart home solutions and automated gate systems for modern living.',
    features: ['Smart Lighting & AC Control', 'Automated Sliding/Swing Gates', 'Video Door Phones', 'Voice Assistant Integration', 'Remote Access Control'],
    images: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1521225091412-4030c67486a5?auto=format&fit=crop&q=80&w=800'
    ]
  }
};

export const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId || 'cctv'] || serviceDetails['cctv'];

  return (
    <div className="pt-20 min-h-screen bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link to="/services" className="inline-flex items-center gap-2 text-brand-gold hover:text-white mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-bold uppercase tracking-widest text-sm">Back to Services</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-8 text-brand-gold">
              <service.icon className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 uppercase tracking-tighter">
              {service.title.split(' ')[0]} <span className="text-gold">{service.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              {service.description}
            </p>
            <div className="space-y-4">
              {service.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                  <span className="text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img src={service.images[0]} alt="Service" className="rounded-2xl w-full h-64 object-cover border border-white/10" />
              <img src={service.images[1]} alt="Service" className="rounded-2xl w-full h-48 object-cover border border-white/10" />
            </div>
            <div className="pt-8">
              <img src={service.images[2]} alt="Service" className="rounded-2xl w-full h-full object-cover border border-white/10" />
            </div>
          </motion.div>
        </div>

        <section className="py-20 border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold uppercase tracking-widest">Project <span className="text-gold">Showcase</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {service.images.map((img: string, i: number) => (
              <div key={i} className="glass-card overflow-hidden group">
                <img src={img} alt="Project" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
