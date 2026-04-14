import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Solid Icons
import { 
  faScaleBalanced, 
  faEnvelope, 
  faPhone, 
  faLocationDot, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';
// Brand Icons
import { 
  faFacebookF, 
  faXTwitter, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'මුල් පිටුව', path: '/' },
    { name: 'නීතිමය අංශයන්', path: '/categories' },
    { name: 'අප ගැන', path: '/about' },
    { name: 'ප්‍රතිපත්ති', path: '/privacy' },
  ];

  const socialLinks = [
    { icon: faFacebookF, url: '#' },
    { icon: faXTwitter, url: '#' },
    { icon: faLinkedinIn, url: '#' }
  ];

  return (
    <footer className="bg-legal-navy text-white pt-20 pb-10 border-t border-legal-gold/20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Section 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-legal-gold w-10 h-10 flex items-center justify-center rounded-lg shadow-lg">
                <FontAwesomeIcon icon={faScaleBalanced} className="text-legal-navy text-xl" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight uppercase">
                Legal<span className="text-legal-gold">Insight</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              ශ්‍රී ලංකාවේ නීති පද්ධතිය පිළිබඳ නිවැරදි සහ පැහැදිලි අවබෝධයක් ලබා දීම අපගේ අරමුණයි. 
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, backgroundColor: '#d4af37', color: '#0f172a' }}
                  href={social.url}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full transition-all text-slate-300"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-legal-gold">ප්‍රධාන සබැඳි</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-3 group"
                  >
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="text-[10px] text-legal-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" 
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Categories (Static for now) */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-legal-gold">නීතිමය ක්ෂේත්‍ර</h4>
            <ul className="space-y-4 text-slate-400">
              {['Constitutional Law', 'Civil Law', 'Criminal Law'].map((cat) => (
                <li key={cat} className="hover:text-white transition-colors cursor-pointer">
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Contact Info */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold mb-6 text-legal-gold">සම්බන්ධ වන්න</h4>
            <div className="space-y-5 text-slate-400 text-sm">
              <div className="flex items-start gap-4">
                <FontAwesomeIcon icon={faLocationDot} className="text-legal-gold mt-1" />
                <span>කොළඹ, ශ්‍රී ලංකාව.</span>
              </div>
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-legal-gold" />
                <span>info@legalinsight.lk</span>
              </div>
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faPhone} className="text-legal-gold" />
                <span>+94 11 234 5678</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[11px] max-w-xl italic">
            <span className="text-legal-gold font-bold uppercase mr-2">Disclaimer:</span> 
            මෙහි අඩංගු කරුණු සාමාන්‍ය දැනුවත් කිරීම සඳහා පමණක් වන අතර, වෘත්තීය නීතිඥ සහාය සඳහා විකල්පයක් නොවේ.
          </p>
          <p className="text-slate-400 text-sm">
            © {currentYear} <span className="text-legal-gold font-bold">LegalInsight</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}