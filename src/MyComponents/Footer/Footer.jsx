import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AnimatedLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setIsClicked(true)
    setTimeout(() => {
      window.location.href = href
    }, 1500) // Redirect after 1.5 seconds
  }

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.a
        href={href}
        className="relative z-10 block py-2 px-4"
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence>
          {!isClicked && (
            <motion.span
              className="block"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
            >
              {children.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  transition={{ delay: index * 0.05 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>
      <AnimatePresence>
        {isHovered && !isClicked && (
          <motion.div
            className="absolute inset-0 bg-indigo-200 rounded-lg -z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isClicked && (
          <>
            <motion.div
              className="fixed inset-0 bg-indigo-500 bg-opacity-50 backdrop-blur-lg z-50"
              initial={{ scale: 0, opacity: 0, borderRadius: '100%' }}
              animate={{ scale: 1, opacity: 1, borderRadius: '0%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.span
                className="text-white text-4xl font-bold"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              >
                {children}
              </motion.span>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Footer() {
  return (
    <motion.div
      className="bg-indigo-100 p-6 rounded-3xl col-span-1 md:col-span-2 lg:col-span-3 mt-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="flex justify-between items-center">
        <AnimatedLink href="https://www.instagram.com/dhruv__cdlxv.pvt/?igsh=MW16eHZoNzR0d3Y1bw%3D%3D&utm_source=qr" className="hover:underline">INSTAGRAM</AnimatedLink>
        <AnimatedLink href="https://twitter.com" className="hover:underline">TWITTER</AnimatedLink>
        <AnimatedLink href="https://linkedin.com" className="hover:underline">LINKEDIN</AnimatedLink>
      </div>
    </motion.div>
  )
}