import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MapPin, Mail, Phone } from 'lucide-react'; // Optional: using lucide-react for icons

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, msg: string }>({ type: null, msg: '' });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    const env = (import.meta as any).env;

    emailjs.sendForm(
      env.VITE_EMAIL_SERVICE_ID,
      env.VITE_EMAIL_TEMPLATE_ID,
      formRef.current,
      env.VITE_EMAIL_PUBLIC_KEY
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

          {/* Left Side: Business Details from Image */}
          <div className="space-y-12">
            <div>
              <span className="text-houzz-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8">
                Let's Build Your <span className="italic text-houzz-gold">Vision</span>.
              </h2>
              <p className="text-gray-400 max-w-md">
                Evokes Trust & Stability. Connect with our expert engineers to start your project.
              </p>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-houzz-gold/10 p-3 rounded-full">
                  <MapPin className="text-houzz-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[10px] text-houzz-gold mb-1">Office Address</h4>
                  <p className="text-lg">H.No-646 Sector 18 HUDA, Panipat</p>
                </div>
              </div>

              {/* Contacts */}
              <div className="flex items-start gap-4">
                <div className="bg-houzz-gold/10 p-3 rounded-full">
                  <Phone className="text-houzz-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[10px] text-houzz-gold mb-1">Contact Numbers</h4>
                  <p className="text-lg">Er. Ashish Bhargav: +91 9992250502</p>
                  <p className="text-lg">Er. Sachin Kumar: +91 7404802006</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-houzz-gold/10 p-3 rounded-full">
                  <Mail className="text-houzz-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[10px] text-houzz-gold mb-1">Email Address</h4>
                  <p className="text-lg">designhouzz23@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-sm text-houzz-dark relative shadow-2xl"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest">Full Name</label>
                  <input name="full_name" required type="text" className="w-full border-b border-gray-200 py-2 outline-none focus:border-houzz-gold transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest">Phone Number</label>
                  <input name="phone_number" required type="tel" className="w-full border-b border-gray-200 py-2 outline-none focus:border-houzz-gold transition-colors" placeholder="+91 ..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">Service Required</label>
                <select name="service_type" className="w-full border-b border-gray-200 py-2 bg-transparent outline-none focus:border-houzz-gold transition-colors">
                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Interior & Fit-out</option>
                  <option>Structural Engineering</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">Project Brief</label>
                <textarea name="message" required rows={4} className="w-full border border-gray-100 p-4 bg-gray-50 outline-none focus:border-houzz-gold transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>

              {status.msg && (
                <p className={`text-sm font-bold ${status.type === 'success' ? "text-green-600" : "text-red-600"}`}>
                  {status.msg}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-houzz-dark text-white py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-houzz-gold transition-all duration-300 disabled:opacity-50"
              >
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