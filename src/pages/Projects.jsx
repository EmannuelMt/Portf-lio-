import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiFilter, 
  FiStar, 
  FiGitBranch,
  FiGithub,
  FiExternalLink,
  FiCode,
  FiSearch,
  FiX
} from 'react-icons/fi';
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaFigma
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiFramer
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Little Ideias",
    description: "Plataforma de compartilhamento de ideias criativas com sistema de votação e comentários.",
    techs: ["React", "Firebase", "CSS"],
    link: "#",
    repo: "#",
    isFavorite: true,
    featured: true
  },
  // ... outros projetos ...
];

const techOptions = [
  { value: 'Todas', label: 'Todas', icon: <FiCode />, color: '#6c757d' },
  { value: 'React', label: 'React', icon: <FaReact />, color: '#61dafb' },
  { value: 'Next', label: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
  { value: 'Node', label: 'Node.js', icon: <FaNodeJs />, color: '#68a063' },
  { value: 'Firebase', label: 'Firebase', icon: <SiFirebase />, color: '#ffcb2b' },
  { value: 'CSS', label: 'CSS', icon: <FaCss3Alt />, color: '#2965f1' },
  { value: 'TypeScript', label: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
  { value: 'Figma', label: 'Figma', icon: <FaFigma />, color: '#a259ff' },
  { value: 'Framer', label: 'Framer Motion', icon: <TbBrandFramerMotion />, color: '#0055ff' }
];

const Button = ({ 
  children, 
  icon: Icon, 
  variant = 'primary',
  className = '',
  ...props 
}) => (
  <motion.button
    className={`button ${variant} ${className}`}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    {...props}
  >
    {Icon && <Icon className="button-icon" />}
    <span>{children}</span>
  </motion.button>
);

const ProjectCard = ({ project, toggleFavorite }) => {
  const getTechColor = (tech) => 
    techOptions.find(option => option.value === tech)?.color || '#6c757d';

  return (
    <motion.article
      className={`project-card ${project.featured ? 'featured' : ''}`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      layout
    >
      {project.featured && (
        <div className="featured-badge">Destaque</div>
      )}
      
      <header className="card-header">
        <h3>{project.title}</h3>
        <Button 
          icon={FiStar}
          className={`favorite-btn ${project.isFavorite ? 'active' : ''}`}
          onClick={() => toggleFavorite(project.id)}
          aria-label={project.isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          variant="icon"
        />
      </header>
      
      <p className="card-description">{project.description}</p>
      
      <div className="card-techs">
        {project.techs.map(tech => (
          <motion.span 
            key={tech}
            style={{ '--tech-color': getTechColor(tech) }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {techOptions.find(option => option.value === tech)?.icon || <FiCode />}
            {tech}
          </motion.span>
        ))}
      </div>
      
      <footer className="card-actions">
        <Button 
          icon={FiExternalLink}
          variant="primary"
          as="a"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar
        </Button>
        
        {project.repo && (
          <Button 
            icon={FiGithub}
            variant="secondary"
            as="a"
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Código
          </Button>
        )}
      </footer>
    </motion.article>
  );
};

export default function Projects() {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : projectsData;
  });
  const [filter, setFilter] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const toggleFavorite = useCallback((id) => {
    setProjects(prevProjects => 
      prevProjects.map(project => 
        project.id === id ? { ...project, isFavorite: !project.isFavorite } : project
      )
    );
  }, []);

  const clearFilters = useCallback(() => {
    setFilter('Todas');
    setSearchTerm('');
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'Todas' || project.techs?.includes(filter);
    const searchLower = searchTerm.toLowerCase();
    return matchesFilter && (
      project.title.toLowerCase().includes(searchLower) || 
      project.description.toLowerCase().includes(searchLower)
    );
  });

  const favoriteCount = projects.filter(p => p.isFavorite).length;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="projects-container"
    >
      <motion.header
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="projects-header"
      >
        <h1>Meus <span className="gradient-text">Projetos</span></h1>
        <p className="subtitle">Explore minha jornada de desenvolvimento através desses trabalhos</p>
      </motion.header>

      <div className="projects-controls">
        <motion.div 
          className="search-filter"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Buscar projetos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Buscar projetos"
            />
            {searchTerm && (
              <Button 
                icon={FiX}
                variant="icon"
                className="clear-search"
                onClick={() => setSearchTerm('')}
                aria-label="Limpar busca"
              />
            )}
          </div>
          
          <div className="filter-select">
            <Button icon={FiFilter} variant="outline">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                aria-label="Filtrar por tecnologia"
              >
                {techOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="projects-stats"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="stat-item">
            <FiStar />
            <span>{favoriteCount} Favorito{favoriteCount !== 1 ? 's' : ''}</span>
          </div>
          <div className="stat-item">
            <FiGitBranch />
            <span>{projects.length} Projeto{projects.length !== 1 ? 's' : ''}</span>
          </div>
          {(filter !== 'Todas' || searchTerm) && (
            <Button 
              onClick={clearFilters}
              variant="outline"
              className="reset-filters"
            >
              Limpar filtros
            </Button>
          )}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {filteredProjects.length === 0 ? (
          <motion.div 
            className="no-projects"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <p>Nenhum projeto encontrado com os filtros atuais</p>
            <Button 
              onClick={clearFilters}
              variant="primary"
            >
              Limpar filtros
            </Button>
          </motion.div>
        ) : (
          <motion.div 
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <AnimatePresence>
              {filteredProjects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  toggleFavorite={toggleFavorite} 
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}