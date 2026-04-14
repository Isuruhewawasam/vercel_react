import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Navbar from '../components/layout/Navbar';

import SEO from '../components/utils/SEO';

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) return (
    <div className="text-center py-20 font-serif text-2xl">ලිපිය හමු නොවීය.</div>
  );

  return (
    <div className="min-h-screen bg-white">

      <SEO 
      title={post.title}
      description={post.excerpt} // ලිපියේ කෙටි විස්තරය description එකට යනවා
      image={post.imageUrl}      // Social media share කරද්දී පේන රූපය
      keywords={`${post.category}, ${post.title}, Sri Lanka Law Article`}
    />
      <Navbar />

      {/* Header */}
      <header className="bg-legal-surface pt-16 pb-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-legal-gold font-bold mb-8 hover:gap-4 transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            ආපසු මුල් පිටුවට
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-legal-gold/20 text-legal-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest font-sans">
              {post.category}
            </span>

            <h1 className="font-serif text-4xl md:text-6xl text-legal-navy font-bold mt-6 leading-tight uppercase tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-8 text-slate-500 text-sm border-t border-slate-200 pt-6 font-sans">
              <div className="flex items-center gap-2 font-bold text-legal-navy">
                <User size={16} className="text-legal-gold" /> {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} /> {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} /> {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Featured Image */}
      {post.imageUrl && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-5xl mx-auto px-6 -mt-16 mb-16 relative z-10"
        >
          <div className="aspect-[2/1] rounded-3xl overflow-hidden shadow-2xl shadow-legal-navy/10 border-4 border-white">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
      )}

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 pb-16">
        <div className="flex flex-col md:flex-row gap-12">

          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full md:w-3/4"
          >
            <p className="text-2xl font-serif italic text-slate-600 mb-12 leading-relaxed border-l-8 border-legal-gold pl-8 py-2">
              {post.excerpt}
            </p>

            <div
              className="prose-legal"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </motion.article>

          <aside className="w-full md:w-1/4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-legal-navy text-white p-8 rounded-3xl shadow-2xl border-b-4 border-legal-gold">
                <BookOpen className="text-legal-gold mb-6" size={40} />
                <h4 className="font-serif text-2xl font-bold mb-3">නීතිමය දැනුම</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-sans">
                  මෙම ලිපියේ අන්තර්ගතය සාමාන්‍ය දැනුවත් කිරීම සඳහා පමණි. ඔබගේ නිශ්චිත නීතිමය අවශ්‍යතා සඳහා වෘත්තීය සහාය ලබා ගන්න.
                </p>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}