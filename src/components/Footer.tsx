import React from 'react';
import { Shield, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-brand-gray pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-brand-gold" />
              <span className="text-2xl font-display font-bold tracking-tighter">BRITCAM</span>
            </div>
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
              Tricity's premier provider of integrated security and solar solutions. Serving Chandigarh, Punjab, Haryana, and Himachal with world-class technology.
            </p>
            <div className="flex gap-4 mb-8">
              <a href="https://www.facebook.com/britcam.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/britcam.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-brand-gold" />
                <span>+91 78883 80934, 98769 05782</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-brand-gold" />
                <span className="text-sm">OFFICE NO 12, ANGREJ SINGH COMPLEX, BADHERI MAIN MARKET, SECTOR 41 D, CHANDIGARH 160036</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-white/50">
              <li><Link to="/solar" className="hover:text-brand-gold transition-colors">Solar Installation</Link></li>
              <li><Link to="/services/cctv" className="hover:text-brand-gold transition-colors">CCTV Surveillance</Link></li>
              <li><Link to="/products/ip-camera" className="hover:text-brand-gold transition-colors">IP Camera Systems</Link></li>
              <li><Link to="/products/wifi-camera" className="hover:text-brand-gold transition-colors">WiFi Home Cameras</Link></li>
              <li><Link to="/blog" className="hover:text-brand-gold transition-colors">Security Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Service Areas</h4>
            <ul className="space-y-4 text-white/50">
              <li><Link to="/cctv-installation-chandigarh" className="hover:text-brand-gold transition-colors">Chandigarh</Link></li>
              <li><Link to="/cctv-installation-mohali" className="hover:text-brand-gold transition-colors">Mohali</Link></li>
              <li><Link to="/cctv-installation-panchkula" className="hover:text-brand-gold transition-colors">Panchkula</Link></li>
              <li><Link to="/cctv-installation-zirakpur" className="hover:text-brand-gold transition-colors">Zirakpur</Link></li>
              <li><Link to="/cctv-installation-kharar" className="hover:text-brand-gold transition-colors">Kharar</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-sm">
            © 2026 Britcam Security & Solar Solutions. All Rights Reserved.
          </p>
          <p className="text-white/30 text-sm">
            Developed by <a href="http://www.britpunjabi.com" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">Progressive Build Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
