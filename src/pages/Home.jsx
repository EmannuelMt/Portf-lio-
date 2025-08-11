import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FiUser, FiBriefcase, FiCode, FiArrowRight, 
  FiGithub, FiLinkedin, FiMail, FiFileText, FiGlobe,
  FiExternalLink
} from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPalette } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Home.css';
import profilePhoto from './IMG-20250323-WA0010.jpg'; // Update with your photo path

const Home = () => {
  const navigate = useNavigate();

  // Data configuration
  const profileData = {
    about: [
      {
        title: "Sobre Mim",
        content: "Desenvolvedor full-stack com expertise em criar soluções web performáticas e escaláveis.",
        link: "/sobre",
        icon: <FiUser />,
        color: "var(--primary)"
      },
      {
        title: "Habilidades",
        content: "React, Node.js, TypeScript, GraphQL, Docker, AWS e arquitetura de microsserviços.",
        link: "/habilidades",
        icon: <FiCode />,
        color: "var(--secondary)"
      },
      {
        title: "Experiência",
        content: "5+ anos desenvolvendo produtos digitais para empresas de diversos segmentos.",
        link: "/experiencia",
        icon: <FiBriefcase />,
        color: "var(--accent)"
      }
    ],
    projects: [
      {
        title: "Plataforma SaaS",
        tech: "React + Node.js",
        link: "/projetos/saas",
        icon: <FaReact />,
        bgColor: "var(--primary)",
        textColor: "white"
      },
      {
        title: "E-commerce",
        tech: "Next.js + Stripe",
        link: "/projetos/ecommerce",
        icon: <FaNodeJs />,
        bgColor: "var(--secondary)",
        textColor: "white"
      },
      {
        title: "Dashboard Analytics",
        tech: "TypeScript + D3.js",
        link: "/projetos/analytics",
        icon: <FaPalette />,
        bgColor: "var(--accent)",
        textColor: "white"
      }
    ],
    contact: [
      {
        title: "GitHub",
        link: "https://github.com/seuusername",
        icon: <FiGithub />,
        bgColor: "var(--dark)",
        textColor: "white"
      },
      {
        title: "LinkedIn",
        link: "https://linkedin.com/in/seuusername",
        icon: <FiLinkedin />,
        bgColor: "var(--primary)",
        textColor: "white"
      },
      {
        title: "Currículo",
        link: "/curriculo",
        icon: <FiFileText />,
        bgColor: "var(--success)",
        textColor: "white"
      },
      {
        title: "Contato",
        link: "mailto:seuemail@example.com",
        icon: <MdEmail />,
        bgColor: "var(--accent)",
        textColor: "white"
      }
    ]
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -5,
      transition: { 
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className="portfolio-app">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="portfolio-header"
      >
        <div className="profile-container">
          <motion.div 
            className="avatar-container"
            whileHover={{ scale: 1.02 }}
          >
            <div className="avatar-image">
              <img 
                src={profilePhoto} 
                alt="Emanuel Matos" 
                className="profile-photo"
              />
            </div>
          </motion.div>

          <div className="profile-info">
            <motion.h1
              className="profile-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Olá, eu sou <span>Emanuel Matos</span>
            </motion.h1>
            <motion.p
              className="profile-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Desenvolvedor Full Stack | Especialista em Soluções Web
            </motion.p>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="portfolio-content">
        {/* About Section */}
        <motion.section 
          className="about-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <FiUser className="section-icon" />
            <h2 className="section-title">Minha Jornada</h2>
          </motion.div>

          <div className="about-grid">
            {profileData.about.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(item.link)}
                className="about-card"
                style={{ borderTop: `4px solid ${item.color}` }}
              >
                <div className="card-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-content">{item.content}</p>
                <motion.div 
                  className="card-link"
                  whileHover={{ x: 5 }}
                >
                  <span>Explorar</span>
                  <FiArrowRight className="arrow-icon" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className="projects-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <FiCode className="section-icon" />
            <h2 className="section-title">Projetos Destacados</h2>
          </motion.div>

          <div className="projects-grid">
            {profileData.projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(project.link)}
                className="project-card"
                style={{ 
                  backgroundColor: project.bgColor,
                  color: project.textColor
                }}
              >
                <div className="card-icon">
                  {project.icon}
                </div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-tech">{project.tech}</p>
                <motion.div 
                  className="card-link"
                  whileHover={{ x: 5 }}
                >
                  <span>Ver Detalhes</span>
                  <FiExternalLink className="arrow-icon" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="contact-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <FiMail className="section-icon" />
            <h2 className="section-title">Vamos Conversar</h2>
          </motion.div>

          <div className="contact-grid">
            {profileData.contact.map((contact, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                style={{ 
                  backgroundColor: contact.bgColor,
                  color: contact.textColor
                }}
              >
                <div className="card-icon">
                  {contact.icon}
                </div>
                <h3 className="card-title">{contact.title}</h3>
              </motion.a>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Home;