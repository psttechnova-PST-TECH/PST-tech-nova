import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import * as random from 'maath/random/dist/maath-random.esm'

function ParticleField() {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 10 }))

  useFrame((state, delta) => {
    if (ref.current) {
      const scrollY = window.scrollY
      const scrollProgress = scrollY / window.innerHeight
      
      ref.current.rotation.x -= delta / 10 + scrollProgress * 0.001
      ref.current.rotation.y -= delta / 15 + scrollProgress * 0.0015
      ref.current.position.y = scrollProgress * 2
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00d4ff"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <ParticleField />
    </Canvas>
  )
}

const techWords = ['INNOVATION', 'TECHNOLOGY', 'FUTURE', 'AI', 'CLOUD', 'DIGITAL', 'SMART', 'AUTOMATION', 'DATA', 'CYBER', 'DEVELOPMENT', 'ENGINEERING', 'SECURITY', 'NETWORK', 'SYSTEMS', 'BLOCKCHAIN', 'QUANTUM', 'ROBOTICS', 'ANALYTICS', 'MACHINE', 'LEARNING', 'SOFTWARE', 'HARDWARE', 'INTERFACE', 'ALGORITHM', 'DATABASE', 'SERVER', 'COMPUTING', 'VIRTUAL', 'REALITY']

const codeSnippets = [
  `const future = new Technology();`,
  `await innovation.transform();`,
  `class SmartLiving extends Future {`,
  `  constructor() {`,
  `    super('AI-Powered');`,
  `  }`,
  `}`,
  `const solution = async () => {`,
  `  return buildFuture();`,
  `};`,
  `import { Excellence } from 'PST';`,
  `export default Innovation;`
]

function TypingCode() {
  const [displayLines, setDisplayLines] = useState([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    let timeout
    const currentLine = codeSnippets[currentLineIndex]
    
    if (currentCharIndex < currentLine.length) {
      timeout = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1)
      }, 30)
    } else {
      timeout = setTimeout(() => {
        setDisplayLines(prev => [...prev, currentLine])
        setCurrentLineIndex(prev => (prev + 1) % codeSnippets.length)
        setCurrentCharIndex(0)
        
        if (currentLineIndex === codeSnippets.length - 1) {
          setTimeout(() => {
            setDisplayLines([])
          }, 3000)
        }
      }, 200)
    }

    return () => clearTimeout(timeout)
  }, [currentLineIndex, currentCharIndex])

  const currentLine = codeSnippets[currentLineIndex]
  const partialLine = currentLine.slice(0, currentCharIndex)

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{
        position: 'absolute',
        left: '2rem',
        top: '8rem',
        zIndex: 5,
        fontFamily: 'monospace',
        fontSize: '0.7rem',
        color: '#00d4ff',
        lineHeight: '1.6',
        textShadow: '0 0 5px rgba(0, 212, 255, 0.5)',
        pointerEvents: 'none'
      }}
    >
      <div style={{
        padding: '2rem',
        minWidth: '320px',
        maxWidth: '400px',
        maxHeight: '400px',
        overflow: 'hidden'
      }}>
        <div style={{ marginBottom: '0.5rem', color: '#0077b6', fontSize: '0.65rem' }}>
          // PST Tech Nova
        </div>
        {displayLines.map((line, index) => (
          <div key={index} style={{ color: '#00d4ff' }}>
            {line}
          </div>
        ))}
        <div style={{ color: '#00d4ff' }}>
          {partialLine}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{ color: '#00d4ff' }}
          >
            |
          </motion.span>
        </div>
      </div>
    </motion.div>
  )
}

function TechLogos() {
  const tools = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '🔧' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Redis', icon: '🔴' },
    { name: 'GraphQL', icon: '◈' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '6rem',
        zIndex: 5,
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        padding: '0 2rem'
      }}
    >
      <div style={{ 
        color: '#0077b6', 
        fontSize: '0.65rem', 
        textAlign: 'center',
        width: '100%',
        marginBottom: '0.5rem'
      }}>
        // TECH STACK
      </div>
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0.8],
            y: [20, 0, 0, -20]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            delay: index * 0.3,
            ease: 'linear'
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.75rem',
            color: '#00d4ff',
            whiteSpace: 'nowrap'
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>{tool.icon}</span>
          <span style={{ fontWeight: '600' }}>{tool.name}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}

function FloatingText({ word, delay }) {
  const startX = Math.random() * window.innerWidth
  const endX = startX + (Math.random() * 400 - 200)
  
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0,
        x: startX,
        y: window.innerHeight + 50
      }}
      animate={{ 
        opacity: [0, 0.4, 0.4, 0],
        scale: [0, 1, 1, 0.5],
        y: [window.innerHeight + 50, window.innerHeight * 0.7, window.innerHeight * 0.4, -100],
        x: [startX, startX + (Math.random() * 100 - 50), endX, endX + (Math.random() * 100 - 50)]
      }}
      transition={{ 
        duration: 10 + Math.random() * 5,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut'
      }}
      style={{
        position: 'absolute',
        fontSize: '0.7rem',
        fontWeight: '900',
        color: '#00d4ff',
        letterSpacing: '0.2em',
        textShadow: '0 0 15px rgba(0, 212, 255, 0.8)',
        zIndex: 1,
        pointerEvents: 'none',
        whiteSpace: 'nowrap'
      }}
    >
      {word}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="home" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src="/Hero1.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(0, 0, 0, 0.2)' }}></div>
      {/* <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(10, 10, 10, 0.7)' }}>
        <Scene3D />
      </div> */}
      
      {techWords.map((word, index) => (
        <FloatingText key={word} word={word} delay={index * 0.5} />
      ))}
      
      <TypingCode />
      <TechLogos />
      
      <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '2rem' }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '900px' }}
        >
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '800', color: '#ffffff', marginBottom: '1.5rem' }}>
            PST Tech Nova
          </h1>
          <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: '300', color: '#ffffff', marginBottom: '2rem', letterSpacing: '0.05em' }}>
            Building The Future Through Technology & Innovation
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const servicesSection = document.getElementById('services')
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #00d4ff 0%, #00a8cc 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              boxShadow: '0 10px 40px rgba(0, 212, 255, 0.4)'
            }}
          >
            Explore Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}