import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { 
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dhruv-sathe-100b9428b',
      icon: <Linkedin className="w-5 h-5" />
    },
    { 
      name: 'GitHub',
      url: 'https://github.com/dhruv-sathe',
      icon: <Github className="w-5 h-5" />
    },
    { 
      name: 'Twitter',
      url: 'https://twitter.com/dhruvdev',
      icon: <Twitter className="w-5 h-5" />
    }
  ];

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQs', href: '#faq' },
  ];
  
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-6">dhruv<span className="text-gray-400">.dev</span></h2>
            <p className="text-gray-400 mb-6 max-w-xs">
              Building digital products, brands, and experiences that people love.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Let's talk</h3>
            <p className="text-gray-400 mb-5">
              Have a project in mind? Let's create something amazing together.
            </p>
            <a 
              href="mailto:hello@dhruv.dev"
              className="inline-flex items-center gap-2 font-medium group mb-6"
            >
              hello@dhruv.dev
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <ArrowUpRight size={16} />
              </span>
            </a>
            
            <div className="mt-8">
              <button 
                onClick={handleScrollTop}
                className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Back to top
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Dhruv Sathe. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm">
            Made with ❤️ in Pune, India
          </div>
        </div>
      </div>
    </footer>
  )
}