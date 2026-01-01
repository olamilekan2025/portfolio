
import React from "react";
import "./styling/Hero.css";

const name = "OLAMILEKAN";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">

        {/* Profile Image */}
        <div className="profile-wrapper">
          <span className="glow"></span>
         <img src="https://res.cloudinary.com/divio4grm/image/upload/v1766823355/frosh_pckpyo.jpg" alt="" />
        </div>

        {/* Animated Name */}
        <h1 className="hero-title">
          {name.split("").map((char, index) => {
            if (char === " ") {
              return <span key={index} className="space"></span>;
            }

            return (
              <span
                key={index}
                className={`letter ${
                  index % 4 === 0
                    ? "from-left"
                    : index % 4 === 1
                    ? "from-right"
                    : index % 4 === 2
                    ? "from-top"
                    : "from-bottom"
                }`}
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                {char}
              </span>
            );
          })}
        </h1>

        {/* Description */}
        <p>
          Frontend Developer crafting modern, responsive, and high-performance
          web experiences with React, focused on clean code and great user
          experiences.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span></span>
        </div>

      </div>
    </section>
  );
};

export default Hero;

