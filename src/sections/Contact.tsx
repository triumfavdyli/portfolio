import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Send, Mail, MapPin, Phone, Check, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormStatus('submitting');
      
      try {
        console.log('formState being sent:', formState);
        console.log('URL being used:', import.meta.env.VITE_SUPABASE_URL);

        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(formState),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        setFormStatus('success');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      } catch (error) {
        setFormStatus('error');
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Email",
      value: "triumfavdyli6@gmail.com",
      link: "mailto:triumfavdyli6@gmail.com"
    },
    {
      icon: <Phone size={24} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Phone",
      value: "045912070",

    },
    {
      icon: <MapPin size={24} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Location",
      value: "Gjilan, Kosovo",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind? Let's discuss how I can help you."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mr-4 p-3 bg-indigo-100 dark:bg-gray-700 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Availability</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm currently available for freelance work and open to discussing new projects or opportunities.
              </p>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span>Available for new projects</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-800 dark:text-gray-200">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-800 dark:text-gray-200">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Your email"
                />
                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-800 dark:text-gray-200">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Subject"
                />
                {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-800 dark:text-gray-200">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Your message (please let your number or your social media)"
                ></textarea>
                {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
              </div>
              
              <motion.button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-colors flex items-center justify-center disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus === 'idle' && (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
                {formStatus === 'submitting' && (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                )}
                {formStatus === 'success' && (
                  <>
                    <Check size={18} className="mr-2" />
                    Message Sent!
                  </>
                )}
                {formStatus === 'error' && (
                  <>
                    <AlertCircle size={18} className="mr-2" />
                    Failed to Send
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;