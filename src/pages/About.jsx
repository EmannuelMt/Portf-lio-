import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { 
  FaReact, FaNodeJs, FaJs, FaGitAlt, 
  FaFigma, FaDatabase, FaServer,
  FaHandshake, FaLightbulb, FaClock,
  FaGraduationCap, FaCertificate,
  FaRocket, FaCode, FaBrain
} from 'react-icons/fa6';
import { 
  SiTypescript, SiNextdotjs, SiStyledcomponents, SiJest,
  SiTailwindcss, SiExpress, SiMongodb
} from 'react-icons/si';
import { 
  MdWorkHistory, MdOutlineDesignServices, MdSchool,
  MdPrecisionManufacturing
} from 'react-icons/md';
import { TbTransitionTop } from 'react-icons/tb';
import profileImage from './IMG-20250323-WA0010.jpg';
import styles from './About.module.css';

export default function About() {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    document.title = "Sobre Mim | Emannuel - Desenvolvedor Full Stack";
    controls.start("visible");
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

  const rotateAnimation = {
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

  // Dados para renderização dinâmica
  const journeyData = [
    {
      period: "2024 – 2025",
      title: "Início da Jornada",
      description: "Primeiros contatos com programação e desenvolvimento web básico",
      icon: <FaCode />,
      color: "#4CC9F0"
    },
    {
      period: "2025 – Presente",
      title: "Carreira Profissional",
      description: "Em transição para a área de tecnologia, buscando oportunidade no mercado como desenvolvedor web",
      icon: <TbTransitionTop />,
      color: "#F8961E"
    },
    {
      period: "2026 (Planejado)",
      title: "Formação Acadêmica",
      description: "Ingresso no curso de Engenharia de Software para aprofundar conhecimentos em desenvolvimento de sistemas",
      icon: <FaGraduationCap />,
      color: "#43AA8B"
    }
  ];

  const technicalSkills = [
    {
      icon: <FaReact />,
      title: "Front-end",
      items: [
        { icon: <SiNextdotjs />, text: "Next.js" },
        { icon: <SiTypescript />, text: "TypeScript" },
        { icon: <SiTailwindcss />, text: "Tailwind CSS" },
        { icon: <SiStyledcomponents />, text: "Styled Components" }
      ],
      color: "#61DAFB"
    },
    {
      icon: <FaNodeJs />,
      title: "Back-end",
      items: [
        { icon: <FaServer />, text: "Node.js" },
        { icon: <SiExpress />, text: "Express.js" },
        { icon: <SiMongodb />, text: "MongoDB" },
        { icon: <FaDatabase />, text: "SQL" }
      ],
      color: "#68A063"
    },
    {
      icon: <FaFigma />,
      title: "Design & Tools",
      items: [
        { icon: <FaFigma />, text: "UI/UX Design" },
        { icon: <FaGitAlt />, text: "Git Flow" },
        { icon: <SiJest />, text: "Testes Automatizados" },
        { icon: <MdPrecisionManufacturing />, text: "Indústria 4.0" }
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
    },
    {
      icon: <FaBrain />,
      title: "Aprendizado Rápido",
      description: "Facilidade para assimilar novas tecnologias",
      color: "#6A2CAD"
    }
  ];

  const educationData = [
    {
      icon: <FaGraduationCap />,
      title: "Engenharia de Software",
      description: "Ingresso no curso de Engenharia de Software para aprofundar conhecimentos em desenvolvimento de sistemas",
      color: "#6A2CAD"
    }
  ];

  return (
    <motion.div 
      className={styles.aboutContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div 
            className={styles.profileImageContainer}
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
              alt="Emannuel - Desenvolvedor Full Stack" 
              className={styles.profileImage}
              loading="lazy"
            />
            <div className={styles.profileImageBorder}></div>
            <div className={styles.profileImageGlow}></div>
          </motion.div>
          
          <motion.div
            className={styles.heroText}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.h1 animate={pulseAnimation}>
              <span className={styles.textGradient}>Sobre Mim</span>
            </motion.h1>
            <p className={styles.subtitle}>
              Desenvolvedor Full Stack & Designer de Interfaces
            </p>
            
            <motion.div 
              className={styles.bioText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <p>
                Sou Emannuel, tenho 20 anos e iniciei minha trajetória na tecnologia em 2024. Desde então, venho me especializando em desenvolvimento de software, web e design de interfaces.
              </p>
              <p>
                Atuo como desenvolvedor web fullstack, focado em transformar ideias em experiências digitais únicas, rápidas e acessíveis, criando sites modernos, bots automatizados e landing pages estratégicas para pequenos negócios, criadores de conteúdo e empreendedores que desejam se destacar online — sem complicação ou promessas vazias.
              </p>
              <p>
                Trabalho com foco em agilidade, personalização e eficiência, unindo técnica, criatividade e suporte real. Encaro cada projeto como uma missão, com planejamento, dedicação e entrega pontual.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className={styles.contentWrapper}>
        {/* Journey Section */}
        <motion.section
          className={`${styles.section} ${styles.journeySection}`}
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className={styles.sectionHeader}>
            <MdWorkHistory className={styles.sectionIcon} />
            <h2>Linha do Tempo <span className={styles.textHighlight}>Profissional</span></h2>
          </motion.div>
          
          <div className={styles.timeline}>
            {journeyData.map((item, index) => (
              <motion.div 
                key={index} 
                className={styles.timelineItem} 
                variants={itemVariants}
              >
                <div className={styles.timelineMarker}>
                  <motion.div 
                    className={styles.timelineDot} 
                    style={{ backgroundColor: item.color }}
                    animate={rotateAnimation}
                  >
                    {item.icon && React.cloneElement(item.icon, { size: 14 })}
                  </motion.div>
                  {index !== journeyData.length - 1 && <div className={styles.timelineLine}></div>}
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineDate}>{item.period}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className={`${styles.section} ${styles.skillsSection}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className={styles.sectionHeader}>
            <MdOutlineDesignServices className={styles.sectionIcon} />
            <h2>Habilidades <span className={styles.textHighlight}>Técnicas</span></h2>
          </motion.div>
          
          <div className={styles.skillsGrid}>
            {technicalSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className={styles.skillCard}
                variants={itemVariants}
                whileHover={cardHoverAnimation}
                whileTap={scaleUpAnimation}
              >
                <motion.div 
                  className={styles.skillIconWrapper}
                  style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {React.cloneElement(skill.icon, { size: 28 })}
                </motion.div>
                <h3>{skill.title}</h3>
                <ul className={styles.skillList}>
                  {skill.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ x: 5 }}
                    >
                      {React.cloneElement(item.icon, { className: styles.inlineIcon, color: skill.color })}
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
          className={`${styles.section} ${styles.softSkillsSection}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className={styles.sectionHeader}>
            <FaLightbulb className={styles.sectionIcon} />
            <h2>Soft <span className={styles.textHighlight}>Skills</span></h2>
          </motion.div>
          
          <div className={styles.softSkillsGrid}>
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className={styles.softSkillCard}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: `0 15px 30px ${skill.color}30`
                }}
                whileTap={scaleUpAnimation}
              >
                <motion.div 
                  className={styles.softSkillIconWrapper}
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
          className={`${styles.section} ${styles.educationSection}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className={styles.sectionHeader}>
            <MdSchool className={styles.sectionIcon} />
            <h2>Formação <span className={styles.textHighlight}>Acadêmica</span></h2>
          </motion.div>
          
          <div className={styles.educationCards}>
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                className={styles.educationCard}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: `0 10px 25px ${item.color}20`
                }}
                whileTap={scaleUpAnimation}
              >
                <motion.div 
                  className={styles.educationIcon}
                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                  animate={pulseAnimation}
                >
                  {item.icon}
                </motion.div>
                <div className={styles.educationContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}