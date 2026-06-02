import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { HiDownload, HiDocumentText, HiMail, HiAcademicCap, HiLightningBolt } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ResumeFallbackModal from '../components/ResumeFallbackModal';

export default function Resume() {
  const { name, title, email, phone, location } = portfolioData.personalInfo;
  
  const [isResumeAvailable, setIsResumeAvailable] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('/resume/Bharathiraja_Resume.pdf', { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          setIsResumeAvailable(false);
        }
      })
      .catch(() => {
        setIsResumeAvailable(false);
      });
  }, []);

  const handleResumeClick = (e) => {
    if (!isResumeAvailable) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };
  
  return (
    <section id="resume" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-[-50px] left-[-50px] w-96 h-96 rounded-full bg-blue-50/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          badge="Curriculum Vitae"
          title="Placement Resume"
          subtitle="Preview my professional qualifications and download my comprehensive PDF resume for recruitment and placement drives."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Resume Preview Mockup Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center order-2 lg:order-1"
          >
            {/* Visual Document Mockup */}
            <div className="w-full max-w-[480px] bg-slate-50 border border-slate-200 rounded-2xl shadow-lg p-5 sm:p-7 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-slate-200">
              
              {/* Document Header Line Decorator */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
              
              {/* Document Inner Layout */}
              <div className="bg-white border border-slate-100/80 rounded-xl p-5 sm:p-6 text-left shadow-sm">
                
                {/* Doc Name & Title */}
                <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-none">
                      {name}
                    </h4>
                    <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mt-1.5">
                      {title}
                    </p>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono text-right hidden sm:block">
                    {location}
                  </div>
                </div>

                {/* Doc Bio / Objective */}
                <div className="mt-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Placement Objective</span>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">
                    Passionate Computer Science Engineering undergraduate preparing for placements. Proficient in MERN Stack engineering, database schemas, and modular client designs. Focused on collaborative problem solving.
                  </p>
                </div>

                {/* Doc Education */}
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
                    <HiAcademicCap className="text-blue-500" size={13} />
                    Education History
                  </span>
                  <div className="mt-2 space-y-2.5">
                    {portfolioData.education.map((edu, idx) => (
                      <div key={idx} className="flex justify-between items-start text-left">
                        <div className="flex-1 pr-2">
                          <p className="text-[11px] font-extrabold text-slate-800 leading-snug">{edu.degree}</p>
                          <p className="text-[9px] text-slate-400 mt-0.5 font-semibold leading-tight">{edu.institution}</p>
                        </div>
                        <div className="text-right flex-shrink-0 flex flex-col items-end">
                          <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-100/50 px-1.5 py-0.5 rounded leading-none">
                            {edu.grade}
                          </span>
                          <span className="text-[8px] text-slate-400 font-mono mt-1 leading-none">{edu.timeline}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Doc Core Skills */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
                    <HiLightningBolt className="text-amber-500" size={13} />
                    Core Skillsets
                  </span>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <span className="text-[9px] font-bold px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-600 rounded">React.js</span>
                    <span className="text-[9px] font-bold px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-600 rounded">Node.js</span>
                    <span className="text-[9px] font-bold px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-600 rounded">Express.js</span>
                    <span className="text-[9px] font-bold px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-600 rounded">MongoDB</span>
                    <span className="text-[9px] font-bold px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-600 rounded">Java</span>
                    <span className="text-[9px] font-bold px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-600 rounded">Python</span>
                  </div>
                </div>

                {/* Doc Project */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Key Project</span>
                  <div className="mt-1.5">
                    <p className="text-xs font-bold text-slate-800 leading-none">Face Recognition Attendance System</p>
                    <p className="text-[10px] text-slate-500 mt-1 leading-relaxed font-normal">
                      Python-based facial recognition utility mapping image frames to attendance logs with spreadsheets.
                    </p>
                  </div>
                </div>

              </div>

              {/* Watermark overlay showing preview */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent pointer-events-none flex items-end justify-center pb-6">
                <div className="px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                  <HiDocumentText className="text-blue-400" size={14} />
                  Interactive Resume Preview
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Download CTA and Highlights Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col text-left order-1 lg:order-2"
          >
            <span className="px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs rounded-full w-fit mb-4">
              Download Portal
            </span>
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 leading-snug">
              Curriculum Vitae for Technical Placements
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 font-normal">
              My structured resume outlines my educational achievements, competitive coding metrics, active project repositories, and technical competencies. It is optimized for ATS parsing systems used by top corporate hiring teams.
            </p>

            {/* Recruiter Quick Highlights List */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-center gap-3.5">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">ATS-Optimized standard layouts</span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Contains active links to LeetCode & GitHub</span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Perfect overview of Python & MERN stack skills</span>
              </div>
            </div>

            {/* Direct Action triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="/resume/Bharathiraja_Resume.pdf"
                onClick={handleResumeClick}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2.5 text-center cursor-pointer py-4"
              >
                <HiDownload size={18} />
                Download PDF Resume
              </a>

              <a
                href="/resume/Bharathiraja_Resume.pdf"
                onClick={handleResumeClick}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl border border-slate-200 bg-white/60 hover:bg-slate-50 text-slate-700 text-center font-bold text-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                View PDF in New Tab
              </a>
            </div>

            {/* File info notice fallback info */}
            <p className="text-[10px] text-slate-400 mt-4 font-medium italic">
              Note: If download fails or shows a missing file page, please upload the actual PDF file named "Bharathiraja_Resume.pdf" inside the "/public/resume/" workspace folder.
            </p>

          </motion.div>

        </div>
      </div>

      <ResumeFallbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
