import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { Code, Briefcase, User, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const cards = [
    {
      icon: <Code size={24} className="text-blue-600 dark:text-blue-400" />,
      title: "Full-Stack Developer",
      description: "I'm passionate about creating interactive applications with clean, efficient code.",
    },
    {
      icon: <Briefcase size={24} className="text-blue-600 dark:text-blue-400" />,
      title: "Professional Experience",
      description: "Over 1 years of experience developing full-stack applications for various industries.",
    },
    {
      icon: <User size={24} className="text-blue-600 dark:text-blue-400" />,
      title: "Problem Solver",
      description: "I enjoy solving complex problems and turning ideas into reality with elegant solutions.",
    },
    {
      icon: <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and methodologies to enhance my skill set.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about me and my background."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-30 blur-lg"></div>
              <img 
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Developer Working" 
                className="w-full h-full object-cover rounded-lg relative z-10 shadow-xl"
              />
            </div>
          </motion.div>
          
          <div className="flex flex-col justify-center">
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              I'm a passionate full-stack developer with expertise in building responsive and 
              performant web applications. With a strong foundation in both front-end and back-end 
              technologies, I enjoy creating seamless user experiences and solving complex problems.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              My journey in web development began with HTML, CSS, and JavaScript, and has evolved to include 
              modern frameworks like React, Typescript, Cypress, Node.js, Express and SQL. I believe in writing clean, maintainable code and 
              continuously learning new technologies to stay at the forefront of web development.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through blog posts and community engagement.
            </motion.p>
          </div>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="rounded-full bg-blue-100 dark:bg-gray-700 w-12 h-12 flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;