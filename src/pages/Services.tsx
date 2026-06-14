import React from 'react';
import { motion } from 'motion/react';
import { Search, MousePointer2, Code2, BarChart3, TrendingUp, Target, Smartphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost rankings with data-driven SEO strategies.',
      color: 'from-blue-600 to-blue-400',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: MousePointer2,
      title: 'PPC Advertising',
      description: 'Instant visibility with targeted paid ads.',
      color: 'from-cyan-600 to-blue-500',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Social Media Marketing',
      description: 'Build brand presence across all platforms.',
      color: 'from-sky-600 to-blue-500',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200',
      iconBg: 'bg-sky-100',
      iconColor: 'text-sky-600'
    },
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Modern websites that convert visitors.',
      color: 'from-indigo-600 to-blue-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights for growth.',
      color: 'from-blue-600 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Target,
      title: 'Content Marketing',
      description: 'Engaging content that attracts audience.',
      color: 'from-violet-600 to-blue-500',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-200',
      iconBg: 'bg-violet-100',
      iconColor: 'text-violet-600'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Custom mobile and web apps for your business needs.',
      color: 'from-rose-600 to-pink-500',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600'
    },
    {
      icon: Zap,
      title: 'Project Management & Automation',
      description: 'Automate your business processes and streamline workflows.',
      color: 'from-amber-600 to-orange-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
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
            Our Services
          </h1>
          <p className="text-xl text-slate-300">
            Comprehensive digital marketing solutions designed to drive real business results
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className={`group relative overflow-hidden rounded-2xl ${service.bgColor} border-2 ${service.borderColor} hover:border-blue-400 transition-all duration-300 hover:shadow-2xl cursor-pointer h-full flex flex-col`}
                >
                  {/* Animated background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative p-8 flex flex-col h-full">
                    {/* Icon Container */}
                    <div className={`${service.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${service.iconColor}`} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                    <p className="text-slate-600 text-base mb-6 flex-grow">{service.description}</p>

                    {/* Learn More Button */}
                    <Link
                      to="/contact"
                      className={`self-start inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 hover:shadow-lg`}
                    >
                      Learn More
                      <span>→</span>
                    </Link>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-300`}></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing/Packages Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                price: '€499',
                period: '/month',
                description: 'Perfect for small businesses',
                features: ['SEO Basics', 'Social Media Posting', 'Monthly Report', 'Email Support'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                name: 'Growth',
                price: '€999',
                period: '/month',
                description: 'For growing businesses',
                features: ['Full SEO', 'PPC Management', 'Content Marketing', 'Priority Support', '2x Weekly Updates'],
                highlighted: true,
                color: 'from-blue-600 to-blue-400'
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '/month',
                description: 'For large organizations',
                features: ['Everything in Growth', 'Dedicated Account Manager', 'Custom Solutions', '24/7 Support', 'Quarterly Strategy Reviews'],
                color: 'from-indigo-500 to-blue-500'
              },
            ].map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl p-8 transition-all border-2 hover:shadow-2xl group flex flex-col h-full ${
                  pkg.highlighted
                    ? `bg-gradient-to-br ${pkg.color} text-white border-blue-300 scale-105 shadow-2xl`
                    : 'bg-white border-blue-100 text-slate-900 hover:border-blue-300'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className={pkg.highlighted ? 'opacity-90 text-blue-50 text-sm' : 'text-slate-600 text-sm'}>{pkg.description}</p>
                <div className="my-6">
                  <span className="text-4xl font-black">{pkg.price}</span>
                  <span className={pkg.highlighted ? 'opacity-75 text-blue-100 text-sm' : 'text-slate-500 text-sm'}>{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1 ${pkg.highlighted ? 'bg-white' : 'bg-blue-500'}`}></div>
                      <span className={pkg.highlighted ? 'text-blue-50 text-sm' : 'text-slate-700 text-sm'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-4 px-4 rounded-lg font-bold text-center transition-all group-hover:shadow-lg whitespace-nowrap ${
                    pkg.highlighted
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Not sure which service is right for you?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a free consultation with our experts
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-brand-600 font-bold rounded-full hover:bg-slate-100 transition-all inline-flex items-center gap-2 shadow-xl"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
