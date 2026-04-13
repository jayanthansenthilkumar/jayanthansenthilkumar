import React from 'react';
import { useParams, Link } from 'react-router-dom';
import dummyData from '../data/dummy.json';
import { motion } from 'framer-motion';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = dummyData.blogs.find(b => b.id === id);

  if (!blog) return <div className="container section"><h2>POST NOT FOUND</h2></div>;

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <section className="section" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Link to="/blog" className="btn" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '10px', 
            marginBottom: '40px', 
            backgroundColor: 'var(--color-purple)' 
          }}>
            ← BACK TO WRITINGS
          </Link>

          <div style={{ 
            backgroundColor: 'var(--color-pink)',
            border: 'var(--border-width) solid #000',
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '8px 8px 0 #000',
            marginBottom: '60px',
            position: 'relative'
          }}>
            
            <div style={{ 
              position: 'absolute',
              top: '-15px',
              right: '30px',
              backgroundColor: 'var(--color-lime)', 
              border: 'var(--border-width) solid #000',
              padding: '5px 20px', 
              borderRadius: '20px',
              fontWeight: '900',
              boxShadow: '3px 3px 0 #000',
              transform: 'rotate(2deg)'
            }}>
              {blog.date}
            </div>
            
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', margin: 0, lineHeight: 1.1 }}>{blog.title}</h1>
          </div>

          <div className="neo-block" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            <p style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '30px', color: 'var(--color-purple)' }}>
              {blog.excerpt}
            </p>
            <p>
              {blog.content}
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogDetails;
