import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import Categories from './pages/Categories';
import Footer from './components/layout/Footer';
import About from './pages/About';
import ScrollToTop from './components/utils/ScrollToTop';
import Contact from './pages/Contact';

import ConstitutionalLaw from './pages/ConstitutionalLaw';
import CivilLaw from './pages/CivilLaw';
import CriminalLaw from './pages/CriminalLaw';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased selection:bg-legal-gold selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="/constitutional-law" element={<ConstitutionalLaw />} />
          <Route path="/civil-law" element={<CivilLaw />} />
          <Route path="/criminal-law" element={<CriminalLaw />} />
        </Routes>
        <Footer /> {/* මෙතැනට Footer එක එකතු කරන්න */}
      </div>
    </Router>
  );
}

export default App;