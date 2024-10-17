import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import myImage from '../../assets/Dhruv.png'

export default function Footer() {
  return (
    <footer className="py-8 px-4 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl mb-2"
        >
          ©2024 - 2025. All rights reserved.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl font-semibold mb-4"
        >
          Design & Dev by..
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
          className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-2"
        >
          <img
            src={myImage} alt="Dhruv"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.a
          href="https://www.linkedin.com/in/dhruv-sathe-100b9428b"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="inline-block p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
          >
          <Linkedin className="w-6 h-6 text-blue-600 hover:text-blue-800 transition-colors" />
        </motion.a>
      </motion.div>
    </footer>
  )
}