import { motion } from 'framer-motion';
import { AlertTriangle, Lock, Gavel, ShieldCheck } from 'lucide-react';
import Navbar from '../components/layout/Navbar';

const topics = [
  {
    icon: AlertTriangle,
    title: "අපරාධ වර්ගීකරණය",
    description: "ශ්‍රී ලංකා දණ්ඩ නීති සංග්‍රහය (Penal Code) යටතේ අපරාධ — නිරාහාර හිරකාරාව, ඝාතනය, සොරකම, වංචාව ඇතුළු ප්‍රධාන අපරාධ ප්‍රවර්ග.",
  },
  {
    icon: Lock,
    title: "අත්අඩංගුවට ගැනීම සහ රඳවා ගැනීම",
    description: "පොලිස් අත්අඩංගුවේදී ඔබට ඇති අයිතිවාසිකම් — නිහඬව සිටීමේ අයිතිය, නීතිඥ හමුවීමේ අයිතිය සහ රිමාන්ඩ් ක්‍රියාවලිය.",
  },
  {
    icon: Gavel,
    title: "නඩු විභාග ක්‍රියාවලිය",
    description: "චෝදනා ගොනු කිරීමේ සිට තීන්දුව දක්වා — මහේස්ත්‍රාත් අධිකරණය, දිස්ත්‍රික් අධිකරණය සහ ශ්‍රේෂ්ඨාධිකරණය ඔස්සේ ගමන් කරන ආකාරය.",
  },
  {
    icon: ShieldCheck,
    title: "ආරක්ෂාත්මක තර්ක (Defences)",
    description: "ස්වයං ආරක්ෂාව, අවිඥානක අවස්ථාව, බලහත්කාරය, වයස් සීමාව ඇතුළු නීතිමය ආරක්ෂාත්මක තර්ක සහ ඒවා ශ්‍රී ලංකා අධිකරණවල යෙදවීම.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

export default function CriminalLaw() {
  return (
    <div className="min-h-screen bg-legal-surface">
      <Navbar />

      {/* Hero */}
      <header className="bg-legal-navy py-28 px-6 text-center text-white">
        <motion.div {...fadeUp(0.2)}>
          <span className="bg-legal-gold/20 text-legal-gold text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest font-sans">
            形事 නීතිය
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Criminal Law
          </h1>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg font-sans leading-relaxed">
            රාජ්‍යය සහ පුද්ගලයා අතර ඇති නීතිමය සම්බන්ධය — අපරාධ, දඬුවම් සහ ඔබේ ආරක්ෂාත්මක අයිතිවාසිකම් පිළිබඳ.
          </p>
        </motion.div>
      </header>

      {/* Topics Grid */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 * i + 0.3)}
              className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-legal-gold/10 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-legal-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-legal-gold/20 transition-colors">
                <Icon size={28} className="text-legal-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-legal-navy mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-sans">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* Rights Banner */}
        <motion.div
          {...fadeUp(0.7)}
          className="mt-16 bg-legal-navy text-white p-12 rounded-[32px]"
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <ShieldCheck size={56} className="text-legal-gold shrink-0" />
            <div>
              <h4 className="font-serif text-2xl font-bold mb-4">අත්අඩංගුවේදී ඔබේ අයිතිවාසිකම්</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans text-sm">
                {[
                  { num: "01", text: "නිහඬව සිටීමේ අයිතිය" },
                  { num: "02", text: "නීතිඥ සමඟ කතා කිරීමේ අයිතිය" },
                  { num: "03", text: "24 පැයකින් අධිකරණයට ඉදිරිපත් කිරීම" },
                ].map(({ num, text }) => (
                  <div key={num} className="flex items-center gap-3">
                    <span className="text-legal-gold font-bold text-lg">{num}</span>
                    <span className="text-slate-300 leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}