import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { FaReact, FaNodeJs, FaJs, FaPython, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

// Map icon strings to actual React components and brand colors
const iconMap = {
  react: { 
    component: <FaReact className="w-10 h-10" />, 
    color: 'text-[#61DAFB]', 
    bgColor: 'hover:bg-[#61DAFB]/10 hover:border-[#61DAFB]/40' 
  },
  node: { 
    component: <FaNodeJs className="w-10 h-10" />, 
    color: 'text-[#339933]', 
    bgColor: 'hover:bg-[#339933]/10 hover:border-[#339933]/40' 
  },
  mongodb: { 
    component: <SiMongodb className="w-10 h-10" />, 
    color: 'text-[#47A248]', 
    bgColor: 'hover:bg-[#47A248]/10 hover:border-[#47A248]/40' 
  },
  express: { 
    component: <SiExpress className="w-10 h-10" />, 
    color: 'text-[#000000]', 
    bgColor: 'hover:bg-slate-100 hover:border-slate-400/40' 
  },
  javascript: { 
    component: <FaJs className="w-10 h-10" />, 
    color: 'text-[#F7DF1E]', 
    bgColor: 'hover:bg-[#F7DF1E]/10 hover:border-[#F7DF1E]/40' 
  },
  python: { 
    component: <FaPython className="w-10 h-10" />, 
    color: 'text-[#3776AB]', 
    bgColor: 'hover:bg-[#3776AB]/10 hover:border-[#3776AB]/40' 
  },
  tailwind: { 
    component: <SiTailwindcss className="w-10 h-10" />, 
    color: 'text-[#06B6D4]', 
    bgColor: 'hover:bg-[#06B6D4]/10 hover:border-[#06B6D4]/40' 
  },
  github: { 
    component: <FaGithub className="w-10 h-10" />, 
    color: 'text-[#181717]', 
    bgColor: 'hover:bg-slate-50 hover:border-slate-400/40' 
  }
};

export default function TechStack() {
  const stack = portfolioData.techStack;

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          badge="Tech Stack"
          title="Technology Ecosystem"
          subtitle="The primary libraries, frameworks, languages, and tools I use to create modern e-commerce and full-stack software products."
        />

        {/* Brand Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5 mt-10">
          {stack.map((item, idx) => {
            const mapped = iconMap[item.iconType];
            if (!mapped) return null;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className={`p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex flex-col items-center justify-center gap-4 transition-all duration-300 ${mapped.bgColor} cursor-default group`}
              >
                {/* Visual Icon Container */}
                <div className={`p-1.5 transition-colors duration-300 ${mapped.color} group-hover:scale-110 transition-transform`}>
                  {mapped.component}
                </div>
                
                {/* Brand label */}
                <span className="text-xs font-bold text-slate-800 tracking-tight transition-colors duration-300 group-hover:text-slate-900">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
