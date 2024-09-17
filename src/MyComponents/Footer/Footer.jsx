import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const AnimatedLink = ({ href, children, animationType = 'default' }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e) => {

    setIsClicked(true)
  }

  const handleClose = () => {
    setIsClicked(false)
  }

  const getLetterVariants = (type) => {
    switch (type) {
      case 'wave':
        return {
          hidden: { y: 20, opacity: 0 },
          visible: i => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: i * 0.05,
              y: { type: 'spring', stiffness: 100 },
              opacity: { duration: 0.2 }
            }
          })
        }
      case 'bounce':
        return {
          hidden: { y: -20, opacity: 0 },
          visible: i => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: i * 0.1,
              y: { type: 'spring', stiffness: 300, damping: 10 },
              opacity: { duration: 0.2 }
            }
          })
        }
      case 'rubber':
        return {
          hidden: { scaleY: 0, originY: 0.5 },
          visible: i => ({
            scaleY: 1,
            transition: {
              delay: i * 0.05,
              scaleY: { type: 'spring', stiffness: 300, damping: 10 }
            }
          })
        }
      case 'flip':
        return {
          hidden: { rotateX: -90, opacity: 0 },
          visible: i => ({
            rotateX: 0,
            opacity: 1,
            transition: {
              delay: i * 0.07,
              rotateX: { type: 'spring', stiffness: 100, damping: 10 },
              opacity: { duration: 0.2 }
            }
          })
        }
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: i => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.05 }
          })
        }
    }
  }

  const letterVariants = getLetterVariants(animationType)

  const clickedLetterVariants = {
    hidden: { opacity: 0, y: 50, rotate: -180 },
    visible: i => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    })
  }

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.a
        href={href}
        // target="_blank"
        rel="noopener noreferrer"
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
              exit="hidden"
            >
              {children.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
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
              <motion.div
                className="text-white text-6xl font-bold"
                initial="hidden"
                animate="visible"
              >
                {children.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={clickedLetterVariants}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
            <motion.button
              className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white text-indigo-500 p-2 rounded-full z-50"
              onClick={handleClose}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
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
        <AnimatedLink href="https://www.instagram.com/dhruv__cdlxv.pvt/?igsh=MW16eHZoNzR0d3Y1bw%3D%3D&utm_source=qr" animationType="bounce">INSTAGRAM</AnimatedLink>
        <AnimatedLink href="https://x.com/dhruv_cdlxv" animationType="bounce">TWITTER</AnimatedLink>
        <AnimatedLink href="https://www.linkedin.com/in/dhruv-sathe-100b9428b" animationType="bounce">LINKEDIN</AnimatedLink>
      </div>
    </motion.div>
  )
}