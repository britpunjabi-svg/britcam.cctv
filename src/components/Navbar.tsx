import React from 'react';
import { motion } from 'motion/react';
import { Shield, Menu, X, Phone, Facebook, Instagram } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user } = useAuth();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Solar', path: '/solar' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <Shield className="w-8 h-8 text-brand-gold group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold tracking-tighter leading-none">BRITCAM</span>
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mt-1">Premium Installation Services</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  location.pathname === link.path ? 'text-brand-gold' : 'text-white/60 hover:text-brand-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-white/10 mx-2" />
            
            <div className="flex items-center gap-4">
              <div className="flex gap-3 mr-4">
                <a href="https://www.facebook.com/britcam.in/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-gold transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/britcam.in/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-gold transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              <a href="tel:+919876905782" className="flex items-center gap-2 text-brand-gold font-bold">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">98769 05782</span>
              </a>
              
              {user ? (
                <div className="flex items-center gap-4">
                  <img src={user.photoURL || ''} className="w-8 h-8 rounded-full border border-brand-gold" alt="Profile" referrerPolicy="no-referrer" />
                  <button onClick={() => signOut(auth)} className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100">Sign Out</button>
                </div>
              ) : (
                <button 
                  onClick={() => signInWithPopup(auth, googleProvider)}
                  className="px-6 py-2 bg-brand-gold text-brand-dark font-bold rounded-full hover:scale-105 transition-transform text-xs uppercase tracking-widest"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-brand-gray border-b border-white/10 px-4 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          {!user && (
            <button 
              onClick={() => signInWithPopup(auth, googleProvider)}
              className="w-full py-3 bg-brand-gold text-brand-dark font-bold rounded-xl uppercase tracking-widest"
            >
              Sign In
            </button>
          )}
        </motion.div>
      )}
    </nav>
  );
};
