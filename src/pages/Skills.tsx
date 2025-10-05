import { motion } from 'framer-motion';
import { Code2, Palette, Film, Layout as LayoutIcon } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Technical Skills",
      icon: <Code2 className="w-6 h-6" />,
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js", "Python"]
    },
    {
      category: "Design",
      icon: <Palette className="w-6 h-6" />,
      items: ["UI/UX Design", "Adobe XD", "Figma", "Adobe Photoshop", "Illustration"]
    },
    {
      category: "Video Production",
      icon: <Film className="w-6 h-6" />,
      items: ["Video Editing", "Motion Graphics", "Color Grading", "Sound Design"]
    },
    {
      category: "Other",
      icon: <LayoutIcon className="w-6 h-6" />,
      items: ["Project Management", "Team Leadership", "Content Strategy", "SEO"]
    }
  ];

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
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative mb-12 md:mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400 px-4 font-display">
              Skills & Expertise
            </h2>
            <div className="absolute -inset-4 bg-accent-500/5 blur-xl rounded-full"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                className="relative group h-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/50 to-accent-400/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-glass-dark backdrop-blur-xl p-4 sm:p-6 rounded-xl border border-white/10 hover:border-accent-500/20 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-4 space-x-3 text-accent-500">
                    <div className="flex-shrink-0">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white font-heading">{skill.category}</h3>
                  </div>
                  <div className="space-y-2 flex-grow">
                    {skill.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-500/60 flex-shrink-0"></div>
                        <span className="text-white/80 text-sm sm:text-base">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
