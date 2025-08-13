import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { 
  FaReact, FaNodeJs, FaJs, FaGitAlt, 
  FaHtml5, FaCss3Alt, FaDocker,
  FaHandshake, FaLightbulb, FaClock,
  FaGraduationCap, FaChartLine
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiStyledcomponents, SiJest,
  SiGraphql, SiExpress, SiMongodb
} from 'react-icons/si';
import { 
  MdWorkHistory, MdOutlineDesignServices, MdSchool,
  MdApi
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
    boxShadow: "var(--shadow-lg)",
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
      icon: <FaChartLine />,
      color: "var(--accent)"
    },
    {
      period: "2025 – Presente",
      title: "Carreira Profissional",
      description: "Em transição para a área de tecnologia, buscando oportunidade no mercado como desenvolvedor web",
      icon: <TbTransitionTop />,
      color: "var(--primary)"
    },
    {
      period: "2026 (Planejado)",
      title: "Formação Acadêmica",
      description: "Ingresso no curso de Engenharia de Software para aprofundar conhecimentos em desenvolvimento de sistemas",
      icon: <FaGraduationCap />,
      color: "var(--secondary)"
    }
  ];

  const technicalSkills = {
    frontend: {
      title: "Frontend",
      icon: <FaReact />,
      color: "var(--primary)",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 75, status: "Domino" },
        { name: "CSS3", icon: <FaCss3Alt />, level: 75, status: "Domino" },
        { name: "JavaScript", icon: <FaJs />, level: 78, status: "Domino" },
        { name: "React", icon: <FaReact />, level: 60, status: "Domino" }
      ]
    },
    backend: {
      title: "Backend",
      icon: <FaNodeJs />,
      color: "var(--secondary)",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 25, status: "Aprendendo" },
        { name: "MongoDB", icon: <SiMongodb />, level: 30, status: "Domino" },
        { name: "Express", icon: <SiExpress />, level: 20, status: "Aprendendo" },
        { name: "REST APIs", icon: <MdApi />, level: 15, status: "Aprendendo" }
      ]
    },
    tools: {
      title: "Ferramentas",
      icon: <FaGitAlt />,
      color: "var(--accent)",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 35, status: "Aprendendo" },
        { name: "TypeScript", icon: <SiTypescript />, level: 15, status: "Aprendendo" },
        { name: "GraphQL", icon: <SiGraphql />, level: 10, status: "Aprendendo" },
        { name: "Docker", icon: <FaDocker />, level: 10, status: "Aprendendo" }
      ]
    }
  };

  const softSkills = [
    {
      icon: <FaHandshake />,
      title: "Colaboração",
      description: "Trabalho eficiente em equipes multidisciplinares",
      color: "var(--primary-light)"
    },
    {
      icon: <FaLightbulb />,
      title: "Solução Criativa",
      description: "Abordagem inovadora para problemas complexos",
      color: "var(--accent-light)"
    },
    {
      icon: <FaClock />,
      title: "Gestão de Tempo",
      description: "Organização e priorização eficaz de tarefas",
      color: "var(--secondary-light)"
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
            <h2>Domínio <span className={styles.textHighlight}>Técnico</span></h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className={styles.sectionDescription}>
            Tecnologias que aplico para criar soluções robustas
          </motion.p>

          <div className={styles.skillsMasterContainer}>
            {Object.entries(technicalSkills).map(([key, category]) => (
              <motion.div 
                key={key}
                className={styles.skillCategory}
                variants={itemVariants}
              >
                <motion.div 
                  className={styles.skillCategoryHeader}
                  style={{ borderColor: category.color }}
                  whileHover={{ x: 5 }}
                >
                  <div className={styles.skillCategoryIcon} style={{ color: category.color }}>
                    {category.icon}
                  </div>
                  <h3>{category.title}</h3>
                </motion.div>
                
                <div className={styles.skillProgressContainer}>
                  {category.skills.map((skill, index) => (
                    <div key={index} className={styles.skillProgressItem}>
                      <div className={styles.skillInfo}>
                        <div className={styles.skillIcon}>
                          {React.cloneElement(skill.icon, { color: category.color })}
                        </div>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillStatus} style={{ color: category.color }}>
                          {skill.status}
                        </span>
                      </div>
                      <div className={styles.progressBar}>
                        <motion.div 
                          className={styles.progressFill}
                          style={{ backgroundColor: category.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                        <span className={styles.progressText}>{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
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
                  boxShadow: "var(--shadow-md)"
                }}
                whileTap={scaleUpAnimation}
                style={{ backgroundColor: skill.color }}
              >
                <motion.div 
                  className={styles.softSkillIconWrapper}
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
      </div>
    </motion.div>
  );
}