import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      padding: '4rem 2rem 2rem',
      borderTop: '1px solid rgba(0, 212, 255, 0.1)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '1rem'
            }}>
              PST Tech Nova
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#888',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Building the future through technology and innovation. We deliver cutting-edge solutions for businesses worldwide.
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <motion.a
                href="https://wa.me/916385815632?text=hi%20iam%20intersted%20to%20devlop%20the%20website"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: '#00d4ff',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease'
                }}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12.012 0C5.398 0 .056 5.348.056 11.962c0 2.105.547 4.112 1.588 5.922L.057 24l6.32-1.654a11.892 11.892 0 0 0 5.635 1.616c6.613 0 11.956-5.348 11.956-11.962C23.968 5.348 18.625 0 12.012 0zm6.59 16.962c-.255.715-1.254 1.306-1.745 1.396-.467.09-1.077.162-1.737-.036a8.877 8.877 0 0 1-3.921-2.428 10.155 10.155 0 0 1-2.73-3.874 3.738 3.738 0 0 1-.773-1.996c.01-.765.415-1.144.566-1.302a.855.855 0 0 1 .632-.27c.189 0 .349.009.5.018.16.01.378-.063.59.45.216.522.735 1.79.799 1.926.066.135.11.297.02.477-.09.18-.135.297-.27.45-.135.153-.284.342-.405.46-.135.126-.279.261-.12.53.162.27.72 1.18 1.547 1.91.828.73 1.522.955 1.737 1.045.216.09.342.072.47-.072.126-.144.54-.63.684-.846.144-.216.288-.18.486-.108.198.072 1.252.59 1.468.698.216.108.36.162.414.252.054.09.054.522-.201 1.237z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/pstechnova/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: '#00d4ff',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease'
                }}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </motion.a>
              <motion.a
                href="mailto:psttechnova@gmail.com"
                whileHover={{ scale: 1.2, y: -5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: '#00d4ff',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease'
                }}
              >
                📧
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '1.5rem'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Home', 'Services', 'Contact', 'About Us'].map((link, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <motion.a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    whileHover={{ x: 5, color: '#00d4ff' }}
                    style={{
                      fontSize: '0.95rem',
                      color: '#888',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '1.5rem'
            }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Web Development', 'UI/UX Design', 'IT Support', 'Digital Marketing', 'Mobile App Development', 'IT Services'].map((service, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <motion.a
                    href="#services"
                    whileHover={{ x: 5, color: '#00d4ff' }}
                    style={{
                      fontSize: '0.95rem',
                      color: '#888',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '1.5rem'
            }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: '#00d4ff' }}>📍</span>
                <span style={{ fontSize: '0.95rem', color: '#888' }}>Kodumudi, Erode, Tamil Nadu, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: '#00d4ff' }}>📞</span>
                <span style={{ fontSize: '0.95rem', color: '#888' }}>6385815632 / 8248510052</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: '#00d4ff' }}>✉️</span>
                <span style={{ fontSize: '0.95rem', color: '#888' }}>psttechnova@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <p style={{
            fontSize: '0.9rem',
            color: '#888',
            margin: 0
          }}>
            © {currentYear} PST Tech Nova. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <motion.a
              href="/terms.html"
              whileHover={{ color: '#00d4ff' }}
              style={{
                fontSize: '0.9rem',
                color: '#888',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="/privacy.html"
              whileHover={{ color: '#00d4ff' }}
              style={{
                fontSize: '0.9rem',
                color: '#888',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
            >
              Privacy Policy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
