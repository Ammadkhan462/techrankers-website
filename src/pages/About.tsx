import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Target, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'We measure success by your business growth and measurable ROI.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your goals are our goals. We work as an extension of your team.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of trends to give you a competitive advantage.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver nothing but the highest quality work every time.'
    },
  ];

  const team = [
    { name: 'John Smith', role: 'Founder & CEO', image: '👨‍💼' },
    { name: 'Sarah Johnson', role: 'Lead Strategist', image: '👩‍💼' },
    { name: 'Mike Chen', role: 'SEO Expert', image: '👨‍🏫' },
    { name: 'Emma Davis', role: 'Creative Director', image: '👩‍🎨' },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            About TechRankers
          </h1>
          <p className="text-xl text-slate-300">
            We're a team of digital marketing experts dedicated to helping businesses succeed online
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-black text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-4">
                Founded in 2016, TechRankers started with a simple mission: to help businesses transform their digital presence through strategic marketing.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                What began as a small team of passionate marketers has grown into a full-service digital agency serving 250+ clients across Europe and beyond.
              </p>
              <p className="text-lg text-slate-600">
                We've spent 8+ years perfecting our craft, learning what works and what doesn't. Today, we apply those lessons to every project we undertake.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-brand-500 to-blue-500 rounded-2xl p-8 text-white"
            >
              <h3 className="text-3xl font-black mb-8">By The Numbers</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-black mb-2">500+</div>
                  <div className="text-lg opacity-90">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-2">250+</div>
                  <div className="text-lg opacity-90">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-2">98%</div>
                  <div className="text-lg opacity-90">Client Retention Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-2">8+</div>
                  <div className="text-lg opacity-90">Years in Business</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Icon className="text-brand-600 mb-4" size={40} />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-7xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-slate-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to see what we can do for your business?
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-brand-600 font-bold rounded-full hover:bg-slate-100 transition-all inline-flex items-center gap-2 shadow-xl"
          >
            Get Started Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
