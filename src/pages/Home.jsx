import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      
      {/* FEATURED WORK SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--color-blue)', borderTop: 'var(--border-width) solid #000', borderBottom: 'var(--border-width) solid #000' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '3rem', color: '#fff', textShadow: '2px 2px 0 #000', margin: 0, border: 'none' }}>FEATURED WORK</h2>
            <a href="/projects" className="btn" style={{ backgroundColor: 'var(--color-yellow)' }}>VIEW ALL</a>
          </div>
          <div className="grid-2">
            <div className="neo-block" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '250px', backgroundColor: 'var(--color-pink)', borderBottom: 'var(--border-width) solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>📸</div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Acme Rebrand</h3>
                <p style={{ fontWeight: 'bold' }}>Complete visual overhaul and design system.</p>
              </div>
            </div>
            <div className="neo-block" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '250px', backgroundColor: 'var(--color-green)', borderBottom: 'var(--border-width) solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>🌐</div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Global Tech Site</h3>
                <p style={{ fontWeight: 'bold' }}>A high-performance web app with neat neo-brutalism.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SERVICES SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)', position: 'relative' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', margin: '0 0 40px 0', border: 'none' }}>WHAT I DO</h2>
          <div className="grid-3">
            <div className="neo-block" style={{ backgroundColor: 'var(--color-yellow)', transform: 'rotate(-2deg)' }}>
              <h3 style={{ fontSize: '1.8rem', borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '15px' }}>UI/UX Design</h3>
              <p style={{ fontWeight: 'bold' }}>Crafting intuitive interfaces that look as good as they feel.</p>
            </div>
            <div className="neo-block" style={{ backgroundColor: 'var(--color-pink)', transform: 'rotate(1deg)' }}>
              <h3 style={{ fontSize: '1.8rem', borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '15px' }}>Web Dev</h3>
              <p style={{ fontWeight: 'bold' }}>Building robust, blazing-fast applications using modern tech.</p>
            </div>
            <div className="neo-block" style={{ backgroundColor: 'var(--color-purple)', transform: 'rotate(-1deg)' }}>
              <h3 style={{ fontSize: '1.8rem', borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '15px', color: '#fff' }}>Branding</h3>
              <p style={{ fontWeight: 'bold', color: '#fff' }}>Creating unforgettable visual identities that stand out.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </motion.div>
  );
};

export default Home;
