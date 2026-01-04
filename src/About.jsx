

import React from "react";
import { motion } from "framer-motion";
import "./styling/About.css";

const About = () => {
  const downloadCV = async (e) => {
    e.preventDefault();
    const remoteUrl = 'https://res.cloudinary.com/divio4grm/image/upload/v1767486373/MY_PORTFOLIO_uptwss.jpg';

    try {
      const res = await fetch(remoteUrl);
      if (!res.ok) throw new Error('Network response was not ok');
      const contentType = res.headers.get('content-type') || 'image/jpeg';
      const arrayBuffer = await res.arrayBuffer();
      if (!arrayBuffer || arrayBuffer.byteLength === 0) throw new Error('Empty file received');
      const blob = new Blob([arrayBuffer], { type: contentType });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Oladunjoye_Jelili_CV.jpg';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed:', err);
      window.open(remoteUrl, '_blank', 'noopener,noreferrer');
      alert('Download failed. The CV has been opened in a new tab — please download from the viewer.');
    }
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Header with Title & CV Download */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p>
            A frontend developer dedicated to building clean, modern, and
            user-focused web experiences.
          </p>

          {/* CV Download Button */}
          <motion.a
            href="https://res.cloudinary.com/divio4grm/image/upload/v1767486373/MY_PORTFOLIO_uptwss.jpg"
            download="Oladunjoye_Jelili_CV.jpg"
            className="cv-button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            aria-label="Download Oladunjoye Jelili CV"
            onClick={downloadCV}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/divio4grm/image/upload/v1767486373/MY_PORTFOLIO_uptwss.jpg"
              alt="Preview of Oladunjoye Jelili CV"
              className="cv-image"
            />
            <span className="cv-text">Download CV</span>
          </motion.a>

        </motion.div>

        {/* Two-Column Content */}
        <div className="about-content">
          {/* Who I Am */}
          <motion.div
            className="about-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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

          {/* How I Work */}
          <motion.div
            className="about-block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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

        {/* Core Values Grid */}
        <motion.div
          className="about-values"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
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