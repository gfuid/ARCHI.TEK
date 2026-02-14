import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Magnetic from "../components/Magnetic";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, msg: string }>({ type: null, msg: '' });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    // TypeScript error hatane ke liye as any use kar sakte hain agar types load na ho
    const env = (import.meta as any).env;

    emailjs.sendForm(
      env.VITE_EMAILJS_SERVICE_ID,
      env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus({ type: 'success', msg: 'Inquiry sent successfully!' });
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus({ type: 'error', msg: 'Something went wrong.' });
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus({ type: null, msg: '' }), 5000);
      });
  };

  return (
    <section id="contact-us" className="py-20 bg-houzz-dark text-white overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side Info Section */}
          <div>
            <span className="text-houzz-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8">Let's Build Your <span className="italic text-houzz-gold">Vision</span>.</h2>
            {/* Contact details... */}
          </div>

          {/* Right Side: Form */}
          <motion.div className="bg-white p-8 md:p-12 rounded-sm text-houzz-dark relative">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest">Full Name</label>
                  {/* Dashboard variable {{full_name}} se match karne ke liye */}
                  <input name="full_name" required type="text" className="w-full border-b border-gray-200 py-2 outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest">Phone Number</label>
                  {/* Dashboard variable {{phone_number}} se match karne ke liye */}
                  <input name="phone_number" required type="tel" className="w-full border-b border-gray-200 py-2 outline-none" placeholder="+91 ..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">Service Required</label>
                <select name="service_type" className="w-full border-b border-gray-200 py-2 bg-transparent outline-none">
                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Interior & Fit-out</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">Project Brief</label>
                <textarea name="message" required rows={4} className="w-full border border-gray-100 p-4 bg-gray-50 outline-none" placeholder="Tell us about your project..."></textarea>
              </div>

              {status.msg && <p className={status.type === 'success' ? "text-green-600" : "text-red-600"}>{status.msg}</p>}

              <button type="submit" disabled={isSubmitting} className="w-full bg-houzz-dark text-white py-4 font-bold uppercase tracking-widest text-[10px]">
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;