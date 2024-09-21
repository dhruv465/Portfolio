import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
// import Robo from '../../assets/Robo.png'

export default function Header({ isMobile }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = ['Home', 'Projects', 'Testimonials', 'FAQs', 'Contact Me']

  const getNavHref = (item) => {
    switch (item.toLowerCase()) {
      case 'home':
        return '#home'
      case 'projects':
        return '#projects'
      case 'testimonials':
        return '#testimonials'
      case 'faqs':
        return '#faq'
      case 'contact me':
        return '#contact'
      default:
        return '#'
    }
  }

  return (
    <header className="flex justify-between items-center mb-8 relative bg-indigo-100 p-8 rounded-3xl">
      <h1 className="text-2xl font-logo">
      {/* <img src={Robo} alt="Robo" className="w-12 h-12" /> */}
        <span className="italic">Dhruv</span>
        {/* <span className='font-bold'>_cdlxv</span> */}
      </h1>
      {isMobile ? (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-50 relative"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      ) : (
        <nav className=" px-6 py-2">
          <ul className="flex space-x-7">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={getNavHref(item)}
                  className="hover:text-indigo-500 transition-colors duration-200 relative group menu"
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
                    href={getNavHref(item)}
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
  )
}
