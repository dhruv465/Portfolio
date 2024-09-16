import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.div
      className="bg-indigo-100 p-6 rounded-3xl col-span-1 md:col-span-2 lg:col-span-3 mt-4"
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
  )
}