import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: 'var(--border-width) solid var(--border-color)',
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Marquee Banner in footer */}
      <div style={{
        backgroundColor: 'var(--color-blue)',
        color: '#000',
        padding: '8px 0',
        borderBottom: 'var(--border-width) solid var(--border-color)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        fontFamily: "'Space Grotesk', sans-serif",
        textTransform: 'uppercase'
      }}>
        AVAILABLE FOR FREELANCE • LET's TALK • AVAILABLE FOR FREELANCE • LET's TALK • AVAILABLE FOR FREELANCE • LET's TALK •
      </div>

      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '40px 20px',
      }}>
        <h2 style={{ margin: 0, borderBottom: 'none', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-color)' }}>
          <span style={{ color: 'var(--color-yellow)' }}>OLIVIA</span>.UI
        </h2>

        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#" className="btn" aria-label="GitHub" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
            GH
          </a>
          <a href="#" className="btn" aria-label="LinkedIn" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
            LI
          </a>
          <a href="#" className="btn" aria-label="Twitter" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
            TW
          </a>
        </div>
      </div>

      <div style={{ borderTop: 'var(--border-width) solid var(--border-color)', padding: '15px', textAlign: 'center', fontSize: '0.85rem', fontFamily: "'Space Grotesk', sans-serif" }}>
        © {new Date().getFullYear()} OLIVIA PORTFOLIO. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
