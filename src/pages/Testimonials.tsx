import React from 'react';
import { motion } from 'motion/react';
import { Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Rodriguez',
      company: 'TechStart Innovations',
      role: 'CEO',
      image: '👨‍💼',
      text: 'TechRankers transformed our digital presence. Our organic traffic increased by 350% in just 6 months. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Sarah Mitchell',
      company: 'Luxury Retail Co.',
      role: 'Marketing Director',
      image: '👩‍💼',
      text: 'Their PPC campaigns are incredibly efficient. We\'re getting 3x better ROI compared to our previous agency. Best decision ever.',
      rating: 5,
    },
    {
      name: 'David Chen',
      company: 'Global Services Ltd',
      role: 'Business Owner',
      image: '👨‍🏫',
      text: 'Professional, transparent, and results-driven. They treated our business like it was their own. Fantastic team!',
      rating: 5,
    },
    {
      name: 'Emma Thompson',
      company: 'E-Commerce Plus',
      role: 'Operations Manager',
      image: '👩‍🔬',
      text: 'From strategy to execution, everything was handled beautifully. Our conversion rate jumped 45% in the first quarter.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      company: 'Professional Services Group',
      role: 'Partner',
      image: '👨‍⚖️',
      text: 'Outstanding service! They understand our industry and delivered exactly what we needed. Highly professional and reliable.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      company: 'Growth Marketing Inc',
      role: 'CMO',
      image: '👩‍💻',
      text: 'Their team is incredibly responsive and always thinking ahead. We\'ve become partners, not just vendor and client.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '250+', label: 'Happy Clients' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '500+', label: 'Successful Projects' },
    { number: '8+', label: 'Years Experience' },
  ];

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
            What Our Clients Say
          </h1>
          <p className="text-xl text-slate-300">
            Hear from businesses that have transformed with our help
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-black text-brand-600 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real results from real clients across various industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 mb-6 italic line-clamp-4">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-xs text-slate-500">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Featured Case Studies
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-Commerce Growth',
                client: 'Fashion Retail Store',
                result: '250% Increase in Sales',
                description: 'Implemented comprehensive SEO and paid advertising strategy'
              },
              {
                title: 'B2B Lead Generation',
                client: 'Software Company',
                result: '180% More Qualified Leads',
                description: 'Executed multi-channel campaign targeting decision-makers'
              },
              {
                title: 'Local Business Expansion',
                client: 'Restaurant Group',
                result: '320% Website Traffic Growth',
                description: 'Built local SEO strategy across 5 locations'
              },
              {
                title: 'Brand Awareness',
                client: 'New Tech Startup',
                result: '15K Social Media Followers',
                description: 'Developed integrated social media and content strategy'
              },
            ].map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <Award className="text-brand-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{study.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{study.client}</p>
                <div className="bg-gradient-to-r from-brand-600 to-blue-600 text-white rounded-lg p-4 mb-4">
                  <div className="text-2xl font-black">{study.result}</div>
                </div>
                <p className="text-slate-600">{study.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Be Our Next Success Story
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 250+ satisfied clients who have transformed their business with us
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-brand-600 font-bold rounded-full hover:bg-slate-100 transition-all inline-flex items-center gap-2 shadow-xl"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
