import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
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
    <section id="about" className="about-section">
      <div className="about-inner">

        {/* LEFT */}
        <div ref={ref(0)} className="reveal">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Crafting Digital<br />Experiences</h2>
          <p className="about-desc">
            I'm a Frontend Developer with a strong focus on UI/UX design using Figma.
            I specialize in building modern, responsive web applications using React.
            I enjoy turning complex ideas into simple, clean, and user-friendly interfaces.
          </p>
          <div className="about-checks">
            {[
              'UI Design with Figma',
              'React Development',
              'Responsive Design',
              'Clean, Readable Code',
            ].map((item) => (
              <div className="check-item" key={item}>
                <div className="check-icon">✓</div>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="about-cards">
          {[
            { icon: '🎓', title: "B.Sc. Computer Science", desc: "Manonmaniam Sundaranar University · 2024 · CGPA 6.7", delay: 'reveal-d1' },
            { icon: '💼', title: "Frontend Intern @ GT Software", desc: "Built real-time web projects and responsive UIs with React.", delay: 'reveal-d2' },
            { icon: '📍', title: "Based in Tamil Nadu, India", desc: "Open to remote work globally and on-site opportunities.", delay: 'reveal-d3' },
          ].map((card, i) => (
            <div ref={ref(i + 1)} key={card.title} className={`info-card reveal ${card.delay}`}>
              <div className="info-card-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
