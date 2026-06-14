import React from 'react';
import { motion } from 'motion/react';
import { Search, TrendingUp, Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'We conduct a thorough audit of your current digital presence and analyze your competitors.',
      details: ['Competitive analysis', 'Website audit', 'SEO analysis', 'Industry research'],
      icon: Search,
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Based on our findings, we develop a customized strategy tailored to your business goals.',
      details: ['Goal setting', 'Target audience definition', 'Channel selection', 'Budget allocation'],
      icon: Target,
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Our team executes the strategy with precision, creating and launching campaigns.',
      details: ['Content creation', 'Campaign setup', 'Optimization', 'Testing & refinement'],
      icon: TrendingUp,
    },
    {
      number: '04',
      title: 'Monitoring & Optimization',
      description: 'We continuously monitor performance and make data-driven optimizations.',
      details: ['Real-time monitoring', 'Performance tracking', 'A/B testing', 'Continuous improvement'],
      icon: CheckCircle2,
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
            Our Process
          </h1>
          <p className="text-xl text-slate-300">
            A proven methodology for driving digital success
          </p>
        </motion.div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                >
                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="inline-block">
                      <span className="text-6xl font-black bg-gradient-to-r from-brand-600 to-blue-600 bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 mt-4">{step.title}</h3>
                    <p className="text-lg text-slate-600 mb-6">{step.description}</p>
                    <ul className="space-y-3 mb-6">
                      {step.details.map((detail, didx) => (
                        <li key={didx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                          <span className="text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Icon */}
                  <div className="flex-1 flex justify-center">
                    <div className="w-40 h-40 bg-gradient-to-br from-brand-100 to-blue-100 rounded-2xl flex items-center justify-center">
                      <Icon className="text-brand-600" size={80} />
                    </div>
                  </div>

                  {/* Connector Line */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-brand-600 to-transparent"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Most projects follow this timeline, but we customize based on your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { phase: 'Week 1-2', title: 'Discovery', color: 'from-blue-500' },
              { phase: 'Week 3-4', title: 'Strategy', color: 'from-purple-500' },
              { phase: 'Week 5-8', title: 'Implementation', color: 'from-brand-500' },
              { phase: 'Week 9+', title: 'Optimization', color: 'from-green-500' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-xl bg-white shadow-lg border-l-4 border-transparent hover:shadow-xl transition-all`}
                style={{ borderLeftColor: item.color === 'from-blue-500' ? '#3b82f6' : item.color === 'from-purple-500' ? '#a855f7' : item.color === 'from-brand-500' ? '#ef3f4b' : '#10b981' }}
              >
                <div className="text-sm font-bold text-slate-600 mb-2">{item.phase}</div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black text-slate-900 mb-6">Why Our Process Works</h2>
            <div className="space-y-4 text-lg text-slate-600">
              <p>
                ✓ <strong>Data-Driven:</strong> Every decision is backed by analytics and insights
              </p>
              <p>
                ✓ <strong>Transparent:</strong> You get regular updates and can see exactly what we're doing
              </p>
              <p>
                ✓ <strong>Flexible:</strong> We adapt our strategy based on results and market changes
              </p>
              <p>
                ✓ <strong>Accountable:</strong> We're committed to delivering measurable results
              </p>
              <p>
                ✓ <strong>Collaborative:</strong> We work closely with you as a true partner
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and see how our process can help your business grow
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-brand-600 font-bold rounded-full hover:bg-slate-100 transition-all inline-flex items-center gap-2 shadow-xl"
          >
            Schedule a Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Process;
