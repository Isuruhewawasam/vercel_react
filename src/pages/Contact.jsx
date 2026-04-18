import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import SEO from '../components/utils/SEO';

const initialState = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;


    const message =
      `*නව විමසීමක් (Law Blog)*%0A%0A` +
      `*නම:* ${formData.name}%0A` +
      `*ඊමේල්:* ${formData.email}%0A` +
      `*විෂය:* ${formData.subject}%0A` +
      `*පණිවිඩය:* ${formData.message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    setFormData(initialState);
    alert("ඔබව WhatsApp වෙත යොමු කෙරුණි. කරුණාකර එහි 'Send' බොත්තම ඔබන්න.");
  };

  const contactInfo = [
    { icon: Mail,   label: "ඊමේල්",   value: "isuruhewawasam@gmail.com" },
    { icon: Phone,  label: "දුරකථන",  value: "+94 71 1659 388" },
    { icon: MapPin, label: "ස්ථානය",  value: "Colombo, Sri Lanka" },
  ];

  const inputClass =
    "w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-legal-gold transition-all outline-none";

  return (
    <div className="min-h-screen bg-legal-surface">
      <SEO 
      title="සම්බන්ධ වන්න | විමසීම් සහ මගපෙන්වීම්"
      description="ඔබේ නීතිමය ගැටළු හෝ බ්ලොග් අඩවිය පිළිබඳ යෝජනා සඳහා අපව WhatsApp හෝ ඊමේල් හරහා සම්බන්ධ කරගන්න."
    />
      <Navbar />

      <header className="bg-legal-navy py-24 px-6 text-center text-white">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="font-serif text-5xl font-bold mb-4 uppercase">සම්බන්ධ වන්න</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            ඔබේ නීතිමය ගැටළු හෝ යෝජනා අප වෙත එවන්න. WhatsApp හරහා ඉක්මන් ප්‍රතිචාර ලබාගත හැක.
          </p>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map(({ icon: Icon, label, value }, i) => (
              <div key={i} className="bg-white p-8 rounded-[30px] border border-slate-100 shadow-sm flex items-center gap-6">
                <div className="w-12 h-12 bg-legal-gold/10 rounded-2xl flex items-center justify-center text-legal-gold">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{label}</p>
                  <p className="text-legal-navy font-bold">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <motion.form
              onSubmit={handleWhatsAppSend}
              className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-slate-100 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-legal-navy ml-2">ඔබේ නම</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="නම"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-legal-navy ml-2">ඊමේල් ලිපිනය</label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="example@mail.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-legal-navy ml-2">විෂය</label>
                <input
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text"
                  placeholder="නීතිමය උපදෙස් ලබාගැනීම"
                  className={inputClass}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-legal-navy ml-2">පණිවිඩය</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="ඔබේ ගැටළුව විස්තර කරන්න..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-legal-navy text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-legal-gold hover:text-legal-navy transition-all flex items-center justify-center gap-3 group"
              >
                WhatsApp හරහා එවන්න
                <MessageSquare size={20} className="group-hover:scale-125 transition-transform" />
              </button>
            </motion.form>
          </div>

        </div>
      </main>
    </div>
  );
}