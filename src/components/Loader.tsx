import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  const dotVariants = {
    initial: { y: 0 },
    animate: { 
      y: [-15, 0, -15],
      transition: {
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut",
      }
    }
  };

  const colors = ['bg-indigo-600', 'bg-purple-600', 'bg-blue-600', 'bg-teal-600'];

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex items-center space-x-3">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className={`w-4 h-4 rounded-full ${color}`}
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{
              delay: index * 0.1,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Loader;