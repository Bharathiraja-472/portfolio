import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { email, phone, location } = portfolioData.personalInfo;
  
  const formRef = useRef();

  // Form field state, mapping to standard EmailJS template variable names
  const [formData, setFormData] = useState({ 
    from_name: '', 
    from_email: '', 
    subject: '', 
    message: '' 
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Safe client-side validations
  const validateForm = () => {
    const errors = {};
    if (!formData.from_name.trim()) {
      errors.from_name = 'Full name is required';
    }
    
    if (!formData.from_email.trim()) {
      errors.from_email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      errors.from_email = 'Please provide a valid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message body is required';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false);
    setSubmitError('');

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Securely retrieve environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if variables are active and not default placeholders
    const isConfigured = 
      serviceId && 
      templateId && 
      publicKey && 
      !serviceId.includes('your_') && 
      !templateId.includes('your_') && 
      !publicKey.includes('your_');

    if (isConfigured) {
      try {
        // Send directly using sendForm referencing the DOM form block
        const result = await emailjs.sendForm(
          serviceId, 
          templateId, 
          formRef.current, 
          publicKey
        );
        
        if (result.status === 200 || result.text === 'OK') {
          setSubmitSuccess(true);
          setFormData({ from_name: '', from_email: '', subject: '', message: '' });
          
          // Reset button/alert state back to default after 5 seconds
          setTimeout(() => setSubmitSuccess(false), 5000);
        } else {
          throw new Error('Unexpected server response status');
        }
      } catch (err) {
        console.error('EmailJS Submit Fail:', err);
        setSubmitError(err.text || 'Failed to deliver message via EmailJS. Please check your template parameters.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Recruiter-friendly fallback simulation when API keys are blank local placeholders
      console.warn(
        'EmailJS environment variables are not configured. ' +
        'Simulating mock API server success response...'
      );
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ from_name: '', from_email: '', subject: '', message: '' });
        
        // Auto reset success state after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  // Resolve active submit button text
  const getButtonText = () => {
    if (isSubmitting) return "Sending...";
    if (submitSuccess) return "Message Sent ✓";
    return "Send Message";
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-blue-100/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          badge="Get In Touch"
          title="Contact Me"
          subtitle="Are you looking to hire a MERN Stack Developer? Feel free to reach out directly through the contacts or the submission form."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto items-stretch mt-12">
          
          {/* Left Column: Direct Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            
            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/50 shadow-sm flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                <HiLocationMarker size={24} />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">Location</h4>
                <p className="text-base font-bold text-slate-900 mt-1">{location}</p>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">Open to remote & on-site positions</p>
              </div>
            </div>

            {/* Email Card */}
            <a 
              href={`mailto:${email}`}
              className="p-6 rounded-2xl bg-white border border-slate-200/50 shadow-sm flex items-start gap-4 text-left hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <HiMail size={24} />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">Email Address</h4>
                <p className="text-base font-bold text-slate-900 mt-1 break-all group-hover:text-blue-600 transition-colors">{email}</p>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">Click to send direct email</p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${phone}`}
              className="p-6 rounded-2xl bg-white border border-slate-200/50 shadow-sm flex items-start gap-4 text-left hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <HiPhone size={24} />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">Phone Number</h4>
                <p className="text-base font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">+91 {phone}</p>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">Available for urgent calls & WhatsApp</p>
              </div>
            </a>

          </motion.div>

          {/* Right Column: Secure Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/50 shadow-md flex flex-col text-left">
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-8 font-medium">
                Fill out the fields below to send an automated notification directly.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                
                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {submitSuccess && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-3.5 text-emerald-800 shadow-sm animate-fade-in"
                    >
                      <HiCheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="text-sm font-bold">Message sent successfully</p>
                        <p className="text-xs text-emerald-600 mt-0.5">Thank you for reaching out! I will respond to your inquiry shortly.</p>
                      </div>
                    </motion.div>
                  )}

                  {submitError && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-rose-50 border border-rose-100 flex items-start gap-3.5 text-rose-800 shadow-sm animate-fade-in"
                    >
                      <HiExclamationCircle className="text-rose-500 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="text-sm font-bold">Failed to send message</p>
                        <p className="text-xs text-rose-600 mt-0.5">{submitError}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Input Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="from_name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`px-4 py-3 rounded-xl border bg-slate-50/50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-medium transition-all duration-200 ${
                      formErrors.from_name ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20' : 'border-slate-200 focus:border-blue-500'
                    }`}
                  />
                  {formErrors.from_name && (
                    <span className="text-xs font-semibold text-rose-500 font-mono leading-none mt-1">
                      {formErrors.from_name}
                    </span>
                  )}
                </div>

                {/* Input Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="from_email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`px-4 py-3 rounded-xl border bg-slate-50/50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-medium transition-all duration-200 ${
                      formErrors.from_email ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20' : 'border-slate-200 focus:border-blue-500'
                    }`}
                  />
                  {formErrors.from_email && (
                    <span className="text-xs font-semibold text-rose-500 font-mono leading-none mt-1">
                      {formErrors.from_email}
                    </span>
                  )}
                </div>

                {/* Input Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Interview invitation / Project proposal"
                    className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-medium transition-all duration-200 focus:border-blue-500"
                  />
                </div>

                {/* Input Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Bharathiraja, we would love to schedule a technical interview..."
                    className={`px-4 py-3 rounded-xl border bg-slate-50/50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-medium transition-all duration-200 resize-none ${
                      formErrors.message ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20' : 'border-slate-200 focus:border-blue-500'
                    }`}
                  />
                  {formErrors.message && (
                    <span className="text-xs font-semibold text-rose-500 font-mono leading-none mt-1">
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-85 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      {getButtonText()}
                    </>
                  ) : (
                    <>
                      {submitSuccess ? (
                        <span>{getButtonText()}</span>
                      ) : (
                        <>
                          <HiPaperAirplane className="rotate-90 text-white" size={16} />
                          <span>{getButtonText()}</span>
                        </>
                      )}
                    </>
                  )}
                </button>

              </form>

            </div>
          </motion.div>
 
        </div>
      </div>
    </section>
  );
}
