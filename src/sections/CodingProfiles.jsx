import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const iconMap = {
  LeetCode: <SiLeetcode className="w-8 h-8" />,
  LinkedIn: <FaLinkedin className="w-8 h-8" />,
  GitHub: <FaGithub className="w-8 h-8" />
};

export default function CodingProfiles() {
  const profiles = portfolioData.codingProfiles;

  return (
    <section id="coding-profiles" className="py-24 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          badge="Developer Hubs"
          title="Coding Platforms & Networks"
          subtitle="Explore my coding activity, problem-solving progress, and professional networks online."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {profiles.map((profile, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/50 shadow-sm hover:shadow-md hover:border-slate-200/80 transition-all duration-300 flex flex-col text-left justify-between h-full"
            >
              
              {/* Profile Card Upper Details */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className={`p-3 rounded-2xl bg-gradient-to-tr ${profile.color} text-white flex items-center justify-center shadow-md`}>
                    {iconMap[profile.platform]}
                  </div>
                  
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    {profile.platform === 'LinkedIn' ? 'Network' : 'Coding'}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-extrabold text-slate-900 tracking-tight leading-none">
                    {profile.platform}
                  </h4>
                  <p className="text-xs text-slate-400 font-semibold mt-1.5 font-mono">
                    @{profile.username}
                  </p>
                  
                  {/* Platform Stats */}
                  <div className="mt-4 px-3 py-2 bg-slate-50 border border-slate-100 text-xs text-slate-600 font-bold rounded-xl flex items-center gap-1.5 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    {profile.stats}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50 text-slate-700 text-xs font-extrabold transition-all duration-200 flex items-center justify-center gap-2`}
                >
                  Visit Professional Profile
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
