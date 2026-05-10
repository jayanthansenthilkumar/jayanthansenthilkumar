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

          <p style={{ maxWidth: '600px', fontSize: '1.05rem', marginBottom: '40px', color: 'var(--text-color)' }}>
            I am a UI/UX designer with a passion for crafting performant, scalable, and user-friendly interfaces. Always looking for new challenges and opportunities to grow my skills.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '0.95rem' }}>
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
          {/* Mobile Phone Mockup */}
          <div style={{
             position: 'absolute',
             top: '5%',
             left: '50%',
             transform: 'translateX(-50%)',
             width: '280px',
             height: '550px',
             backgroundColor: '#ffffff',
             border: 'var(--border-width) solid var(--border-color)',
             borderRadius: '30px',
             zIndex: 2,
             boxShadow: 'var(--shadow-lg)',
             padding: '20px',
             display: 'flex',
             flexDirection: 'column',
             gap: '15px'
          }}>
             {/* Phone Top Notch */}
             <div style={{ width: '100px', height: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', margin: '0 auto', border: '2px solid var(--border-color)' }}></div>
             
             {/* App Header */}
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <div style={{ fontWeight: '900', fontSize: '1.2rem' }}>Hello, Olivia!</div>
                <div className="shape-circle" style={{ position: 'relative', width: '30px', height: '30px', backgroundColor: 'var(--color-yellow)' }}></div>
             </div>

             {/* Main App Card */}
             <div style={{ 
               backgroundColor: 'var(--color-green)', 
               borderRadius: 'var(--radius-md)', 
               border: 'var(--border-width) solid var(--border-color)',
               padding: '15px',
               marginTop: '10px',
               boxShadow: '4px 4px 0px var(--border-color)'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>G Reminder</div>
                <div style={{ fontSize: '0.7rem', marginTop: '5px' }}>Interview at Google in 4 hours</div>
             </div>

             {/* App Grid */}
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px', flexGrow: 1 }}>
                <div style={{ backgroundColor: '#ffffff', border: 'var(--border-width) solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', boxShadow: '4px 4px 0px var(--border-color)' }}>
                   <div style={{ width: '100%', height: '60px', display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                      <div style={{ width: '30%', height: '40%', backgroundColor: 'var(--color-pink)', border: '2px solid #000' }}></div>
                      <div style={{ width: '30%', height: '80%', backgroundColor: 'var(--color-yellow)', border: '2px solid #000' }}></div>
                      <div style={{ width: '30%', height: '100%', backgroundColor: 'var(--color-blue)', border: '2px solid #000' }}></div>
                   </div>
                   <div style={{ fontSize: '0.7rem', fontWeight: 'bold', marginTop: '10px' }}>Profile Views</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                   <div style={{ backgroundColor: 'var(--color-orange)', flexGrow: 1, border: 'var(--border-width) solid var(--border-color)', borderRadius: 'var(--radius-md)', boxShadow: '4px 4px 0px var(--border-color)' }}></div>
                   <div style={{ backgroundColor: 'var(--color-purple)', flexGrow: 1, border: 'var(--border-width) solid var(--border-color)', borderRadius: 'var(--radius-md)', boxShadow: '4px 4px 0px var(--border-color)' }}></div>
                </div>
             </div>

             {/* Bottom Nav */}
             <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0', borderTop: '2px solid var(--border-color)' }}>
                <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: '#000' }}></div>
                <div style={{ width: '15px', height: '15px', border: '2px solid #000', borderRadius: '3px' }}></div>
                <div style={{ width: '15px', height: '15px', border: '2px solid #000', borderRadius: '50%' }}></div>
             </div>
          </div>

          {/* Decorative shapes behind phone */}
          <div className="shape-star" style={{ top: '10%', right: '10%', zIndex: 1, transform: 'scale(1.5) rotate(15deg)', backgroundColor: 'var(--color-blue)' }}></div>
          <div className="shape-pill" style={{ bottom: '20%', left: '0%', zIndex: 3, transform: 'rotate(-20deg)', backgroundColor: 'var(--color-pink)', width: '120px', height: '40px' }}></div>
          <div className="zigzag" style={{ top: '50%', right: '-5%', zIndex: 3, transform: 'scale(1.2)' }}></div>
          
          <div style={{
            position: 'absolute',
            bottom: '5%',
            right: '10%',
            backgroundColor: 'var(--color-yellow)',
            padding: '10px 20px',
            borderRadius: 'var(--radius-pill)',
            border: 'var(--border-width) solid var(--border-color)',
            zIndex: 4,
            boxShadow: 'var(--shadow-md)',
            fontWeight: '900',
            fontSize: '1.2rem',
            transform: 'rotate(-5deg)'
          }}>
            Download CV ↓
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
