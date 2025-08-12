import { Link, useLocation } from 'react-router-dom';
import { motion, useCycle } from 'framer-motion';
import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaCode, 
  FaGraduationCap, 
  FaEnvelope,
  FaDiceD20,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import './Header.css';

export default function Header() {
  const location = useLocation();
  const [isOpen, toggleOpen] = useCycle(false, true);

  const navItems = [
    { path: "/", name: "Home", icon: <FaHome /> },
    { path: "/sobre", name: "Sobre", icon: <FaUser /> },
    { path: "/experiencias", name: "Experiências", icon: <FaBriefcase /> },
    { path: "/projetos", name: "Projetos", icon: <FaCode /> },
    { path: "/estudos", name: "Estudos", icon: <FaGraduationCap /> },
    { path: "/contato", name: "Contato", icon: <FaEnvelope /> },
  ];

  // Variantes para animação do menu mobile
  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.15
      }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

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
  };

  const navItemVariants = {
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
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="mobile-menu-button"
        onClick={() => toggleOpen()}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </motion.button>

      {/* Desktop Header */}
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
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
              className="nav-item-wrapper"
            >
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
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
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className="mobile-menu"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <motion.nav className="mobile-nav">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mobile-nav-item"
            >
              <Link 
                to={item.path} 
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => toggleOpen()}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                <span className="mobile-nav-text">{item.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </motion.div>
    </>
  );
}