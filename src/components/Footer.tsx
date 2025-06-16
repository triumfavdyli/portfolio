import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/triumfavdyli', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/triumf-avdyli-392b56298/', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 py-10 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <motion.div 
            className="font-bold text-xl text-indigo-600 dark:text-indigo-400"
            whileHover={{ scale: 1.05 }}
          >
            <a href="#home">Triumf<span className="text-purple-600 dark:text-purple-400">Avdyli</span></a>
          </motion.div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>&copy; {currentYear} Triumf Avdyli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;