import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import layout components
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

// Import webpage sections
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Internships from './sections/Internships';
import Skills from './sections/Skills';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Hackathons from './sections/Hackathons';
import Certifications from './sections/Certifications';
import CodingProfiles from './sections/CodingProfiles';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Premium initial page load threshold to simulate full hydration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          // Gorgeous recruiter-focused modern loader page
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-slate-900 flex flex-col items-center justify-center p-6 text-white"
          >
            <div className="flex flex-col items-center max-w-sm w-full text-center">
              
              {/* Spinner Brand */}
              <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                {/* Visual rings */}
                <div className="absolute inset-0 rounded-full border-4 border-slate-700" />
                <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
                <span className="text-xl font-bold font-mono text-blue-400">B</span>
              </div>

              {/* Title & Role */}
              <h2 className="text-xl font-bold tracking-tight text-white font-sans">
                Bharathiraja M
              </h2>
              <p className="text-xs text-slate-400 font-mono mt-1 uppercase tracking-wider">
                MERN Stack Placement Portfolio
              </p>

              {/* Simulated Loading bar */}
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                />
              </div>

              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-3.5">
                Initializing System Modules...
              </span>

            </div>
          </motion.div>
        ) : (
          // Main Hydrated Web Application
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen"
          >
            {/* Sticky Navigation menu */}
            <Navbar />

            {/* Main structural scroll pages wrapper */}
            <main className="flex-grow">
              
              {/* 1. HERO SECTION */}
              <Hero />

              {/* 2. ABOUT SECTION */}
              <About />

              {/* 3. EDUCATION TIMELINE */}
              <Education />

              {/* 4. INTERNSHIPS & EXPERIENCE */}
              <Internships />

              {/* 5. SKILLS SECTION */}
              <Skills />

              {/* 5. TECH STACK BRAND GRID */}
              <TechStack />

              {/* 6. PROJECTS SECTION */}
              <Projects />

              {/* 7. HACKATHONS & ACHIEVEMENTS */}
              <Hackathons />

              {/* 8. CERTIFICATIONS SECTION */}
              <Certifications />

              {/* 8. CODING PROFILES SECTION */}
              <CodingProfiles />

              {/* 9. RESUME DOWNLOAD SECTION */}
              <Resume />

              {/* 10. CONTACT SECTION */}
              <Contact />

            </main>

            {/* Bottom Footer index details */}
            <Footer />

            {/* Floating scroll action triggers */}
            <ScrollToTop />

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
