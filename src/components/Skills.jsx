import React from 'react';
import { motion } from 'framer-motion';
import dummyData from '../data/dummy.json';

const Skills = () => {
  const { skills } = dummyData;
  const colors = ['var(--color-lime)', 'var(--color-pink)', 'var(--color-purple)'];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <section className="section" id="skills" style={{ backgroundColor: 'var(--bg-color)', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: 0, right: '5%', fontSize: '4rem', fontWeight: '900', color: 'var(--grid-color)', pointerEvents: 'none' }}>
          XXXX
        </div>
        
        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', borderBottom: 'none' }}>
          <span className="highlight-text" style={{ backgroundColor: 'var(--color-yellow)' }}>SKILLS ARSENAL</span>
        </h2>
        
        <div className="grid-3" style={{ marginTop: '40px' }}>
          {Object.entries(skills).map(([category, items], index) => (
            <div key={category} className="neo-block" style={{ backgroundColor: colors[index % colors.length] }}>
              <div style={{
                display: 'inline-block',
                backgroundColor: '#fff',
                padding: '5px 15px',
                border: 'var(--border-width) solid #000',
                borderRadius: '20px',
                fontWeight: '900',
                marginBottom: '20px',
                boxShadow: '2px 2px 0 #000'
              }}>
                {category}
              </div>
              
              <motion.div 
                variants={containerVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
              >
                {items.map(skill => (
                  <motion.div 
                    key={skill} 
                    variants={itemVariants}
                    style={{ 
                      padding: '8px 15px', 
                      backgroundColor: '#fff',
                      border: 'var(--border-width) solid #000',
                      borderRadius: '5px',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      boxShadow: '3px 3px 0 #000'
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
