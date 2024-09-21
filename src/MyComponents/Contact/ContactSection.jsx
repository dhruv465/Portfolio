"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Component() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Soil particle animation for each letter of the message
  const soilParticleAnimation = {
    hidden: { opacity: 1, x: 0, y: 0, scale: 1 },
    visible: (i) => ({
      opacity: 0,
      x: Math.random() * 50 - 25, // Random horizontal movement
      y: Math.random() * 150 + 50, // Fall downwards like soil particles
      scale: [1, 0.8, 0.2], // Scale down as it falls
      rotate: Math.random() * 360, // Add random rotation for crumbling effect
      transition: {
        delay: i * 0.02, // Stagger animation for each letter
        duration: 1.2,
        ease: "easeOut",
      },
    }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Trigger soil particle effect
    setTimeout(() => {
      setMessage(""); // Clear message after animation
      setSubmitted(false); // Reset after animation is done
    }, 1500); // Allow time for animation to complete
  };

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
            <motion.div>
              {/* Display message as soil particles if submitted */}
              {submitted ? (
                <motion.div className="w-full h-40 p-4 text-lg border border-gray-300 rounded-3xl bg-white overflow-hidden flex flex-wrap">
                  {message.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={soilParticleAnimation}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                      style={{ display: "inline-block", fontSize: "20px", margin: "2px" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>
              ) : (
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here"
                  className="w-full h-40 p-4 text-lg border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
                  required
                />
              )}
            </motion.div>
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
              className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full flex items-center space-x-2 focus:outline-none"
            >
              <span>Send</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
