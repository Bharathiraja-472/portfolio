import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const { name } = portfolioData.personalInfo;
  
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
    <footer className="bg-slate-900 text-slate-400 py-12 md:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-slate-800">
          
          {/* Logo brand and subtitle */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-md">
                B
              </div>
              <span className="text-white font-bold text-lg leading-none tracking-tight">
                {name}
              </span>
            </a>
            <p className="text-xs text-slate-500 mt-2 font-medium">
              Computer Science student & aspiring MERN stack software engineer.
            </p>
          </div>

          {/* Quick links list */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3.5 text-xs font-semibold uppercase tracking-wider">
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}
              className="hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#education" 
              onClick={(e) => { e.preventDefault(); handleScrollTo('education'); }}
              className="hover:text-white transition-colors duration-200"
            >
              Education
            </a>
            <a 
              href="#internships" 
              onClick={(e) => { e.preventDefault(); handleScrollTo('internships'); }}
              className="hover:text-white transition-colors duration-200"
            >
              Experience
            </a>
            <a 
              href="#skills" 
              onClick={(e) => { e.preventDefault(); handleScrollTo('skills'); }}
              className="hover:text-white transition-colors duration-200"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); handleScrollTo('projects'); }}
              className="hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <a 
              href="#hackathons" 
              onClick={(e) => { e.preventDefault(); handleScrollTo('hackathons'); }}
              className="hover:text-white transition-colors duration-200"
            >
              Hackathons
            </a>
            <a 
              href="#coding-profiles" 
              onClick={(e) => { e.preventDefault(); handleScrollTo('coding-profiles'); }}
              className="hover:text-white transition-colors duration-200"
            >
              Profiles
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}
              className="hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Bharathiraja-472"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
              aria-label="GitHub Developer Profile"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/bharathiraja-m-39560532a/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
              aria-label="LinkedIn Professional Network"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

        </div>

        {/* Lower copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} {name}. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Designed & Developed with <span className="text-rose-500 animate-pulse">❤</span> by <span className="text-slate-400 font-semibold">{name}</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
