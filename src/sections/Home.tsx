import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import pic from '../images/pic.png'
import { Github, Linkedin } from 'lucide-react';

const Home: React.FC = () => {

  const socialLinks = [
    {
      icon: <Github size={30} />,
      href: 'https://github.com/triumfavdyli',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={30} />,
      href: 'https://www.linkedin.com/in/triumf-avdyli-392b56298/',
      label: 'LinkedIn',
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-900/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-300/20 dark:bg-cyan-900/20 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-blue-600 dark:border-blue-400"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={pic}
              alt="Developer Portrait"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatedText
              text="Hi,I'm Triumf Avdyli"
              className="block mb-2 text-gray-900 dark:text-white"
            />
            <br />
            <AnimatedText
              text="Full Stack Developer"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 text-transparent bg-clip-text"
            />
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            I build exceptional, responsive websites and web applications that
            provide intuitive user experiences with modern technologies.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Contact Me
            </motion.a>
          </div>
          <div className="flex space-x-4 mt-10 mb-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          style={{ left: 'calc(50% - 30px)' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1.2,
              duration: 0.5,
            },
          }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center  text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            animate={{
              y: [0, 10, 0],
              transition: {
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut',
              },
            }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;