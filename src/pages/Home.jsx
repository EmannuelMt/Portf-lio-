import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  FiUser, FiCode, FiBriefcase, FiMail, 
  FiGithub, FiLinkedin, FiFileText, FiGlobe,
  FiAward, FiClock, FiPhone, FiSend
} from 'react-icons/fi';
import { 
  FaReact, FaNodeJs, FaFigma, FaAws,
  FaDocker, FaGitAlt, FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiGraphql, 
  SiMongodb, SiTailwindcss, SiJest
} from 'react-icons/si';
import profilePhoto from './IMG-20250323-WA0010.jpg';
import './Home.css'; 

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const projects = [
    {
      title: "Ecos Da Realidade",
      description: "Solução completa com carrinho e pagamento integrado",
      technologies: ["Node.js", "JavaScript", "MongoDB", "CSS", "React", "Firebase"],
      link: "#"
    },
    {
      title: "Little Ideas",
      description: "Plataforma de compartilhamento de ideias criativas com sistema de votação e comentários. Desenvolvido com React e Firebase para armazenamento em tempo real. EM DESENVOLVIMENTO",
      technologies: ["Node.js", "JavaScript", "MongoDB", "CSS", "React"],
      link: "https://little-ideias.vercel.app/"
    },
    {
      title: "EmannuelDev",
      description: "Solução de delivery com geolocalização",
      technologies: ["React", "Node.js", "CSS"],
      link: "https://emannueldev.netlify.app/"
    }
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90, icon: <FaReact /> },
        { name: "Html", level: 85, icon: <SiNextdotjs /> },
        { name: "JavaScript", level: 80, icon: <SiTypescript /> }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 88, icon: <FaNodeJs /> },
        { name: "Express", level: 75, icon: <SiGraphql /> },
        { name: "MongoDB", level: 82, icon: <SiMongodb /> }
      ]
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", level: 78, icon: <FaDocker /> },
        { name: "AWS", level: 70, icon: <FaAws /> },
        { name: "Git", level: 92, icon: <FaGitAlt /> }
      ]
    }
  ];

  return (
    <div className="portfolio-app">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-background"
          style={{ y, opacity }}
        />
        
        <div className="hero-container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Emanuel Matos</h1>
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Desenvolvedor Full Stack
              </motion.p>
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Transformo ideias em experiências digitais excepcionais com soluções tecnológicas inovadoras.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="profile-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ rotate: 2, scale: 1.02 }}
            >
              <img 
                src={profilePhoto} 
                alt="Emanuel Matos" 
                className="profile-photo"
                width={280}
                height={280}
                loading="eager"
              />
              <div className="profile-border" />
            </motion.div>
          </div>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="stat-item">
              <FiAward className="stat-icon" />
              <div>
                <span className="stat-value">50</span>
                <span className="stat-label">Projetos</span>
              </div>
            </div>
            <div className="stat-item">
              <FiClock className="stat-icon" />
              <div>
                <span className="stat-value">1 ano </span>
                <span className="stat-label">Experiência</span>
              </div>
            </div>
            <div className="stat-item">
              <FiUser className="stat-icon" />
              <div>
                <span className="stat-value">100%</span>
                <span className="stat-label">Satisfação</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section" ref={ref}>
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <FiUser className="section-icon" />
            <h2>Sobre Mim</h2>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-text">
              <p>
                <FiUser className="inline-icon" /> Sou um desenvolvedor full stack com 2 anos de experiência no mercado, especializado em criar soluções web performáticas e escaláveis.
              </p>
              <p>
                <FiCode className="inline-icon" /> Minha abordagem combina código limpo, boas práticas de desenvolvimento e atenção aos detalhes para entregar produtos de alta qualidade.
              </p>
              
              <div className="about-details">
                <div className="detail-item">
                  <FiUser />
                  <div>
                    <strong>Nome</strong>
                    <span>Emanuel Matos</span>
                  </div>
                </div>
                <div className="detail-item">
                  <FiClock />
                  <div>
                    <strong>Idade</strong>
                    <span>20 anos</span>
                  </div>
                </div>
                <div className="detail-item">
                  <FiGlobe />
                  <div>
                    <strong>Localização</strong>
                    <span>Anápolis, BR</span>
                  </div>
                </div>
                <div className="detail-item">
                  <FiPhone />
                  <div>
                    <strong>Contato</strong>
                    <span>emannuelmatosdeoliveira@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <FiCode className="section-icon" />
            <h2>Habilidades</h2>
          </motion.div>

          <motion.div 
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {skills.map((category, index) => (
              <motion.div 
                key={index}
                className="skill-category"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="category-header">
                  <h3>{category.category}</h3>
                </div>
                <ul>
                  {category.items.map((skill, i) => (
                    <li key={i}>
                      <div className="skill-icon">{skill.icon}</div>
                      <div className="skill-info">
                        <span>{skill.name}</span>
                        <div className="skill-bar">
                          <motion.div 
                            className="skill-level"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <FiBriefcase className="section-icon" />
            <h2>Projetos</h2>
          </motion.div>

          <motion.div 
            className="projects-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="project-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`project-image project-${index + 1}`}>
                  <div className="project-overlay">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <FiMail className="section-icon" />
            <h2>Contato</h2>
          </motion.div>

          <motion.div 
            className="contact-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-info">
              <h3><FiUser className="icon" /> Informações</h3>
              <div className="contact-method">
                <FiMail />
                <span>emannuelmatosdeoliveira@gmail.com</span>
              </div>
              <div className="contact-method">
                <FiGithub />
                <a href="https://github.com/EmannuelMt" target="_blank" rel="noopener noreferrer">
                  github.com/EmannuelMt
                </a>
              </div>
              <div className="contact-method">
                <FiLinkedin />
                <a href="https://linkedin.com/in/emannuel" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/emannuel
                </a>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name"><FiUser className="icon" /> Nome</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email"><FiMail className="icon" /> Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message"><FiFileText className="icon" /> Mensagem</label>
                <textarea id="message" required></textarea>
              </div>
              <motion.button 
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiSend className="icon" /> Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;