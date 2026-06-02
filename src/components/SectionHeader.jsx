import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, badge }) {
  return (
    <div className="flex flex-col items-center text-center mb-16 px-4">
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 rounded-full mb-3"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
      >
        {title}
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4 mb-3 origin-center"
      />
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-slate-500 max-w-2xl text-base md:text-lg font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
