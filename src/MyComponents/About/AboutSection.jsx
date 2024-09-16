import React from 'react'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <motion.div
      className="bg-indigo-200 p-6 rounded-3xl flex items-center justify-between"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <p className="text-sm pr-4">
        I'm creative, unique, independent, passionate developer with extensive experience creating percussive and attractive marketing and communications. I have a strong background in developing and implementing digital marketing strategies, social media campaigns, and content creation.
      </p>
      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
        <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG path here */}
        </svg>
      </div>
    </motion.div>
  )
}