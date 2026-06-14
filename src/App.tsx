import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Process from './pages/Process';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Why Us', path: '/about' },
    { name: 'Process', path: '/process' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white/50 backdrop-blur-md py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-1 group">
            <img src="/logo.svg" alt="TechRankers" className="h-20 w-auto group-hover:scale-110 transition-transform" />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.path} 
                href={link.path} 
                className={`text-sm font-semibold transition-colors ${location.pathname === link.path ? 'text-brand-600' : 'text-slate-700 hover:text-brand-600'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/contact" 
              className="px-6 py-2.5 bg-gradient-to-r from-brand-600 to-brand-700 text-white text-sm font-bold rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              Get Free Audit
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-all">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`block px-3 py-3 text-base font-semibold rounded-lg transition-all ${location.pathname === link.path ? 'text-brand-600 bg-brand-50' : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/contact"
                className="block px-3 py-3 text-base font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-700 rounded-lg mt-4"
              >
                Get Free Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="TechRankers" className="h-14 w-auto" />
            </div>
            <p className="text-slate-400">Result-driven digital marketing solutions for your business.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/" className="hover:text-brand-400 transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-brand-400 transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-brand-400 transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/services" className="hover:text-brand-400 transition-colors">SEO Optimization</a></li>
              <li><a href="/services" className="hover:text-brand-400 transition-colors">PPC Advertising</a></li>
              <li><a href="/services" className="hover:text-brand-400 transition-colors">Social Media</a></li>
              <li><a href="/services" className="hover:text-brand-400 transition-colors">Web Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-400">
              <li>📧 info@techrankers.net</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Business Ave, Tech City</li>
              <li className="pt-4">
                <div className="flex gap-4">
                  <a href="#" className="hover:text-brand-400 transition-colors">Twitter</a>
                  <a href="#" className="hover:text-brand-400 transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-brand-400 transition-colors">Facebook</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400">
          <p>&copy; {currentYear} TechRankers. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Home />
              </motion.div>
            } />
            <Route path="/services" element={
              <motion.div key="services" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Services />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <About />
              </motion.div>
            } />
            <Route path="/process" element={
              <motion.div key="process" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Process />
              </motion.div>
            } />
            <Route path="/testimonials" element={
              <motion.div key="testimonials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Testimonials />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Contact />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
