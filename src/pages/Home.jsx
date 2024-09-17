import React, { useState, useEffect } from 'react'

import Header from '../MyComponents/Navigation/Header'

import HeroSection from '../MyComponents/Hero/HeroSection'
import AboutSection from '../MyComponents/About/AboutSection'
import ProjectsSection from '../MyComponents/Projects/ProjectsSection'
import ContactSection from '../MyComponents/Contact/ContactSection'
import Footer from '../MyComponents/Footer/Footer'


export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768
      setIsMobile(isMobile)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="min-h-screen bg-indigo-50 p-4 md:p-8">
      <Header isMobile={isMobile} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <HeroSection />
        <AboutSection />
        {/* <ContactSection /> */}
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  )
}