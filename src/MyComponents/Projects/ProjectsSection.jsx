import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import GT from '../../assets/GT.png'
import Devruks from '../../assets/Devruks.png'
import Synergy from '../../assets/Synergy.png'
import Niri from '../../assets/NiriGlobal.png'

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState('Niri Global')

  const projectCards = [
    { title: 'Niri Global', image: Niri },
    { title: 'GT Financial Services', image: GT },
    { title: 'Synergy Institute', image: Synergy },
    { title: 'Devruks Globalization', image: Devruks },
  ]

  return (
    <motion.div
      className="bg-indigo-100 p-6 rounded-3xl col-span-1 md:col-span-2 lg:col-span-3"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="space-y-4">
        {projectCards.map((project, index) => (
          <div key={project.title}>
            <motion.div
              className="relative cursor-pointer"
              onMouseEnter={() => setActiveProject(project.title)}
              initial={false}
              animate={{ height: activeProject === project.title ? 'auto' : '2rem' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <AnimatePresence>
                {activeProject === project.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2"
                  >
                    <img src={project.image} alt={`${project.title} Project`} className="w-full h-80 object-contain rounded-2xl" />
                    <ArrowUpRight className="w-6 h-6 absolute top-0 right-0" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            {index < projectCards.length - 1 && (
              <hr className="my-4 border-black/10" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}