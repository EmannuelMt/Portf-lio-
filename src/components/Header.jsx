import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaCode, 
  FaGraduationCap, 
  FaEnvelope,
  FaDiceD20 
} from 'react-icons/fa'
import './Header.css'

export default function Header() {
  const navItems = [
    { path: "/", name: "Home", icon: <FaHome /> },
    { path: "/sobre", name: "Sobre Mim", icon: <FaUser /> },
    { path: "/experiencias", name: "Experiências", icon: <FaBriefcase /> },
    { path: "/projetos", name: "Projetos", icon: <FaCode /> },
    { path: "/estudos", name: "Estudos", icon: <FaGraduationCap /> },
    { path: "/contato", name: "Contato", icon: <FaEnvelope /> },
    { path: "/rpg", name: "RPG", icon: <FaDiceD20 /> } // Ícone mais apropriado para RPG
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const itemVariants = {
    hidden: { y: -15, opacity: 0 },
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
        stiffness: 300,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <motion.header
      className="header"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.nav className="nav">
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="nav-item-wrapper"
          >
            <Link to={item.path} className="nav-link">
              <motion.span 
                className="nav-icon"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                {item.icon}
              </motion.span>
              <motion.span 
                className="nav-text"
                whileHover={{ x: 3 }}
              >
                {item.name}
              </motion.span>
              <motion.span 
                className="nav-underline"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* Espaço reservado para futuros elementos */}
      <motion.div 
        className="header-right"
        variants={itemVariants}
      />
    </motion.header>
  )
}