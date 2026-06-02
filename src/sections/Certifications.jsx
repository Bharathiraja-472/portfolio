import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { 
  HiCalendar, 
  HiExternalLink, 
  HiClock, 
  HiUser, 
  HiIdentification, 
  HiAcademicCap, 
  HiChartBar 
} from 'react-icons/hi';

export default function Certifications() {
  const certs = portfolioData.certifications || [];

  // Visual helper mapping platform branding details
  const getPlatformStyle = (platform) => {
    if (platform.includes('Meta')) {
      return {
        gradient: "from-blue-500/10 to-indigo-500/5",
        border: "border-blue-100/60",
        badgeBg: "bg-blue-50",
        badgeText: "text-blue-700",
        dotColor: "bg-blue-600",
        logoLabel: "Meta | Coursera"
      };
    }
    if (platform.includes('NPTEL')) {
      return {
        gradient: "from-emerald-500/10 to-teal-500/5",
        border: "border-emerald-100/60",
        badgeBg: "bg-emerald-50",
        badgeText: "text-emerald-800",
        dotColor: "bg-emerald-600",
        logoLabel: "NPTEL | IIT Madras"
      };
    }
    return {
      gradient: "from-orange-500/10 to-amber-500/5",
      border: "border-orange-100/60",
      badgeBg: "bg-orange-50",
      badgeText: "text-orange-700",
      dotColor: "bg-orange-600",
      logoLabel: "Udemy"
    };
  };

  return (
    <section id="certifications" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-1/3 left-[-150px] w-96 h-96 rounded-full bg-blue-50/20 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-[-150px] w-96 h-96 rounded-full bg-indigo-50/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          badge="Credentials"
          title="Licenses & Certifications"
          subtitle="Real-world verified academic accomplishments validating software engineering logic, data structures, algorithms, object-oriented concepts, and user-centric systems design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
          {certs.map((cert, idx) => {
            const styles = getPlatformStyle(cert.platform);
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden text-left"
              >
                
                {/* 1. Card Top Brand Banner: No local images used */}
                <div className={`p-5 bg-gradient-to-r ${styles.gradient} border-b border-slate-100 flex flex-wrap items-center justify-between gap-3`}>
                  
                  {/* Achievement Badge */}
                  <span className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                    {cert.achievementBadge}
                  </span>

                  {/* Provider Branding Label */}
                  <div className={`flex items-center gap-1.5 font-extrabold text-[10px] tracking-wider uppercase ${styles.badgeBg} ${styles.badgeText} border ${styles.border} px-3 py-1 rounded-xl`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${styles.dotColor}`} />
                    {styles.logoLabel}
                  </div>

                </div>

                {/* 2. Card Content Body */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  
                  <div className="space-y-5">
                    {/* Course Title */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
                        {cert.title}
                      </h4>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-slate-500 font-semibold bg-slate-50/50 border border-slate-100 rounded-2xl p-4">
                      
                      {/* Instructor / Institution */}
                      <div className="flex items-center gap-2">
                        <HiUser className="text-slate-400 flex-shrink-0" size={15} />
                        <span className="truncate" title={cert.instructor}>
                          {cert.instructor}
                        </span>
                      </div>

                      {/* Course Duration */}
                      <div className="flex items-center gap-2">
                        <HiClock className="text-slate-400 flex-shrink-0" size={15} />
                        <span>{cert.duration}</span>
                      </div>

                      {/* Completion Date */}
                      <div className="flex items-center gap-2">
                        <HiCalendar className="text-blue-500 flex-shrink-0" size={15} />
                        <span>{cert.date}</span>
                      </div>

                      {/* Academic Score (Green Highlight if available) */}
                      {cert.score ? (
                        <div className="flex items-center gap-2 text-emerald-700 font-extrabold">
                          <HiChartBar className="text-emerald-500 flex-shrink-0" size={15} />
                          <span>{cert.score}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-indigo-600 font-bold">
                          <HiAcademicCap className="text-indigo-400 flex-shrink-0" size={15} />
                          <span>Recommended</span>
                        </div>
                      )}

                    </div>

                    {/* Technical Description */}
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {cert.description}
                    </p>

                    {/* Skill Badges Wrapper */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] sm:text-xs font-bold px-3 py-1 bg-slate-50 border border-slate-200/50 text-slate-600 rounded-lg hover:bg-slate-100 hover:text-slate-800 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* 3. Credentials Footer */}
                  <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                    
                    {/* Verification Roll Number / Credential ID */}
                    <div className="flex items-center justify-between gap-2 text-xs font-semibold font-mono bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl">
                      <div className="flex items-center gap-2 text-slate-400">
                        <HiIdentification className="text-slate-400 flex-shrink-0" size={16} />
                        <span className="text-[9px] uppercase tracking-wider">Verification ID:</span>
                      </div>
                      <span className="select-all text-slate-700 font-bold tracking-wide break-all text-right">
                        {cert.credentialId}
                      </span>
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs text-center transition-colors shadow-sm cursor-pointer active:scale-[0.99]"
                      >
                        View Certificate
                      </a>

                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:flex-1 py-3 px-4 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer active:scale-[0.99]"
                      >
                        Verify Credential
                        <HiExternalLink size={14} className="text-slate-400" />
                      </a>
                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
