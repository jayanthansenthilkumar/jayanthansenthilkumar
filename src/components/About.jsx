import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section" id="about" style={{ backgroundColor: 'var(--color-blue)', color: '#fff', borderTop: 'var(--border-width) solid var(--border-color)', borderBottom: 'var(--border-width) solid var(--border-color)' }}>
      <div className="container">
        <div className="grid-2" style={{ gap: '60px', alignItems: 'center' }}>
          
          <motion.div 
            style={{ position: 'relative' }}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', duration: 0.4 }}
          >
            <div style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--color-yellow)',
              border: 'var(--border-width) solid #000',
              borderRadius: '10px',
              zIndex: 1
            }}></div>
            <div style={{ 
              border: 'var(--border-width) solid #000',
              borderRadius: '10px',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 2,
              backgroundColor: '#fff'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800" 
                alt="Workspace"
                style={{ width: '100%', height: '400px', objectFit: 'cover', border: 'none', filter: 'grayscale(100%)' }}
              />
            </div>
            
            <div className="neo-block" style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              backgroundColor: 'var(--color-pink)',
              padding: '10px 20px',
              fontSize: '1.2rem',
              fontWeight: '900',
              zIndex: 4,
              transform: 'rotate(5deg)'
            }}>
              5+ YEARS EXP
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', duration: 0.4 }}
          >
            <h2 style={{ color: '#fff', WebkitTextStroke: '1px #000', borderBottom: 'none', fontSize: 'clamp(3rem, 6vw, 4.5rem)', margin: '0 0 20px 0', lineHeight: 1 }}>
              NOT YOUR
            </h2>
            <h2 style={{ color: 'var(--color-lime)', WebkitTextStroke: '2px #000', borderBottom: 'none', fontSize: 'clamp(3rem, 6vw, 4.5rem)', margin: '0 0 30px 0', lineHeight: 1 }}>
              AVERAGE DEV
            </h2>
            
            <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
              I am tired of clean, soft aesthetics. Software should feel like an engine block. 
              Heavy. Powerful. Industrial. I build applications that embrace edge cases and 
              don't hold the user's hand. 
            </p>
            <p style={{ fontSize: '1.2rem' }}>
              With over 5 years of wrestling with CSS and JavaScript, I specialize in 
              high-performance React applications with an undeniable attitude. 
            </p>
            
            <div style={{ marginTop: '40px' }}>
              <a href="#skills" className="btn" style={{ padding: '15px 30px', backgroundColor: 'var(--color-yellow)', color: '#000', borderRadius: '40px', fontSize: '1.2rem' }}>
                Discover my skills ↓
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
