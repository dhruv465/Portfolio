import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ContactSection() {
  return (
    <motion.div
      className="bg-indigo-300 p-6 rounded-3xl flex flex-col items-start gap-10 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <p className="text-sm">Have some questions?</p>
      <h3 className="text-2xl font-semibold">Contact me</h3>
      <ArrowUpRight className="w-6 h-6 absolute top-4 right-4" />
    </motion.div>
  )
}