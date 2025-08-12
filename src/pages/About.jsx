import React from 'react'; // Importação adicionada
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { 
  FaReact, FaNodeJs, FaJs, FaGitAlt, 
  FaFigma, FaDatabase, FaServer,
  FaHandshake, FaLightbulb, FaClock,
  FaGraduationCap, FaCertificate
} from 'react-icons/fa6';
import { SiTypescript, SiNextdotjs, SiStyledcomponents, SiJest } from 'react-icons/si';
import { MdWorkHistory, MdOutlineDesignServices, MdSchool } from 'react-icons/md';
import profileImage from './IMG-20250323-WA0010.jpg';
import './About.css';

export default function About() {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    document.title = "Sobre Mim | Portfólio Premium";
    
    const sequence = async () => {
      await controls.start("visible");
    };
    sequence();
  }, [controls]);

  // Configurações de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  };

  const cardHoverAnimation = {
    y: -8,
    boxShadow: "0 15px 30px rgba(106, 44, 173, 0.3)",
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  };

  const scaleUpAnimation = {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.03, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Dados para renderização dinâmica
  const journeyData = [
    {
      period: "2015-2017",
      title: "Início da Jornada",
      description: "Primeiros contatos com programação e desenvolvimento web básico",
      icon: <MdWorkHistory />
    },
    {
      period: "2018-2021",
      title: "Formação Acadêmica",
      description: "Graduação em Ciência da Computação com foco em desenvolvimento web",
      icon: <MdSchool />
    },
    {
      period: "2021-Presente",
      title: "Carreira Profissional",
      description: "Atuação como desenvolvedor full stack em projetos complexos",
      icon: <FaCertificate />
    }
  ];

  const technicalSkills = [
    {
      icon: <FaReact />,
      title: "Front-end",
      items: [
        { icon: <SiNextdotjs />, text: "Node.js" },
        { icon: <SiTypescript />, text: "JavaScript" },
        { icon: <SiStyledcomponents />, text: "Styled Components" }
      ],
      color: "#61DAFB"
    },
    {
      icon: <FaNodeJs />,
      title: "Back-end",
      items: [
        { icon: <FaServer />, text: "Node.js" },
        { icon: <FaDatabase />, text: "MongoDB" },
        { icon: <FaServer />, text: "APIs REST" }
      ],
      color: "#68A063"
    },
    {
      icon: <FaFigma />,
      title: "Design & Tools",
      items: [
        { icon: <FaFigma />, text: "UI/UX Design" },
        { icon: <FaGitAlt />, text: "Git Flow" },
        { icon: <SiJest />, text: "Testes Automatizados" }
      ],
      color: "#A259FF"
    }
  ];

  const softSkills = [
    {
      icon: <FaHandshake />,
      title: "Colaboração",
      description: "Trabalho eficiente em equipes multidisciplinares",
      color: "#4CC9F0"
    },
    {
      icon: <FaLightbulb />,
      title: "Solução Criativa",
      description: "Abordagem inovadora para problemas complexos",
      color: "#F8961E"
    },
    {
      icon: <FaClock />,
      title: "Gestão de Tempo",
      description: "Organização e priorização eficaz de tarefas",
      color: "#43AA8B"
    }
  ];

  const educationData = [
    {
      icon: <FaGraduationCap />,
      period: "2018 - 2021",
      title: "Bacharelado em Ciência da Computação",
      institution: "Universidade Federal de Tecnologia",
      color: "#6A2CAD"
    },
    {
      icon: <FaCertificate />,
      period: "2022",
      title: "Certificação em React Avançado",
      institution: "Plataforma de Cursos Tech",
      color: "#2C8CAD"
    }
  ];

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
              loading="lazy"
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
            <motion.h1
              animate={pulseAnimation}
            >
              <span className="text-gradient">Sobre Mim</span>
            </motion.h1>
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <MdWorkHistory className="section-icon" />
            <h2>Minha <span className="text-highlight">Jornada</span></h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="section-description">
            Minha trajetória na tecnologia começou em 2015 e desde então venho me especializando em desenvolvimento de software e design de interfaces.
          </motion.p>
          
          <div className="timeline">
            {journeyData.map((item, index) => (
              <motion.div 
                key={index} 
                className="timeline-item" 
                variants={itemVariants}
              >
                <div className="timeline-marker">
                  <div className="timeline-dot" style={{ backgroundColor: item.color || '#6a2cad' }}>
                    {item.icon && React.cloneElement(item.icon, { size: 12 })}
                  </div>
                  {index !== journeyData.length - 1 && <div className="timeline-line"></div>}
                </div>
                <div className="timeline-content">
                  <div className="timeline-date">{item.period}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="section skills-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <MdOutlineDesignServices className="section-icon" />
            <h2>Habilidades <span className="text-highlight">Técnicas</span></h2>
          </motion.div>
          
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-card"
                variants={itemVariants}
                whileHover={cardHoverAnimation}
                whileTap={scaleUpAnimation}
              >
                <motion.div 
                  className="skill-icon-wrapper"
                  style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {React.cloneElement(skill.icon, { size: 28 })}
                </motion.div>
                <h3>{skill.title}</h3>
                <ul>
                  {skill.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ x: 5 }}
                    >
                      {React.cloneElement(item.icon, { className: "inline-icon", color: skill.color })}
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Soft Skills Section */}
        <motion.section
          className="section soft-skills-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <FaLightbulb className="section-icon" />
            <h2>Soft <span className="text-highlight">Skills</span></h2>
          </motion.div>
          
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className="soft-skill-card"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(106, 44, 173, 0.2)"
                }}
                whileTap={scaleUpAnimation}
              >
                <motion.div 
                  className="soft-skill-icon-wrapper"
                  style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                  animate={pulseAnimation}
                >
                  {React.cloneElement(skill.icon, { size: 24 })}
                </motion.div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="section education-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <MdSchool className="section-icon" />
            <h2>Formação <span className="text-highlight">Acadêmica</span></h2>
          </motion.div>
          
          <div className="education-cards">
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                className="education-card"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px rgba(106, 44, 173, 0.15)"
                }}
                whileTap={scaleUpAnimation}
              >
                <motion.div 
                  className="education-icon"
                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                >
                  {item.icon}
                </motion.div>
                <div className="education-content">
                  <div className="education-period">{item.period}</div>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}