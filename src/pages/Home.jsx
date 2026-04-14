import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';
import BlogCard from '../components/blogs/BlogCard';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/utils/Seo';


export default function Home() {
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // මුල් පිටුවේ එකවර පෙන්වන ලිපි ගණන

  // ලිපි බෙදා වෙන් කිරීමේ ගණනය කිරීම් (Pagination Logic)
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  // දැනට පෙන්විය යුතු ලිපි ටික පමණක් ලබා ගැනීම
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // පිටුව මාරු කරන විට ඉහළට Scroll වීම සඳහා
  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // අලුත් පිටුවට ගිය පසු ලිපි වල මුලටම scroll කිරීම
    window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-legal-surface">
      <SEO 
      title="මුල් පිටුව | ශ්‍රී ලාංකීය නීතිමය අවකාශය"
      description="ශ්‍රී ලංකාවේ නීතිමය කරුණු, අධිකරණ තීන්දු සහ ව්‍යවස්ථාපිත නීතිය පිළිබඳ නිවැරදි විග්‍රහයන් සිංහලෙන් කියවන්න."
      keywords="Law Sri Lanka, Legal Blog Sinhala, Isuru Nuwan Law, LLB Sri Lanka, නීතිමය උපදෙස්"
    />
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Blog Feed */}
      <main className="max-w-7xl mx-auto px-6 py-20 relative z-20 -mt-10">
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-slate-100">
          
          {/* Feed Header */}
          <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-legal-gold/10 rounded-xl">
                <Sparkles className="text-legal-gold" size={28} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-legal-navy uppercase tracking-tight">
                නවතම <span className="text-legal-gold">ලිපි</span>
              </h2>
            </div>
            <div className="hidden md:block h-1 flex-grow mx-8 bg-gradient-to-r from-legal-gold/20 to-transparent rounded-full"></div>
            <span className="text-slate-400 font-sans text-sm italic">
              පිටුව {currentPage} / {totalPages}
            </span>
          </div>

          {/* Grid Layout with Animations */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {currentPosts.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16 pt-8 border-t border-slate-100">
              {/* Previous Button */}
              <button
                onClick={() => handlePaginate(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="p-3 rounded-xl bg-slate-50 text-slate-600 hover:bg-legal-gold hover:text-legal-navy disabled:opacity-40 disabled:hover:bg-slate-50 transition-all shadow-sm active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              
              {/* Page Numbers */}
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePaginate(i + 1)}
                    className={`w-11 h-11 rounded-xl font-bold text-sm transition-all duration-300 ${
                      currentPage === i + 1 
                      ? 'bg-legal-navy text-legal-gold shadow-xl scale-110' 
                      : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePaginate(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-3 rounded-xl bg-slate-50 text-slate-600 hover:bg-legal-gold hover:text-legal-navy disabled:opacity-40 disabled:hover:bg-slate-50 transition-all shadow-sm active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}