import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import ProfileImage from '../components/ProfileImage';
import { HiCheckCircle, HiLightBulb, HiTrendingUp, HiCode } from 'react-icons/hi';

export default function About() {
  const { paragraphs, highlights } = portfolioData.about;
  const { name } = portfolioData.personalInfo;

  // Icon mapping for highlights
  const icons = [
    <HiCode className="text-blue-500" size={24} />,
    <HiTrendingUp className="text-indigo-500" size={24} />,
    <HiLightBulb className="text-amber-500" size={24} />,
    <HiCheckCircle className="text-emerald-500" size={24} />
  ];

  return (
    <section id="about" className="py-24 bg-slate-50/50 relative">
      {/* Decorative background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-blue-50/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          badge="About Me"
          title="Professional Journey & Objectives"
          subtitle="A look into my technical background, focus areas, and career goals for software engineering placements."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Profile Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col items-center"
          >
            {/* Simple Clean Professional Circular Avatar */}
            <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 relative flex items-center justify-center">
              <ProfileImage className="w-full h-full" borderAndShadow={true} alt={`${name} About Profile`} />
            </div>

            {/* Mobile / Section Profile Info Badge */}
            <div className="mt-6 text-center">
              <h3 className="text-lg font-bold text-slate-800">{name}</h3>
              <p className="text-sm font-semibold text-blue-600 mt-1 uppercase tracking-wider">MERN Developer</p>
              <div className="flex items-center gap-1.5 justify-center mt-2.5 px-3 py-1 bg-white border border-slate-200/60 rounded-full text-xs text-slate-500 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Vellore, Tamil Nadu
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Paragraphs & Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 flex flex-col text-left"
          >
            <div className="prose prose-slate max-w-none">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Engineering student with a vision to build real-world software
              </h3>
              
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-600 leading-relaxed text-base mb-4 font-normal">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Structured Placement Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200/50 shadow-sm flex items-start gap-4 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                    {icons[idx % icons.length]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 mb-1">{item.label}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recruiter Placement Summary Panel */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 border border-blue-500/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Need a motivated MERN developer?</h4>
                <p className="text-xs text-slate-500 mt-1">Available for full-time software engineering and developer internship roles starting immediately.</p>
              </div>
              <a
                href="#contact"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 active:translate-y-0.5 transition-all duration-200 whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  const contactEl = document.getElementById('contact');
                  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Discuss Placements
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
