import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="section"
      style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
    >
      <div className="container">
        <h1 style={{ fontSize: 'clamp(5rem, 15vw, 12rem)', margin: 0, color: 'var(--accent-alert)' }} className="glitch-hover">
          404
        </h1>
        <h2 style={{ borderBottom: 'none', fontSize: '3rem', margin: '20px 0' }}>YOU ARE LOST</h2>
        <p style={{ fontSize: '1.5rem', marginBottom: '40px' }}>
          This sector does not exist. Turn back immediately.
        </p>
        <Link to="/" className="btn btn-primary" style={{ padding: '20px 40px', fontSize: '1.5rem' }}>
          RETURN TO SAFETY
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
