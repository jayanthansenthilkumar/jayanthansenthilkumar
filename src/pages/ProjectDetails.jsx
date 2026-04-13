import React from 'react';
import { useParams, Link } from 'react-router-dom';
import dummyData from '../data/dummy.json';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = dummyData.projects.find(p => p.id === id);

  if (!project) return <div className="container section"><h2>PROJECT NOT FOUND</h2></div>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <section className="section">
        <div className="container">
          <Link to="/projects" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '40px', backgroundColor: 'var(--color-lime)' }}>
            ← BACK TO ARCHIVE
          </Link>
          
          <h1 style={{ marginBottom: '30px', fontSize: 'clamp(4rem, 8vw, 6rem)' }}>{project.title}</h1>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {project.techStack.map(tech => (
               <span key={tech} style={{ 
                border: 'var(--border-width) solid var(--border-color)', 
                padding: '8px 20px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 'bold',
                backgroundColor: '#fff',
                borderRadius: '30px',
                boxShadow: '3px 3px 0 #000'
              }}>
                {tech}
              </span>
            ))}
          </div>

          <div style={{ 
            border: 'var(--border-width) solid var(--border-color)', 
            marginBottom: '60px',
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '10px 10px 0 #000'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'var(--color-pink)',
              color: '#000',
              fontWeight: '900',
              padding: '10px 20px',
              border: 'var(--border-width) solid #000',
              transform: 'rotate(5deg)',
              borderRadius: '5px',
              boxShadow: '3px 3px 0 #000',
              zIndex: 2
            }}>
              CASE STUDY 
            </div>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto', border: 'none', filter: 'grayscale(30%)' }} />
          </div>

          <div className="grid-2" style={{ marginBottom: '40px' }}>
            <div className="neo-block" style={{ backgroundColor: 'var(--color-purple)' }}>
              <h3>THE PROBLEM</h3>
              <p style={{ fontWeight: 'bold' }}>{project.problem}</p>
            </div>
            <div className="neo-block" style={{ backgroundColor: 'var(--color-lime)' }}>
              <h3>THE SOLUTION</h3>
              <p style={{ fontWeight: 'bold' }}>{project.solution}</p>
            </div>
          </div>

          <div className="neo-block" style={{ backgroundColor: 'var(--color-yellow)', textAlign: 'center', padding: '60px 20px' }}>
            <h3>RESULT</h3>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', border: 'none', margin: '20px 0 0 0', WebkitTextStroke: '1px #000' }}>{project.result}</h2>
          </div>

          <div style={{ marginTop: '60px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <a href={project.liveLink} className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>VIEW LIVE EXPORT</a>
            <a href={project.githubLink} className="btn" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>SOURCE CODE</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetails;
