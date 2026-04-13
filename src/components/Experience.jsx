import React from 'react';
import dummyData from '../data/dummy.json';
import { motion } from 'framer-motion';

const Experience = () => {
  const { experience } = dummyData;

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-pink)', borderTop: 'var(--border-width) solid #000', borderBottom: 'var(--border-width) solid #000' }}>
      <div className="container">
        <h2 style={{ color: '#fff', WebkitTextStroke: '2px #000', borderBottom: 'none', fontSize: 'clamp(3rem, 6vw, 4rem)', marginBottom: '60px' }}>
          WORK HISTORY ↓
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
          {experience.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="neo-block"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ 
                backgroundColor: '#fff', 
                transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})`,
                position: 'relative'
              }}
            >
              {/* Fake tape or pin */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '30px',
                backgroundColor: 'rgba(255,255,255,0.7)',
                border: 'var(--border-width) solid #000',
                boxShadow: '2px 2px 0 #000',
                zIndex: 2
              }}></div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center', marginBottom: '15px' }}>
                <h3 style={{ margin: 0, fontSize: '2rem', flexGrow: 1 }}>{exp.company}</h3>
                <span style={{ 
                  backgroundColor: 'var(--color-yellow)', 
                  border: 'var(--border-width) solid #000',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  boxShadow: '3px 3px 0 #000'
                }}>
                  {exp.duration}
                </span>
              </div>
              
              <h4 style={{ fontSize: '1.2rem', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--color-blue)', marginBottom: '15px' }}>
                {exp.role}
              </h4>
              
              <p style={{ margin: 0, fontWeight: 'bold' }}>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
