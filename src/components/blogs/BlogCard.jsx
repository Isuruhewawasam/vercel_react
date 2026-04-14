import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-legal-gold/10 transition-all duration-500 flex flex-col h-full"
    >
      {/* IMAGE SECTION */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-5 left-5">
          <span className="bg-legal-navy/90 backdrop-blur-md text-legal-gold text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-legal-gold/30">
            {post.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-legal-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* CONTENT SECTION */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Meta */}
        <div className="flex items-center gap-4 text-slate-400 text-xs mb-4 font-sans">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-legal-gold" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-legal-gold" />
            <span>{post.readTime || '5 min'} read</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl md:text-2xl font-bold text-legal-navy mb-4 leading-snug group-hover:text-legal-gold transition-colors duration-300">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>

        {/* Excerpt */}
        <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 font-sans">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-legal-gold/10 flex items-center justify-center">
              <User size={14} className="text-legal-navy" />
            </div>
            <span className="text-xs font-bold text-legal-navy opacity-70">By Admin</span>
          </div>
          <Link
            to={`/blog/${post.id}`}
            className="flex items-center gap-2 text-legal-navy font-bold text-sm group/btn"
          >
            කියවන්න
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-legal-gold group-hover/btn:text-legal-navy transition-all duration-300">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}