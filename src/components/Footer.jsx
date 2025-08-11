import { motion } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaPhoneAlt,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram
} from 'react-icons/fa'
import { HiOutlineMail, HiPhone } from 'react-icons/hi'
import { RiContactsBookLine } from 'react-icons/ri'
import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 12
      }
    }
  }

  const linkVariants = {
    hover: {
      x: 5,
      color: '#b56aff'
    }
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="footer"
    >
      <div className="footer-content">
        {/* Links Rápidos */}
        <motion.div 
          className="footer-section"
          variants={itemVariants}
          whileHover="hover"
        >
          <div className="section-header">
            <RiContactsBookLine className="section-icon" />
            <h3 className="section-title">Navegação</h3>
          </div>
          <ul className="footer-links">
            <motion.li variants={itemVariants}>
              <motion.a 
                href="/" 
                className="footer-link"
                variants={linkVariants}
                whileHover="hover"
              >
                <FaHome className="link-icon" />
                Home
              </motion.a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <motion.a 
                href="/sobre" 
                className="footer-link"
                variants={linkVariants}
                whileHover="hover"
              >
                <FaUser className="link-icon" />
                Sobre Mim
              </motion.a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <motion.a 
                href="/projetos" 
                className="footer-link"
                variants={linkVariants}
                whileHover="hover"
              >
                <FaCode className="link-icon" />
                Projetos
              </motion.a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <motion.a 
                href="/contato" 
                className="footer-link"
                variants={linkVariants}
                whileHover="hover"
              >
                <FaProjectDiagram className="link-icon" />
                Contato
              </motion.a>
            </motion.li>
          </ul>
        </motion.div>

        {/* Redes Sociais */}
        <motion.div 
          className="footer-section"
          variants={itemVariants}
          whileHover="hover"
        >
          <div className="section-header">
            <FaCode className="section-icon" />
            <h3 className="section-title">Redes Sociais</h3>
          </div>
          <ul className="social-links">
            <motion.li 
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.05 }}
              >
                <FaGithub className="social-icon" />
                <span>GitHub</span>
                <div className="social-hover-effect"></div>
              </motion.a>
            </motion.li>
            <motion.li 
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.05 }}
              >
                <FaLinkedin className="social-icon" />
                <span>LinkedIn</span>
                <div className="social-hover-effect"></div>
              </motion.a>
            </motion.li>
            <motion.li 
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.05 }}
              >
                <FaTwitter className="social-icon" />
                <span>Twitter</span>
                <div className="social-hover-effect"></div>
              </motion.a>
            </motion.li>
          </ul>
        </motion.div>

        {/* Contato */}
        <motion.div 
          className="footer-section"
          variants={itemVariants}
          whileHover="hover"
        >
          <div className="section-header">
            <FaEnvelope className="section-icon" />
            <h3 className="section-title">Contato</h3>
          </div>
          <ul className="contact-info">
            <motion.li variants={itemVariants}>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <HiOutlineMail className="contact-icon" />
                <a href="mailto:seu@email.com" className="contact-link">
                  seu@email.com
                </a>
              </motion.div>
            </motion.li>
            <motion.li variants={itemVariants}>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <HiPhone className="contact-icon" />
                <span>(00) 00000-0000</span>
              </motion.div>
            </motion.li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div 
        className="footer-bottom"
        variants={itemVariants}
      >
        <div className="footer-border"></div>
        <p>
          &copy; {currentYear} <span className="highlight-name">Seu Nome</span>. Todos os direitos reservados.
        </p>
      </motion.div>
    </motion.footer>
  )
}