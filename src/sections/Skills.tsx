import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const skillCategories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools & Others' },
  ];

  const skillsList = {
    frontend: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Redux', level: 80 },
      { name: 'Next.js', level: 78 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 88 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 75 },
      { name: 'Authentication', level: 82 },
      { name: 'Serverless', level: 78 },
    ],
    database: [
      { name: 'SQL', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 70 },
      { name: 'Firebase', level: 75 },
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 78 },
      { name: 'Jest', level: 80 },
      { name: 'Webpack', level: 75 },
      { name: 'Agile/Scrum', level: 85 },
    ],
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle 
          title="My Skills" 
          subtitle="The technologies and tools I work with."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                activeTab === category.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveTab(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
          >
            {skillsList[activeTab as keyof typeof skillsList].map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="mt-16 p-6 bg-indigo-50 dark:bg-gray-700 rounded-lg shadow-sm text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Continuous Learning</h3>
          <p className="text-gray-700 dark:text-gray-300">
            I'm constantly exploring new technologies and methodologies to enhance my skill set.
            Currently learning: <span className="font-medium">WebAssembly, Svelte, and AWS Services</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;