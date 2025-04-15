import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import { AnimatedText } from '../../components/ui/animated-text'

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const projectsRef = useRef(null);
  
  const projectCards = [
    { 
      title: 'Niri Global', 
      description: 'Provider of software services',
      image: 'https://res.cloudinary.com/dvfrcaw1c/image/upload/v1727845325/svfndwyjpmiieaeoriyd.png', 
      link: 'https://niriglobal.com',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB'],
      featured: true
    },
    { 
      title: 'GT Financial Services', 
      description: 'Cutting-edge fintech solutions for modern banking',
      image: 'https://res.cloudinary.com/dvfrcaw1c/image/upload/v1727845324/tpzin0k1cibvcuhcxp0x.png', 
      link: 'https://gtfinancialservices.in',
      category: 'web',
      tags: ['Next.js', 'Tailwind', 'Firebase'],
      featured: true
    },
    { 
      title: 'Synergy Institute', 
      description: 'College for the future of education', 
      image: 'https://res.cloudinary.com/dvfrcaw1c/image/upload/v1727845325/jhtey6pdbnjzkqeqnphm.png', 
      link: 'https://synergyinstitutes.com',
      category: 'design',
      tags: ['UI/UX', 'Branding', 'WordPress'],
      featured: false
    },
    { 
      title: 'Devruks Globalization', 
      description: 'Global business solutions platform', 
      image: 'https://res.cloudinary.com/dvfrcaw1c/image/upload/v1727845324/pxwby98uwhqavrd5avwa.png', 
      link: 'https://devruks.com',
      category: 'app',
      tags: ['React Native', 'GraphQL', 'AWS'],
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'web', label: 'Web' },
    { id: 'app', label: 'Apps' },
    { id: 'design', label: 'Design' }
  ];

  const filteredProjects = 
    activeFilter === 'all' 
      ? projectCards 
      : projectCards.filter(project => project.category === activeFilter);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between"
          >
            <div>
              <motion.span 
                className="block mb-3 text-sm font-medium tracking-wider"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                PROJECTS
              </motion.span>
              <AnimatedText 
                text="Selected work"
                className="text-3xl md:text-5xl font-bold"
                once={true}
                delay={0.1}
              />
            </div>
            
            {/* Filter tabs */}
            <div className="mt-8 md:mt-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-2"
              >
                {filters.map((filter, index) => (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                      activeFilter === filter.id 
                        ? 'bg-black text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    {filter.label}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Featured project */}
        {filteredProjects.filter(p => p.featured)[0] && (
          <motion.div 
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.7,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <motion.span 
                  className="text-sm text-gray-500 block mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  Featured Project
                </motion.span>
                <motion.h3 
                  className="text-2xl md:text-4xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {filteredProjects.filter(p => p.featured)[0].title}
                </motion.h3>
                <motion.p 
                  className="text-lg text-gray-600 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {filteredProjects.filter(p => p.featured)[0].description}
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-2 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  {filteredProjects.filter(p => p.featured)[0].tags.map((tag, idx) => (
                    <motion.span 
                      key={idx} 
                      className="bg-gray-100 px-3 py-1 text-xs rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.a 
                  href={filteredProjects.filter(p => p.featured)[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black font-medium group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View project 
                  <motion.span 
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    initial={{ x: 0, y: 0 }}
                    whileHover={{ x: 1, y: -1 }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-black"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </div>
              <div className="order-1 md:order-2">
                <motion.div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <img 
                    src={filteredProjects.filter(p => p.featured)[0].image} 
                    alt={filteredProjects.filter(p => p.featured)[0].title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Project grid */}
        <motion.div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="group"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -10 }}
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[3/4] mb-5 overflow-hidden rounded-xl shadow-sm">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-sm font-medium mr-1">View Project</span>
                      <ExternalLink size={14} />
                    </motion.div>
                  </motion.div>
                </div>
                
                <motion.h3 
                  className="text-xl font-semibold mb-1"
                  initial={{ y: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="text-gray-500 text-xs">
                      {tag}{idx < 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View all button */}
        <motion.div 
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05, backgroundColor: "#000000", color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="inline-block px-8 py-3 border-2 border-black text-black font-medium rounded-full transition-colors"
          >
            View all projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}