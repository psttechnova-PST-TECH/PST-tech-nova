import { motion } from 'framer-motion'
import { useState } from 'react'

// Web3Forms Access Key
const WEB3FORMS_ACCESS_KEY = 'f1cd3648-c58a-4531-bb36-6412683964dc'

function ConfirmationDialog({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
        style={{
          background: 'rgba(20, 20, 30, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '2.5rem',
          maxWidth: '400px',
          width: '100%',
          border: '1px solid rgba(0, 212, 255, 0.2)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
          textAlign: 'center'
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#fff',
          marginBottom: '1rem'
        }}>
          Proceed to Enquiry Form?
        </h2>
        <p style={{
          fontSize: '1rem',
          color: '#888',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          You are about to move to the enquiry form filling. Do you want to continue?
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCancel}
            style={{
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onConfirm}
            style={{
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #00d4ff 0%, #00a8cc 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              boxShadow: '0 5px 20px rgba(0, 212, 255, 0.3)'
            }}
          >
            OK
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

function SuccessPopup({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1001,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(5px)',
        padding: '2rem'
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.5, opacity: 0, rotate: 10 }}
        transition={{
          type: 'spring',
          damping: 15,
          stiffness: 300
        }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'rgba(20, 20, 30, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '3rem',
          maxWidth: '400px',
          width: '100%',
          border: '1px solid rgba(0, 212, 255, 0.3)',
          boxShadow: '0 25px 50px rgba(0, 212, 255, 0.2)',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #00d4ff 0%, #00a8cc 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            fontSize: '2.5rem',
            boxShadow: '0 10px 30px rgba(0, 212, 255, 0.4)'
          }}
        >
          ✓
        </motion.div>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#fff',
            marginBottom: '1rem'
          }}
        >
          Thank You!
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: '0.95rem',
            color: '#888',
            lineHeight: '1.8',
            marginBottom: '2rem',
            textAlign: 'center'
          }}
        >
          Thank you for submitting the form.<br /><br />
          You will receive a confirmation message along with the Project Details Collection Form via email or WhatsApp shortly. Once you submit the project details form, you will receive the quotation for your project.<br /><br />
          Thank you for choosing PST Tech Nova. We look forward to working with you!
        </motion.p>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          style={{
            padding: '1rem 2.5rem',
            fontSize: '1rem',
            fontWeight: '600',
            background: 'linear-gradient(135deg, #00d4ff 0%, #00a8cc 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            boxShadow: '0 5px 20px rgba(0, 212, 255, 0.3)'
          }}
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

function EnquiryForm({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', WEB3FORMS_ACCESS_KEY)
      formDataToSend.append('name', formData.name)
      formDataToSend.append('company', formData.company)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('project_type', formData.projectType)
      formDataToSend.append('message', formData.message)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const result = await response.json()

      if (result.success) {
        onSuccess()
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        })
        onClose()
      } else {
        alert('Failed to send enquiry. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send enquiry. Please try again or contact us directly.')
    }
  }

  if (!isOpen) return null

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
          maxWidth: '500px',
          width: '100%',
          border: '1px solid rgba(0, 212, 255, 0.2)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto'
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
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: '700',
          color: '#fff',
          marginBottom: '0.5rem'
        }}>
          Project Enquiry
        </h2>
        <p style={{
          fontSize: '0.95rem',
          color: '#888',
          marginBottom: '2rem'
        }}>
          Fill out the form below and we'll get back to you soon.
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
              Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(0, 212, 255, 0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            />
          </div>
          <div>
            <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
              Company Name
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(0, 212, 255, 0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            />
          </div>
          <div>
            <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(0, 212, 255, 0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            />
          </div>
          <div>
            <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(0, 212, 255, 0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            />
          </div>
          <div>
            <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
              Project Type *
            </label>
            <select
              required
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(0, 212, 255, 0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <option value="" style={{ background: '#14141e' }}>Select a project type</option>
              <option value="web" style={{ background: '#14141e' }}>Web Development</option>
              <option value="mobile" style={{ background: '#14141e' }}>Mobile App Development</option>
              <option value="uiux" style={{ background: '#14141e' }}>UI/UX Design</option>
              <option value="marketing" style={{ background: '#14141e' }}>Digital Marketing</option>
              <option value="it" style={{ background: '#14141e' }}>IT Services</option>
              <option value="other" style={{ background: '#14141e' }}>Other</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
              Project Details
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows="4"
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(0, 212, 255, 0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #00d4ff 0%, #00a8cc 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              boxShadow: '0 5px 20px rgba(0, 212, 255, 0.3)',
              marginTop: '0.5rem'
            }}
          >
            Submit Enquiry
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default function Contact() {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleStartProject = () => {
    setShowConfirmation(true)
  }

  const handleConfirm = () => {
    setShowConfirmation(false)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowConfirmation(false)
  }

  const handleCloseForm = () => {
    setShowForm(false)
  }

  const handleSuccess = () => {
    setShowSuccess(true)
  }

  const handleCloseSuccess = () => {
    setShowSuccess(false)
  }

  return (
    <section id="contact" style={{ padding: '8rem 2rem', position: 'relative', overflow: 'hidden' }}>
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
        <source src="/Contact.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(0, 0, 0, 0.6)' }}></div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: '#fff', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #fff 0%, #00d4ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Get In Touch
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#00d4ff', maxWidth: '600px', margin: '0 auto' }}>
            Ready to transform your business? Let's start a conversation.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📞</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#fff', marginBottom: '1rem' }}>
              Phone
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#00d4ff' }}>6385815632 / 8248510052</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✉️</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#fff', marginBottom: '1rem' }}>
              Email
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#00d4ff' }}>psttechnova@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -5 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📍</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#fff', marginBottom: '1rem' }}>
              Location
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#00d4ff' }}>Kodumudi, Erode, Tamil Nadu, India</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ marginTop: '4rem', textAlign: 'center' }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartProject}
            style={{
              padding: '1.2rem 3rem',
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
            Start Your Project
          </motion.button>
        </motion.div>
      </div>

      <ConfirmationDialog
        isOpen={showConfirmation}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

      <EnquiryForm
        isOpen={showForm}
        onClose={handleCloseForm}
        onSuccess={handleSuccess}
      />

      <SuccessPopup
        isOpen={showSuccess}
        onClose={handleCloseSuccess}
      />
    </section>
  )
}