import React, { useEffect, useRef } from 'react';
import './Skills.css';

const frontendPills = [
  { icon: '🟠', name: 'HTML5' },
  { icon: '🔵', name: 'CSS3' },
  { icon: '🟡', name: 'JavaScript' },
  { icon: '⚛️', name: 'React.js' },
  { icon: '🟣', name: 'Bootstrap' },
  { icon: '💨', name: 'Tailwind CSS' },
];

const designPills = [
  { icon: '🎨', name: 'Figma' },
  { icon: '✏️', name: 'UI/UX Design' },
  { icon: '📐', name: 'Responsive Design' },
  { icon: '🌈', name: 'Design Systems' },
];

const skillBars = [
  { name: 'HTML / CSS', pct: 95 },
  { name: 'Figma', pct: 95 },        // ✅ Updated
  { name: 'JavaScript', pct: 85 },
  { name: 'React.js', pct: 85 },     // ✅ Updated
  { name: 'Git / GitHub', pct: 85 },
  { name: 'Bootstrap', pct: 88 },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const refs = useRef([]);
  const barsAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            // Animate bars when section is visible
            if (!barsAnimated.current && e.target === sectionRef.current) {
              barsAnimated.current = true;
              setTimeout(() => {
                document.querySelectorAll('.skill-bar-fill[data-width]').forEach((bar) => {
                  bar.style.width = bar.dataset.width + '%';
                });
              }, 200);
            }
          }
        });
      },
      { threshold: 0.12 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const ref = (i) => (el) => (refs.current[i] = el);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-inner">

        <div ref={ref(0)} className="skills-header reveal">
          <div className="section-tag">What I Know</div>
          <h2 className="section-title">Skills &amp; Technologies</h2>
        </div>

        <div className="skills-categories">

          {/* FRONTEND PILLS */}
          <div ref={ref(1)} className="reveal reveal-d1">
            <div className="skill-category-label">Frontend Development</div>
            <div className="skills-row">
              {frontendPills.map((s) => (
                <div className="skill-pill" key={s.name}>
                  <span className="skill-pill-icon">{s.icon}</span>
                  {s.name}
                </div>
              ))}
            </div>
          </div>

          {/* DESIGN PILLS */}
          <div ref={ref(2)} className="reveal reveal-d1">
            <div className="skill-category-label">Design</div>
            <div className="skills-row">
              {designPills.map((s) => (
                <div className="skill-pill" key={s.name}>
                  <span className="skill-pill-icon">{s.icon}</span>
                  {s.name}
                </div>
              ))}
            </div>
          </div>

          {/* BARS */}
          <div ref={ref(3)} className="reveal reveal-d2">
            <div className="skill-category-label">Proficiency</div>
            <div className="skill-bars-grid">
              {skillBars.map((s) => (
                <div className="skill-bar-card" key={s.name}>
                  <div className="skill-bar-top">
                    <span className="skill-bar-name">{s.name}</span>
                    <span className="skill-bar-pct">{s.pct}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      data-width={s.pct}
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
