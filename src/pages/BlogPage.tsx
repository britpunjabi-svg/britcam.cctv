import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const blogs = [
  {
    id: 'cctv-buying-guide-2026',
    title: 'CCTV Buying Guide 2026: How to Choose the Best Camera for Your Home',
    excerpt: 'Confused between IP and Analog? 4MP or 5MP? Our comprehensive guide helps you choose the right security system for your needs.',
    date: 'April 5, 2026',
    author: 'BritCAM Expert',
    image: 'https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg',
    category: 'Buying Guide'
  },
  {
    id: 'solar-cctv-benefits',
    title: 'Why Solar Powered CCTV is the Future of Remote Security',
    excerpt: 'Discover how solar-powered security cameras are revolutionizing surveillance in areas without stable electricity.',
    date: 'April 2, 2026',
    author: 'Tech Team',
    image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg',
    category: 'Technology'
  },
  {
    id: 'home-automation-trends',
    title: 'Top 5 Home Automation Trends in Chandigarh for 2026',
    excerpt: 'From smart locks to voice-controlled lighting, see what is trending in smart homes this year.',
    date: 'March 28, 2026',
    author: 'Design Lead',
    image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg',
    category: 'Smart Home'
  }
];

export const BlogPage = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Security & Solar Blog | BritCAM Chandigarh"
        description="Expert tips, buying guides, and latest trends in CCTV, Solar Power, and Home Automation. Stay updated with BritCAM."
      />
      
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">BRITCAM <span className="text-gold">INSIGHTS</span></h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">Expert knowledge to help you make informed decisions about your security and energy needs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden group flex flex-col"
              >
                <Link to={`/blog/${blog.id}`} className="block aspect-video overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-bold text-brand-gold uppercase tracking-widest mb-4">
                    <span className="px-2 py-1 bg-brand-gold/10 rounded">{blog.category}</span>
                    <span className="flex items-center gap-1 text-white/40"><Calendar className="w-3 h-3" /> {blog.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-4 group-hover:text-brand-gold transition-colors">
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{blog.excerpt}</p>
                  <Link 
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-xs hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
