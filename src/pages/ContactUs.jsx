import React, { useState, useEffect } from 'react'

import Header from '../MyComponents/Navigation/Header'

import ContactSectionPage from '../MyComponents/Contact/ContactSectionPage'
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
      
      <ContactSectionPage />
      <Footer />
    </div>
  )
}