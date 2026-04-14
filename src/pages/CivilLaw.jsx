import { motion } from 'framer-motion';
import { Home, FileText, Handshake, AlertCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';

const topics = [
  {
    icon: Handshake,
    title: "ගිවිසුම් නීතිය",
    description: "ගිවිසුමක් වලංගු වීමට අවශ්‍ය කොන්දේසි — දීමනාව, පිළිගැනීම, සලකා බැලීම සහ නීත්‍යානුකූල අරමුණ. ගිවිසුම් කඩ කිරීමේදී ඇති නීතිමය ප්‍රතිකාර.",
  },
  {
    icon: Home,
    title: "දේපළ නීතිය",
    description: "ඉඩම් සහ දේපළ හිමිකම, ඔප්පු ලේඛනය, රෙජිස්ට්‍රේෂන් ක්‍රියාවලිය සහ දේපළ ආරවුල් නිරාකරණ ක්‍රම ශ්‍රී ලංකා නීතිය යටතේ.",
  },
  {
    icon: FileText,
    title: "පවුල් නීතිය",
    description: "විවාහය, දික්කසාද නීතිය, දරු ආරක්ෂාව, දාය සම්පත් බෙදීම සහ කොහෝමාද කියා නොදැනුවත් ශ්‍රී ලංකා පවුල් නීති රාමුව.",
  },
  {
    icon: AlertCircle,
    title: "වෙනස් කිරීමේ නීතිය (Tort Law)",
    description: "අනෙකා ක්‍රියා නිසා සිදු වූ හානිය සඳහා වන්දි ලබාගැනීම — නොසැලකිලිමත්කම, අපහාස, පෞද්ගලිකත්ව 침害 ආදිය.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

export default function CivilLaw() {
  return (
    <div className="min-h-screen bg-legal-surface">
      <Navbar />

      {/* Hero */}
      <header className="bg-legal-navy py-28 px-6 text-center text-white">
        <motion.div {...fadeUp(0.2)}>
          <span className="bg-legal-gold/20 text-legal-gold text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest font-sans">
            සිවිල් නීතිය
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Civil Law
          </h1>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg font-sans leading-relaxed">
            පුද්ගලයන් සහ ආයතන අතර ඇති ගැටුම් නිරාකරණය කරන නීති රාමුව — ගිවිසුම්, දේපළ, පවුල සහ වෙනස් කිරීම් ආවරණය කරමින්.
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

        {/* Civil vs Criminal Note */}
        <motion.div
          {...fadeUp(0.7)}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-legal-gold/10 border border-legal-gold/30 p-8 rounded-[24px]">
            <h4 className="font-serif text-xl font-bold text-legal-navy mb-2">සිවිල් නඩු</h4>
            <p className="text-slate-600 text-sm font-sans leading-relaxed">
              සිවිල් නඩුවක් පුද්ගලයෙකු හෝ ආයතනයක් විසින් තවත් පාර්ශ්වයකට එරෙහිව ගොනු කෙරේ. ප්‍රතිකාරය සාමාන්‍යයෙන් මුදල් වන්දි හෝ නිශ්චිත ක්‍රියාවක් සිදු කිරීමට/නොකිරීමට නියෝගයකි.
            </p>
          </div>
          <div className="bg-legal-navy text-white p-8 rounded-[24px]">
            <h4 className="font-serif text-xl font-bold text-legal-gold mb-2">සාක්ෂි ප්‍රමිතිය</h4>
            <p className="text-slate-400 text-sm font-sans leading-relaxed">
              සිවිල් නඩුවල සාක්ෂි ප්‍රමිතිය "සම්භාවිතාවේ ශේෂය" (Balance of Probabilities) වේ — 形事 නඩුවල මෙන් "සාධාරණ සැකයෙන් ඔබ්බේ" නොවේ.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}