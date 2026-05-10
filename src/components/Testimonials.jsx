import React from 'react';
import dummyData from '../data/dummy.json';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const { testimonials } = dummyData;
  const colors = ['var(--color-yellow)', 'var(--color-green)', '#ffffff'];

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
        border: 'var(--border-width) solid var(--border-color)',
        borderRadius: '50%',
        zIndex: -1
      }}></div>

      <div className="container">
        <h2 style={{ borderBottom: 'none' }}>
          <span className="highlight-text" style={{ backgroundColor: 'var(--color-yellow)', color: 'var(--text-color)' }}>
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
              <h3 style={{ fontSize: '4rem', margin: 0, lineHeight: 0.5, color: 'var(--text-color)', textShadow: '2px 2px 0 var(--color-pink)' }}>"</h3>
              <p style={{ fontWeight: '700', fontSize: '1rem', margin: '20px 0', flexGrow: 1, color: '#000' }}>{test.quote}</p>

              <div style={{
                display: 'inline-block',
                alignSelf: 'flex-start',
                backgroundColor: 'var(--color-blue)',
                color: '#fff',
                padding: '6px 16px',
                borderRadius: 'var(--radius-pill)',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 'bold',
                fontSize: '0.85rem',
                marginTop: '20px',
                border: 'var(--border-width) solid var(--border-color)'
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
