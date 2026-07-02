import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        // background: 'rgba(10, 10, 10, 0.9)',
        // backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(68, 63, 63, 0.1)'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img 
            src="/logo.png" 
            alt="PST Tech Nova" 
            style={{ height: '100px', width: 'auto' }}
          />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            padding: '0.5rem',
            fontSize: '1.5rem',
            fontWeight: '500',
            background: 'transparent',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            alignItems: 'flex-end'
          }}
        >
          <span style={{ 
            width: '24px', 
            height: '2px', 
            background: '#fff',
            transition: 'transform 0.3s ease',
            transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }}></span>
          <span style={{ 
            width: isMenuOpen ? '24px' : '18px', 
            height: '2px', 
            background: '#fff',
            transition: 'opacity 0.3s ease',
            opacity: isMenuOpen ? 0 : 1
          }}></span>
          <span style={{ 
            width: '24px', 
            height: '2px', 
            background: '#fff',
            transition: 'transform 0.3s ease',
            transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
          }}></span>
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                position: 'absolute',
                top: '100%',
                right: '2rem',
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(5px)',
                padding: '1.5rem',
                borderRadius: '8px',
                minWidth: '200px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  style={{
                    fontSize: '1rem',
                    color: '#fff',
                    textDecoration: 'none',
                    padding: '0.5rem 0'
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
