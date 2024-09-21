"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Avatar from '../../assets/avatar.png'

const testimonials = [
  {
    name: "Jhon Doe",
    jobTitle: "CEO",
    content: "I hope you're doing well! I'm excited to be launching my portfolio website soon and would love to showcase the amazing work we've done together. Could you spare a moment to write a short, two-liner testimonial about your experience collaborating with me? It would mean a lot, and I'd love to share your feedback with the world!"
  },
  {
    name: "Jane Smith",
    jobTitle: "UX Designer",
    content: "I hope you're doing well! I'm excited to be launching my portfolio website soon and would love to showcase the amazing work we've done together. Could you spare a moment to write a short, two-liner testimonial about your experience collaborating with me? It would mean a lot, and I'd love to share your feedback with the world!"
  },
  {
    name: "Alex Johnson",
    jobTitle: "Project Manager",
    content: "I hope you're doing well! I'm excited to be launching my portfolio website soon and would love to showcase the amazing work we've done together. Could you spare a moment to write a short, two-liner testimonial about your experience collaborating with me? It would mean a lot, and I'd love to share your feedback with the world!"
  },
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div id="testimonials" className="flex flex-col items-center justify-center mt-12 p-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold mb-2"
      >
        Find Out..
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        What People Say About Me
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-4xl p-8 bg-indigo-100 rounded-3xl"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="text-xl mb-4"><svg width="52" height="32" viewBox="0 0 72 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.9844 35.5479C38.9844 32.7692 39.237 29.8011 39.7422 26.6436C40.3105 23.4229 41.1631 20.2653 42.2998 17.1709C43.4997 14.0133 45.0153 11.0452 46.8467 8.2666C48.7412 5.4248 51.0146 2.99349 53.667 0.972656L63.9922 8.17188C62.224 10.1927 60.8978 12.1188 60.0137 13.9502C59.1296 15.7816 58.4349 17.613 57.9297 19.4443C59.8242 19.7601 61.5924 20.4232 63.2344 21.4336C64.8763 22.3809 66.2972 23.5807 67.4971 25.0332C68.6969 26.4225 69.6442 28.0329 70.3389 29.8643C71.0335 31.6325 71.3809 33.527 71.3809 35.5479C71.3809 37.7581 70.9388 39.8421 70.0547 41.7998C69.2337 43.6943 68.0654 45.3994 66.5498 46.915C65.0973 48.3675 63.3923 49.5358 61.4346 50.4199C59.4769 51.2409 57.4245 51.6514 55.2773 51.6514C53.0039 51.6514 50.8568 51.2409 48.8359 50.4199C46.8783 49.5358 45.1416 48.3675 43.626 46.915C42.1735 45.3994 41.0368 43.6943 40.2158 41.7998C39.3949 39.8421 38.9844 37.7581 38.9844 35.5479ZM0.146484 35.5479C0.146484 32.7692 0.399089 29.8011 0.904297 26.6436C1.47266 23.4229 2.3252 20.2653 3.46191 17.1709C4.66178 14.0133 6.20898 11.0452 8.10352 8.2666C9.99805 5.4248 12.2715 2.99349 14.9238 0.972656L25.1543 8.17188C23.3861 10.1927 22.0599 12.1188 21.1758 13.9502C20.3548 15.7816 19.6917 17.613 19.1865 19.4443C21.0811 19.7601 22.8493 20.4232 24.4912 21.4336C26.1331 22.3809 27.5225 23.5807 28.6592 25.0332C29.859 26.4225 30.8063 28.0329 31.501 29.8643C32.1956 31.6325 32.543 33.527 32.543 35.5479C32.543 37.7581 32.1009 39.8421 31.2168 41.7998C30.3958 43.6943 29.2275 45.3994 27.7119 46.915C26.2594 48.3675 24.5544 49.5358 22.5967 50.4199C20.639 51.2409 18.5866 51.6514 16.4395 51.6514C14.166 51.6514 12.0189 51.2409 9.99805 50.4199C8.04036 49.5358 6.33529 48.3675 4.88281 46.915C3.43034 45.3994 2.26204 43.6943 1.37793 41.7998C0.556966 39.8421 0.146484 37.7581 0.146484 35.5479Z" fill="black" />
            </svg>
            </div>
            <p className="text-xl mb-6">
              {testimonials[currentIndex].content}
            </p>
            <p className="text-sm text-gray-600 mb-6">
              {/* Copy-paste the above message & send it to your clients, asking for the feedback and showcase it here. */}
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-indigo-200 rounded-full mr-4"> <img src={Avatar} alt="" /></div>
              <div>
                <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-600">{testimonials[currentIndex].jobTitle}</p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-indigo-200 rounded-full text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 bg-indigo-200 rounded-full text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}