



import React from "react";
import { motion } from "framer-motion";
import "./styling/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p>
            A frontend developer dedicated to building clean, modern, and
            user-focused web experiences.
          </p>

          {/* CV Preview + Download */}
          <motion.a
            href="/MY_PORTFOLIO.jpg"
            download="Oladunjoye_Jelili_CV.jpg"
            className="cv-button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
           
            <span className="cv-text">Download CV</span>
          </motion.a>
        </motion.div>

        {/* Main Content */}
        <div className="about-content">

          {/* Left Block */}
          <motion.div
            className="about-block"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Who I Am</h3>
            <p>
              My name is <strong>Oladunjoye Jelili Olamilekan</strong>, a frontend
              developer passionate about crafting responsive and visually
              engaging websites.
            </p>
            <p>
              I enjoy transforming ideas into real, usable digital products that
              are simple, fast, and enjoyable to use.
            </p>
          </motion.div>

          {/* Right Block */}
          <motion.div
            className="about-block"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>How I Work</h3>
            <p>
              I focus on writing clean, maintainable code while ensuring layouts
              are fully responsive across all devices.
            </p>
            <p>
              Clear communication, attention to detail, and meeting project
              goals are central to how I work with clients and teams.
            </p>
          </motion.div>

        </div>

        {/* Values */}
        <motion.div
          className="about-values"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>What You Can Expect</h3>

          <div className="values-grid">
            <div className="value-card">Clean & Responsive Design</div>
            <div className="value-card">User-Focused Interfaces</div>
            <div className="value-card">Clear Communication</div>
            <div className="value-card">Reliable Delivery</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

