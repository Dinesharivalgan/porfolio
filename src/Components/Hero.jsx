import React from 'react';
import './Hero.css';
import Dinesh from'../Assets/Dinesh.jpeg';
const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <div className="hero-badge">
            <div className="pulse-dot" />
            Available for Freelance &amp; Remote Work
          </div>

          <h1 className="hero-name">
            Hi, I'm<br />
            <span className="accent">Dinesh</span>
          </h1>

          <p className="hero-role">
            <strong>Frontend Developer</strong> &amp; UI/UX Designer
          </p>

          <p className="hero-desc">
            I build clean, responsive, and user-friendly web experiences that solve
            real-world problems — from concept to production-ready code.
          </p>

          <div className="hero-btns">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View Projects ↗
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('contact')}>
              Hire Me →
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <div className="stat-num">1<span>+</span></div>
              <div className="stat-label">Year Experience</div>
            </div>
            <div>
              <div className="stat-num">3<span>+</span></div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div>
              <div className="stat-num">8<span>+</span></div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">
          <div className="avatar-frame">
            <div className="avatar-ring" />
            <div className="avatar-inner">
              <div className="avatar-initials">
                <img className='profile' src={Dinesh}></img></div>
            </div>
            <div className="floating-chip chip-1">⚛️ React Developer</div>
            <div className="floating-chip chip-2">🎨 UI/UX Design</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
