import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Menu, X, Home, BookOpen, Info, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'මුල් පිටුව', path: '/', icon: <Home size={20} /> },
    { name: 'අංශයන්', path: '/categories', icon: <BookOpen size={20} /> },
    { name: 'අප ගැන', path: '/about', icon: <Info size={20} /> },
  ];

  // Sidebar එක ඇතුළට එන Animation එක
  const sidebarVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  // Menu Items එකින් එක ලස්සනට එන්න (Stagger Effect)
  const linkVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 20 },
  };

  return (
    <nav className="sticky top-0 z-[100] bg-legal-navy/95 backdrop-blur-md border-b border-legal-gold/20 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-legal-gold p-2 rounded-xl shadow-lg shadow-legal-gold/20">
            <Scale size={24} className="text-legal-navy" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-white">
            LEGAL<span className="text-legal-gold underline decoration-1">INSIGHT</span>
          </span>
        </Link>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 items-center text-slate-300 font-medium font-sans">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="hover:text-legal-gold transition-colors flex items-center gap-2"
            >
              {link.name}
            </Link>
          ))}
          <Link to={"/contact"}><a className="bg-legal-gold text-legal-navy px-5 py-2 rounded-full font-bold text-sm hover:bg-white transition-all">
            සම්බන්ධ වන්න
          </a></Link>
        </div>

        {/* Mobile Toggle Button (Visible only on Mobile) */}
        <button 
          onClick={() => setIsOpen(true)}
          className="md:hidden text-legal-gold p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Menu size={28} />
        </button>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop (පසුබිම අඳුරු කිරීම) */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              />

              {/* Sidebar Content */}
              <motion.div 
                variants={sidebarVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-legal-navy border-l border-legal-gold/30 z-50 p-8 md:hidden shadow-2xl"
              >
                <div className="flex justify-between items-center mb-12">
                  <span className="text-legal-gold font-serif text-xl font-bold uppercase tracking-widest">Menu</span>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 bg-white/5 rounded-full text-white hover:bg-legal-gold hover:text-legal-navy transition-all"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      variants={linkVariants}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link 
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between group text-white hover:text-legal-gold transition-colors py-4 border-b border-white/5"
                      >
                        <div className="flex items-center gap-4">
                          <span className="p-2 bg-white/5 rounded-lg text-legal-gold group-hover:bg-legal-gold group-hover:text-legal-navy transition-all">
                            {link.icon}
                          </span>
                          <span className="text-xl font-sans font-medium">{link.name}</span>
                        </div>
                        <ChevronRight size={20} className="text-slate-600 group-hover:text-legal-gold" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute bottom-12 left-8 right-8">
                 <Link to={"/contact"}><a className="w-full bg-legal-gold text-legal-navy py-4 rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform">
                    සම්බන්ධ වන්න
                  </a></Link> 
                  <p className="text-slate-500 text-center mt-6 text-sm font-sans">
                    © 2026 Legal Insight Sri Lanka
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}