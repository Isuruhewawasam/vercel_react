import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faScaleBalanced, 
  faGraduationCap, 
  faGavel, 
  faLightbulb, 
  faUsers,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';

import SEO from '../components/utils/SEO';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
      title="අප ගැන | ඉසුරු නුවන් (LLB)"
      description="නීති උපාධිධාරී ඉසුරු නුවන් විසින් මෙහෙයවන මෙම අවකාශය මගින් ශ්‍රී ලංකාවේ නීති සාක්ෂරතාවය ඉහළ නැංවීමට කටයුතු කරයි."
      keywords="Isuru Nuwan, LLB Graduate Sri Lanka, Legal Apprentice, About Law Blog"
    />
      <Navbar />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-legal-navy">
        {/* Background Image with Zoom Effect */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1521791136364-798a7bc0d262?q=80&w=2000" 
            alt="Law and Justice"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-legal-navy/60 via-legal-navy/80 to-legal-navy"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6">
              යුක්තිය උදෙසා <span className="text-legal-gold font-light italic">දැනුම</span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl font-sans leading-relaxed">
              නීතිමය සාක්ෂරතාවයෙන් හෙබි සමාජයක් බිහිකිරීමේ අරමුණින් ගොඩනැගූ නිල නීතිමය අවකාශය.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              icon: faLightbulb, 
              title: "අපගේ අරමුණ", 
              desc: "සංකීර්ණ නීතිමය කරුණු සරල සිංහල බසින් සෑම පුරවැසියෙකුටම තේරුම් ගත හැකි පරිදි ඉදිරිපත් කිරීම." 
            },
            { 
              icon: faScaleBalanced, 
              title: "විශ්වාසනීයත්වය", 
              desc: "ශ්‍රී ලංකාවේ පවතින නීතිමය ප්‍රතිපාදන සහ අධිකරණ තීන්දුවලට අනුකූලව නිවැරදි තොරතුරු පමණක් ලබා දීම." 
            },
            { 
              icon: faUsers, 
              title: "සමාජ මෙහෙවර", 
              desc: "නීතිය නොදැන සිටීම නිසා සිදුවන අසාධාරණයන් අවම කර දැනුවත් සමාජයක් නිර්මාණය කිරීම." 
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-10 rounded-3xl bg-legal-surface border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-legal-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={item.icon} className="text-legal-gold text-2xl" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-legal-navy mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-sans">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CREATOR SECTION (MEET THE CREATOR) */}
      <section className="py-24 bg-legal-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-legal-gold/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-legal-gold/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-legal-gold/20 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000" // මෙතැනට ඔයාගේ Professional photo එකක් දාන්න පුළුවන්
                  className="w-full h-full object-cover"
                  alt="Isuru Nuwan"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-legal-gold text-legal-navy p-6 rounded-2xl shadow-xl font-bold font-serif">
                <FontAwesomeIcon icon={faGavel} className="mr-2" />
                Legal Apprentice
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-white"
          >
            <span className="text-legal-gold font-bold uppercase tracking-widest text-sm">කර්තෘ පිළිබඳව</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              ඉසුරු නුවන් <br />
              <span className="text-legal-gold text-2xl font-light italic">(LLB(OUSL),BA(USJP))</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 font-sans">
              නීති උපාධිධාරියෙකු (LLB) සහ වෘත්තීය නීති ආධුනිකයෙකු (Legal Apprentice) ලෙස මා ලබා ඇති දැනුම සහ අත්දැකීම් 
              ඔබ සමඟ බෙදා ගැනීමටත්, ශ්‍රී ලාංකීය සමාජය නීතිමය වශයෙන් සවිබල ගැන්වීමටත් මෙම වෙබ් අඩවිය මා නිර්මාණය කළෙමි.
            </p>
            
            <div className="space-y-4">
              {[
                "නීතිමය ලිපි සහ විග්‍රහයන් ඉදිරිපත් කිරීම",
                "නවතම නීති සංශෝධන පිළිබඳ දැනුවත් කිරීම",
                "නීතිමය ගැටළු සඳහා මූලික මගපෙන්වීම්"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-200">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-legal-gold" />
                  <span className="font-sans">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center">
        <h3 className="font-serif text-3xl font-bold text-legal-navy mb-8">අපගේ නීතිමය එකතුව සමඟ එක්වන්න</h3>
        <button className="bg-legal-navy text-white px-10 py-4 rounded-full font-bold hover:bg-legal-gold hover:text-legal-navy transition-all shadow-xl active:scale-95">
          ලිපි කියවීමට යන්න
        </button>
      </section>
    </div>
  );
}