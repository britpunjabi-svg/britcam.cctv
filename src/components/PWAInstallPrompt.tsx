import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X, Smartphone, Share2 } from 'lucide-react';

export const PWAInstallPrompt = () => {
  const [show, setShow] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Show a simulated prompt for demo/iOS if not already installed
    const timer = setTimeout(() => {
      if (!window.matchMedia('(display-mode: standalone)').matches) {
        setShow(true);
      }
    }, 5000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      clearTimeout(timer);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } else {
      // Fallback for iOS/Other
      alert("To install: Tap the 'Share' icon and then 'Add to Home Screen' on your mobile browser.");
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-24 left-6 right-6 md:left-auto md:right-6 md:w-96 z-[60] glass-card p-6 shadow-2xl border-brand-gold/30"
        >
          <button 
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 text-white/40 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-brand-gold flex items-center justify-center text-brand-dark">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Britcam Web App</h3>
              <p className="text-sm text-white/60">Install for faster access & updates</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleInstall}
              className="flex-1 bg-brand-gold text-brand-dark font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <Download className="w-5 h-5" />
              INSTALL NOW
            </button>
            <button
              onClick={() => setShow(false)}
              className="px-4 py-3 rounded-xl border border-white/10 text-white/60 font-bold hover:bg-white/5"
            >
              LATER
            </button>
          </div>
          
          <div className="mt-4 flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest justify-center">
            <Share2 className="w-3 h-3" /> Works on Android & iOS
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
