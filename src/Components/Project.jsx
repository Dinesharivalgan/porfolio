import React, { useEffect, useRef } from 'react';
import './Project.css';

const projects = [
  {
    thumb: 'thumb-cinema',
    emoji: '🎬',
    tag: 'Web App',
    title: 'Movie Ticket Booking',
    desc: 'A fully responsive movie ticket booking app with an interactive seat map and clean payment UI — built to mimic production-grade booking flows.',
    features: ['Interactive seat selection map', 'Payment UI & confirmation flow', 'Mobile-first responsive design'],
    stack: ['React.js', 'CSS3', 'useState'],
    live: 'https://cinebook-movie.vercel.app/',
    github: 'https://github.com/Dinesharivalgan/CineBook',
  },
  {
    thumb: 'thumb-portfolio',
    emoji: '🧑‍💻',
    tag: 'Portfolio',
    title: 'Personal Portfolio',
    desc: 'A modern, animated personal portfolio with scroll-triggered animations, glassmorphism UI, and a fully responsive layout for clients & recruiters.',
    features: ['Scroll-triggered animations', 'Glassmorphism + dark theme', 'Fully responsive across devices'],
    stack: ['React.js', 'CSS3', 'Framer Motion'],
    live: '#',
    github: '#',
  },
  {
    thumb: 'thumb-ecommerce',
    emoji: '🛍️',
    tag: 'E-Commerce',
    title: 'ShopFront UI',
    desc: 'A clean e-commerce product listing and cart UI with filtering, sorting, and a smooth checkout experience — designed to convert visitors into buyers.',
    features: ['Product filter & sort', 'Cart with state management', 'Clean checkout interface'],
    stack: ['React.js', 'Context API', 'CSS Grid'],
    live: '#',
    github: '#',
  },
];

const Project = () => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ref = (i) => (el) => (refs.current[i] = el);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">

        <div ref={ref(0)} className="projects-header reveal">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">Selected Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.title}
              ref={ref(i + 1)}
              className={`project-card reveal ${i === 1 ? 'reveal-d1' : i === 2 ? 'reveal-d2' : ''}`}
            >
              <div className={`project-thumb ${p.thumb}`}>{p.emoji}</div>
              <div className="project-body">
                <span className="project-tag">{p.tag}</span>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-features">
                  {p.features.map((f) => <div className="project-feat" key={f}>{f}</div>)}
                </div>
                <div className="project-stack">
                  {p.stack.map((t) => <span className="stack-tag" key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={p.live} target="_blank" rel="noreferrer" className="proj-btn proj-live">↗ Live Demo</a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="proj-btn proj-gh">⎇ GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;