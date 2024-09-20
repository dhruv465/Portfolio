import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import GT from '../../assets/GT.png'
import Devruks from '../../assets/Devruks.png'
import Synergy from '../../assets/Synergy.png'
import Niri from '../../assets/NiriGlobal.png'

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRefs = useRef([])

  const projectCards = [
    { title: 'Niri Global', description: 'Innovative AI-driven architecture design platform', image: Niri, link: 'https://niriglobal.com' },
    { title: 'GT Financial Services', description: 'Cutting-edge fintech solutions for modern banking', image: GT, link: 'https://gtfinancialservices.in' },
    { title: 'Synergy Institute', description: 'Advanced research facility for sustainable energy', image: Synergy, link: 'https://synergyinstitutes.com' },
    { title: 'Devruks Globalization', description: 'Global expansion strategies for tech startups', image: Devruks, link: 'https://devruks.com' },
  ]

  const handleMouseMove = (event, index) => {
    const card = cardRefs.current[index]
    const rect = card.getBoundingClientRect()
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  const handleMouseEnter = (title, index) => {
    setHoveredProject(title)
    cardRefs.current[index].addEventListener('mousemove', (e) => handleMouseMove(e, index))
  }

  const handleMouseLeave = (index) => {
    setHoveredProject(null)
    cardRefs.current[index].removeEventListener('mousemove', handleMouseMove)
  }

  return (
   

    <motion.div  id="projects"
      className="p-6 md:p-8 rounded-3xl col-span-1 md:col-span-2 lg:col-span-3 mt-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-12 flex items-center gap-6 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span>Some of My Recent Projects</span>
        <svg width="122" height="24" viewBox="0 0 122 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M121.061 13.0607C121.646 12.4749 121.646 11.5251 121.061 10.9393L111.515 1.3934C110.929 0.807611 109.979 0.807611 109.393 1.3934C108.808 1.97919 108.808 2.92893 109.393 3.51472L117.879 12L109.393 20.4853C108.808 21.0711 108.808 22.0208 109.393 22.6066C109.979 23.1924 110.929 23.1924 111.515 22.6066L121.061 13.0607ZM0 13.5H120V10.5H0V13.5Z" fill="black" />
        </svg>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projectCards.map((project, index) => (
          <motion.div
            key={project.title}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => handleMouseEnter(project.title, index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 ease-in-out"
                />
                <motion.div
                  className="absolute top-4 right-4 bg-white rounded-full p-2 drop-shadow-2xl shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUpRight className="w-6 h-6 text-indigo-500" />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </a>
            <AnimatePresence>
              {hoveredProject === project.title && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-indigo-500 px-4 py-2 rounded-full flex items-center absolute"
                    style={{
                      left: mousePosition.x - 60,
                      top: mousePosition.y - 20,
                    }}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
   
  )
}