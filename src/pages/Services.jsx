import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="section" style={{ backgroundColor: 'var(--color-yellow)', minHeight: '100vh', overflow: 'hidden' }}>
        
        {/* HUGE MARQUEE STRIP */}
        <div style={{
          backgroundColor: 'var(--color-pink)',
          borderBottom: 'var(--border-width) solid #000',
          borderTop: 'var(--border-width) solid #000',
          padding: '15px 0',
          transform: 'rotate(-2deg)',
          width: '110%',
          marginLeft: '-5%',
          marginBottom: '50px',
          boxShadow: '0 10px 0 rgba(0,0,0,0.1)'
        }}>
          <div className="marquee-container" style={{ fontSize: '2.5rem', fontWeight: '900', color: '#000', letterSpacing: '2px', fontFamily: "'Inter', sans-serif" }}>
            <div className="marquee-content">
              <span>UNAPOLOGETIC DESIGN // RAW DEPLOYMENTS //</span>
              <span>UNAPOLOGETIC DESIGN // RAW DEPLOYMENTS //</span>
              <span>UNAPOLOGETIC DESIGN // RAW DEPLOYMENTS //</span>
              <span>UNAPOLOGETIC DESIGN // RAW DEPLOYMENTS //</span>
            </div>
          </div>
        </div>

        <div className="container">
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.9, marginBottom: '60px' }}>
            MY <br/>
            <span className="highlight-text" style={{ backgroundColor: 'var(--color-lime)' }}>SERVICES</span>
          </h1>

          <div className="grid-2">
            
            {/* TICKET COMPONENT */}
            <div style={{ position: 'relative', marginBottom: '40px' }}>
               <div style={{ position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, backgroundColor: '#000' }} />
               <div style={{ backgroundColor: '#fff', border: 'var(--border-width) solid #000', position: 'relative' }}>
                 
                 <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: 'var(--color-purple)' }}>
                   <div>
                     <div style={{ fontSize: '11px', fontWeight: '900', letterSpacing: '1.5px' }}>SERVICE CATEGORY</div>
                     <div style={{ fontSize: '30px', fontWeight: '900', letterSpacing: '-1px' }}>UI/UX</div>
                   </div>
                   <div style={{ alignSelf: 'center', fontSize: '30px', fontWeight: 'bold' }}>→</div>
                   <div style={{ textAlign: 'right' }}>
                     <div style={{ fontSize: '11px', fontWeight: '900', letterSpacing: '1.5px' }}>DELIVERY TIME</div>
                     <div style={{ fontSize: '30px', fontWeight: '900', letterSpacing: '-1px' }}>FAST</div>
                   </div>
                 </div>
                 
                 <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', height: '30px', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-15px', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'var(--color-yellow)', border: 'var(--border-width) solid #000' }} />
                    <div style={{ flex: 1, borderBottom: '3px dashed #000', margin: '0 20px' }} />
                    <div style={{ position: 'absolute', right: '-15px', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'var(--color-yellow)', border: 'var(--border-width) solid #000' }} />
                 </div>

                 <div style={{ padding: '20px' }}>
                   <div style={{ display: 'flex', borderTop: 'var(--border-width) solid #000', borderBottom: 'var(--border-width) solid #000', marginBottom: '20px' }}>
                     <div style={{ flex: 1, padding: '15px 0' }}>
                        <div style={{ fontSize: '12px', fontWeight: '900', color: '#666' }}>RATE / HR</div>
                        <div style={{ fontSize: '20px', fontWeight: '900' }}>$150</div>
                     </div>
                     <div style={{ flex: 1, padding: '15px 0', borderLeft: 'var(--border-width) solid #000', paddingLeft: '15px' }}>
                        <div style={{ fontSize: '12px', fontWeight: '900', color: '#666' }}>PLATFORM</div>
                        <div style={{ fontSize: '20px', fontWeight: '900' }}>Figma</div>
                     </div>
                   </div>
                   
                   <h3 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '30px' }}>"Brutalist Audits"</h3>
                   
                   <a href="/contact" className="btn" style={{ width: '100%', textAlign: 'center', backgroundColor: 'var(--color-lime)' }}>
                     BOOK SESSION
                   </a>
                 </div>

               </div>
            </div>

            {/* FLOPPY DISK REPLICA */}
            <div style={{ position: 'relative', margin: '0 10px 40px 10px', transform: 'rotate(2deg)' }}>
               <div style={{ position: 'absolute', top: 10, left: 10, right: -10, bottom: -10, backgroundColor: '#000', borderRadius: '16px' }} />
               <div style={{ backgroundColor: 'var(--color-pink)', border: 'var(--border-width) solid #000', borderRadius: '16px', padding: '20px', paddingBottom: '40px', height: '100%', position: 'relative' }}>
                  
                  <div style={{ backgroundColor: '#fff', border: 'var(--border-width) solid #000', borderRadius: '8px', padding: '15px', height: '140px', zIndex: 2, position: 'relative' }}>
                     <div style={{ color: 'var(--color-purple)', fontSize: '12px', fontWeight: '900', letterSpacing: '1px', marginBottom: '10px' }}>FILE // 01</div>
                     <div style={{ fontSize: '24px', fontWeight: '900', lineHeight: 1.1 }}>DOWNLOAD FULL RESUME.DOCX</div>
                  </div>
                  
                  <div style={{ position: 'absolute', top: '-3px', right: '20px', width: '80px', height: '60px', backgroundColor: '#e0e0e0', border: 'var(--border-width) solid #000', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', zIndex: 1 }}>
                     <div style={{ position: 'absolute', top: '10px', left: '10px', width: '20px', height: '30px', backgroundColor: 'var(--color-yellow)', border: '2px solid #000' }} />
                  </div>
                  
                  <a href="#" className="btn" style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%) rotate(-4deg)', backgroundColor: 'var(--color-blue)', color: '#fff', padding: '15px 30px', zIndex: 3, boxShadow: '4px 4px 0 #000' }}>
                     PULL DATA
                  </a>
               </div>
            </div>

            {/* SECOND TICKET COMPONENT - WEB DEV */}
            <div style={{ position: 'relative', marginBottom: '40px' }}>
               <div style={{ position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, backgroundColor: '#000', borderRadius: '16px' }} />
               <div style={{ backgroundColor: '#fff', border: 'var(--border-width) solid #000', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
                 
                 <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: 'var(--color-green)' }}>
                   <div>
                     <div style={{ fontSize: '11px', fontWeight: '900', letterSpacing: '1.5px' }}>SERVICE CATEGORY</div>
                     <div style={{ fontSize: '30px', fontWeight: '900', letterSpacing: '-1px' }}>WEB DEV</div>
                   </div>
                   <div style={{ alignSelf: 'center', fontSize: '30px', fontWeight: 'bold' }}>→</div>
                   <div style={{ textAlign: 'right' }}>
                     <div style={{ fontSize: '11px', fontWeight: '900', letterSpacing: '1.5px' }}>QUALITY</div>
                     <div style={{ fontSize: '30px', fontWeight: '900', letterSpacing: '-1px' }}>HIGH</div>
                   </div>
                 </div>
                 
                 <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', height: '30px', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-15px', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'var(--color-yellow)', border: 'var(--border-width) solid #000' }} />
                    <div style={{ flex: 1, borderBottom: '3px dashed #000', margin: '0 20px' }} />
                    <div style={{ position: 'absolute', right: '-15px', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'var(--color-yellow)', border: 'var(--border-width) solid #000' }} />
                 </div>

                 <div style={{ padding: '20px' }}>
                   <div style={{ display: 'flex', borderTop: 'var(--border-width) solid #000', borderBottom: 'var(--border-width) solid #000', marginBottom: '20px' }}>
                     <div style={{ flex: 1, padding: '15px 0' }}>
                        <div style={{ fontSize: '12px', fontWeight: '900', color: '#666' }}>RATE / HR</div>
                        <div style={{ fontSize: '20px', fontWeight: '900' }}>$180</div>
                     </div>
                     <div style={{ flex: 1, padding: '15px 0', borderLeft: 'var(--border-width) solid #000', paddingLeft: '15px' }}>
                        <div style={{ fontSize: '12px', fontWeight: '900', color: '#666' }}>TECH</div>
                        <div style={{ fontSize: '20px', fontWeight: '900' }}>React, Next.js</div>
                     </div>
                   </div>
                   
                   <h3 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '30px' }}>"Frontend Magic"</h3>
                   
                   <a href="/contact" className="btn" style={{ width: '100%', textAlign: 'center', backgroundColor: 'var(--color-purple)', color: '#fff' }}>
                     HIRE FOR DEV
                   </a>
                 </div>

               </div>
            </div>

          </div>

          {/* BARCODE SECTION */}
          <div className="neo-block" style={{ marginTop: '60px', backgroundColor: '#fff' }}>
             <h2 style={{ fontSize: '2rem', margin: '0 0 20px 0', border: 'none' }}>RECENT ACTIVITY</h2>
             
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: 'var(--border-width) solid #000', paddingBottom: '15px', marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                   <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-purple)', border: 'var(--border-width) solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>★</div>
                   <div>
                      <div style={{ fontWeight: '900', fontSize: '1.2rem' }}>Rebranded Acme Corp</div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#666' }}>TKT-049-A</div>
                   </div>
                </div>
                <div style={{ fontWeight: '900', fontSize: '1.2rem', color: 'var(--color-pink)' }}>APPROVED</div>
             </div>

             <div className="barcode-box" style={{ marginTop: '30px' }}>
                <div className="barcode-line" style={{ width: '4%' }} />
                <div className="barcode-line" style={{ width: '2%' }} />
                <div className="barcode-line" style={{ width: '8%' }} />
                <div className="barcode-line" style={{ width: '2%' }} />
                <div className="barcode-line" style={{ width: '6%' }} />
                <div className="barcode-line" style={{ width: '3%' }} />
                <div className="barcode-line" style={{ width: '1%' }} />
                <div className="barcode-line" style={{ width: '5%' }} />
                <div className="barcode-line" style={{ width: '8%' }} />
                <div className="barcode-line" style={{ width: '2%' }} />
                <div className="barcode-line" style={{ width: '6%' }} />
                <div className="barcode-line" style={{ width: '2%' }} />
                <div className="barcode-line" style={{ width: '4%' }} />
                <div className="barcode-line" style={{ width: '2%' }} />
             </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
};

export default Services;
