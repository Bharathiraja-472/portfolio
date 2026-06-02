import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { 
  HiCode, 
  HiDatabase, 
  HiTerminal, 
  HiBriefcase, 
  HiAdjustments,
  HiLightningBolt
} from 'react-icons/hi';
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiTailwindcss, 
  SiRedux, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiPostman,
  SiC,
  SiCplusplus
} from 'react-icons/si';
import { FaJava, FaPython, FaGitAlt, FaGithub, FaCss3Alt, FaCode } from 'react-icons/fa';

export default function Skills() {
  const { frontend, backend, database, programmingLanguages, tools } = portfolioData.skills;

  // Dynamically resolve professional colored brand icons
  const getSkillIcon = (name) => {
    const n = name.toLowerCase();
    if (n.includes('react')) return <SiReact className="text-blue-500 flex-shrink-0" size={20} />;
    if (n.includes('javascript') || n.includes('js')) return <SiJavascript className="text-amber-500 flex-shrink-0" size={19} />;
    if (n.includes('html')) return <SiHtml5 className="text-orange-500 flex-shrink-0" size={20} />;
    if (n.includes('css')) return <FaCss3Alt className="text-blue-600 flex-shrink-0" size={20} />;
    if (n.includes('tailwind')) return <SiTailwindcss className="text-teal-400 flex-shrink-0" size={20} />;
    if (n.includes('redux')) return <SiRedux className="text-purple-600 flex-shrink-0" size={19} />;
    if (n.includes('node')) return <SiNodedotjs className="text-emerald-500 flex-shrink-0" size={20} />;
    if (n.includes('express')) return <SiExpress className="text-slate-700 flex-shrink-0" size={20} />;
    if (n.includes('mongo')) return <SiMongodb className="text-emerald-600 flex-shrink-0" size={20} />;
    if (n.includes('sql') || n.includes('postgre')) return <SiPostgresql className="text-blue-500 flex-shrink-0" size={20} />;
    if (n.includes('java') && !n.includes('script')) return <FaJava className="text-orange-600 flex-shrink-0" size={20} />;
    if (n.includes('python')) return <FaPython className="text-blue-500 flex-shrink-0" size={20} />;
    if (n.includes('c++')) return <SiCplusplus className="text-blue-600 flex-shrink-0" size={20} />;
    if (n === 'c' || n.includes('c ')) return <SiC className="text-blue-600 flex-shrink-0" size={20} />;
    if (n.includes('git') && !n.includes('hub')) return <FaGitAlt className="text-orange-600 flex-shrink-0" size={20} />;
    if (n.includes('github')) return <FaGithub className="text-slate-800 flex-shrink-0" size={20} />;
    if (n.includes('code') || n.includes('vs')) return <FaCode className="text-blue-600 flex-shrink-0" size={20} />;
    if (n.includes('postman')) return <SiPostman className="text-orange-500 flex-shrink-0" size={20} />;
    return <FaCode className="text-blue-500 flex-shrink-0" size={20} />;
  };

  const categories = [
    { title: 'Frontend Stack', icon: <HiCode size={20} className="text-blue-600" />, skills: frontend },
    { title: 'Backend APIs', icon: <HiAdjustments size={20} className="text-indigo-600" />, skills: backend },
    { title: 'Database Systems', icon: <HiDatabase size={20} className="text-emerald-600" />, skills: database },
    { title: 'Languages', icon: <HiTerminal size={20} className="text-amber-600" />, skills: programmingLanguages },
    { title: 'Developer Tools', icon: <HiBriefcase size={20} className="text-slate-600" />, skills: tools }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Visual background decorations */}
      <div className="absolute right-0 bottom-1/4 w-96 h-96 rounded-full bg-indigo-50/30 blur-3xl -z-10" />
      <div className="absolute left-0 top-1/4 w-96 h-96 rounded-full bg-blue-50/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          badge="Expertise"
          title="Technical Skills"
          subtitle="A catalog of languages, systems, libraries, and developer tools that I build with daily to engineer high-fidelity products."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-350 transition-all duration-300 flex flex-col text-left"
            >
              
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                  {cat.title}
                </h3>
              </div>

              {/* Dynamic Interactive Icon Skill Badges */}
              <div className="flex flex-col gap-3 flex-grow">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ x: 6, scale: 1.01 }}
                    className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50/40 border border-slate-100 hover:border-blue-100/60 hover:bg-blue-50/10 transition-all duration-200 group cursor-default"
                  >
                    {/* Brand Colored Icon */}
                    <div className="p-1.5 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-250">
                      {getSkillIcon(skill.name)}
                    </div>
                    
                    <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-slate-950 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic Placement Problem Solving Advantage Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm text-left max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500" />
          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
              <HiLightningBolt size={24} className="animate-pulse text-blue-600" />
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                  Placement DSA & Problem Solving Foundation
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed font-normal">
                  I actively practice data structures, databases, and core software engineering concepts, solving coding challenges regularly on platforms like LeetCode. This preparation ensures I am fully prepared for corporate technical interviews, online assessments, and immediate project deployments.
                </p>
              </div>

              {/* Special Learning Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3 py-1 bg-blue-50 border border-blue-100/60 text-blue-700 font-extrabold text-[10px] sm:text-xs rounded-xl">
                  Object-Oriented Programming (OOP)
                </span>
                <span className="px-3 py-1 bg-indigo-50 border border-indigo-100/60 text-indigo-700 font-extrabold text-[10px] sm:text-xs rounded-xl">
                  Data Structures & Algorithms (C++)
                </span>
                <span className="px-3 py-1 bg-emerald-50 border border-emerald-100/60 text-emerald-700 font-extrabold text-[10px] sm:text-xs rounded-xl">
                  RESTful Web Services & API Routing
                </span>
                <span className="px-3 py-1 bg-amber-50 border border-amber-100/60 text-amber-800 font-extrabold text-[10px] sm:text-xs rounded-xl">
                  DBMS & Relational Query Logic
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
