import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: 'var(--border-width) solid var(--border-color)',
      backgroundColor: '#000',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Marquee Banner in footer */}
      <div style={{
        backgroundColor: 'var(--color-pink)',
        color: '#000',
        padding: '10px 0',
        borderBottom: 'var(--border-width) solid var(--border-color)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontWeight: 'bold',
        fontFamily: "'Space Grotesk', sans-serif"
      }}>
        AVAILABLE FOR FREELANCE • LET's TALK • AVAILABLE FOR FREELANCE • LET's TALK • AVAILABLE FOR FREELANCE • LET's TALK • 
      </div>

      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '60px 20px',
      }}>
        <h2 style={{ margin: 0, borderBottom: 'none', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', WebkitTextStroke: '1px #000' }}>
          <span style={{ color: 'var(--color-yellow)' }}>OLIVIA</span>.UI
        </h2>
        
        <div style={{ display: 'flex', gap: '15px' }}>
           <a href="#" className="btn" aria-label="GitHub" style={{ padding: '10px 20px', fontSize: '1.2rem' }}>
            GH
          </a>
          <a href="#" className="btn" aria-label="LinkedIn" style={{ padding: '10px 20px', fontSize: '1.2rem' }}>
            LI
          </a>
          <a href="#" className="btn" aria-label="Twitter" style={{ padding: '10px 20px', fontSize: '1.2rem' }}>
            TW
          </a>
        </div>
      </div>
      
      <div style={{ borderTop: 'var(--border-width) solid #fff', padding: '20px', textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif" }}>
        © {new Date().getFullYear()} OLIVIA PORTFOLIO. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
