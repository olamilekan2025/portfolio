

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styling/Projects.css";

// Projects data
const projects = [
  // HTML/CSS Projects
  {
    category: "HTML/CSS",
    title: "Creativity ",
    image: "https://res.cloudinary.com/divio4grm/image/upload/v1766965126/WhatsApp_Image_2025-12-29_at_00.36.39_gqfngb.jpg",
    demo: "https://creativityproject-95qo.vercel.app/",
  },
  {
    category: "HTML/CSS",
    title: "Foodies ",
    image: "https://res.cloudinary.com/divio4grm/image/upload/v1766965596/WhatsApp_Image_2025-12-29_at_00.42.46_iomdk5.jpg",
    demo: "https://foodies-xi-sable.vercel.app/Landing_page/index.html",
  },
  {
    category: "HTML/CSS",
    title: "Silver ",
    image: "https://res.cloudinary.com/divio4grm/image/upload/v1766965630/WhatsApp_Image_2025-12-29_at_00.44.12_jrf2yr.jpg",
    demo: "https://silver-kappa.vercel.app/",
  },
  {
    category: "HTML/CSS",
    title: "Gateway",
    image: "https://res.cloudinary.com/divio4grm/image/upload/v1766965673/WhatsApp_Image_2025-12-29_at_00.45.29_iewv23.jpg",
    demo: "https://gateway-olive.vercel.app/",
  },
  {
    category: "HTML/CSS",
    title: "Ola Print",
    image: "https://res.cloudinary.com/divio4grm/image/upload/v1766965911/WhatsApp_Image_2025-12-29_at_00.51.32_omkrqd.jpg",
    demo: "https://ola-print.vercel.app/",
  },

  // React Projects
  {
    category: "React",
    title: "Bite House",
    image: "https://res.cloudinary.com/divio4grm/image/upload/v1766965038/WhatsApp_Image_2025-12-29_at_00.35.14_d2p7kj.jpg",
    demo: "https://bite-house-two.vercel.app/",
  },
  {
    category: "React",
    title: "Todo App",
    image: "https://res.cloudinary.com/divio4grm/image/upload/v1766964101/WhatsApp_Image_2025-12-29_at_00.21.20_horlog.jpg",
    demo: "https://todo-app-drab-six-38.vercel.app/",
    github: "https://github.com/yourusername/todo-app",
  },
  {
    category: "React",
    title: "FilmDatax",
    image: "https://res.cloudinary.com/divio4grm/image/upload/v1766964238/WhatsApp_Image_2025-12-29_at_00.23.35_fwhr4p.jpg",
    demo: "https://yourstore.com",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I’ve built recently. Click on a project to view demo.
        </p>

        {/* Filter Toggle */}
        <div className="filter-buttons">
          {["All", "HTML/CSS", "React"].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.category === "HTML/CSS" ? "html-css" : "react"}`}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #38bdf8" }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <span className="project-badge">{project.category}</span>
                <h3>{project.title}</h3>
                {project.description && <p>{project.description}</p>}
                <div className="project-buttons">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn primary"
                  >
                    View Demo
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn secondary"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
