import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '', service: '' });
    }, 3000);
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-300">
            Let's discuss how we can help your business grow
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                content: '+1 (555) 123-4567',
                hours: 'Mon-Fri: 9 AM - 6 PM'
              },
              {
                icon: Mail,
                title: 'Email Us',
                content: 'info@techrankers.net',
                hours: 'We reply within 24 hours'
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                content: '123 Business Ave, Tech City',
                hours: 'By appointment'
              },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 text-center hover:shadow-lg transition-all"
                >
                  <Icon className="text-brand-600 mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{contact.title}</h3>
                  <p className="text-slate-700 font-semibold mb-2">{contact.content}</p>
                  <p className="text-slate-600 text-sm flex items-center justify-center gap-2">
                    <Clock size={14} /> {contact.hours}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
              <h2 className="text-3xl font-black text-slate-900 mb-8">Send Us a Message</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6 flex items-center gap-3"
                >
                  <span className="text-2xl">✓</span>
                  Thank you! We'll get back to you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="ppc">PPC Advertising</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="web">Web Development</option>
                    <option value="analytics">Analytics & Reporting</option>
                    <option value="content">Content Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-all resize-none"
                    placeholder="Tell us about your project and goals..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-bold rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Send Message <Send size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does it take to see results?',
                a: 'Most clients see initial results within 4-6 weeks, with significant improvements by 3 months. SEO is typically a longer process, while PPC shows results faster.'
              },
              {
                q: 'What is your pricing model?',
                a: 'We offer flexible pricing based on service packages and project scope. We have starter, growth, and enterprise plans. Contact us for a custom quote.'
              },
              {
                q: 'Do you provide monthly reports?',
                a: 'Yes! All our clients receive detailed monthly performance reports with key metrics, insights, and recommendations.'
              },
              {
                q: 'Can you work with my existing tools?',
                a: 'Absolutely. We integrate with your existing tech stack including Google Analytics, CRM systems, and advertising platforms.'
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
