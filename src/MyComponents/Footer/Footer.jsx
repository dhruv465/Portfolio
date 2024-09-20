import React from 'react'
import { motion } from 'framer-motion'
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
          className="w-16 h-16 mx-auto rounded-full overflow-hidden"
        >
          <img
            src={myImage} alt="Dhruv"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </footer>
  )
}