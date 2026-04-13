import React from 'react';
import dummyData from '../data/dummy.json';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const { testimonials } = dummyData;
  const colors = ['var(--color-yellow)', 'var(--color-lime)', '#ffffff'];

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative large shapes in background */}
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: '300px',
        height: '300px',
        backgroundColor: 'var(--color-purple)',
        border: 'var(--border-width) solid #000',
        borderRadius: '50%',
        zIndex: -1
      }}></div>

      <div className="container">
        <h2 style={{ borderBottom: 'none' }}>
          <span className="highlight-text" style={{ backgroundColor: 'var(--color-pink)', color: '#fff', WebkitTextStroke: '1px #000' }}>
            WHAT THEY SAY
          </span>
        </h2>
        
        <div className="grid-3" style={{ marginTop: '50px' }}>
          {testimonials.map((test, index) => (
            <motion.div 
              key={test.id} 
              className="neo-block"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ 
                backgroundColor: colors[index % colors.length],
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <h3 style={{ fontSize: '5rem', margin: 0, lineHeight: 0.5, color: 'var(--color-blue)', WebkitTextStroke: '2px #000' }}>"</h3>
              <p style={{ fontWeight: '900', fontSize: '1.2rem', margin: '20px 0', flexGrow: 1 }}>{test.quote}</p>
              
              <div style={{ 
                display: 'inline-block',
                alignSelf: 'flex-start',
                backgroundColor: '#000',
                color: '#fff',
                padding: '5px 15px',
                borderRadius: '20px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 'bold',
                marginTop: '20px'
              }}>
                {test.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
