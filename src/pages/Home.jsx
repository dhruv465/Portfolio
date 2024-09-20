import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react' // You can replace this with any icon you prefer
import Header from '../MyComponents/Navigation/Header'
import HeroSection from '../MyComponents/Hero/HeroSection'
import AboutSection from '../MyComponents/About/AboutSection'
import ProjectsSection from '../MyComponents/Projects/ProjectsSection'
import ContactSection from '../MyComponents/Contact/ContactSection'
import Footer from '../MyComponents/Footer/Footer'
import TestimonialCarousel from '../MyComponents/Testimonial/TestimonialCarousel'
import Faq from '../MyComponents/Faq/Faq'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [showScrollToTop, setShowScrollToTop] = useState(false)

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
    <div className="min-h-screen bg-indigo-50 p-4 md:p-8 relative">
      <Header isMobile={isMobile} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <HeroSection />
        <AboutSection />
      </div>

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
    </div>
  )
}
