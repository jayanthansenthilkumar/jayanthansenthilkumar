import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      
      {/* EXTENDED HEADER FOR ABOUT PAGE */}
      <section className="section" style={{ backgroundColor: 'var(--color-pink)', paddingBottom: '40px', borderBottom: 'var(--border-width) solid #000' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', margin: 0, lineHeight: 0.9 }}>
              ORIGIN <br/>
              <span className="highlight-text" style={{ backgroundColor: 'var(--color-yellow)' }}>STORY</span>
            </h1>
            <div style={{ 
              width: '100px', 
              height: '100px', 
              border: 'var(--border-width) solid #000', 
              backgroundColor: 'var(--color-lime)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              fontWeight: 'bold',
              boxShadow: '4px 4px 0 #000',
              transform: 'rotate(-15deg)'
            }}>
              ?
            </div>
          </div>
          <div className="marquee-container" style={{ fontSize: '1.5rem', fontWeight: '900', color: '#000', marginTop: '40px', borderTop: '2px solid #000', borderBottom: '2px solid #000', padding: '10px 0', backgroundColor: '#fff', transform: 'rotate(1deg)' }}>
            <div className="marquee-content">
              <span>DESIGN IS NOT JUST HOW IT LOOKS // DESIGN IS HOW IT WORKS //</span>
              <span>DESIGN IS NOT JUST HOW IT LOOKS // DESIGN IS HOW IT WORKS //</span>
              <span>DESIGN IS NOT JUST HOW IT LOOKS // DESIGN IS HOW IT WORKS //</span>
              <span>DESIGN IS NOT JUST HOW IT LOOKS // DESIGN IS HOW IT WORKS //</span>
            </div>
          </div>
        </div>
      </section>

      {/* REUSING THE COMPONENTS */}
      <About />
      <Skills />
      <Experience />

    </motion.div>
  );
};

export default AboutPage;
