import { motion } from 'framer-motion';
import { Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-legal-navy">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000"
          alt="Legal Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-legal-navy via-legal-navy/60 to-transparent" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-block p-3 bg-legal-gold/10 rounded-2xl mb-8 border border-legal-gold/20 backdrop-blur-sm"
        >
          <Gavel className="text-legal-gold" size={42} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-serif text-5xl md:text-8xl text-white font-bold leading-tight"
        >
          යුක්තිය සහ <br />
          <span className="text-legal-gold italic font-light">සාධාරණය</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-xl text-slate-200 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          ශ්‍රී ලංකාවේ නීති පද්ධතිය සහ ඔබගේ අයිතිවාසිකම් පිළිබඳ විචිත්‍රවත් විග්‍රහයක්.
          සංකීර්ණ නීතිය සරලව තේරුම් ගනිමු.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 ml-11 flex flex-col sm:flex-row gap-10 justify-center"
        >
          <Link to="/about">
            <button className="bg-legal-gold hover:bg-white text-legal-navy font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl shadow-legal-gold/20 active:scale-95">
              අප ගැන
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-bold py-4 px-10 rounded-full transition-all active:scale-95">
              සම්බන්ධ වන්න
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-legal-gold/50"
      >
        <div className="w-6 h-10 border-2 border-legal-gold/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-legal-gold rounded-full" />
        </div>
      </motion.div>

    </section>
  );
}