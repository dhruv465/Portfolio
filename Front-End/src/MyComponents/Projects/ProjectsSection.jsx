import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedText } from '../../components/ui/animated-text'
import AceternityProjectShowcase from './AceternityProjectShowcase'

export default function ProjectsSection() {
  const projectCards = [
    { 
      title: 'Niri Global', 
      description: 'Provider of software services',
      image: 'https://res.cloudinary.com/dvfrcaw1c/image/upload/v1727845325/svfndwyjpmiieaeoriyd.png', 
      link: 'https://niriglobal.com',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB'],
      featured: true
    },
    { 
      title: 'GT Financial Services', 
      description: 'Cutting-edge fintech solutions for modern banking',
      image: 'https://res.cloudinary.com/dvfrcaw1c/image/upload/v1727845324/tpzin0k1cibvcuhcxp0x.png', 
      link: 'https://gtfinancialservices.in',
      category: 'web',
      tags: ['Next.js', 'Tailwind', 'Firebase'],
      featured: true
    },
    { 
      title: 'Synergy Institute', 
      description: 'College for the future of education', 
      image: 'https://res.cloudinary.com/dvfrcaw1c/image/upload/v1727845325/jhtey6pdbnjzkqeqnphm.png', 
      link: 'https://synergyinstitutes.com',
      category: 'web',
      tags: ['UI/UX', 'Branding', 'WordPress'],
      featured: false
    },
    { 
      title: 'Devruks Globalization', 
      description: 'Global business solutions platform', 
      image: 'https://res.cloudinary.com/dvfrcaw1c/image/upload/v1727845324/pxwby98uwhqavrd5avwa.png', 
      link: 'https://devruks.com',
      category: 'web',
      tags: ['React Native', 'GraphQL', 'AWS'],
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header - left-aligned */}
        <div className="mb-16 md:mb-12 text-left">
          <motion.span 
            className="block mb-3 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            PROJECTS
          </motion.span>
          <AnimatedText 
            text="Selected work"
            className="text-3xl md:text-5xl font-bold"
            once={true}
            delay={0.1}
          />
        </div>

        {/* Website Showcase Section - Only keeping this part */}
        <AceternityProjectShowcase projects={projectCards} />
        
        {/* View all button */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05, backgroundColor: "#000000", color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="inline-block px-8 py-3 border-2 border-black text-black font-medium rounded-full transition-colors"
          >
            View all projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}