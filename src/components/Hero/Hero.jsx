import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0">Accelerating Your Business with AI-Driven Automation</h1>
            <p className="hero-paragraph">Accelerate Digital Transformation, Streamline Operations, and Build Scalable Solutions Faster Than Ever.</p>
            <div className="hero-cta">
              <Link to="/login" className="button button-primary" >Get Started</Link>
            <Link to="/about" className="button">Learn More</Link>
            </div>
          </div>
          <div className="hero-figure anime-element">
            <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
              <rect width="528" height="396" style={{ fill: 'transparent' }} />
            </svg>
            <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
            <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
            <div className="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
            <div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
            <div className="hero-figure-box hero-figure-box-05"></div>
            <div className="hero-figure-box hero-figure-box-06"></div>
            <div className="hero-figure-box hero-figure-box-07"></div>
            <div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
            <div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
            <div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
