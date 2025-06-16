import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Briefcase, Calendar, Star } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Learn To Start',
      period: '2025 - Present',
      description:
        'Leading development of enterprise applications ',
      achievements: [
        'Deliver full-stack features by building frontend components and connecting them to backend endpoints',
        'Debug and resolve production issues across the stack to ensure smooth user experience',
        'Implement secure user authentication and handle session-based access across the application.',
        'Collaborate on feature planning and translate business needs into technical solutions.',
      ],
      tech: ['React', 'Node.js', 'Express', 'SQL'],
    },
    {
      title: 'React Developer',
      company: 'Learn To Start',
      period: '2024 - 2025',
      description:
        'Developed and optimized interactive user interfaces using React, with a focus on performance, usability, and clean architecture.',
      achievements: [
        'Implemented real-time UI updates using WebSockets for a smoother user experience',
        'Refactored legacy components to modern React patterns, improving maintainability',
        'Reduced bundle size and load times by optimizing component structure and lazy loading',
        'Implemented reusable UI components to speed up development and maintain consistency',
      ],
      tech: ['React', 'Redux'],
    },
    {
      title: 'NOC',
      company: 'Telkos LLC',
      period: '2023-2024',
      description:
        'Monitored and maintained network systems to ensure high availability and performance for clients across various services.',
      achievements: [
        'Monitored real-time network activity and resolved connectivity issues',
        'Escalated and tracked incidents to ensure timely resolution',
        'Collaborated with field technicians to diagnose and repair network faults',
        'Provided support for service outages and ensured minimal downtime',
      ],
      tech: ['Network Monitoring', 'Customer Support'],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey in software development."
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
              
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center mb-2"
                    >
                      <Star className="text-yellow-500 mr-2" size={20} />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="space-y-2"
                    >
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="md:w-2/3">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-700 dark:text-gray-300 mb-4"
                    >
                      {exp.description}
                    </motion.p>

                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + (i * 0.1) }}
                          className="flex items-start group"
                        >
                          <Briefcase size={16} className="text-blue-500 dark:text-blue-400 mt-1 mr-3 flex-shrink-0 transform group-hover:rotate-12 transition-transform" />
                          <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="flex flex-wrap gap-2"
                    >
                      {exp.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Let's Work Together
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;