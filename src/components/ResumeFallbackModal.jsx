import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiMail, HiDuplicate, HiCheck, HiOutlineExclamation } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function ResumeFallbackModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const { email, phone } = portfolioData.personalInfo;
  const linkedinUrl = portfolioData.codingProfiles.find(p => p.platform === 'LinkedIn')?.url || 'https://linkedin.com';

  // Support pressing escape to close the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-md bg-white border border-slate-100 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden text-left z-10"
          >
            {/* Top Color Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <HiX size={18} />
            </button>

            {/* Warning / Notification Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100/60 text-amber-600 mb-5">
              <HiOutlineExclamation size={24} />
            </div>

            {/* Typography */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Resume Under Update
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-500 mt-3 leading-relaxed font-normal">
              Hi there! I am currently updating my resume with my latest semester marks and placement achievements to serve recruiters with the most up-to-date profile.
            </p>
            
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed font-normal">
              You can contact me directly to get my latest copy instantly, or check out my professional LinkedIn profile.
            </p>

            {/* Interactive Email Copy Block */}
            <div className="relative mt-6 p-3 bg-slate-50 border border-slate-100/80 rounded-2xl flex items-center justify-between gap-3 group transition-colors hover:bg-slate-50/60">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <HiMail className="text-slate-400 flex-shrink-0" size={18} />
                <span className="font-mono text-xs sm:text-sm text-slate-600 font-semibold truncate select-all">
                  {email}
                </span>
              </div>
              
              <button
                onClick={handleCopyEmail}
                className={`flex-shrink-0 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all duration-200 cursor-pointer ${
                  copied 
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-600' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 active:scale-95'
                }`}
              >
                {copied ? (
                  <>
                    <HiCheck size={14} />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <HiDuplicate size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Actions Button Panel */}
            <div className="grid grid-cols-1 gap-3 mt-6">
              
              {/* Send Mailto Link */}
              <a
                href={`mailto:${email}?subject=Requesting latest resume - Bharathiraja M`}
                className="w-full py-3.5 px-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 active:translate-y-0.5 transition-all duration-200 text-center"
              >
                <HiMail size={18} />
                Send Email Request
              </a>

              {/* LinkedIn Link */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs sm:text-sm rounded-2xl flex items-center justify-center gap-2 active:translate-y-0.5 transition-all duration-200 text-center"
              >
                <FaLinkedin className="text-[#0a66c2]" size={16} />
                Connect on LinkedIn
              </a>

            </div>

            <p className="text-[10px] text-slate-400 mt-4 text-center font-medium italic">
              Phone Contact: +91 {phone}
            </p>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
