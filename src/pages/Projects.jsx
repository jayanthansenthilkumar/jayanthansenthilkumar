import React from 'react';
import dummyData from '../data/dummy.json';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const { projects } = dummyData;

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <section className="section" style={{ overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
            <h1 style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', margin: 0, lineHeight: 0.9 }}>
              THE <br/>
              <span className="highlight-text" style={{ backgroundColor: 'var(--color-pink)' }}>ARCHIVE</span>
            </h1>
            
            <div style={{ 
              width: '100px', 
              height: '100px', 
              border: 'var(--border-width) solid #000', 
              backgroundColor: 'var(--color-yellow)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              fontWeight: 'bold',
              boxShadow: '4px 4px 0 #000',
              transform: 'rotate(15deg)'
            }}>
              ★
            </div>
          </div>
          
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', maxWidth: '800px', marginBottom: '60px', borderLeft: 'var(--border-width) solid #000', paddingLeft: '20px' }}>
            A curated collection of digital experiences. Projects that stand out with vibrant aggression.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px' }}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
