import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index = 0 }) => {
  const bgColors = ['var(--color-lime)', 'var(--color-pink)', 'var(--color-yellow)', 'var(--color-purple)', '#ffffff'];
  const cardColor = bgColors[index % bgColors.length];

  return (
    <div className="neo-block" style={{ display: 'flex', flexDirection: 'column', backgroundColor: cardColor, padding: '20px' }}>
      <div style={{ 
        border: 'var(--border-width) solid var(--border-color)', 
        overflow: 'hidden',
        marginBottom: '20px',
        maxHeight: '250px',
        borderRadius: '5px',
        backgroundColor: '#fff'
      }}>
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
        <h3 style={{ margin: 0, fontSize: '1.8rem', flexGrow: 1, paddingRight: '10px' }}>{project.title}</h3>
        <span style={{ 
          backgroundColor: '#000', 
          color: '#fff', 
          padding: '2px 10px',
          borderRadius: '15px',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          whiteSpace: 'nowrap'
        }}>
          {project.id.padStart(2, '0')}
        </span>
      </div>
      
      <p style={{ flexGrow: 1, marginBottom: '20px', fontWeight: 'bold' }}>{project.description}</p>
      
      <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '25px' }}>
        {project.techStack.map(tech => (
          <span key={tech} style={{ 
            backgroundColor: '#fff', 
            color: '#000', 
            border: '2px solid #000',
            padding: '2px 8px',
            fontSize: '0.8rem',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 'bold',
            borderRadius: '5px',
            boxShadow: '1px 1px 0 #000'
          }}>
            {tech}
          </span>
        ))}
      </div>
      
      <div style={{ display: 'flex', gap: '15px', marginTop: 'auto' }}>
        <Link to={`/projects/${project.id}`} className="btn" style={{ flexGrow: 1, textAlign: 'center', backgroundColor: '#fff' }}>
          CASE STUDY
        </Link>
        <a href={project.liveLink} className="btn" style={{ backgroundColor: '#000', color: '#fff', padding: '15px' }}>
          ↗
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
