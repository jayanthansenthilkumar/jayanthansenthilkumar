import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'var(--color-yellow)',
        borderBottom: 'var(--border-width) solid var(--border-color)',
        zIndex: 1000,
        padding: '5px 0',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '0.8rem',
        overflow: 'hidden',
        color: '#000'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
          <span>♥ Subscribe to my newsletter</span>
          <span>♥ Subscribe to my newsletter</span>
          <span>♥ Subscribe to my newsletter</span>
          <span>♥ Subscribe to my newsletter</span>
        </div>
      </div>

      <nav style={{
        position: 'fixed',
        top: '28px', /* Below the top bar */
        width: '100%',
        backgroundColor: 'var(--bg-color)',
        borderBottom: 'var(--border-width) solid var(--border-color)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        color: 'var(--text-color)'
      }}>
        <div style={{
          padding: '20px 40px',
          borderRight: 'var(--border-width) solid var(--border-color)',
          fontWeight: '900',
          fontSize: '1.25rem',
          fontFamily: "'Inter', sans-serif"
        }}>
          <NavLink to="/">Olivia</NavLink>
        </div>

        <div style={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          fontWeight: '700',
          fontSize: '0.95rem',
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
          <NavLink to="/projects">My work</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'stretch',
          height: '100%'
        }}>
          <div style={{ borderLeft: 'var(--border-width) solid var(--border-color)', display: 'flex' }}>
            <NavLink to="/contact" style={{
              padding: '20px 30px',
              fontWeight: '900',
              fontSize: '1rem',
              fontFamily: "'Space Grotesk', sans-serif",
              backgroundColor: 'var(--color-pink)',
              display: 'flex',
              alignItems: 'center',
              color: 'var(--text-color)'
            }}>
              Hire Me
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
