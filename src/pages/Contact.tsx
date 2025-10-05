import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Send, Palette } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:tejalsriva@gmail.com?subject=${subject}&body=${body}`;
      
      // Open mail client
      window.location.href = mailtoLink;
      
      setSubmitMessage('Opening your email client...');
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitMessage('');
      }, 2000);
      
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:tejalsriva@gmail.com',
      color: 'hover:text-accent-500'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/tejal-srivastava-272899298/',
      color: 'hover:text-accent-500'
    },
    {
      name: 'Behance',
      icon: <Palette className="w-6 h-6" />,
      href: 'https://www.behance.net/tejalcreates',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      href: 'https://www.instagram.com/tejal.creates?igsh=MWtpY3gxb2syNDdoZg==',
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400 mb-4 sm:mb-6 px-4 font-display">
              Get In Touch
            </h2>
            <div className="absolute -inset-4 bg-accent-500/5 blur-xl rounded-full"></div>
            <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together or just want to say hello!
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Contact Form */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/50 to-accent-400/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-glass-dark backdrop-blur-xl p-6 sm:p-8 rounded-xl border border-white/10 hover:border-accent-500/20 transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm sm:text-base" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-glass-white backdrop-blur-sm border border-white/10 text-white/90 placeholder-white/50 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm sm:text-base" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-glass-white backdrop-blur-sm border border-white/10 text-white/90 placeholder-white/50 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 transition-all duration-300 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm sm:text-base" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-glass-white backdrop-blur-sm border border-white/10 text-white/90 placeholder-white/50 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 transition-all duration-300 resize-none text-sm sm:text-base"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  {submitMessage && (
                    <div className="text-center">
                      <p className="text-accent-500 text-sm sm:text-base">{submitMessage}</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-glass-dark backdrop-blur-xl border border-accent-500/20 text-accent-500 hover:text-white hover:bg-accent-500/20 hover:border-accent-500 hover:shadow-neon transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="relative z-10 font-ui font-medium">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                    <span className="absolute inset-0 bg-accent-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  </button>
                </form>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/50 to-accent-400/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-glass-dark backdrop-blur-xl p-6 sm:p-8 rounded-xl border border-white/10 hover:border-accent-500/20 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 font-heading">Connect With Me</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 sm:space-x-4 text-white/80 hover:text-white group transition-colors duration-300 ${link.color} p-2 sm:p-3 rounded-lg hover:bg-white/5`}
                      >
                        <span className="p-2 sm:p-3 rounded-lg bg-glass-white backdrop-blur-sm border border-white/10 group-hover:border-accent-500/20 transition-all duration-300 flex-shrink-0">
                          {link.icon}
                        </span>
                        <span className="font-ui font-medium text-sm sm:text-base">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
