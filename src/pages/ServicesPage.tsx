import React from 'react';
import { motion } from 'motion/react';
import { Camera, Fingerprint, Lock, Smartphone, Shield, Construction, Car, DoorOpen, Zap, Users, Bell, Video } from 'lucide-react';

const servicesList = [
  { 
    icon: Camera, 
    title: "CCTV Cameras", 
    desc: "4K IP & Analog surveillance with AI detection.", 
    category: "Surveillance",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800"
  },
  { 
    icon: Fingerprint, 
    title: "Biometric Machines", 
    desc: "Advanced fingerprint & facial recognition.", 
    category: "Access",
    image: "https://images.unsplash.com/photo-1551817958-c1993e11f8c9?auto=format&fit=crop&q=80&w=800"
  },
  { 
    icon: Users, 
    title: "Attendance Machines", 
    desc: "Cloud-based employee tracking solutions.", 
    category: "Business",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    icon: Lock, 
    title: "Access Control", 
    desc: "Secure entry management for offices & homes.", 
    category: "Security",
    image: "https://images.unsplash.com/photo-1524143878510-e3b8d6312402?auto=format&fit=crop&q=80&w=800"
  },
  { 
    icon: Shield, 
    title: "Theft Control", 
    desc: "Smart intrusion detection & alarm systems.", 
    category: "Security",
    image: "https://images.unsplash.com/photo-1551709076-89f2499d383b?auto=format&fit=crop&q=80&w=800"
  },
  { 
    icon: Construction, 
    title: "Gate Automation", 
    desc: "Remote operated sliding & swing gates.", 
    category: "Automation",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=800"
  },
  { 
    icon: Smartphone, 
    title: "Home Automation", 
    desc: "Voice & app controlled smart living.", 
    category: "Automation",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800"
  },
  { 
    icon: DoorOpen, 
    title: "Biometric Door Locks", 
    desc: "Keyless entry with fingerprint & PIN.", 
    category: "Security",
    image: "https://images.unsplash.com/photo-1521225091412-4030c67486a5?auto=format&fit=crop&q=80&w=800"
  },
  { 
    icon: Car, 
    title: "Car Dash Cams", 
    desc: "Dual-channel 4K recording for vehicles.", 
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
  },
  { 
    icon: Bell, 
    title: "Boom Barriers", 
    desc: "Automatic vehicle access control systems.", 
    category: "Access",
    image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?auto=format&fit=crop&q=80&w=800"
  },
  { 
    icon: Video, 
    title: "Video Door Phones", 
    desc: "See and talk to visitors from anywhere.", 
    category: "Surveillance",
    image: "https://images.unsplash.com/photo-1524143878510-e3b8d6312402?auto=format&fit=crop&q=80&w=800"
  },
  { 
    icon: Zap, 
    title: "EPABX Systems", 
    desc: "Advanced intercom & telecom solutions.", 
    category: "Business",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
];

export const ServicesPage = () => {
  return (
    <div className="pt-20">
      <section className="py-32 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-6xl font-display font-bold mb-6 uppercase tracking-tighter">OUR <span className="text-gold">SERVICES</span></h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">Comprehensive security and automation solutions tailored for the modern world.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card overflow-hidden group hover:border-brand-gold/50 transition-all duration-500"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/20 backdrop-blur-md flex items-center justify-center text-brand-gold border border-brand-gold/20">
                      <service.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3 block">{service.category}</span>
                  <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
