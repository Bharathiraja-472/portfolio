import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { portfolioData } from '../data/portfolioData';

// Focused, clutter-free professional navigation links
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll height to apply glassmorphic backdrop styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section on scroll to update active indicators
      const sections = navItems.map(item => item.href.substring(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section top crosses near the top of viewport
          if (rect.top <= 160) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav py-3.5 shadow-sm shadow-slate-100/50' 
          : 'bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100/50'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo Section - Compact and Clean */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-base shadow-sm shadow-blue-500/10 group-hover:scale-105 transition-transform duration-200">
              B
            </div>
            <div className="flex flex-col text-left">
              <span className="text-slate-900 font-extrabold text-sm leading-none tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                {portfolioData.personalInfo.name}
              </span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-widest mt-0.5 uppercase leading-none">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu Links - Balanced single line */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-2 text-xs xl:text-sm font-bold tracking-wide rounded-lg transition-colors duration-250 ${
                    isActive 
                      ? 'text-blue-600' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl border border-slate-200/50 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>

        </div>
      </nav>

      {/* Mobile Drawer Dropdown Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 w-full z-40 bg-white border-b border-slate-200/80 shadow-lg overflow-y-auto max-h-[calc(100vh-68px)] lg:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center px-4 py-3 text-sm font-bold tracking-wide rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
