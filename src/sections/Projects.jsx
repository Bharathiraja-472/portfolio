import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { FaGithub, FaExternalLinkAlt, FaCodeBranch, FaFolderOpen } from 'react-icons/fa';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const projects = portfolioData.projects;

  // Derive categories for filtering
  const categories = ['All', 'Python', 'MERN Stack'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-blue-50/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          badge="My Portfolio"
          title="Featured Projects"
          subtitle="Software and web applications I've developed, demonstrating technical competency in Python and MERN stack engineering."
        />

        {/* Dynamic Project Filter Bar */}
        <div className="flex justify-center items-center gap-3.5 mb-12 flex-wrap">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-white border border-slate-200/50 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full text-left"
              >
                
                {/* Visual Area (Self-healing Placeholder IDE Grid) */}
                <div className="relative h-48 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 flex flex-col justify-between overflow-hidden group">
                  {/* Visual Background grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-25" />
                  
                  {/* Decorative Glowing Accent */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-blue-500/20 blur-xl group-hover:bg-blue-500/30 transition-all duration-300" />

                  {/* Window Bar Header */}
                  <div className="flex justify-between items-center relative z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60 uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Visual Mock Code block to avoid layouts shifts or raw emptiness */}
                  <div className="font-mono text-[10px] text-slate-400 space-y-1 relative z-10">
                    <span className="text-blue-400 font-semibold">import</span> cv2<br />
                    <span className="text-blue-400 font-semibold">import</span> face_recognition<br />
                    <span className="text-slate-500">// Initialize camera feed...</span><br />
                    video_capture = cv2.VideoCapture(<span className="text-amber-300">0</span>)<br />
                    <span className="text-indigo-400">print</span>(<span className="text-emerald-400">"System Armed & Ready..."</span>)
                  </div>

                  {/* Visual Title / Brand Overlay */}
                  <div className="flex items-center gap-2 relative z-10 pt-2 border-t border-slate-800/60">
                    <FaFolderOpen className="text-blue-500" size={16} />
                    <span className="text-[11px] font-bold text-slate-300 tracking-wide uppercase">Repository Project</span>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {/* Category and Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, idx2) => (
                      <span
                        key={idx2}
                        className="px-2.5 py-1 text-[11px] font-bold bg-blue-50/60 text-blue-600 border border-blue-100 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal flex-1">
                    {project.description}
                  </p>

                  {/* Action Link Buttons */}
                  <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-slate-100">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all duration-200 flex items-center gap-2"
                    >
                      <FaGithub size={15} />
                      Code Repository
                    </a>
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all duration-200 flex items-center gap-2"
                      >
                        <FaExternalLinkAlt size={12} />
                        Live Demo
                      </a>
                    )}
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>

          {/* Decorative "More Projects Coming Soon" Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border-2 border-dashed border-slate-200 bg-white/50 p-8 flex flex-col justify-center items-center text-center h-full min-h-[350px] relative overflow-hidden"
          >
            <div className="absolute top-[-30px] right-[-30px] w-24 h-24 rounded-full bg-slate-50 blur-xl" />
            
            <div className="w-14 h-14 rounded-full bg-blue-50/50 text-blue-600 border border-blue-100 flex items-center justify-center mb-5 animate-pulse">
              <FaCodeBranch size={22} />
            </div>
            
            <h3 className="text-lg font-bold text-slate-800 tracking-tight">More Projects Coming Soon</h3>
            
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-[240px] leading-relaxed font-normal">
              I am currently engineering a fully responsive MERN E-Commerce application featuring complete user authentication, dashboard analytics, and checkout gateways.
            </p>
            
            <div className="mt-5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/50 text-[10px] font-bold text-slate-500 uppercase tracking-wide">
              MERN Stack Dev
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
