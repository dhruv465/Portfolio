import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AboutSection from '../MyComponents/About/AboutSection'
import ContactSection from '../MyComponents/Contact/ContactSection'
import Faq from '../MyComponents/Faq/Faq'
import Footer from '../MyComponents/Footer/Footer'
import HeroSection from '../MyComponents/Hero/HeroSection'
import Header from '../MyComponents/Navigation/Header'
import ProjectsSection from '../MyComponents/Projects/ProjectsSection'
import TestimonialCarousel from '../MyComponents/Testimonial/TestimonialCarousel'

// Custom hook to get window height
const useWindowHeight = () => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight)
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return height
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const windowHeight = useWindowHeight()

  const glowingLineY = useTransform(smoothProgress, [0, 1], [0, windowHeight - 32])
  const glowingLineOpacity = useTransform(smoothProgress, [0, 0.9, 1], [0, 1, 0])

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768
      setIsMobile(isMobile)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Scroll to Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true)
      } else {
        setShowScrollToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative min-h-screen bg-indigo-50 p-4 md:p-8 overflow-y-scroll scrollbar-hide">
      {/* Custom Scrollbar Container */}
      <div className="fixed right-0 top-0 w-1 h-full">
        {/* Animated Scrollbar */}
        <motion.div
          className="w-full bg-indigo-500"
          style={{
            scaleY: smoothProgress,
            transformOrigin: 'top',
          }}
        />
      </div>

      {/* Beam effect */}
      <motion.div
        className="fixed right-0 top-0 w-0.5 mr-1 bg-indigo-500"
        style={{
          height: windowHeight,
          scaleY: smoothProgress,
          transformOrigin: 'top',
          opacity: 0.5,
        }}
      />

      {/* Glowing line (shooting star) effect */}
      <motion.div
        className="fixed right-0 top-0 w-2 h-8 bg-gradient-to-b from-transparent via-indigo-600 to-transparent"
        style={{
          y: glowingLineY,
          opacity: glowingLineOpacity,
          filter: 'blur(4px)',
        }}
      />

      <Header isMobile={isMobile} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <HeroSection />
      </div>
      <AboutSection />
      <ProjectsSection />
      <TestimonialCarousel />
      <Faq />
      <ContactSection />
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <motion.button
          className="fixed bottom-8 right-8 bg-indigo-400 text-white p-3 rounded-full shadow-lg hover:bg-indigo-600 transition-colors duration-300 z-50"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Opera */
        }
      `}</style>
    </div>
  )
}
