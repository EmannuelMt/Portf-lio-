import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { 
  FaReact, FaNodeJs, FaJs, FaGitAlt, 
  FaFigma, FaDatabase, FaServer,
  FaHandshake, FaLightbulb, FaClock,
  FaGraduationCap, FaCertificate
} from 'react-icons/fa6'
import { SiTypescript, SiNextdotjs, SiStyledcomponents, SiJest } from 'react-icons/si'
import { MdWorkHistory, MdOutlineDesignServices, MdSchool } from 'react-icons/md'
import profileImage from '../assets/your-photo.jpg'
import './About.css'

export default function About() {
  const controls = useAnimation()
  const sectionRef = useRef(null)

  useEffect(() => {
    document.title = "Sobre Mim | Portfólio Premium"
    
    const sequence = async () => {
      await controls.start("visible")
    }
    sequence()
  }, [controls])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  }

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  }

  const cardHover = {
    hover: {
      y: -8,
      boxShadow: "0 15px 30px rgba(106, 44, 173, 0.3)",
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  }

  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div 
            className="profile-image-container"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            whileHover={{
              rotate: 2,
              scale: 1.02
            }}
          >
            <img 
              src={profileImage} 
              alt="Minha Foto" 
              className="profile-image"
            />
            <div className="profile-image-border"></div>
            <div className="profile-image-glow"></div>
          </motion.div>
          
          <motion.div
            className="hero-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h1>
              <span className="text-gradient">Sobre Mim</span>
            </h1>
            <p className="subtitle">
              Desenvolvedor Full Stack & Designer de Interfaces
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="content-wrapper">
        {/* Journey Section */}
        <motion.section
          className="section journey-section"
          ref={sectionRef}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={item} className="section-header">
            <MdWorkHistory className="section-icon" />
            <h2>Minha <span className="text-highlight">Jornada</span></h2>
          </motion.div>
          
          <motion.p variants={item} className="section-description">
            Minha trajetória na tecnologia começou em 2015 e desde então venho me especializando em desenvolvimento de software e design de interfaces.
          </motion.p>
          
          <div className="timeline">
            <motion.div className="timeline-item" variants={item}>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2015-2017</div>
                <h3>Início da Jornada</h3>
                <p>Primeiros contatos com programação e desenvolvimento web básico</p>
              </div>
            </motion.div>
            
            <motion.div className="timeline-item" variants={item}>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2018-2021</div>
                <h3>Formação Acadêmica</h3>
                <p>Graduação em Ciência da Computação com foco em desenvolvimento web</p>
              </div>
            </motion.div>
            
            <motion.div className="timeline-item" variants={item}>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2021-Presente</div>
                <h3>Carreira Profissional</h3>
                <p>Atuação como desenvolvedor full stack em projetos complexos</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="section skills-section"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={item} className="section-header">
            <MdOutlineDesignServices className="section-icon" />
            <h2>Habilidades <span className="text-highlight">Técnicas</span></h2>
          </motion.div>
          
          <div className="skills-grid">
            <motion.div 
              className="skill-card"
              variants={item}
              whileHover="hover"
              variants={cardHover}
            >
              <div className="skill-icon-wrapper">
                <FaReact className="skill-icon" />
              </div>
              <h3>Front-end</h3>
              <ul>
                <li><SiNextdotjs className="inline-icon" /> Next.js</li>
                <li><SiTypescript className="inline-icon" /> TypeScript</li>
                <li><SiStyledcomponents className="inline-icon" /> Styled Components</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="skill-card"
              variants={item}
              whileHover="hover"
              variants={cardHover}
            >
              <div className="skill-icon-wrapper">
                <FaNodeJs className="skill-icon" />
              </div>
              <h3>Back-end</h3>
              <ul>
                <li><FaServer className="inline-icon" /> Node.js</li>
                <li><FaDatabase className="inline-icon" /> MongoDB</li>
                <li><FaServer className="inline-icon" /> APIs REST</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="skill-card"
              variants={item}
              whileHover="hover"
              variants={cardHover}
            >
              <div className="skill-icon-wrapper">
                <FaFigma className="skill-icon" />
              </div>
              <h3>Design & Tools</h3>
              <ul>
                <li><FaFigma className="inline-icon" /> UI/UX Design</li>
                <li><FaGitAlt className="inline-icon" /> Git Flow</li>
                <li><SiJest className="inline-icon" /> Testes Automatizados</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Soft Skills Section */}
        <motion.section
          className="section soft-skills-section"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={item} className="section-header">
            <FaLightbulb className="section-icon" />
            <h2>Soft <span className="text-highlight">Skills</span></h2>
          </motion.div>
          
          <div className="soft-skills-grid">
            <motion.div 
              className="soft-skill-card"
              variants={item}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px rgba(106, 44, 173, 0.2)"
              }}
            >
              <div className="soft-skill-icon-wrapper">
                <FaHandshake className="soft-skill-icon" />
              </div>
              <h3>Colaboração</h3>
              <p>Trabalho eficiente em equipes multidisciplinares</p>
            </motion.div>
            
            <motion.div 
              className="soft-skill-card"
              variants={item}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px rgba(106, 44, 173, 0.2)"
              }}
            >
              <div className="soft-skill-icon-wrapper">
                <FaLightbulb className="soft-skill-icon" />
              </div>
              <h3>Solução Criativa</h3>
              <p>Abordagem inovadora para problemas complexos</p>
            </motion.div>
            
            <motion.div 
              className="soft-skill-card"
              variants={item}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px rgba(106, 44, 173, 0.2)"
              }}
            >
              <div className="soft-skill-icon-wrapper">
                <FaClock className="soft-skill-icon" />
              </div>
              <h3>Gestão de Tempo</h3>
              <p>Organização e priorização eficaz de tarefas</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="section education-section"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={item} className="section-header">
            <MdSchool className="section-icon" />
            <h2>Formação <span className="text-highlight">Acadêmica</span></h2>
          </motion.div>
          
          <div className="education-cards">
            <motion.div 
              className="education-card"
              variants={item}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(106, 44, 173, 0.15)"
              }}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <div className="education-period">2018 - 2021</div>
                <h3>Bacharelado em Ciência da Computação</h3>
                <p>Universidade Federal de Tecnologia</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="education-card"
              variants={item}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(106, 44, 173, 0.15)"
              }}
            >
              <div className="education-icon">
                <FaCertificate />
              </div>
              <div className="education-content">
                <div className="education-period">2022</div>
                <h3>Certificação em React Avançado</h3>
                <p>Plataforma de Cursos Tech</p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}