"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Component() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Submitted message:', message)
    setMessage('')
  }

  return (
    <div id="contact" className="mt-12 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-center mb-2">Got a project idea?</h1>
        <h2 className="text-2xl font-semibold text-center mb-8">Drop me a message..</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here"
              className="w-full h-40 p-4 text-lg border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span>Send</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  )
}