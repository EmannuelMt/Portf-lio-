import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaDatabase, FaServer, FaGitAlt,
  FaDocker, FaCode
} from 'react-icons/fa';
import {
  SiTypescript, SiGraphql, SiExpress
} from 'react-icons/si';
import { Storage } from '../utils/storage';
import ProgressBar from '../components/ProgressBar';
import './Studies.module.css';

// Mapeamento de ícones com cores temáticas
const iconConfig = {
  HTML5: { icon: FaHtml5, color: '#E34F26' },
  CSS3: { icon: FaCss3Alt, color: '#1572B6' },
  JavaScript: { icon: FaJs, color: '#F7DF1E' },
  React: { icon: FaReact, color: '#61DAFB' },
  "Node.js": { icon: FaNodeJs, color: '#339933' },
  MongoDB: { icon: FaDatabase, color: '#47A248' },
  Express: { icon: SiExpress, color: '#000000' },
  "REST APIs": { icon: FaServer, color: '#2496ED' },
  Git: { icon: FaGitAlt, color: '#F05032' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  GraphQL: { icon: SiGraphql, color: '#E10098' },
  Docker: { icon: FaDocker, color: '#2496ED' }
};

// Função para obter o componente de ícone com configuração
const getIconComponent = (name) => {
  const config = iconConfig[name] || { icon: FaCode, color: '#6C757D' };
  const IconComponent = config.icon;
  return <IconComponent size={24} color={config.color} />;
};

// Dados completos com descrições e metadados
const techData = [
  {
    id: 1,
    name: "HTML5",
    progress: 75,
    category: "Frontend",
    status: "Domino",
    description: "Estruturação semântica de páginas web com as melhores práticas de acessibilidade e SEO.",
    lastUpdated: "2023-10-15"
  },
  {
    id: 2,
    name: "CSS3",
    progress: 75,
    category: "Frontend",
    status: "Domino",
    description: "Estilização avançada com Flexbox, Grid, animações e design responsivo.",
    lastUpdated: "2023-10-18"
  },
  {
    id: 3,
    name: "JavaScript",
    progress: 78,
    category: "Frontend",
    status: "Domino",
    description: "Programação funcional e orientada a objetos, manipulação de DOM e ES6+ features.",
    lastUpdated: "2023-11-05"
  },
  {
    id: 4,
    name: "React",
    progress: 60,
    category: "Frontend",
    status: "Domino",
    description: "Desenvolvimento de componentes reutilizáveis, gerenciamento de estado com Hooks e Context API.",
    lastUpdated: "2023-11-20"
  },
  {
    id: 5,
    name: "Node.js",
    progress: 25,
    category: "Backend",
    status: "Aprendendo",
    description: "Construção de APIs RESTful e aplicações server-side com JavaScript.",
    lastUpdated: "2023-12-01"
  },
  {
    id: 6,
    name: "MongoDB",
    progress: 30,
    category: "Backend",
    status: "Domino",
    description: "Banco de dados NoSQL para aplicações escaláveis com modelagem de documentos.",
    lastUpdated: "2023-09-15"
  },
  {
    id: 7,
    name: "Express",
    progress: 20,
    category: "Backend",
    status: "Aprendendo",
    description: "Framework minimalista para construção de aplicações web e APIs em Node.js.",
    lastUpdated: "2023-12-10"
  },
  {
    id: 8,
    name: "REST APIs",
    progress: 15,
    category: "Backend",
    status: "Aprendendo",
    description: "Desenvolvimento de APIs seguindo princípios REST com autenticação JWT.",
    lastUpdated: "2023-12-12"
  },
  {
    id: 9,
    name: "Git",
    progress: 35,
    category: "Ferramentas",
    status: "Aprendendo",
    description: "Controle de versão distribuído com GitHub para colaboração em projetos.",
    lastUpdated: "2023-08-20"
  },
  {
    id: 10,
    name: "TypeScript",
    progress: 15,
    category: "Ferramentas",
    status: "Aprendendo",
    description: "JavaScript tipado para desenvolvimento mais seguro e escalável.",
    lastUpdated: "2023-12-05"
  },
  {
    id: 11,
    name: "GraphQL",
    progress: 10,
    category: "Ferramentas",
    status: "Aprendendo",
    description: "Linguagem de consulta para APIs com recuperação de dados eficiente.",
    lastUpdated: "2023-11-28"
  },
  {
    id: 12,
    name: "Docker",
    progress: 10,
    category: "Ferramentas",
    status: "Aprendendo",
    description: "Containerização de aplicações para deploy consistente em qualquer ambiente.",
    lastUpdated: "2023-12-15"
  }
].map(tech => ({
  ...tech,
  icon: getIconComponent(tech.name)
}));

const StatusBadge = ({ status }) => {
  const statusConfig = {
    Domino: { color: '#2EC4B6', bgColor: 'rgba(46, 196, 182, 0.15)' },
    Aprendendo: { color: '#F72585', bgColor: 'rgba(247, 37, 133, 0.15)' }
  };

  const config = statusConfig[status] || statusConfig.Aprendendo;

  return (
    <span
      className="status-badge"
      style={{
        color: config.color,
        backgroundColor: config.bgColor
      }}
    >
      {status}
    </span>
  );
};

export default function Studies() {
  const [studies, setStudies] = useState(techData);
  const [expandedCard, setExpandedCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    Storage.addLastVisited('/estudos');
    const savedStudies = Storage.getStudies();
    if (savedStudies && savedStudies.length > 0) {
      setStudies(savedStudies);
    }
  }, []);

  const updateProgress = (id, newProgress) => {
    const updatedStudies = studies.map(study =>
      study.id === id ? {
        ...study,
        progress: Math.min(100, Math.max(0, newProgress)),
        lastUpdated: new Date().toISOString().split('T')[0]
      } : study
    );
    setStudies(updatedStudies);
    Storage.setStudies(updatedStudies);
  };

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const filteredStudies = useMemo(() => {
    return studies.filter(study =>
      study.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [studies, searchTerm]);

  const studiesByCategory = useMemo(() => {
    return filteredStudies.reduce((acc, study) => {
      if (!acc[study.category]) {
        acc[study.category] = [];
      }
      acc[study.category].push(study);
      return acc;
    }, {});
  }, [filteredStudies]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="studies-container"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="studies-header"
      >
        <h1 className="studies-title">Domínio Técnico</h1>
        <p className="studies-subtitle">
          Tecnologias que aplico para criar soluções robustas e escaláveis
        </p>

        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquisar tecnologias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </motion.div>

      {Object.entries(studiesByCategory).map(([category, items], catIndex) => (
        <motion.section
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          className="study-category"
        >
          <motion.h2
            className="category-title"
            whileHover={{ x: 5 }}
          >
            {category}
            <span className="category-count">{items.length}</span>
          </motion.h2>

          <div className="study-grid">
            {items.map((study, index) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.05
                }}
                whileHover={{ y: -5 }}
                className={`study-card ${expandedCard === study.id ? 'expanded' : ''}`}
                onClick={() => toggleExpand(study.id)}
              >
                <div className="card-header">
                  <div className="tech-icon" style={{ backgroundColor: `${iconConfig[study.name]?.color}20` }}>
                    {study.icon}
                  </div>
                  <div className="card-title-wrapper">
                    <h3>{study.name}</h3>
                    <div className="last-updated">Atualizado: {study.lastUpdated}</div>
                  </div>
                  <StatusBadge status={study.status} />
                </div>

                <div className="progress-container">
                  <ProgressBar progress={study.progress} color={iconConfig[study.name]?.color} />
                  <span className="progress-value">{study.progress}%</span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={study.progress}
                  onChange={(e) => updateProgress(study.id, parseInt(e.target.value))}
                  className="progress-slider"
                  onClick={(e) => e.stopPropagation()}
                  style={{ '--thumb-color': iconConfig[study.name]?.color || '#4361ee' }}
                />

                <AnimatePresence>
                  {expandedCard === study.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="card-description"
                    >
                      <p>{study.description}</p>
                      <div className="skill-meta">
                        <div className="meta-item">
                          <span className="meta-label">Nível:</span>
                          <span className="meta-value">
                            {study.progress < 30 ? 'Iniciante' :
                              study.progress < 60 ? 'Intermediário' :
                                study.progress < 85 ? 'Avançado' : 'Especialista'}
                          </span>
                        </div>
                        <div className="meta-item">
                          <span className="meta-label">Última atualização:</span>
                          <span className="meta-value">{study.lastUpdated}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>
      ))}
    </motion.div>
  );
}