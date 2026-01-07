
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./styling/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-text">
          <p className="hero-intro">Hi, my name is</p>
          <h1 className="hero-name">
            Oladunjoye <span>Jelil</span>
          </h1>
          <h2 className="hero-role">Frontend Developer</h2>
          <p className="hero-description">
            I build modern, responsive, and user-friendly web applications using
            HTML, CSS, JavaScript, and React. I focus on clean code, performance,
            and great user experience.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/olamilekan2025"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/oladunjoye-jelil-olamilekan-1246973a3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:jelilioladunjoye04@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          



          {/* Scroll Indicator: only dot animates */}
      <a href="#projects" className="scroll-indicator" aria-label="Scroll down">
        <div className="mouse">
          <motion.div
            className="wheel"
            animate={{ y: [0, 8, 0] }}  // Dot moves up and down
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
            }}
          />
        </div>
      </a>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <div className="image-glow"></div>
          <img
            src="https://res.cloudinary.com/divio4grm/image/upload/v1767774450/WhatsApp_Image_2026-01-06_at_23.15.52_rt9mhf.jpg"
            alt="Oladunjoye Jelili - Frontend Developer"
          />
        </div>
      </div>

      
    </section>
  );
}

export default Hero;

