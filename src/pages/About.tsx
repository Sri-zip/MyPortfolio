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
    <div className="min-h-screen bg-primary-900 font-nunito">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image */}
            <motion.div 
              className="w-full md:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/50 to-accent-400/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative aspect-[3/4] w-full bg-glass-gradient backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden transition-all duration-300">
                  <img 
                    src={profileImage} 
                    alt="Profile Picture" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-accent-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div 
              className="w-full md:w-2/3 space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold font-oregano">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400 animate-gradient">
                    Designing ideas into experiences.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                  A curious mind with a passion for human-centered design. I blend creativity with technology 
                  to craft meaningful digital experiences that solve real problems.
                </p>
              </div>

              {/* Decorative Journey Text */}
              <motion.div 
                className="flex items-center gap-3 text-accent-500 select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="h-[1px] w-8 bg-gradient-to-r from-accent-500/50 to-transparent" />
                <span className="text-sm font-medium tracking-wider uppercase">
                  Explore my journey
                </span>
                <div className="h-[1px] w-8 bg-gradient-to-l from-accent-500/50 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-32">

          {/* Skills & Tools Section */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold font-oregano text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
              Skills & Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { 
                  icon: <Palette className="w-6 h-6" />,
                  label: "UX/UI Design",
                  color: "from-pink-500 to-rose-500"
                },
                { 
                  icon: <Laptop className="w-6 h-6" />,
                  label: "Visual Communication",
                  color: "from-purple-500 to-indigo-500"
                },
                { 
                  icon: <Code className="w-6 h-6" />,
                  label: "Prototyping",
                  color: "from-blue-500 to-cyan-500"
                },
                { 
                  icon: <Pencil className="w-6 h-6" />,
                  label: "Content Creation",
                  color: "from-teal-500 to-emerald-500"
                },
                { 
                  icon: <Lightbulb className="w-6 h-6" />,
                  label: "Creative Thinking",
                  color: "from-amber-500 to-yellow-500"
                },
                { 
                  icon: <Brush className="w-6 h-6" />,
                  label: "Design Systems",
                  color: "from-red-500 to-orange-500"
                },
                { 
                  icon: <Terminal className="w-6 h-6" />,
                  label: "Front-end Dev",
                  color: "from-violet-500 to-purple-500"
                },
                { 
                  icon: <Sparkles className="w-6 h-6" />,
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
                  <div className="relative flex items-center gap-3 p-4 bg-glass-gradient backdrop-blur-sm rounded-lg border border-white/10 hover:border-accent-500/20 transition-all duration-300">
                    <div className="text-accent-500 group-hover:text-accent-400 transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-white/90">{skill.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold font-oregano text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400">
              Education
            </h3>
            <div className="relative group">
              {/* Removed glowy effect */}
              <div className="relative bg-primary-900/80 backdrop-blur-xl p-6 rounded-xl border border-white/10 hover:border-accent-500/20 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap size={32} className="text-accent-500 group-hover:text-accent-400 transition-colors duration-300" />
                  <h4 className="text-2xl font-semibold font-oregano text-white group-hover:text-accent-500 transition-colors duration-300">Maynooth University</h4>
                </div>
                <p className="text-white/80">Bachelor's in Product Design & Innovation</p>
                  <p className="text-white/60 mt-1">2024 - Present</p>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold font-oregano text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400">
              Experience
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: "Marketing & Communication Assistant",
                  company: "Cancer Trials Ireland",
                  period: "Summer 2024",
                  description: "Enhanced video editing skills for professional use and produced content aligned with organizational branding",
                  icon: <Briefcase size={32} className="text-accent-500 group-hover:text-accent-400 transition-colors duration-300" />,
                  color: "from-accent-500 to-accent-400"
                },
                {
                  title: "Freelance projects",
                  company: "Freelance",
                  period: "2022 - Present",
                  description: "Managed freelance projects in video editing, brand content, custom design, and app development—improving engagement, brand reach, and data efficiency.",
                  icon: <Terminal size={32} className="text-accent-500 group-hover:text-accent-400 transition-colors duration-300" />,
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
                  <div className="relative bg-primary-900/80 backdrop-blur-xl p-6 rounded-xl border border-white/10 hover:border-accent-500/20 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      {exp.icon}
                      <h4 className="text-xl font-semibold font-oregano text-white group-hover:text-accent-500 transition-colors duration-300">{exp.title}</h4>
                    </div>
                    <p className="text-white/80">{exp.company}</p>
                    <p className="text-white/60 mt-1">{exp.period}</p>
                    <p className="text-white/80 mt-3">{exp.description}</p>
                    <div className={`mt-4 h-1 bg-gradient-to-r ${exp.color} rounded-full opacity-60`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold font-oregano text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400">
              Languages
            </h3>
            <div className="flex flex-wrap gap-4">
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
                  <div className="relative px-6 py-2 bg-glass-gradient backdrop-blur-sm rounded-full border border-white/10 hover:border-accent-500/20 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <span className="text-white/90">{lang.name}</span>
                      <span className="text-xs text-white/60 px-2 py-0.5 bg-white/5 rounded-full">{lang.level}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Beyond Design Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold font-oregano text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400">
              Beyond Design
            </h3>
            <div className="relative group p-8">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/50 to-accent-400/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-glass-gradient backdrop-blur-xl rounded-xl border border-white/10 hover:border-accent-500/20 transition-all duration-300">
                <div className="p-6 space-y-6">
                  <p className="text-lg text-white/80 leading-relaxed">
                    When I'm not designing, you'll find me exploring the intersection of art and technology through drawing 
                    and storytelling. I believe the best ideas come from diverse experiences and perspectives.
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Most of my creative sparks happen when I'm sketching late at night—or sipping chai, contemplating the 
                    next big design challenge.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Portfolio CTA */}
          <motion.div
            className="text-center space-y-8 py-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold font-oregano text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400">
              Curious about how I bring ideas to life?
            </h3>
            <button
              onClick={() => navigate('/projects')}
              className="px-8 py-3 rounded-lg bg-glass-gradient backdrop-blur-xl border border-accent-500/20 text-accent-500 hover:text-white hover:bg-accent-500/20 hover:border-accent-500 transition-all duration-300 group"
            >
              <span className="relative z-10 font-medium">Explore My Work</span>
              <ChevronDown className="inline-block ml-2 w-4 h-4 transform group-hover:rotate-90 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;