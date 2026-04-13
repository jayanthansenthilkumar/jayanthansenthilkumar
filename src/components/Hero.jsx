import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Hi, my name is Olivia</p>
          <h1 style={{ margin: '0', wordBreak: 'break-word', letterSpacing: '-2px' }}>
            I Turn Ideas
          </h1>
          <h1 style={{ margin: '0 0 30px 0', wordBreak: 'break-word', letterSpacing: '-2px' }}>
            Into <span className="highlight-text">Realities.</span>
          </h1>
          
          <p style={{ maxWidth: '600px', fontSize: '1.2rem', marginBottom: '40px', color: '#555' }}>
            I am a UI/UX designer with a passion for crafting performant, scalable, and user-friendly interfaces. Always looking for new challenges and opportunities to grow my skills.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '15px 30px', fontSize: '1.2rem', backgroundColor: 'var(--color-purple)' }}>
              Get In Touch ↗
            </Link>
          </div>
        </motion.div>

        {/* Right side graphics area (Mocking the user's image structure) */}
        <motion.div 
          style={{ position: 'relative', height: '500px' }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Background Pink Blob / Card */}
          <div style={{
             position: 'absolute',
             top: '10%',
             right: '10%',
             width: '80%',
             height: '80%',
             backgroundColor: 'var(--color-pink)',
             border: 'var(--border-width) solid var(--border-color)',
             borderRadius: '60px 20px 60px 40px',
             zIndex: 1
          }}></div>

          {/* Brutalist Tape */}
          <div style={{
            position: 'absolute',
            top: '0%',
            left: '30%',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid #000',
            width: '100px',
            height: '30px',
            transform: 'rotate(-5deg)',
            zIndex: 4,
            backdropFilter: 'blur(2px)'
          }}></div>

          {/* Floating UI elements */}
          <div className="neo-block" style={{
            position: 'absolute',
            top: '20%',
            left: '-10%',
            backgroundColor: 'var(--color-lime)',
            padding: '15px 30px',
            fontSize: '2rem',
            fontWeight: 'bold',
            zIndex: 3,
            transform: 'rotate(-10deg)',
            borderRadius: '10px'
          }}>
            &lt;/&gt;
          </div>

          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '0%',
            backgroundColor: 'var(--color-purple)',
            padding: '15px',
            borderRadius: '50%',
            border: 'var(--border-width) solid var(--border-color)',
            zIndex: 3,
            boxShadow: '4px 4px 0px #000'
          }}>
            ✦
          </div>
          
          <div className="neo-block" style={{
            position: 'absolute',
            top: '45%',
            right: '-15%',
            backgroundColor: 'var(--color-purple)',
            padding: '10px 20px',
            fontSize: '1rem',
            fontWeight: 'bold',
            zIndex: 3,
            borderRadius: '20px'
          }}>
            Available for freelance
          </div>

          {/* Portrait Image Placeholder */}
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
            alt="Portrait"
            style={{ 
              position: 'absolute',
              bottom: '10%',
              left: '50%',
              transform: 'translateX(-50%)',
              height: '80%',
              width: 'auto',
              zIndex: 2,
              border: 'none',
              filter: 'grayscale(100%)',
              objectFit: 'contain'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
