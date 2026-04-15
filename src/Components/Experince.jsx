import React, { useEffect, useRef } from 'react';
import './Experince.css';

const Experince = () => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ref = (i) => (el) => (refs.current[i] = el);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-inner">

        <div ref={ref(0)} className="reveal">
          <div className="section-tag">Career</div>
          <h2 className="section-title">Experience</h2>
        </div>

        <div ref={ref(1)} className="exp-card reveal">
          <div className="exp-header">
            <div className="exp-badge-tag">Internship</div>
          </div>
          <div className="exp-role">Frontend Developer Intern</div>
          <div className="exp-company">GT Software · Dec2025 - March2026</div>
          <div className="exp-list">
            {[
              'Worked on real-time client web projects',
              'Developed responsive UIs using React.js',
              'Improved UI/UX design practices with Figma',
              'Collaborated using Git and GitHub workflows',
              'Delivered pixel-perfect implementations from design',
            ].map((item) => (
              <div className="exp-li" key={item}>{item}</div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experince;
