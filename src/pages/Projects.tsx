import { useState, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Target, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
// Import your Smart Attendance System image
import smartAttendanceImage from '../assets/ChatGPT Image Oct 4, 2025 at 11_20_57 PM.png';
// Import your Digital Content Creation image
import digitalContentImage from '../assets/SP_1NIR.png';
// Import your Digital Graphic Collection image
import digitalGraphicImage from '../assets/신 라면.png';
// Import carousel images
import ramyeonImage from '../assets/신 라면.png';
import nirchalSquareImage from '../assets/Nirchal_square.png';
import supraImage from '../assets/スープラ.png';
import sp1nirImage from '../assets/SP_1NIR.png';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Digital Graphics Carousel Data
  const digitalGraphics = [
    {
      id: 1,
      title: "Ramyeon Design",
      image: ramyeonImage,
      description: "Creative graphic design artwork",
      category: "Digital Art"
    },
    {
      id: 2, 
      title: "NIRCHAL Square Design",
      image: nirchalSquareImage,
      description: "Brand identity square format design",
      category: "Brand Design"
    },
    {
      id: 3,
      title: "Supra Design",
      image: supraImage,
      description: "Automotive-inspired digital artwork",
      category: "Digital Art"
    },
    {
      id: 4,
      title: "NIRCHAL Collection",
      image: nirchalSquareImage,
      description: "Fashion brand promotional design",
      category: "Brand Design"
    },
    {
      id: 5,
      title: "SP1NIR Design",
      image: sp1nirImage,
      description: "Creative brand visual identity",
      category: "Brand Design"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'product', name: 'Product Design' },
    { id: 'graphics', name: 'Graphics' },
    { id: 'artwork', name: 'Artwork' }
  ];

  const projects = [
    {
      id: 1,
      title: "Smart Attendance System",
      category: "product",
      description: "Smart Attendance System built during second semester at Maynooth University. Uses Arduino UNO, RFID reader, ESP8266 Wi-Fi module, and LCD with I2C to automate attendance recording, replacing manual sign-ins with RFID-based check-ins and cloud data integration.",
      image: smartAttendanceImage,
      technologies: ["Arduino UNO", "RFID", "ESP8266", "IoT", "LCD Display"],
      links: {
        demo: "#",
        github: "#"
      },
      // Enhanced details for modal
      fullDescription: "Developed a comprehensive Smart Attendance System as part of our second semester project at Maynooth University. This innovative solution transforms traditional attendance tracking by implementing RFID technology for seamless check-ins.",
      features: [
        "RFID card scanning for instant attendance marking",
        "Real-time feedback through LEDs and buzzer confirmation",
        "LCD display with I2C for attendance status updates",
        "Cloud integration using ESP8266 Wi-Fi module",
        "Automated data logging and storage",
        "Energy-efficient Arduino UNO microcontroller system"
      ],
      challenges: [
        "Integrating multiple hardware components seamlessly",
        "Ensuring reliable Wi-Fi connectivity for cloud uploads",
        "Optimizing power consumption for continuous operation",
        "Creating an intuitive user interface on LCD display"
      ],
      impact: "Eliminated manual attendance tracking, reduced processing time by 90%, and improved accuracy of attendance records.",
      duration: "4 months",
      team: "3 members",
      role: "Lead Developer & Hardware Designer"
    },
    {
      id: 2,
      title: "Multi-Brand Identity System - KDADKS",
      category: "graphics",
      description: "Comprehensive brand identity ecosystem for KDADKS Service Pvt Ltd and its five sub-brands: NIRCHAL, IT-Wala, Rahi Rides, and Ayuh Clinic. Created cohesive visual identity system ensuring consistency across multiple platforms and campaigns.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Strategy", "Digital Marketing"],
      links: {
        demo: "#"
      },
      fullDescription: "Led the complete visual branding initiative for KDADKS Service Pvt Ltd (kdadks.com) and strategically designed distinct yet cohesive brand identities for four specialized sub-brands: NIRCHAL (nirchal.com), IT-Wala (it-wala.com), Rahi Rides (raahirides.com), and Ayuh Clinic (ayuhclinic.com).",
      features: [
        "Official logo design for parent company and 4 sub-brands",
        "Cohesive brand architecture ensuring visual consistency",
        "Digital asset creation for web and social media platforms",
        "Visually engaging poster designs for marketing campaigns",
        "Social media content templates and brand guidelines",
        "Cross-platform visual identity system implementation"
      ],
      challenges: [
        "Creating distinct identities while maintaining brand family cohesion",
        "Ensuring scalability across diverse industry verticals",
        "Balancing individual brand personalities with parent company values",
        "Maintaining consistency across 5 different websites and platforms"
      ],
      impact: "Successfully launched 5 interconnected brand identities, enhanced audience engagement across multiple platforms, and established a scalable visual branding system for future expansion.",
      duration: "8 months (March 2025 - Present)",
      team: "Solo project",
      role: "Graphic Designer & Marketing Content Creator"
    },
    {
      id: 3,
      title: "Digital Content Creation",
      category: "artwork",
      description: "Freelance digital marketing content that blends strong visuals with storytelling for brand campaigns.",
      image: digitalContentImage,
      technologies: ["Adobe Photoshop", "Illustrator", "Video Editing"],
      links: {
        demo: "#"
      },
      fullDescription: "As a freelance digital creator, I've designed marketing content that blends strong visuals with storytelling. From posters to promotional videos, my work focuses on capturing attention and delivering results for brands.",
      features: [
        "Brand launch campaign design for NIRCHAL",
        "Social media visual content creation",
        "Promotional video editing with animations",
        "Marketing poster design with luxury appeal",
        "Bold color contrasts and elegant typography",
        "Results-driven marketing visuals"
      ],
      challenges: [
        "Creating luxury brand appeal through design",
        "Balancing bold visuals with elegant typography",
        "Delivering measurable engagement results",
        "Capturing brand essence in festive collection campaign"
      ],
      impact: "Brand Launch Campaign for NIRCHAL boosted online engagement by 40% and attracted new customers to the brand's website.",
      duration: "Campaign duration: 2 months",
      team: "Solo freelance project",
      role: "Digital Creator & Marketing Content Designer"
    }
  ];

  // Carousel navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % digitalGraphics.length);
  }, [digitalGraphics.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + digitalGraphics.length) % digitalGraphics.length);
  }, [digitalGraphics.length]);

  const filteredProjects = useMemo(() => 
    activeCategory === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeCategory),
    [activeCategory]
  );

  // Optimized animation variants for mobile performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced stagger for faster load
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 }, // Reduced movement
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3 // Faster animations
      }
    }
  };

  const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        
        {/* Modal Content */}
        <motion.div
          className="relative w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-glass-dark backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 p-2 sm:p-3 rounded-full bg-glass-white backdrop-blur-sm border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 group"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-red-400" />
          </button>

          {/* Header Section */}
          <div className="relative">
            <div className="h-48 sm:h-64 md:h-80 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-12 sm:right-16">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 font-zalando"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project.title}
              </motion.h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white/80 text-sm sm:text-base">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  {project.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                  {project.team}
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
            {/* Role & Impact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-glass-white backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10">
                <h4 className="text-accent-500 font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                  My Role
                </h4>
                <p className="text-white/90 text-sm sm:text-base">{project.role}</p>
              </div>
              <div className="bg-glass-white backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10">
                <h4 className="text-accent-500 font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
                  Impact
                </h4>
                <p className="text-white/90 text-sm sm:text-base">{project.impact}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold font-zalando text-white mb-3 sm:mb-4">About This Project</h3>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold font-zalando text-white mb-3 sm:mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-glass-white backdrop-blur-sm rounded-lg border border-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                    <span className="text-white/90 text-sm sm:text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold font-zalando text-white mb-3 sm:mb-4">Challenges Overcome</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-glass-white backdrop-blur-sm rounded-lg border border-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                    <span className="text-white/90 text-sm sm:text-base">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold font-zalando text-white mb-3 sm:mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-3 sm:px-4 py-2 bg-accent-500/10 text-accent-400 rounded-lg border border-accent-500/20 font-ui font-medium text-sm sm:text-base"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative mb-12 md:mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400 px-4 font-display">
              Featured Projects
            </h2>
            <div className="absolute -inset-4 bg-accent-500/5 blur-xl rounded-full"></div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 group text-sm sm:text-base ${
                  activeCategory === category.id
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <span className="relative z-10">{category.name}</span>
                <span className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-accent-500/20 border border-accent-500/50 shadow-neon'
                    : 'bg-glass-dark backdrop-blur-sm border border-white/10 group-hover:border-white/30'
                }`}></span>
              </button>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative cursor-pointer"
                variants={itemVariants}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.02 }} // Simplified hover effect
                transition={{ duration: 0.2 }}
              >
                {/* Simplified gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/30 to-accent-400/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-glass-dark backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all duration-200">
                  <div className="relative overflow-hidden h-40 sm:h-48 md:h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      style={{ willChange: 'transform' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                    
                    {/* Simplified overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    
                    {/* Click to View Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="px-4 sm:px-6 py-2 sm:py-3 bg-accent-500/20 text-accent-500 rounded-full border border-accent-500/30 backdrop-blur-sm">
                        <span className="font-ui font-medium text-sm sm:text-base">
                          {project.category === 'product' && "🔧 Explore the Build"}
                          {project.category === 'graphics' && "🎨 See the Process"}
                          {project.category === 'artwork' && "✨ Enter the Gallery"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 relative">
                    <h3 className="text-lg sm:text-xl font-semibold font-heading text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 sm:px-3 py-1 bg-glass-dark backdrop-blur-sm text-white/80 text-xs sm:text-sm rounded-full border border-white/5 group-hover:border-accent-500/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 sm:px-3 py-1 bg-glass-dark backdrop-blur-sm text-white/60 text-xs sm:text-sm rounded-full border border-white/5">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Digital Graphics Carousel Section */}
          <motion.div
            className="relative mt-16 sm:mt-20 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-8 sm:mb-12 px-4">
              <motion.h3 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Digital Graphics Showcase
              </motion.h3>
              <motion.p 
                className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                A curated collection of my digital design work and brand campaigns
              </motion.p>
            </div>

            <div className="relative max-w-5xl mx-auto px-4">
              {/* Carousel Container - Simplified for performance */}
              <div className="relative overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-300 ease-out"
                  style={{ 
                    transform: `translateX(-${currentSlide * 100}%)`,
                    willChange: 'transform'
                  }}
                >
                  {digitalGraphics.map((graphic) => (
                    <div key={graphic.id} className="w-full flex-shrink-0">
                      <div className="relative group">
                        {/* Simplified background glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/30 to-accent-400/30 rounded-2xl blur opacity-60"></div>
                        
                        {/* Card Content */}
                        <div className="relative bg-glass-dark backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                          <div className="aspect-video sm:aspect-[16/9] relative">
                            <img 
                              src={graphic.image} 
                              alt={graphic.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            
                            {/* Category Badge */}
                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                              <span className="px-2 sm:px-3 py-1 bg-accent-500/20 text-accent-500 text-xs sm:text-sm font-medium rounded-full border border-accent-500/30 backdrop-blur-sm">
                                {graphic.category}
                              </span>
                            </div>
                          </div>
                          
                          {/* Text Content */}
                          <div className="p-4 sm:p-6">
                            <h4 className="text-lg sm:text-xl font-semibold font-heading text-white mb-2">{graphic.title}</h4>
                            <p className="text-white/70 text-sm sm:text-base">{graphic.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons - Optimized */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-glass-dark backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:text-accent-500 hover:border-accent-500/30 transition-colors duration-200"
                style={{ willChange: 'color, border-color' }}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-glass-dark backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:text-accent-500 hover:border-accent-500/30 transition-colors duration-200"
                style={{ willChange: 'color, border-color' }}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                <div className="absolute inset-0 rounded-full bg-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
                {digitalGraphics.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-accent-500 shadow-neon' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project Modal */}
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
