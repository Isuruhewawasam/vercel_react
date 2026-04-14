import { motion } from 'framer-motion';
import { Shield, BookOpen, Users, Scale } from 'lucide-react';
import Navbar from '../components/layout/Navbar';

const topics = [
  {
    icon: Shield,
    title: "මූලික අයිතිවාසිකම්",
    description: "ශ්‍රී ලංකා ව්‍යවස්ථාවේ III වන පරිච්ඡේදය යටතේ සහතික කරන ලද මූලික අයිතිවාසිකම් — ජීවත් වීමේ අයිතිය, සමානාත්මතාව, නිදහස් අදහස් ප්‍රකාශ කිරීමේ අයිතිය ඇතුළුව.",
  },
  {
    icon: Users,
    title: "ව්‍යවස්ථාදායකය",
    description: "ශ්‍රී ලංකා පාර්ලිමේන්තුව, ජනාධිපති ධුරය සහ අමාත්‍ය මණ්ඩලය අතර බලය බෙදීම පිළිබඳ ව්‍යවස්ථාත්මක රාමුව.",
  },
  {
    icon: Scale,
    title: "අධිකරණ ස්වාධීනත්වය",
    description: "ශ්‍රේෂ්ඨාධිකරණය, අභියාචනාධිකරණය සහ පහළ අධිකරණ ක්‍රමය — ව්‍යවස්ථාව යටතේ ලබා දී ඇති අධිකරණ බලතල සහ ස්වාධීනත්වය.",
  },
  {
    icon: BookOpen,
    title: "ව්‍යවස්ථා සංශෝධන",
    description: "1978 ව්‍යවස්ථාව සිට මේ දක්වා සිදු කළ ප්‍රධාන සංශෝධන — 13, 17, 19 සහ 20 වන සංශෝධන ඔවුන්ගේ බලපෑම සමඟ.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

export default function ConstitutionalLaw() {
  return (
    <div className="min-h-screen bg-legal-surface">
      <Navbar />

      {/* Hero */}
      <header className="bg-legal-navy py-28 px-6 text-center text-white">
        <motion.div {...fadeUp(0.2)}>
          <span className="bg-legal-gold/20 text-legal-gold text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest font-sans">
            ව්‍යවස්ථා නීතිය
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Constitutional Law
          </h1>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg font-sans leading-relaxed">
            ශ්‍රී ලංකාවේ ව්‍යවස්ථාව — රාජ්‍ය බලය, නාගරික නිදහස සහ ජනතාවගේ අයිතිවාසිකම් සුරක්ෂිත කරන සර්වෝච්ච නීතිය.
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

        {/* Info Banner */}
        <motion.div
          {...fadeUp(0.7)}
          className="mt-16 bg-legal-navy text-white p-12 rounded-[32px] flex flex-col md:flex-row items-center gap-8"
        >
          <Scale size={56} className="text-legal-gold shrink-0" />
          <div>
            <h4 className="font-serif text-2xl font-bold mb-2">ව්‍යවස්ථාව ඔබේ ආරක්ෂාවයි</h4>
            <p className="text-slate-400 font-sans text-sm leading-relaxed">
              ශ්‍රී ලංකාවේ ව්‍යවස්ථාව 1978 දී ක්‍රියාත්මක වූ අතර, එය රාජ්‍යයේ ඉහළම නීතිය වේ. ඕනෑම නීතියක් ව්‍යවස්ථාවට පටහැනි නම්, ශ්‍රේෂ්ඨාධිකරණයට එය අවලංගු කිරීමේ බලය ඇත.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}