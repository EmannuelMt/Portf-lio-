import { motion } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaHeart
} from 'react-icons/fa'
import { RiContactsBookLine } from 'react-icons/ri'
import { SiGmail, SiWhatsapp } from 'react-icons/si'
import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 0.6
      }
    }
  }

  const sectionVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const linkVariants = {
    hover: {
      x: 5,
      color: 'var(--accent)',
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  }

  const socialVariants = {
    hover: {
      y: -5,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10
      }
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
        {/* Quick Links */}
        <motion.div 
          className="footer-section"
          variants={sectionVariants}
          whileHover="hover"
        >
          <div className="section-header">
            <RiContactsBookLine className="section-icon" />
            <h3 className="section-title">Navegação Rápida</h3>
          </div>
          <ul className="footer-links">
            <motion.li>
              <motion.a 
                href="/" 
                className="footer-link"
                variants={linkVariants}
                whileHover="hover"
              >
                <FaHome className="link-icon" />
                <span>Início</span>
              </motion.a>
            </motion.li>
            <motion.li>
              <motion.a 
                href="/sobre" 
                className="footer-link"
                variants={linkVariants}
                whileHover="hover"
              >
                <FaUser className="link-icon" />
                <span>Sobre Mim</span>
              </motion.a>
            </motion.li>
            <motion.li>
              <motion.a 
                href="/projetos" 
                className="footer-link"
                variants={linkVariants}
                whileHover="hover"
              >
                <FaCode className="link-icon" />
                <span>Projetos</span>
              </motion.a>
            </motion.li>
            <motion.li>
              <motion.a 
                href="/contato" 
                className="footer-link"
                variants={linkVariants}
                whileHover="hover"
              >
                <FaProjectDiagram className="link-icon" />
                <span>Contato</span>
              </motion.a>
            </motion.li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div 
          className="footer-section"
          variants={sectionVariants}
          whileHover="hover"
        >
          <div className="section-header">
            <FaCode className="section-icon" />
            <h3 className="section-title">Conecte-se</h3>
          </div>
          <ul className="social-links">
            <motion.li>
              <motion.a 
                href="https://github.com/EmannuelMt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                variants={socialVariants}
                whileHover="hover"
              >
                <div className="social-icon-container github">
                  <FaGithub className="social-icon" />
                </div>
                <span>GitHub</span>
              </motion.a>
            </motion.li>
            <motion.li>
              <motion.a 
                href="https://linkedin.com/in/emannuel-matos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                variants={socialVariants}
                whileHover="hover"
              >
                <div className="social-icon-container linkedin">
                  <FaLinkedin className="social-icon" />
                </div>
                <span>LinkedIn</span>
              </motion.a>
            </motion.li>
            <motion.li>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                variants={socialVariants}
                whileHover="hover"
              >
                <div className="social-icon-container twitter">
                  <FaTwitter className="social-icon" />
                </div>
                <span>Twitter</span>
              </motion.a>
            </motion.li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="footer-section"
          variants={sectionVariants}
          whileHover="hover"
        >
          <div className="section-header">
            <FaEnvelope className="section-icon" />
            <h3 className="section-title">Fale Comigo</h3>
          </div>
          <ul className="contact-info">
            <motion.li>
              <motion.a 
                href="mailto:emannuelmatosdeoliveira@gmail.com" 
                className="contact-link"
                variants={linkVariants}
                whileHover="hover"
              >
                <div className="contact-icon-container">
                  <SiGmail className="contact-icon" />
                </div>
                <span>emannuelmatosdeoliveira@gmail.com</span>
              </motion.a>
            </motion.li>
            <motion.li>
              <motion.a 
                href="https://wa.me/5562984317595" 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                variants={linkVariants}
                whileHover="hover"
              >
                <div className="contact-icon-container whatsapp">
                  <SiWhatsapp className="contact-icon" />
                </div>
                <span>(62) 98431-7595</span>
              </motion.a>
            </motion.li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div 
        className="footer-bottom"
        variants={sectionVariants}
      >
        <div className="footer-border"></div>
        <p className="copyright">
          &copy; {currentYear} <span className="highlight">Emannuel Matos</span>. Todos os direitos reservados.
          <span className="made-with">
          </span>
        </p>
      </motion.div>
    </motion.footer>
  )
}