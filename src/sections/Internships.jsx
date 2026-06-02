import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { 
  HiCalendar, 
  HiUser, 
  HiIdentification, 
  HiOutlineDocumentDownload, 
  HiOutlineEye, 
  HiOfficeBuilding,
  HiChevronRight
} from 'react-icons/hi';

export default function Internships() {
  const internshipsList = portfolioData.internships || [];

  return (
    <section id="internships" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Dynamic background accent */}
      <div className="absolute top-1/3 right-[-100px] w-80 h-80 rounded-full bg-blue-100/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          badge="Experience"
          title="Internships & Industry Exposure"
          subtitle="Practical experience gained in industry settings, collaborating on real-world projects, building high-performance MERN applications, and adhering to professional coding standards."
        />

        <div className="mt-16 max-w-4xl mx-auto px-2">
          <div className="flex flex-col gap-10">
            {internshipsList.map((intern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 relative overflow-hidden text-left group"
              >
                
                {/* Brand Visual Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
                
                {/* Decorative background glow inside the card */}
                <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-blue-50 group-hover:bg-blue-100/50 transition-colors duration-300 -z-10" />

                <div className="flex flex-col gap-6">
                  
                  {/* Top Row: Title, Organization, and Certificate Type Badge */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                        <HiOfficeBuilding size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors duration-200">
                          {intern.title}
                        </h3>
                        <p className="text-sm font-extrabold text-slate-500 mt-0.5 uppercase tracking-wider flex items-center gap-1.5">
                          {intern.organization}
                          <HiChevronRight className="text-slate-400" />
                          <span className="text-indigo-600 font-mono text-xs select-all">USN: {intern.usn}</span>
                        </p>
                      </div>
                    </div>

                    {/* Appreciation Badge */}
                    <span className="px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-extrabold tracking-wide uppercase shadow-sm">
                      🏅 {intern.type}
                    </span>
                  </div>

                  {/* Main Details Grid (Duration, Mentors, Role description) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    
                    {/* Left details parameters */}
                    <div className="md:col-span-1 space-y-3.5 bg-slate-50/50 border border-slate-100 rounded-2xl p-4.5 text-xs text-slate-600 font-semibold">
                      
                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Timeline</span>
                        <div className="flex items-center gap-2 text-slate-800 font-extrabold">
                          <HiCalendar size={16} className="text-blue-500" />
                          {intern.duration}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Instructor Mentor</span>
                        <div className="flex items-center gap-2 text-slate-800 font-extrabold">
                          <HiUser size={16} className="text-slate-500" />
                          {intern.instructor}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Co-Founder</span>
                        <div className="flex items-center gap-2 text-slate-800 font-extrabold">
                          <HiUser size={16} className="text-slate-500" />
                          {intern.coFounder}
                        </div>
                      </div>

                    </div>

                    {/* Right details content: Description & Skills */}
                    <div className="md:col-span-2 space-y-5 text-left">
                      <p className="text-sm text-slate-500 leading-relaxed font-normal">
                        {intern.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {intern.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-150 hover:border-blue-100 text-slate-600 hover:text-blue-700 font-bold text-xs transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Bottom Verification Section: Actions to view/download PDF */}
                  <div className="mt-4 pt-5 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    
                    {/* Identifier text */}
                    <div className="flex items-center gap-2 text-xs font-semibold font-mono text-slate-400 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-100">
                      <HiIdentification size={16} className="text-slate-400" />
                      <span>FILE: {intern.pdfUrl.split('/').pop()}</span>
                    </div>

                    {/* Dual Buttons */}
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      
                      {/* View Button */}
                      <a
                        href={intern.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-initial py-2.5 px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                      >
                        <HiOutlineEye size={16} />
                        View Certificate
                      </a>

                      {/* Download Button */}
                      <a
                        href={intern.pdfUrl}
                        download="24CS035_BHARATHIRAJA_M.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-initial py-2.5 px-5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <HiOutlineDocumentDownload size={16} className="text-slate-500" />
                        Download PDF
                      </a>

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
