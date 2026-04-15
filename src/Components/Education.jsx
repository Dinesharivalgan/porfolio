import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className='main'>
    <section id="education" className="education-section py-32">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <h2>Education</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="edu-card">
              <div className="grade-badge mb-4 inline-block">CGPA: 6.7</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Bachelor's Degree
              </h3>
              <p className="text-slate-400 mb-4">Manonmaniam Sundaranar University</p>
              <span className="text-sm text-slate-500">2024</span>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="edu-card">
              <div className="grade-badge mb-4 inline-block">83%</div>
              <h3 className="text-2xl font-bold text-white mb-2">Diploma</h3>
              <p className="text-slate-400 mb-4">PSV Polytechnic College</p>
              <span className="text-sm text-slate-500">2018</span>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="edu-card">
              <div className="grade-badge mb-4 inline-block">67%</div>
              <h3 className="text-2xl font-bold text-white mb-2">HSC</h3>
              <p className="text-slate-400 mb-4">Govt Boys High School</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="edu-card">
              <div className="grade-badge mb-4 inline-block">80%</div>
              <h3 className="text-2xl font-bold text-white mb-2">SSLC</h3>
              <p className="text-slate-400 mb-4">Jothi High School</p>
            </div>
          </div>
        </div>
      </div>
    </section></div>
  );
};

export default Education;