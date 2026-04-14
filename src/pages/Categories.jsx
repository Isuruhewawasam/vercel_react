import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Navbar from '../components/layout/Navbar';
import BlogCard from '../components/blogs/BlogCard';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination as SwiperPagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SEO from '../components/utils/Seo';

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // එක පිටුවක පෙන්වන ලිපි ගණන

  const allCategories = ["All", ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Category එක වෙනස් කරන විට පලවෙනි පිටුවට යන්න
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-legal-surface">
      <SEO 
      title={`${selectedCategory} - නීතිමය ප්‍රවර්ග`}
      description={`ශ්‍රී ලංකාවේ ${selectedCategory} ක්ෂේත්‍රයට අදාළ නවතම ලිපි සහ නීතිමය විග්‍රහයන් මෙතැනින් කියවන්න.`}
      keywords={`${selectedCategory}, Sri Lankan Law Categories, Legal Education`}
    />

      <Navbar />

      {/* 1. HERO & FEATURED SLIDER */}
      <section className="bg-legal-navy pt-20 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 uppercase">
              නීතිමය <span className="text-legal-gold">ප්‍රවර්ග</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              අදාළ ක්ෂේත්‍රය තෝරාගෙන නවතම නීතිමය විග්‍රහයන් සහ තීන්දු පිළිබඳව දැනුවත් වන්න.
            </p>
            
            {/* Category Pills inside Hero */}
            <div className="flex flex-wrap gap-3">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat 
                    ? 'bg-legal-gold text-legal-navy scale-105' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* SWIPER SLIDER (Featured in Category) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <Swiper
              modules={[SwiperPagination, Autoplay, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="h-[400px] w-full"
            >
              {filteredPosts.slice(0, 3).map((post) => (
                <SwiperSlide key={post.id}>
                  <div className="relative h-full w-full group">
                    <img src={post.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-legal-navy via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-10 right-10">
                      <span className="bg-legal-gold text-legal-navy text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-3 inline-block">Featured</span>
                      <h2 className="text-white text-2xl font-serif font-bold">{post.title}</h2>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN BLOG GRID */}
      <main className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-20">
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-slate-100">
          <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6">
             <h3 className="font-serif text-2xl font-bold text-legal-navy flex items-center gap-3">
               <LayoutGrid className="text-legal-gold" /> {selectedCategory} ලිපි
             </h3>
             <span className="text-slate-400 text-sm font-sans italic">{filteredPosts.length} ක් සොයාගන්නා ලදී</span>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {currentPosts.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* 3. PAGINATION CONTROLS */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:bg-legal-gold hover:text-legal-navy disabled:opacity-30 disabled:hover:bg-slate-100 transition-all shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                      currentPage === i + 1 
                      ? 'bg-legal-navy text-legal-gold shadow-lg scale-110' 
                      : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:bg-legal-gold hover:text-legal-navy disabled:opacity-30 disabled:hover:bg-slate-100 transition-all shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-slate-400 italic">
              මෙම අංශය යටතේ තවමත් ලිපි ඇතුළත් කර නොමැත.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}