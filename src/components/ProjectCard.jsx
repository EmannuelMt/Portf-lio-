// src/components/ProjectCard.jsx
const ProjectCard = ({ project, onFavoriteToggle }) => {
  return (
    <div className={`project-card ${project.isFavorite ? 'favorite' : ''}`}>
      <h3>{project.name}</h3>
      <div className="techs">
        {project.techs.map(tech => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
      <a href={project.github} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
      <button 
        onClick={() => onFavoriteToggle(project.id)}
        className="favorite-btn"
      >
        {project.isFavorite ? '★' : '☆'}
      </button>
    </div>
  )
}

export default ProjectCard;