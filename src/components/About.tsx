import React from 'react';
import CompanyIntro from './About/CompanyIntro';
import Features from './About/Features';
import Laboratory from './About/Laboratory';
import Certifications from './About/Certifications';

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#f0f9ff,_transparent)] opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative">
        <CompanyIntro />
        <Features />
        <Laboratory />
        <Certifications />
      </div>
    </section>
  );
};

export default About;