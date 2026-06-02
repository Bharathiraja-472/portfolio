import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { HiFire, HiCalendar, HiUserGroup, HiCode } from 'react-icons/hi';

export default function Hackathons() {
  const hackathonsList = portfolioData.hackathons || [];

  return (
    <section id="hackathons" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Background visual decorator */}
      <div className="absolute top-1/2 left-[-100px] w-80 h-80 rounded-full bg-blue-100/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          badge="Inventions & Prototyping"
          title="Hackathons & Achievements"
          subtitle="Collaborative build events and coding achievements demonstrating rapid prototyping, technical endurance, and team problem-solving."
        />

        <div className="mt-16 max-w-4xl mx-auto px-2">
          <div className="flex flex-col gap-8">
            {hackathonsList.map((hack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 relative overflow-hidden group text-left"
              >
                
                {/* Visual accent top line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500" />
                
                {/* Floating ambient glow inside card */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-50 group-hover:bg-blue-100/60 transition-colors duration-300 -z-10" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Calendar & Time Badge */}
                  <div className="md:col-span-3 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0 md:pr-6">
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                        <HiFire size={20} className="animate-pulse" />
                      </div>
                      <div className="md:hidden text-left">
                        <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">Timeline</h4>
                        <span className="text-xs font-bold text-blue-600 mt-0.5 block">{hack.period}</span>
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Hackathon Year</span>
                      <div className="flex items-center gap-1.5 text-slate-700 font-extrabold text-sm mt-1">
                        <HiCalendar className="text-blue-500" />
                        {hack.period}
                      </div>
                    </div>

                    <div className="text-right md:text-left">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Project Scope</span>
                      <div className="flex items-center justify-end md:justify-start gap-1.5 text-slate-600 font-bold text-xs mt-1">
                        <HiUserGroup className="text-indigo-500" />
                        {hack.highlight}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Title, Role, Description, and Tags */}
                  <div className="md:col-span-9 flex flex-col gap-4 text-left">
                    
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                        {hack.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-extrabold text-indigo-600 tracking-wide mt-1 uppercase font-mono">
                        {hack.role}
                      </p>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed font-normal">
                      {hack.description}
                    </p>

                    {/* Dynamic Tech Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold mr-1">
                        <HiCode className="text-slate-400" />
                        <span>Built with:</span>
                      </div>
                      {hack.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 text-slate-600 hover:text-blue-700 font-bold text-xs transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
