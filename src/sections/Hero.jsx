import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiDownload, HiPaperAirplane } from 'react-icons/hi';
import { portfolioData } from '../data/portfolioData';
import ProfileImage from '../components/ProfileImage';

export default function Hero() {
  const { name, bio } = portfolioData.personalInfo;
  
  // Custom high-performance Typewriter Engine: loop infinitely with cursor blink
  const rolesList = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "CSE Undergraduate",
    "React Developer"
  ];
  
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullWord = rolesList[currentWordIdx];
      if (!isDeleting) {
        // Typing characters forward
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(95); // Natural fluid typing pace
        
        if (currentText === fullWord) {
          // Pause at word completion before backspacing
          timer = setTimeout(() => setIsDeleting(true), 2200);
          return;
        }
      } else {
        // Deleting characters backward
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(45); // Snappier backspace speed
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % rolesList.length);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, typingSpeed]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/30 via-white to-white"
    >
      {/* Self-contained blink style ensuring visual cursor compliance without css pollution */}
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { border-color: transparent }
          50% { border-color: #2563eb }
        }
        .animate-blink {
          animation: cursorBlink 0.8s step-end infinite;
        }
      `}</style>

      {/* Decorative background grid and ambient glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_75%,transparent_100%)] opacity-25" />
      <div className="absolute top-20 right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-blue-200/10 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-indigo-100/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Introduction Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1"
          >
            {/* Status Placement Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100/60 rounded-full text-[10px] sm:text-xs font-bold text-blue-600 mb-6 tracking-wide shadow-sm">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
              </span>
              Actively Preparing For Placements
            </span>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent select-all">{name}</span>
            </h1>

            {/* Dynamic Typewriter Role */}
            <div className="h-10 sm:h-12 md:h-14 flex items-center mt-3 mb-6">
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-500 mr-2 sm:mr-3 select-none">
                I'm a
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-600 font-mono tracking-tight whitespace-nowrap flex items-center">
                {currentText}
                <span className="animate-blink border-r-3 border-blue-600 ml-1 h-6 sm:h-8" />
              </span>
            </div>

            {/* Biography */}
            <p className="text-base sm:text-lg text-slate-500 max-w-xl mb-8 leading-relaxed font-normal">
              {bio}
            </p>

            {/* Standardized CTA Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 w-full sm:w-auto">
              
              {/* Resume Button */}
              <a
                href="/resume/Bharathiraja_Resume.pdf"
                download="Bharathiraja_M_Resume.pdf"
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 active:translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <HiDownload size={16} />
                Download Resume
              </a>
              
              {/* Projects Button */}
              <button
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto px-6 py-3 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              >
                View Projects
                <HiArrowRight size={14} className="text-slate-400" />
              </button>

              {/* Contact Button */}
              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto px-6 py-3 border border-blue-100 bg-blue-50/40 hover:bg-blue-50 text-blue-600 hover:text-blue-700 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer shadow-sm"
              >
                <HiPaperAirplane className="rotate-90" size={14} />
                Contact
              </button>

            </div>
            
            {/* High-Fidelity Interactive Metrics Cards */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 mt-10 w-full text-left">
              
              {/* Academic Year */}
              <div className="bg-slate-50/60 border border-slate-100 hover:border-blue-100/50 hover:bg-blue-50/20 p-4 sm:p-5 rounded-2xl transition-all duration-300 group hover:shadow-sm">
                <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                  3rd
                </span>
                <span className="block text-[10px] md:text-xs text-slate-400 mt-2 uppercase font-extrabold tracking-wider leading-snug">
                  Year CSE B.E.
                </span>
              </div>

              {/* LeetCode count */}
              <a 
                href="https://leetcode.com/u/Bharathiraja_/" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-slate-50/60 border border-slate-100 hover:border-blue-100/50 hover:bg-blue-50/20 p-4 sm:p-5 rounded-2xl transition-all duration-300 group hover:shadow-sm block"
              >
                <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                  150+
                </span>
                <span className="block text-[10px] md:text-xs text-slate-400 mt-2 uppercase font-extrabold tracking-wider leading-snug">
                  LeetCode Solved
                </span>
              </a>

              {/* Focus Stack */}
              <button
                onClick={() => handleScrollTo('projects')}
                className="bg-slate-50/60 border border-slate-100 hover:border-blue-100/50 hover:bg-blue-50/20 p-4 sm:p-5 rounded-2xl transition-all duration-300 group hover:shadow-sm block text-left w-full cursor-pointer"
              >
                <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                  MERN
                </span>
                <span className="block text-[10px] md:text-xs text-slate-400 mt-2 uppercase font-extrabold tracking-wider leading-snug">
                  Focus Stack
                </span>
              </button>

            </div>

          </motion.div>

          {/* Right Column: Clean Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2 px-4 sm:px-6"
          >
            {/* Symmetrical Single Bounding Circle (LinkedIn Portrait Style) */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[340px] lg:h-[340px] max-w-full aspect-square relative flex items-center justify-center">
              <ProfileImage className="w-full h-full" borderAndShadow={true} alt="Bharathiraja M Profile" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
