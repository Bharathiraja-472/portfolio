import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { HiAcademicCap, HiCalendar, HiBadgeCheck } from 'react-icons/hi';

export default function Education() {
  const educationList = portfolioData.education;

  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      {/* Glowing visual indicators */}
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full bg-blue-50/40 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-indigo-50/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          badge="Education"
          title="Scholastic Timeline"
          subtitle="My chronological academic progress, core disciplines, and scholastic standards that provide the foundation of my engineering skills."
        />

        <div className="relative mt-16 max-w-5xl mx-auto">
          
          {/* Mathematically Centered Timeline Line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-400 to-slate-200" />

          <div className="space-y-12 md:space-y-16">
            {educationList.map((edu, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className="relative flex flex-col md:flex-row items-stretch w-full"
                >
                  
                  {/* Timeline Center Dot Indicator (Mathematically Centered) */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center z-20">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="w-8 h-8 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/10"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                    </motion.div>
                  </div>

                  {/* Left Side (Desktop: Card on even items, Spacer on odd) */}
                  <div className="hidden md:flex w-[46%] items-center justify-end">
                    {isEven ? (
                      /* Card rendered on the Left (SSLC, College) */
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-full"
                      >
                        <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 relative group flex flex-col items-end text-right">
                          
                          {/* Timeline/Calendar Badge */}
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-500 mb-4">
                            <HiCalendar className="text-blue-500" />
                            {edu.timeline}
                          </div>

                          {/* Header Block */}
                          <div className="flex items-start gap-4 flex-row-reverse w-full mb-4">
                            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                              <HiAcademicCap size={22} />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                                {edu.degree}
                              </h4>
                              <p className="text-sm font-semibold text-slate-500 mt-0.5">{edu.institution}</p>
                            </div>
                          </div>

                          {/* Description Details */}
                          <p className="text-sm text-slate-500 leading-relaxed font-normal mb-5">
                            {edu.details}
                          </p>

                          {/* Grade highlight rating tag */}
                          <div className="w-full pt-4 border-t border-slate-100 flex justify-end items-center gap-2">
                            <HiBadgeCheck className="text-emerald-500 flex-shrink-0" size={18} />
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Result Rating:</span>
                            <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-extrabold text-sm border border-emerald-100">
                              {edu.grade}
                            </span>
                          </div>

                        </div>
                      </motion.div>
                    ) : (
                      /* Blank Spacer */
                      <div className="w-full h-full" />
                    )}
                  </div>

                  {/* Desktop Middle Spacer buffer */}
                  <div className="hidden md:block w-[8%]" />

                  {/* Right Side (Desktop: Card on odd items; Mobile: Card on ALL items) */}
                  <div className="w-full md:w-[46%] pl-10 md:pl-0 flex items-center justify-start">
                    
                    {/* Copy controls for alternate-sided rendering checks */}
                    <div className={isEven ? 'w-full md:hidden' : 'w-full'}>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-full"
                      >
                        <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 relative group text-left">
                          
                          {/* Timeline/Calendar Badge */}
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-500 mb-4">
                            <HiCalendar className="text-blue-500" />
                            {edu.timeline}
                          </div>

                          {/* Header Block */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                              <HiAcademicCap size={22} />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                                {edu.degree}
                              </h4>
                              <p className="text-sm font-semibold text-slate-500 mt-0.5">{edu.institution}</p>
                            </div>
                          </div>

                          {/* Description Details */}
                          <p className="text-sm text-slate-500 leading-relaxed font-normal mb-5">
                            {edu.details}
                          </p>

                          {/* Grade highlight rating tag */}
                          <div className="w-full pt-4 border-t border-slate-100 flex justify-start items-center gap-2">
                            <HiBadgeCheck className="text-emerald-500 flex-shrink-0" size={18} />
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Result Rating:</span>
                            <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-extrabold text-sm border border-emerald-100">
                              {edu.grade}
                            </span>
                          </div>

                        </div>
                      </motion.div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
