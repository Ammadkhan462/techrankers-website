import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '250+' },
    { label: 'Success Rate', value: '98%' },
    { label: 'Years Experience', value: '8+' },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'SEO Optimization',
      description: 'Boost your online visibility with our cutting-edge SEO strategies.'
    },
    {
      icon: CheckCircle2,
      title: 'PPC Campaigns',
      description: 'Get instant traffic with our data-driven PPC management.'
    },
    {
      icon: Star,
      title: 'Social Media',
      description: 'Build your brand presence across all social platforms.'
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Result-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-400">Digital Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with data-driven strategies that deliver real results. Increase visibility, drive traffic, and boost conversions.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-brand-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Free Audit <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/20"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-brand-400 mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:border-brand-400 hover:shadow-xl transition-all group"
                >
                  <Icon className="text-brand-600 mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                  <Link to="/services" className="text-brand-600 font-semibold hover:text-brand-700 flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="px-8 py-4 bg-brand-600 text-white font-bold rounded-full hover:bg-brand-700 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free marketing audit and discover how we can help you grow
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-brand-600 font-bold rounded-full hover:bg-slate-100 transition-all inline-flex items-center gap-2 shadow-xl"
          >
            Start Your Free Audit <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
