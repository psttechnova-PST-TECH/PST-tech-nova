import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useScroll } from 'framer-motion'

const services = [
  {
    title: 'Web Development',
    description: 'Craft modern, high-performance websites that deliver exceptional user experiences and drive business growth.',
    icon: '💻',
    details: 'Our web development services include custom website design, e-commerce solutions, content management systems, and responsive web applications. We use cutting-edge technologies like React, Next.js, and Node.js to build scalable and secure web solutions tailored to your business needs.'
  },
  {
    title: 'UI/UX Design',
    description: 'Create beautiful and intuitive interfaces that enhance user engagement and deliver seamless digital experiences.',
    icon: '🎨',
    details: 'Our UI/UX design team focuses on creating user-centered designs that are both visually stunning and highly functional. We conduct user research, create wireframes and prototypes, and design intuitive interfaces that drive user satisfaction and conversion rates.'
  },
  {
    title: 'IT Support',
    description: 'Provide reliable technical support and maintenance to keep your systems running smoothly and efficiently.',
    icon: '🔧',
    details: 'We offer comprehensive IT support services including 24/7 help desk, system monitoring, software updates, hardware maintenance, and troubleshooting. Our team ensures your IT infrastructure remains operational and secure at all times.'
  },
  {
    title: 'Digital Marketing',
    description: 'Execute strategic digital campaigns that increase visibility, engagement, and conversion across all channels.',
    icon: '📈',
    details: 'Our digital marketing services include SEO, social media marketing, email campaigns, content marketing, PPC advertising, and analytics. We help you reach your target audience and achieve measurable results through data-driven strategies.'
  },
  {
    title: 'Mobile App Development',
    description: 'Build native and cross-platform mobile applications that engage users and extend your digital presence.',
    icon: '📱',
    details: 'We develop high-quality mobile applications for iOS and Android using React Native, Flutter, and native technologies. From concept to deployment, we create intuitive and performant apps that provide exceptional user experiences.'
  },
  {
    title: 'IT Services',
    description: 'Deliver comprehensive IT solutions including infrastructure, security, and technology consulting for your business.',
    icon: '⚙️',
    details: 'Our comprehensive IT services include cloud computing, network infrastructure, cybersecurity solutions, data backup and recovery, IT consulting, and technology strategy. We help businesses leverage technology to achieve their goals and stay competitive.'
  }
]

const floatingElements = [
  { icon: '💰', x: '10%', y: '20%', size: 40, delay: 0 },
  { icon: '💻', x: '85%', y: '15%', size: 50, delay: 0.5 },
  { icon: '🪙', x: '15%', y: '60%', size: 30, delay: 1 },
  { icon: '🎯', x: '90%', y: '70%', size: 35, delay: 1.5 },
  { icon: '🚀', x: '5%', y: '80%', size: 45, delay: 2 },
  { icon: '⭐', x: '75%', y: '40%', size: 25, delay: 2.5 },
  { icon: '💎', x: '20%', y: '35%', size: 30, delay: 3 },
  { icon: '🔮', x: '80%', y: '85%', size: 40, delay: 3.5 },
]

function ServiceCard({ service, index, onLearnMore }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        background: 'rgba(255, 255, 255, 0.08)',
        borderColor: 'rgba(0, 212, 255, 0.3)'
      }}
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '3rem 2.5rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        style={{
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          display: 'inline-block'
        }}
      >
        {service.icon}
      </motion.div>
      <h3 style={{
        fontSize: '1.4rem',
        fontWeight: '700',
        color: '#fff',
        marginBottom: '1rem',
        letterSpacing: '-0.02em'
      }}>
        {service.title}
      </h3>
      <p style={{
        fontSize: '1rem',
        color: '#888',
        lineHeight: '1.7',
        marginBottom: '1.5rem'
      }}>
        {service.description}
      </p>
      <motion.div
        whileHover={{ x: 5 }}
        onClick={() => onLearnMore(service)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#00d4ff',
          fontSize: '0.9rem',
          fontWeight: '600',
          letterSpacing: '0.05em',
          cursor: 'pointer'
        }}
      >
        Learn More
        <span style={{ fontSize: '1.2rem' }}>→</span>
      </motion.div>
    </motion.div>
  )
}

function ServicePopup({ service, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(5px)',
        padding: '2rem'
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'rgba(20, 20, 30, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '3rem',
          maxWidth: '600px',
          width: '100%',
          border: '1px solid rgba(0, 212, 255, 0.2)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
          position: 'relative'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#fff',
            fontSize: '1.5rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
        >
          ×
        </button>
        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{service.icon}</div>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#fff',
          marginBottom: '1rem',
          letterSpacing: '-0.02em'
        }}>
          {service.title}
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#888',
          lineHeight: '1.8',
          marginBottom: '1.5rem'
        }}>
          {service.description}
        </p>
        <div style={{
          padding: '1.5rem',
          background: 'rgba(0, 212, 255, 0.1)',
          borderRadius: '12px',
          border: '1px solid rgba(0, 212, 255, 0.2)'
        }}>
          <h3 style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: '#00d4ff',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Service Details
          </h3>
          <p style={{
            fontSize: '1rem',
            color: '#ccc',
            lineHeight: '1.7'
          }}>
            {service.details}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const { scrollY } = useScroll()
  const [selectedService, setSelectedService] = useState(null)

  const handleLearnMore = (service) => {
    setSelectedService(service)
  }

  const handleClosePopup = () => {
    setSelectedService(null)
  }

  return (
    <section id="services" ref={sectionRef} style={{ padding: '10rem 2rem', position: 'relative', overflow: 'hidden' }}>
      {/* Video Background */}
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
        <source src="/Service.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(0, 0, 0, 0.7)' }}></div>

      {/* Floating Animated Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.8, delay: element.delay }}
          style={{
            position: 'absolute',
            left: element.x,
            top: element.y,
            fontSize: `${element.size}px`,
            zIndex: 2,
            pointerEvents: 'none',
            filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.3))'
          }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {element.icon}
          </motion.div>
        </motion.div>
      ))}

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '6rem' }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '800',
              color: '#fff',
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em'
            }}
          >
            Our Core Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '1.2rem',
              color: '#888',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Transform your business with cutting-edge technology solutions designed for growth and innovation
          </motion.p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem' }}>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} onLearnMore={handleLearnMore} />
          ))}
        </div>
      </div>

      {selectedService && (
        <ServicePopup service={selectedService} onClose={handleClosePopup} />
      )}
    </section>
  )
}