import { useState } from 'react';
import { ExternalLink, Github, Play, Image as ImageIcon } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'product', name: 'Product Design' },
    { id: 'graphics', name: 'Graphics' },
    { id: 'video', name: 'Video Editing' },
    { id: 'artwork', name: 'Artwork' }
  ];

  const projects = [
    {
      id: 1,
      title: "Smart IoT Device",
      category: "product",
      description: "Innovative electrical engineering project combining hardware design with user-centered product development.",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Arduino", "PCB Design", "3D Printing", "IoT"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "graphics",
      description: "Complete brand identity package including logo design, color palette, and marketing materials.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Strategy"],
      links: {
        demo: "#"
      }
    },
    {
      id: 3,
      title: "Product Launch Video",
      category: "video",
      description: "Professional product showcase video with motion graphics and compelling storytelling.",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Premiere Pro", "After Effects", "Color Grading"],
      links: {
        demo: "#"
      }
    },
    {
      id: 4,
      title: "Digital Art Collection",
      category: "artwork",
      description: "Series of digital illustrations exploring futuristic themes and innovative design concepts.",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Digital Painting", "Concept Art", "Visual Design"],
      links: {
        demo: "#"
      }
    },
    {
      id: 5,
      title: "Sustainable Product Design",
      category: "product",
      description: "Eco-friendly product design focusing on sustainable materials and manufacturing processes.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["CAD Design", "Sustainability", "Material Research"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 6,
      title: "UI/UX Design System",
      category: "graphics",
      description: "Comprehensive design system for a mobile application with focus on user experience.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Figma", "UI Design", "User Research", "Prototyping"],
      links: {
        demo: "#"
      }
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-primary-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400 inline-block">
              Featured Projects
            </h2>
            <div className="absolute -inset-4 bg-accent-500/5 blur-xl rounded-full"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 group ${
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
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/50 to-accent-400/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-primary-900/80 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-glass">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-60"></div>
                    
                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-glass-dark backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Project Links Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          className="p-3 bg-accent-500/20 text-accent-500 rounded-full hover:bg-accent-500/30 hover:shadow-neon transition-all duration-300"
                          title="View Demo"
                        >
                          {project.category === 'video' ? <Play size={20} /> : 
                           project.category === 'artwork' ? <ImageIcon size={20} /> : 
                           <ExternalLink size={20} />}
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="p-3 bg-glass-white text-white/90 rounded-full hover:bg-white/20 hover:text-white transition-all duration-300"
                          title="View Code"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6 relative">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-glass-dark backdrop-blur-sm text-white/80 text-xs rounded-full border border-white/5 group-hover:border-accent-500/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* YouTube Section */}
          <div className="mt-20 text-center relative">
            <div className="absolute inset-0 bg-accent-500/5 blur-3xl rounded-full"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400 mb-8">
                YouTube Channel
              </h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Follow my creative journey through vlogs, behind-the-scenes content, and project tutorials. 
                Get insights into my design process and creative workflow.
              </p>
              <a
                href="#"
                className="inline-flex items-center space-x-3 px-8 py-3 bg-glass-dark backdrop-blur-xl border border-accent-500/20 text-accent-500 rounded-lg hover:text-white hover:bg-accent-500/20 hover:border-accent-500 hover:shadow-neon transition-all duration-300 group"
              >
                <Play size={20} />
                <span className="font-medium">Visit YouTube Channel</span>
                <span className="absolute inset-0 bg-accent-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;