import React from 'react';
import { Cpu, Palette, Video, Wrench, Code, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Wrench className="text-cyan-400" size={32} />,
      title: "Product Design",
      skills: ["CAD Design", "3D Modeling", "Prototyping", "Design Thinking", "User Research"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Cpu className="text-purple-400" size={32} />,
      title: "Electrical Engineering",
      skills: ["Circuit Design", "PCB Layout", "Embedded Systems", "Arduino/Raspberry Pi", "Signal Processing"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Palette className="text-green-400" size={32} />,
      title: "Graphics Design",
      skills: ["Adobe Creative Suite", "Brand Identity", "UI/UX Design", "Print Design", "Digital Illustration"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Video className="text-orange-400" size={32} />,
      title: "Video Editing",
      skills: ["Adobe Premiere Pro", "After Effects", "Color Grading", "Motion Graphics", "YouTube Content"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: "Technical Skills",
      skills: ["Programming", "Web Development", "Data Analysis", "Technical Documentation", "Project Management"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Lightbulb className="text-yellow-400" size={32} />,
      title: "Creative Arts",
      skills: ["Digital Art", "Traditional Drawing", "Concept Art", "Visual Storytelling", "Creative Direction"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
                
                <div className={`mt-4 h-1 bg-gradient-to-r ${category.color} rounded-full opacity-60`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;