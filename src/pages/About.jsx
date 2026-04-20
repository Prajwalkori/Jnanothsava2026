import React from 'react';

const About = () => {
  return (
    <div className="container page-shell page-shell--narrow animate-fade-in">
      <h1 className="section-title section-title--left">
        About <span className="text-gradient">Jnanothsava</span>
      </h1>

      <div className="content-panel content-panel--spacious muted-copy">
        <p style={{ marginBottom: '1.5rem' }}>
          <strong style={{ color: 'var(--color-text)' }}>Jnanothsava 2026</strong> is the premier Techno-Cultural Fest.
          It gathers the brightest minds to showcase their technical prowess, leadership qualities, and cultural talents.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          Our mission is to foster <strong style={{ color: 'var(--color-primary-light)' }}>innovation, creativity, and student engagement</strong>.
          We believe in creating a platform where students can transition from theoretical knowledge to practical excellence.
        </p>
        <p>
          Whether you are a coding prodigy, an aspiring entrepreneur, or a gifted artist, Jnanothsava offers meticulously crafted events to challenge you, inspire you, and celebrate your potential. Join us on <strong>May 15-16, 2026</strong> for an unforgettable experience.
        </p>
      </div>
    </div>
  );
};

export default About;
