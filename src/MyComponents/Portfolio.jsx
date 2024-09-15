'use client'

import { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import myImage from '../assets/Dhruv.jpg';
import Robo from '../assets/Robo.png';
import GT from '../assets/GT.png';
import Devruks from '../assets/Devruks.png';
import Synergy from '../assets/Synergy.png';
import Niri from '../assets/NiriGlobal.png';



export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState('Niri Global')

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768
      setIsMobile(isMobile)
      if (!isMobile) setIsMenuOpen(false)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const projectCards = [
    { title: 'Niri Global', image: Niri },
    { title: 'GT Financial Services', image: GT },
    { title: 'Synergy Institute', image: Synergy },
    { title: 'Devruks Globalization', image: Devruks },
  ]

  const navItems = ['PROJECTS', 'ABOUT', 'CONTACT']

  return (
    <div className="min-h-screen bg-indigo-50 p-4 md:p-8">
      <header className="flex justify-between items-center mb-8 relative bg-indigo-100 p-8 rounded-3xl">
        <h1 className="text-2xl font-logo">
          <span className="italic ">Dhruv</span>
          <span className='font-bold'>_cdlxv</span>
        </h1>
        {isMobile ? (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 relative"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <nav className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-2">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-indigo-500 transition-colors duration-200 relative group menu"
                  >
                    {item}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full right-0 mt-2 bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg p-4 z-40"
            >
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-indigo-100 rounded transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div
          className="bg-indigo-100 p-8 rounded-3xl col-span-1 md:col-span-2 row-span-2 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <img src={Robo} alt="Robo" className=" w-16 h-16" />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight title-card">
            Dev Revolutionizing<br />
            <span className='Architecture'> Technology </span> with<br />
            AI-Enhanced Solutions
          </h2>
        </motion.div>

        <motion.div
          className="bg-beige-100 rounded-3xl overflow-hidden row-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={myImage} alt="Dhruv" className=" object-cover" />
        </motion.div>

        <motion.div
          className="bg-indigo-200 p-6 rounded-3xl flex items-center justify-between"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm pr-4">
            I’m creative, unique, independent, passionate developer with extensive experience creating percussive and attractive marketing and communications. I have a strong background in developing and implementing digital marketing strategies, social media campaigns, and content creation.
          </p>
          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
            <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="CIRCLE ICON" clip-path="url(#clip0_0_20)">
                <path id="Vector" d="M32.2437 6.10183C31.8757 7.12813 31.6812 8.15144 31.6662 9.18073C31.6513 10.21 31.8128 11.2393 32.1539 12.2746L32.2736 12.6307L31.9176 12.511C30.9032 12.1729 29.8829 12.0083 28.8566 12.0203C27.8273 12.0352 26.792 12.2267 25.7448 12.5977L25.3708 12.7294L25.5054 12.3554C25.8735 11.3321 26.068 10.3058 26.0829 9.27648C26.0979 8.24719 25.9363 7.2179 25.5952 6.18262L25.4785 5.82656L25.8346 5.94624C26.8489 6.28435 27.8692 6.44892 28.8955 6.43695C29.9218 6.42199 30.9601 6.23049 32.0043 5.85947L32.3783 5.72782L32.2437 6.10183ZM37.6415 19.3091C36.6571 19.7729 35.7954 20.3623 35.0563 21.0774C34.3172 21.7925 33.7039 22.6363 33.2131 23.6088L33.0456 23.9439L32.878 23.6088C32.4023 22.6513 31.7949 21.8165 31.0588 21.0984C30.3198 20.3803 29.452 19.7848 28.4497 19.3091L28.0906 19.1385L28.4497 18.971C29.4341 18.5072 30.2958 17.9177 31.0349 17.2026C31.7739 16.4875 32.3873 15.6437 32.878 14.6683L33.0456 14.3332L33.2131 14.6683C33.6919 15.6258 34.2963 16.4636 35.0324 17.1787C35.7684 17.8968 36.6361 18.4922 37.6415 18.971L38.0005 19.1415L37.6415 19.3121V19.3091ZM31.7829 29.1143C31.7979 30.1406 31.9894 31.1788 32.3604 32.2231L32.492 32.5971L32.118 32.4625C31.0917 32.0944 30.0684 31.8999 29.0391 31.885C28.0098 31.87 26.9805 32.0316 25.9453 32.3727L25.5892 32.4924L25.7089 32.1363C26.047 31.122 26.2116 30.1017 26.1996 29.0754C26.1846 28.0461 25.9931 27.0108 25.6221 25.9636L25.4905 25.5896L25.8645 25.7242C26.8878 26.0922 27.9141 26.2867 28.9434 26.3017C29.9727 26.3166 31.002 26.1551 32.0372 25.814L32.3933 25.6973L32.2736 26.0533C31.9355 27.0677 31.7709 28.088 31.7829 29.1143ZM23.5546 33.4349C22.5971 33.9136 21.7593 34.5181 21.0442 35.2541C20.3261 35.9902 19.7306 36.8579 19.2549 37.8633L19.0843 38.2223L18.9138 37.8633C18.45 36.8788 17.8605 36.0171 17.1454 35.2781C16.4303 34.539 15.5865 33.9256 14.6141 33.4349L14.279 33.2673L14.6141 33.0998C15.5716 32.624 16.4064 32.0166 17.1245 31.2806C17.8426 30.5445 18.438 29.6738 18.9138 28.6714L19.0843 28.3124L19.2549 28.6714C19.7187 29.6558 20.3051 30.5176 21.0232 31.2566C21.7383 31.9957 22.5821 32.6091 23.5576 33.0998L23.8927 33.2673L23.5576 33.4349H23.5546ZM12.4957 26.0833C12.1276 27.1066 11.9331 28.1329 11.9182 29.1621C11.9032 30.1914 12.0648 31.2207 12.4059 32.256L12.5226 32.6121L12.1665 32.4924C11.1522 32.1543 10.1319 31.9897 9.10559 32.0017C8.07929 32.0166 7.04102 32.2081 5.99677 32.5792L5.62276 32.7108L5.7574 32.3368C6.12543 31.3105 6.31992 30.2872 6.33488 29.2579C6.34984 28.2286 6.18827 27.1993 5.84716 26.164L5.72748 25.808L6.08354 25.9277C7.09787 26.2658 8.11819 26.4303 9.14449 26.4184C10.1738 26.4034 11.2091 26.2119 12.2563 25.8409L12.6303 25.7092L12.4957 26.0833ZM9.54842 19.4766C8.56401 19.9404 7.70228 20.5269 6.96323 21.245C6.22417 21.9631 5.61079 22.8039 5.12008 23.7793L4.95252 24.1144L4.78496 23.7793C4.30622 22.8218 3.70181 21.984 2.96575 21.2689C2.22968 20.5508 1.36197 19.9554 0.356614 19.4796L-0.00244141 19.3091L0.356614 19.1385C1.34102 18.6747 2.20276 18.0853 2.94181 17.3702C3.68087 16.6521 4.29425 15.8113 4.78496 14.8358L4.95252 14.5007L5.12008 14.8358C5.59583 15.7933 6.20323 16.6281 6.93929 17.3462C7.67535 18.0644 8.54606 18.6598 9.54842 19.1355L9.90748 19.3061L9.54842 19.4766ZM11.7985 9.36923C11.8135 10.3985 12.005 11.4338 12.376 12.481L12.5076 12.8551L12.1336 12.7204C11.1103 12.3524 10.084 12.1579 9.05472 12.1429C8.02543 12.128 6.99614 12.2895 5.96087 12.6307L5.6048 12.7473L5.72449 12.3913C6.0626 11.377 6.22716 10.3566 6.2152 9.33034C6.20024 8.30404 6.00874 7.26577 5.63772 6.22152L5.50606 5.8475L5.88008 5.98215C6.90638 6.35018 7.92968 6.54467 8.95898 6.55963C9.98827 6.57459 11.0176 6.41301 12.0528 6.07191L12.4089 5.95223L12.2892 6.30829C11.9511 7.32262 11.7865 8.34294 11.7985 9.36923ZM23.384 5.34483C22.4265 5.82057 21.5917 6.42797 20.8736 7.16404C20.1555 7.90309 19.5601 8.77081 19.0843 9.77317L18.9138 10.1322L18.7432 9.77317C18.2794 8.78876 17.693 7.92703 16.9749 7.18797C16.2568 6.44892 15.416 5.83553 14.4405 5.34483L14.1054 5.17727L14.4405 5.00971C15.398 4.53097 16.2358 3.92656 16.9509 3.19049C17.6691 2.45443 18.2645 1.58671 18.7402 0.58136L18.9108 0.222305L19.0813 0.58136C19.5451 1.56577 20.1346 2.4275 20.8497 3.16656C21.5678 3.90561 22.4086 4.519 23.384 5.00971L23.7191 5.17727L23.384 5.34483Z" fill="#A5B4FC" />
              </g>
              <defs>
                <clipPath id="clip0_0_20">
                  <rect width="38" height="38" fill="white" transform="translate(0.000183105 0.222321)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </motion.div>

        <motion.div
          className="bg-indigo-300 p-6 rounded-3xl flex  flex-col items-start gap-10 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm">Have some questions?</p>

          <h3 className="text-2xl font-semibold">Contact me</h3>
          <ArrowUpRight className="w-6 h-6 absolute top-4 right-4" />
        </motion.div>

        <motion.div
          className="bg-indigo-100 p-6 rounded-3xl col-span-1 md:col-span-2 lg:col-span-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="space-y-4">
            {projectCards.map((project, index) => (
              <div key={project.title}>
                <motion.div
                  className="relative cursor-pointer"
                  onMouseEnter={() => setActiveProject(project.title)}
                  initial={false}
                  animate={{ height: activeProject === project.title ? 'auto' : '2rem' }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <AnimatePresence>
                    {activeProject === project.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2"
                      >
                        <img src={project.image} alt={`${project.title} Project`} className="w-full h-80 object-cover rounded-2xl" />
                        <ArrowUpRight className="w-6 h-6 absolute top-0 right-0" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                {index < projectCards.length - 1 && (
                  <hr className="my-4 border-black/10" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-indigo-100 p-6 rounded-3xl col-span-1 md:col-span-2 lg:col-span-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex justify-between">
            <a href="#" className="hover:underline">INSTAGRAM</a>
            <a href="#" className="hover:underline">TWITTER</a>
            <a href="#" className="hover:underline">LINKEDIN</a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}