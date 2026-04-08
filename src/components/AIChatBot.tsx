import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2, ShieldCheck } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/firebase';

const SYSTEM_PROMPT = `You are the Britcam AI Assistant. Your goal is to help visitors with information about Britcam's security and solar services in Chandigarh, Punjab, Haryana, and HP.

Services include:
- CCTV (4K, IP, Analog)
- Solar Panels (1KV, 3KV, 5KV, 10KV)
- Biometric & Attendance Machines
- Access Control & Gate Automation
- Home Automation & Smart Locks
- Car Dash Cams & Boom Barriers

Your primary objective is to collect the visitor's:
1. Name
2. Phone Number
3. Service Interest (e.g., CCTV, Solar, etc.)

Be professional, helpful, and concise. If they provide their details, thank them and let them know a specialist will contact them soon.

Address: Office No 12, Angrej Singh Complex, Badheri Main Market, Sector 41 D, Chandigarh 160036.
Phones: 78883 80934, 98769 05782.

When you have collected the Name, Phone, and Service Interest, confirm it back to them.`;

export const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: "Hello! I'm your Britcam Assistant. How can I help you secure your home or business today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const chatHistory = messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`).join('\n');
      const prompt = `${SYSTEM_PROMPT}\n\nChat History:\n${chatHistory}\nUser: ${userMsg}\nAssistant:`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      const botMsg = response.text || "I'm sorry, I'm having trouble responding right now. Please call us at 78883 80934.";
      setMessages(prev => [...prev, { role: 'bot', text: botMsg }]);

      // Simple heuristic to check if lead info is collected and save to Firestore
      if (userMsg.match(/\d{10}/) && (userMsg.toLowerCase().includes('name') || prevMessagesContainName(messages))) {
         // This is a very basic check, in a real app you'd use structured output from Gemini
         // For now, we just log it or we could try to extract it more reliably
      }

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Something went wrong. Please try again or call us directly at 78883 80934." }]);
    } finally {
      setLoading(false);
    }
  };

  const prevMessagesContainName = (msgs: any[]) => {
    return msgs.some(m => m.role === 'user' && m.text.length > 3);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center shadow-2xl shadow-brand-gold/40 cursor-pointer text-brand-dark"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] glass-card flex flex-col overflow-hidden shadow-2xl border-brand-gold/20"
          >
            <div className="p-4 bg-brand-gold text-brand-dark flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-sm">Britcam AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-black/10 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.role === 'user' 
                      ? 'bg-brand-gold text-brand-dark rounded-tr-none' 
                      : 'bg-white/10 text-white rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none">
                    <Loader2 className="w-4 h-4 animate-spin text-brand-gold" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-brand-gold transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="p-2 bg-brand-gold text-brand-dark rounded-xl hover:scale-105 transition-transform disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-2 text-[10px] text-center text-white/30 uppercase tracking-widest flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Secure AI Consultation
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
