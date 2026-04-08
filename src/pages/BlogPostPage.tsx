import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { blogs } from './BlogPage';
import { motion } from 'motion/react';
import { Calendar, User, ChevronLeft, Share2, MessageSquare } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export const BlogPostPage = () => {
  const { blogId } = useParams();
  const blog = blogs.find(b => b.id === blogId);

  if (!blog) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-8">Blog Not Found</h1>
        <Link to="/blog" className="text-brand-gold hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <SEO 
        title={`${blog.title} | BritCAM Blog`}
        description={blog.excerpt}
        image={blog.image}
      />
      
      <section className="py-24 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-brand-gold transition-colors mb-8 uppercase tracking-widest text-xs font-bold">
            <ChevronLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 text-xs font-bold text-brand-gold uppercase tracking-widest mb-6">
              <span className="px-3 py-1 bg-brand-gold/10 rounded-full border border-brand-gold/20">{blog.category}</span>
              <span className="flex items-center gap-1 text-white/40"><Calendar className="w-4 h-4" /> {blog.date}</span>
              <span className="flex items-center gap-1 text-white/40"><User className="w-4 h-4" /> {blog.author}</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-10 leading-tight">
              {blog.title}
            </h1>

            <div className="aspect-video rounded-3xl overflow-hidden mb-12 glass-card">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-white/80 leading-relaxed mb-8 italic border-l-4 border-brand-gold pl-6">
                {blog.excerpt}
              </p>
              
              <div className="text-white/60 space-y-6 leading-relaxed">
                <p>
                  Security technology is evolving faster than ever. In 2026, we are seeing a significant shift towards AI-integrated surveillance and sustainable energy solutions. Whether you are a homeowner in Chandigarh or a business owner in Mohali, understanding these trends is crucial for making the right investment.
                </p>
                
                <h2 className="text-3xl font-display font-bold text-white pt-8">The Rise of AI in CCTV</h2>
                <p>
                  Modern cameras are no longer just "dumb" recording devices. With built-in AI, they can now distinguish between a human, a vehicle, and a stray animal. This significantly reduces false alarms and allows for much faster searching through recorded footage.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-12">
                  <h3 className="text-xl font-bold text-brand-gold mb-4">Key Features to Look For:</h3>
                  <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                    <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-gold rounded-full"></div> 4K Ultra HD Resolution</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-gold rounded-full"></div> Color Night Vision</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-gold rounded-full"></div> Two-Way Audio</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-gold rounded-full"></div> Cloud Storage Options</li>
                  </ul>
                </div>

                <p>
                  At BritCAM, we specialize in deploying these advanced systems across the Tricity area. Our team ensures that your installation is optimized for maximum coverage and minimum blind spots.
                </p>

                <h2 className="text-3xl font-display font-bold text-white pt-8">Conclusion</h2>
                <p>
                  Investing in a high-quality security system is an investment in peace of mind. As technology continues to advance, staying informed is your best defense. For a personalized security audit of your property in Chandigarh, Mohali, or Panchkula, feel free to reach out to our experts.
                </p>
              </div>

              <div className="mt-16 pt-12 border-t border-white/10 flex flex-wrap justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-sm">
                    <Share2 className="w-4 h-4" /> Share
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-sm">
                    <MessageSquare className="w-4 h-4" /> 12 Comments
                  </button>
                </div>
                <div className="flex gap-4">
                  {['Security', 'Technology', 'Chandigarh'].map(tag => (
                    <span key={tag} className="text-xs text-white/30 uppercase tracking-widest">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-24 glass-card p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-display font-bold mb-4">Need Expert Advice?</h3>
                <p className="text-white/60 mb-8">Our security consultants are available for a free site visit and consultation in the Tricity area.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-gold font-bold">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center">
                      <Calendar className="w-4 h-4" />
                    </div>
                    Free Site Survey
                  </div>
                  <div className="flex items-center gap-3 text-brand-gold font-bold">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center">
                      <User className="w-4 h-4" />
                    </div>
                    Expert Consultation
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
