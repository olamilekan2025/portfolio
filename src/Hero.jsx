
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import "./styling/Hero.css";

const name = "JEL DEV";

const Hero = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section id="hero" className="hero">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="particles-canvas"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: { resize: true },
          },
          particles: {
            color: { value: "#64ffda" },
            links: {
              color: "#64ffda",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 80,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      <div className="hero-content">
        {/* Left: All Text Content */}
        <div className="hero-text">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="greeting"
          >
            Hi, my name is
          </motion.p>

          <h1 className="hero-title">
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="letter"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hero-subtitle"
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hero-description"
          >
            I craft modern, responsive, and high-performance web experiences using
            React. Passionate about clean code, intuitive UI/UX, and bringing ideas
            to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hero-buttons"
          >
            <a href="#projects" className="btn primary">
              View My Work
            </a>
            <a href="#contact" className="btn secondary">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="social-links"
          >
            <a
              href="https://github.com/olamilekan2025"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub  style={{color: "#0EA5E9"}}/>
            </a>
           <a
  href="https://wa.me/2349129069652"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
>
 <FaWhatsapp style={{color: "#0EA5E9"}}/>
</a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
             <FaXTwitter style={{color: "#0EA5E9"}}/>
            </a>
          </motion.div>
        </div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="profile-wrapper"
        >
          <div className="glow-border"></div>
          <img
            src="https://res.cloudinary.com/divio4grm/image/upload/v1766823355/frosh_pckpyo.jpg"
            alt="Jel Dev - Frontend Developer"
            className="profile-img"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="scroll-indicator"
      >
        <span></span>
      </motion.div>
    </section>
  );
};

export default Hero;