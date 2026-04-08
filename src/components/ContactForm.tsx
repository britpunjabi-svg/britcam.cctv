import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      userId: user?.uid || null,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      serviceType: formData.get('serviceType') as string,
      location: 'Tricity', // Default or from input
      message: formData.get('message') as string,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    try {
      await addDoc(collection(db, 'serviceRequests'), data);
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error('Firestore Error:', err);
      setError('Failed to send inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="glass-card p-10 text-center space-y-4">
        <CheckCircle2 className="w-16 h-16 text-brand-gold mx-auto" />
        <h3 className="text-2xl font-display font-bold">Inquiry Sent!</h3>
        <p className="text-white/60">Our security experts will contact you within 24 hours.</p>
        <button onClick={() => setSuccess(false)} className="text-brand-gold font-bold hover:underline">Send another inquiry</button>
      </div>
    );
  }

  return (
    <div className="glass-card p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500 text-sm">
            <AlertCircle className="w-5 h-5" />
            {error}
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Name</label>
            <input name="name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-gold outline-none transition-colors" placeholder="Rajesh Singh" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Phone</label>
            <input name="phone" required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-gold outline-none transition-colors" placeholder="+91 ..." />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Email</label>
          <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-gold outline-none transition-colors" placeholder="rajesh@example.com" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Service</label>
          <select name="serviceType" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-gold outline-none transition-colors appearance-none">
            <option value="Solar" className="bg-brand-gray">Solar Installation (1KV-10KV)</option>
            <option value="CCTV" className="bg-brand-gray">CCTV & IP Camera Surveillance</option>
            <option value="Biometric" className="bg-brand-gray">Biometric & Attendance Systems</option>
            <option value="Home Automation" className="bg-brand-gray">Smart Home Automation</option>
            <option value="Gate Automation" className="bg-brand-gray">Gate & Door Automation</option>
            <option value="Access Control" className="bg-brand-gray">Access Control & Boom Barriers</option>
            <option value="Theft Control" className="bg-brand-gray">Theft Control & Alarm Systems</option>
            <option value="Car Dash Cams" className="bg-brand-gray">Car Dash Cams & GPS</option>
            <option value="Digital Locks" className="bg-brand-gray">Digital & Biometric Door Locks</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Message</label>
          <textarea name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-gold outline-none transition-colors" placeholder="How can we help?"></textarea>
        </div>
        <button 
          disabled={loading}
          className="w-full py-4 bg-brand-gold text-brand-dark font-bold rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-brand-gold/20 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Inquiry'}
        </button>
      </form>
    </div>
  );
};
