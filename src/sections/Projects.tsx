import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { Github, ExternalLink, X } from 'lucide-react';
import restaurant from '../images/restaurant.png'
import realTimeChat from '../images/real-time-chat.png';
import soundWave from '../images/soundwave.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  // demo: string;
  details: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filters = ['all', 'react', 'node', 'typescript', 'fullstack'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Restaurant Platfrom',
      description:
        'A full-stack restaurant platform with user authentication, menu management, and online ordering capabilities.',
      image: restaurant,
      tags: ['react', 'node', 'typescript', 'fullstack'],
      github: 'https://github.com/triumfavdyli/Restaurant',
      details:
        'The Restaurant Platform is a comprehensive solution for managing restaurant operations. It features a user-friendly interface built with React and TypeScript, allowing restaurant owners to manage their menus, orders, and customer interactions efficiently. The backend is powered by Node.js, providing robust user authentication, order processing, and real-time updates. The platform supports online ordering, table reservations, and customer reviews, making it a complete solution for modern dining experiences.',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A real-time chat application with private messaging, group chats, and file sharing capabilities.',
      image: realTimeChat,
      tags: ['react', 'typescript', 'express', 'SQL'],
      github: 'https://github.com/triumfavdyli/real-time-chat',
      details:
        "This real-time chat application is built using Socket.io, React, and Node.js. It allows users to create accounts, join various chat rooms, send private messages, and share files. The application features read receipts, online status indicators, message notifications, and emoji support. It's designed to be lightweight yet powerful, with a focus on providing a smooth user experience across all devices..",
    },

    {
      id: 4,
      title: 'Music web player',
      description:
        'A web-based music player application with playlist management and audio visualization features.',
      image: soundWave,
      tags: ['react', 'node', 'SQL', 'fullstack'],
      github: 'https://github.com/triumfavdyli/music-app-frontend',
      details:
        'The Music Web Player is a simple yet engaging application that lets users enjoy their favorite tracks directly in the browser. It includes playlist management, audio controls, and smooth transitions for a better listening experience. Users can browse through songs, create a continuous play session, and view a clean audio visualization while the music plays. With a lightweight design, the player ensures quick loading and responsiveness across devices. <a href="https://soundwavex.netlify.app/" target="_blank" rel="noopener noreferrer">Click me</a>',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle 
          title="My Projects" 
          subtitle="Check out some of my recent work."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                activeFilter === filter
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 h-20 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-indigo-100 dark:bg-gray-600 text-indigo-800 dark:text-indigo-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <motion.a 
                      href={project.github}
                      className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} className="text-gray-700 dark:text-gray-300" />
                    </motion.a>
                    {/* <motion.a 
                      // href={project.demo}
                      className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} className="text-gray-700 dark:text-gray-300" />
                    </motion.a> */}
                  </div>
                  <motion.button
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 15 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                  <motion.button
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                  >
                    <X size={20} className="text-gray-700 dark:text-gray-300" />
                  </motion.button>
                </div>
                
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Description</h4>
                  <p className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: selectedProject.details }}/>

                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-indigo-100 dark:bg-gray-600 text-indigo-800 dark:text-indigo-300 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <motion.a 
                    href={selectedProject.github}
                    className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors inline-flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-2" />
                    GitHub
                  </motion.a>
                  <motion.a 
                    // href={selectedProject.demo}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors inline-flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;