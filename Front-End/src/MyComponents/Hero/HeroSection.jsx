import React from 'react'
import { motion } from 'framer-motion'
import Robo from '../../assets/Robo.png'
import myImage from '../../assets/Dhruv.png'

export default function HeroSection() {
  return (
    <>
      <motion.div id="home"
        className="bg-indigo-100 p-8 rounded-3xl col-span-1 md:col-span-2 row-span-2 lg:mt-12 lg:mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <img src="https://res.cloudinary.com/dvfrcaw1c/image/upload/v1727845117/dtpebkaltqmgdwgarjie.png" alt="Robo" className="w-16 h-16" />
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight title-card">
          Dev Revolutionizing<br />
          <span className='Architecture'> Technology </span> with<br />
          AI-Enhanced Solutions
        </h2>
      </motion.div>

      <motion.div
        className="bg-indig-100 rounded-3xl overflow-hidden row-span-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img src="https://res.cloudinary.com/dvfrcaw1c/image/upload/v1727844899/nfiqbipqzllz5cs1ckew.png" alt="Dhruv" className="object-cover w-full h-full" />
      </motion.div>
    </>
  )
}