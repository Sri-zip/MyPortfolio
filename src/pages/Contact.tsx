import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:your.email@example.com',
      color: 'hover:text-accent-500'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/yourusername',
      color: 'hover:text-accent-500'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-accent-500'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-6 h-6" />,
      href: 'https://youtube.com/@yourusername',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400 mb-6">
              Get In Touch
            </h2>
            <div className="absolute -inset-4 bg-accent-500/5 blur-xl rounded-full"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together or just want to say hello!
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Contact Form */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/50 to-accent-400/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-glass-dark backdrop-blur-xl p-8 rounded-xl border border-white/10 hover:border-accent-500/20 transition-all duration-300">
                <form className="space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg bg-glass-white backdrop-blur-sm border border-white/10 text-white/90 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg bg-glass-white backdrop-blur-sm border border-white/10 text-white/90 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-glass-white backdrop-blur-sm border border-white/10 text-white/90 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 transition-all duration-300"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 rounded-lg bg-glass-dark backdrop-blur-xl border border-accent-500/20 text-accent-500 hover:text-white hover:bg-accent-500/20 hover:border-accent-500 hover:shadow-neon transition-all duration-300 group"
                  >
                    <span className="relative z-10 font-medium">Send Message</span>
                    <span className="absolute inset-0 bg-accent-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  </button>
                </form>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/50 to-accent-400/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-glass-dark backdrop-blur-xl p-8 rounded-xl border border-white/10 hover:border-accent-500/20 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
                  <div className="space-y-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-4 text-white/80 hover:text-white group transition-colors duration-300 ${link.color}`}
                      >
                        <span className="p-2 rounded-lg bg-glass-white backdrop-blur-sm border border-white/10 group-hover:border-accent-500/20 transition-all duration-300">
                          {link.icon}
                        </span>
                        <span className="font-medium">{link.name}</span>
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
