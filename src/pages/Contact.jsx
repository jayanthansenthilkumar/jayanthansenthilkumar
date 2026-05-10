import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <section className="section" style={{ backgroundColor: 'var(--color-lime)', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
             <h1 style={{ margin: 0, fontSize: 'clamp(4rem, 8vw, 6rem)' }}>COMMUNICATE</h1>
             <div style={{ 
               padding: '10px 20px', 
               backgroundColor: 'var(--color-purple)', 
               border: 'var(--border-width) solid #000',
               borderRadius: '30px',
               fontWeight: 'bold',
               boxShadow: '3px 3px 0 #000',
               transform: 'rotate(-5deg)'
              }}>
               Hiring ✔
             </div>
          </div>

          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '50px', maxWidth: '600px' }}>
            Have a project that needs a brutal, neon-soaked takeover? Send me the details below.
          </p>

          <form className="neo-block" style={{ display: 'flex', flexDirection: 'column', gap: '30px', backgroundColor: '#fff' }} onSubmit={(e) => e.preventDefault()}>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '20px', alignItems: 'center' }}>
              <label htmlFor="name" style={{ fontSize: '1.2rem', fontWeight: '900' }}>IDENTIFICATION</label>
              <input 
                type="text" 
                id="name" 
                placeholder="YOUR NAME"
                style={{ 
                  padding: '15px', 
                  fontSize: '1.2rem', 
                  border: 'var(--border-width) solid #000',
                  borderRadius: '5px',
                  backgroundColor: 'var(--bg-color)',
                  outline: 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 'bold'
                }} 
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '20px', alignItems: 'center' }}>
              <label htmlFor="email" style={{ fontSize: '1.2rem', fontWeight: '900' }}>TRANSMISSION VECTOR</label>
              <input 
                type="email" 
                id="email" 
                placeholder="EMAIL@DOMAIN.COM"
                style={{ 
                  padding: '15px', 
                  fontSize: '1.2rem', 
                  border: 'var(--border-width) solid #000',
                  borderRadius: '5px',
                  backgroundColor: 'var(--bg-color)',
                  outline: 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 'bold'
                }} 
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '20px', alignItems: 'start' }}>
              <label htmlFor="message" style={{ fontSize: '1.2rem', fontWeight: '900', paddingTop: '15px' }}>DATA</label>
              <textarea 
                id="message" 
                rows="5"
                placeholder="HELLO OLIVIA, I NEED A WEBSITE THAT BLINDS MY COMPETITORS..."
                style={{ 
                  padding: '15px', 
                  fontSize: '1.2rem', 
                  border: 'var(--border-width) solid #000',
                  borderRadius: '5px',
                  backgroundColor: 'var(--bg-color)',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 'bold'
                }} 
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-end', fontSize: '1.2rem', padding: '20px 50px', backgroundColor: 'var(--color-pink)' }}>
              EXECUTE TRANSMISSION ↗
            </button>
          </form>

          {/* FAQ SECTION */}
          <div style={{ marginTop: '80px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '40px', borderBottom: 'var(--border-width) solid #000', paddingBottom: '10px' }}>FREQUENT QUERIES</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="neo-block" style={{ backgroundColor: 'var(--color-yellow)', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>What is your typical timeline?</h3>
                <p style={{ fontWeight: 'bold' }}>Most projects take between 2 to 6 weeks depending on scope, but I work fast when fueled by coffee and good music.</p>
              </div>
              <div className="neo-block" style={{ backgroundColor: 'var(--color-pink)', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Do you do hourly or project rates?</h3>
                <p style={{ fontWeight: 'bold' }}>I primarily do project-based pricing to ensure we are aligned on value, not just time spent. However, I offer hourly rates for ongoing consultation.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
