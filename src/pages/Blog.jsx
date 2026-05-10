import React from 'react';
import { Link } from 'react-router-dom';
import dummyData from '../data/dummy.json';
import { motion } from 'framer-motion';

const Blog = () => {
  const { blogs } = dummyData;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <section className="section" style={{ backgroundColor: 'var(--color-pink)', minHeight: '100vh', borderBottom: 'var(--border-width) solid #000' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
            <h1 style={{ color: '#fff', WebkitTextStroke: '2px #000', margin: 0, fontSize: 'clamp(4rem, 10vw, 7rem)', lineHeight: 0.9 }}>
              WRITINGS
            </h1>
            <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-yellow)', border: 'var(--border-width) solid #000', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', boxShadow: '4px 4px 0 #000', transform: 'rotate(10deg)' }}>
              ✎
            </div>
          </div>
          
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '60px', backgroundColor: '#fff', padding: '15px 25px', display: 'inline-block', border: 'var(--border-width) solid #000', borderRadius: '30px', boxShadow: '4px 4px 0 #000' }}>
            Thoughts on design, code, and why borders rule.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {blogs.map((blog, index) => (
              <Link to={`/blog/${blog.id}`} key={blog.id} className="neo-block" style={{ 
                display: 'block', 
                textDecoration: 'none',
                backgroundColor: '#fff',
                transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})`
              }}>
                <div style={{ 
                  display: 'inline-block',
                  backgroundColor: 'var(--color-lime)', 
                  border: 'var(--border-width) solid #000',
                  padding: '5px 15px', 
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  boxShadow: '2px 2px 0 #000'
                }}>
                  {blog.date}
                </div>
                <h2 style={{ borderBottom: 'none', margin: '0 0 15px 0', fontSize: '2.5rem' }}>{blog.title}</h2>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{blog.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>READ →</span>
                </div>
              </Link>
            ))}
          </div>
          </div>

          {/* NEWSLETTER SECTION */}
          <div className="neo-block" style={{
            marginTop: '80px',
            backgroundColor: 'var(--color-green)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '50px 20px',
            borderRadius: 'var(--radius-lg)'
          }}>
            <h2 style={{ fontSize: '3rem', margin: '0 0 10px 0', textShadow: '2px 2px 0 var(--border-color)' }}>Stay Updated</h2>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '30px' }}>Join the newsletter for the latest articles and design resources.</p>
            
            <form style={{ display: 'flex', gap: '10px', width: '100%', maxWidth: '500px' }} onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Email Address" style={{
                flexGrow: 1,
                padding: '15px',
                fontSize: '1rem',
                border: 'var(--border-width) solid var(--border-color)',
                borderRadius: 'var(--radius-pill)',
                outline: 'none',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 'bold'
              }} />
              <button type="submit" className="btn" style={{ backgroundColor: 'var(--color-orange)', color: '#fff' }}>SUBSCRIBE</button>
            </form>
          </div>

        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
