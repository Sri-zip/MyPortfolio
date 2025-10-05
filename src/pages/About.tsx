import { motion } from 'framer-motion';
import profileImage from '../assets/profile.png';
import { 
  Code, 
  Palette, 
  Lightbulb,
  Sparkles, 
  ChevronDown,
  GraduationCap,
  Terminal,
  Briefcase,
  Brush,
  Laptop,
  Pencil
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-primary-900 font-body">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center pt-20 sm:pt-24 md:pt-28">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            {/* Profile Image */}
            <motion.div 
              className="w-full max-w-sm sm:max-w-md lg:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/50 to-accent-400/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative aspect-[3/4] w-full rounded-xl border border-white/10 overflow-hidden transition-all duration-300 bg-primary-800/50">
                  <img 
                    src={profileImage} 
                    alt="Profile Picture" 
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-accent-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div 
              className="w-full lg:w-2/3 space-y-6 sm:space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400 animate-gradient">
                    Designing ideas into experiences.
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-4xl">
                  A curious mind with a passion for human-centered design. I blend creativity with technology 
                  to craft meaningful digital experiences that solve real problems.
                </p>
              </div>

              {/* Decorative Journey Text */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-3 text-accent-500 select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="h-[1px] w-6 sm:w-8 bg-gradient-to-r from-accent-500/50 to-transparent" />
                <span className="text-xs sm:text-sm font-body font-medium tracking-wider uppercase">
                  Explore my journey
                </span>
                <div className="h-[1px] w-6 sm:w-8 bg-gradient-to-l from-accent-500/50 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-20 sm:space-y-24 md:space-y-32 pb-12 sm:pb-16 md:pb-20">

          {/* Skills & Tools Section */}
          <motion.div
            className="space-y-8 sm:space-y-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 text-center lg:text-left">
              Skills & Tools
            </h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { 
                  icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "UX/UI Design",
                  color: "from-pink-500 to-rose-500"
                },
                { 
                  icon: <Laptop className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Visual Communication",
                  color: "from-purple-500 to-indigo-500"
                },
                { 
                  icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Prototyping",
                  color: "from-blue-500 to-cyan-500"
                },
                { 
                  icon: <Pencil className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Content Creation",
                  color: "from-teal-500 to-emerald-500"
                },
                { 
                  icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Creative Thinking",
                  color: "from-amber-500 to-yellow-500"
                },
                { 
                  icon: <Brush className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Design Systems",
                  color: "from-red-500 to-orange-500"
                },
                { 
                  icon: <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Front-end Dev",
                  color: "from-violet-500 to-purple-500"
                },
                { 
                  icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: "Problem Solving",
                  color: "from-emerald-500 to-green-500"
                }
              ].map((skill, i) => (
                <motion.div
                  key={skill.label}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/50 to-accent-400/50 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-glass-gradient backdrop-blur-sm rounded-lg border border-white/10 hover:border-accent-500/20 transition-all duration-300">
                    <div className="text-accent-500 group-hover:text-accent-400 transition-colors duration-300 flex-shrink-0">
                      {skill.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-ui font-medium text-white/90">{skill.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="space-y-8 sm:space-y-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400 text-center lg:text-left">
              Education
            </h3>
            <div className="relative group">
              <div className="relative bg-primary-900/80 backdrop-blur-xl p-4 sm:p-6 rounded-xl border border-white/10 hover:border-accent-500/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3 sm:mb-4">
                  <GraduationCap size={28} className="text-accent-500 group-hover:text-accent-400 transition-colors duration-300 mx-auto sm:mx-0" />
                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-heading text-white group-hover:text-accent-500 transition-colors duration-300 text-center sm:text-left">Maynooth University</h4>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-white/80 text-sm sm:text-base">Bachelor's in Product Design & Innovation</p>
                  <p className="text-white/60 mt-1 text-sm sm:text-base">2024 - Present</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="space-y-8 sm:space-y-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400 text-center lg:text-left">
              Experience
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Marketing & Communication Assistant",
                  company: "Cancer Trials Ireland",
                  period: "Summer 2024",
                  description: "Enhanced video editing skills for professional use and produced content aligned with organizational branding",
                  icon: <Briefcase size={24} className="text-accent-500 group-hover:text-accent-400 transition-colors duration-300 sm:w-8 sm:h-8" />,
                  color: "from-accent-500 to-accent-400"
                },
                {
                  title: "Freelance projects",
                  company: "Freelance",
                  period: "2022 - Present",
                  description: "Managed freelance projects in video editing, brand content, custom design, and app development—improving engagement, brand reach, and data efficiency.",
                  icon: <Terminal size={24} className="text-accent-500 group-hover:text-accent-400 transition-colors duration-300 sm:w-8 sm:h-8" />,
                  color: "from-purple-500 to-pink-500"
                }
              ].map((exp, i) => (
                <motion.div
                  key={exp.title}
                  className="group relative"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/50 to-accent-400/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-primary-900/80 backdrop-blur-xl p-4 sm:p-6 rounded-xl border border-white/10 hover:border-accent-500/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3 sm:mb-4">
                      <div className="mx-auto sm:mx-0 flex-shrink-0">
                        {exp.icon}
                      </div>
                      <h4 className="text-lg sm:text-xl font-semibold font-heading text-white group-hover:text-accent-500 transition-colors duration-300 text-center sm:text-left">{exp.title}</h4>
                    </div>
                    <div className="text-center sm:text-left space-y-1 sm:space-y-2">
                      <p className="text-white/80 text-sm sm:text-base">{exp.company}</p>
                      <p className="text-white/60 text-xs sm:text-sm">{exp.period}</p>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed">{exp.description}</p>
                    </div>
                    <div className={`mt-3 sm:mt-4 h-1 bg-gradient-to-r ${exp.color} rounded-full opacity-60`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages Section */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400 text-center lg:text-left">
              Languages
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              {[
                { name: "English", level: "Native", color: "from-emerald-500 to-teal-500" },
                { name: "Hindi", level: "Native", color: "from-violet-500 to-purple-500" },
                { name: "Korean", level: "Learning", color: "from-rose-500 to-pink-500" }
              ].map((lang, i) => (
                <motion.div
                  key={lang.name}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/50 to-accent-400/50 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative px-4 sm:px-6 py-2 sm:py-3 bg-glass-gradient backdrop-blur-sm rounded-full border border-white/10 hover:border-accent-500/20 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <span className="text-white/90 text-sm sm:text-base">{lang.name}</span>
                      <span className="text-xs sm:text-sm text-white/60 px-2 py-0.5 bg-white/5 rounded-full">{lang.level}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Beyond Design Section */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400 text-center lg:text-left">
              Beyond Design
            </h3>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/50 to-accent-400/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-glass-gradient backdrop-blur-xl rounded-xl border border-white/10 hover:border-accent-500/20 transition-all duration-300">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed text-center lg:text-left">
                    When I'm not designing, you'll find me exploring the intersection of art and technology through drawing 
                    and storytelling. I believe the best ideas come from diverse experiences and perspectives.
                  </p>
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed text-center lg:text-left">
                    Most of my creative sparks happen when I'm sketching late at night—or sipping chai, contemplating the 
                    next big design challenge.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Portfolio CTA */}
          <motion.div
            className="text-center space-y-6 sm:space-y-8 py-8 sm:py-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400 px-4">
              Curious about how I bring ideas to life?
            </h3>
            <button
              onClick={() => navigate('/projects')}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-glass-gradient backdrop-blur-xl border border-accent-500/20 text-accent-500 hover:text-white hover:bg-accent-500/20 hover:border-accent-500 transition-all duration-300 group text-sm sm:text-base"
            >
              <span className="relative z-10 font-medium">Explore My Work</span>
              <ChevronDown className="inline-block ml-2 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:rotate-90 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;