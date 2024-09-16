'use client'

import { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import myImage from '../assets/Dhruv.jpg';

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState('Niri Global')

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768
      setIsMobile(isMobile)
      if (!isMobile) setIsMenuOpen(false)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const projectCards = [
    { title: 'Niri Global', image: '/placeholder.svg?height=200&width=300' },
    { title: 'GT Financial Services', image: '/placeholder.svg?height=200&width=300' },
    { title: 'Synergy Institute', image: '/placeholder.svg?height=200&width=300' },
    { title: 'Devruks Globalization', image: '/placeholder.svg?height=200&width=300' },
  ]

  const navItems = ['PROJECTS', 'ABOUT', 'CONTACT']

  return (
    <div className="min-h-screen bg-indigo-50 p-4 md:p-8">
      <header className="flex justify-between items-center mb-8 relative bg-indigo-100 p-8 rounded-3xl">
        <h1 className="text-2xl font-semibold">Dhruv _cdlxv</h1>
        {isMobile ? (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 relative"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <nav className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-2">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-indigo-500 transition-colors duration-200 relative group"
                  >
                    {item}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full right-0 mt-2 bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg p-4 z-40"
            >
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-indigo-100 rounded transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div
          className="bg-indigo-100 p-8 rounded-3xl lg:col-span-1 lg:row-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-indigo-300">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Artist Redefining<br />
            Architecture with<br />
            AI-Driven Design

           
          </h2>
        </motion.div>

        <motion.div
          className="bg-beige-100 rounded-3xl overflow-hidden row-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={myImage} alt="Dhruv" className=" object-cover" />
        </motion.div>

        <motion.div
          className="bg-indigo-100 p-6 rounded-3xl lg:col-span-1 lg:row-span-2"
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
                        <img src={project.image} alt={`${project.title} Project`} className="w-full h-40 object-cover rounded-2xl" />
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

        <motion.div
          className="bg-indigo-200 p-6 rounded-3xl flex items-center justify-between"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm pr-4">
            I’m creative, unique, independent, passionate developer with extensive experience creating percussive and attractive marketing and communications. I have a strong background in developing and implementing digital marketing strategies, social media campaigns, and content creation.
          </p>
          <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          className="bg-indigo-300 p-6 rounded-3xl flex items-center justify-between"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >

          <h3 className="text-2xl font-semibold">Contact me</h3>
          <ArrowUpRight className="w-6 h-6" />
        </motion.div>

     

        <motion.div
          className="bg-indigo-100 p-6 rounded-3xl col-span-1 md:col-span-2 lg:col-span-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex justify-between">
            <a href="#" className="hover:underline">INSTAGRAM</a>
            <a href="#" className="hover:underline">TWITTER</a>
            <a href="#" className="hover:underline">LINKEDIN</a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}