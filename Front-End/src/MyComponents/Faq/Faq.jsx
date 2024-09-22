"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'

const faqs = [
  {
    question: "How do I contact you for inquiries or collaborations?",
    answer: "You can directly drop me a message to connect with or simply email me at dhruv.sathe11@gmail.com"
  },
  {
    question: "What services does your digital agency offer?",
    answer: "Our digital agency offers a wide range of services including web design, development, SEO. We tailor our solutions to meet the unique needs of each client."
  },
  {
    question: "How long does it take to build a website?",
    answer: "The time it takes to build a website varies depending on the complexity of the project. A simple website might take 1-2 weeks, while a more complex one could take 2-3 months or more. We'll provide a detailed timeline during our initial consultation."
  },
]

export default function Component() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div id="faq" className=" flex items-center justify-center mt-12 p-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-2">FAQs</h1>
        <h2 className="text-2xl font-semibold text-center mb-8">I've got you covered...</h2>
        <div className="space-y-6 faq-section">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ backgroundColor: openIndex === index ? "#E0E7FF" : "#E0E7FF" }}
              className="rounded-3xl overflow-hidden p-6"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="text-gray-500 bg-indigo-200 p-2 rounded-full">
                    {openIndex === index ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Plus className="w-6 h-6" />
                    )}
                  </span>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}