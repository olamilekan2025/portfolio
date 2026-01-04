import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./styling/Projects.css";

// Projects data
const projects = [
  // HTML/CSS Projects
  {
    category: "HTML/CSS",
    title: "Creativity",
    description:
      "A sleek, responsive landing page for a structural design and estate management portfolio, built with pure HTML & CSS. Features a modern hero section with property search form, elegant typography, and clean layout to highlight design expertise and client-focused services.",
    image:
      "https://res.cloudinary.com/divio4grm/image/upload/v1766965126/WhatsApp_Image_2025-12-29_at_00.36.39_gqfngb.jpg",
    demo: "https://creativityproject-95qo.vercel.app/",
    github: "https://github.com/olamilekan2025/todo-app",
  },
  {
    category: "HTML/CSS",
    title: "Foodies",
    description:
      "A vibrant, responsive landing page for a vegan fast food restaurant, crafted with HTML & CSS. Includes a captivating hero section, menu highlights, promotional offers, testimonials, and a gallery—delivering a fresh, modern design with smooth navigation.",
    image:
      "https://res.cloudinary.com/divio4grm/image/upload/v1766965596/WhatsApp_Image_2025-12-29_at_00.42.46_iomdk5.jpg",
    demo: "https://foodies-xi-sable.vercel.app/Landing_page/index.html",
    github: "https://github.com/olamilekan2025/todo-app",
  },
  {
    category: "HTML/CSS",
    title: "Silver",
    description:
      "A sophisticated fine dining restaurant website built using HTML & CSS, showcasing advanced grid layouts, elegant typography, and a warm color scheme. Features sections for menu, reservations, events, chef profiles, and blog—all in a fully responsive structure.",
    image:
      "https://res.cloudinary.com/divio4grm/image/upload/v1766965630/WhatsApp_Image_2025-12-29_at_00.44.12_jrf2yr.jpg",
    demo: "https://silver-kappa.vercel.app/",
    github: "https://github.com/olamilekan2025/todo-app",
  },
  {
    category: "HTML/CSS",
    title: "Gateway",
    description:
      "A modern, responsive restaurant landing page created with pure HTML & CSS. Includes smooth navigation, an immersive hero section, menu listings, image gallery, reservation calls-to-action, and blog updates for a professional and engaging user experience.",
    image:
      "https://res.cloudinary.com/divio4grm/image/upload/v1766965673/WhatsApp_Image_2025-12-29_at_00.45.29_iewv23.jpg",
    demo: "https://gateway-olive.vercel.app/",
    github: "https://github.com/olamilekan2025/todo-app",
  },
  {
    category: "HTML/CSS",
    title: "Ola Print",
    description:
      "A professional prototype website for a printing business, built with semantic HTML and custom CSS. Highlights services like branded apparel, banners, and corporate gifts, with clear sections for trending items, categories, about, and contact information.",
    image:
      "https://res.cloudinary.com/divio4grm/image/upload/v1766965911/WhatsApp_Image_2025-12-29_at_00.51.32_omkrqd.jpg",
    demo: "https://ola-print.vercel.app/",
    github: "https://github.com/olamilekan2025/todo-app",
  },
  // React Projects
  {
    category: "React",
    title: "Bite House",
    description:
      "A dynamic restaurant website built with React, featuring a clean hero section, popular food highlights, navigation, and interactive elements like cookie consent. Emphasizes bold flavors and fresh meals in a responsive, modern interface.",
    image:
      "https://res.cloudinary.com/divio4grm/image/upload/v1766965038/WhatsApp_Image_2025-12-29_at_00.35.14_d2p7kj.jpg",
    demo: "https://bite-house-two.vercel.app/",
    github: "https://github.com/olamilekan2025/todo-app",
  },
  {
    category: "React",
    title: "Todo App",
    description:
      "A sleek and functional task management app developed with React. Users can add, track, and manage tasks in a minimalist, glassmorphic UI with smooth interactions, personalized greetings, and intuitive controls for productivity.",
    image:
      "https://res.cloudinary.com/divio4grm/image/upload/v1766964101/WhatsApp_Image_2025-12-29_at_00.21.20_horlog.jpg",
    demo: "https://todo-app-drab-six-38.vercel.app/",
    github: "https://github.com/olamilekan2025/todo-app",
  }, 
  {
    category: "React",
    title: "FilmDatax",
    description:
"FilmDatax is a React movie discovery app using the TMDB API. Users can browse popular movies, search titles, view details like posters, ratings, cast, and explore trending releases in a responsive, modern interface.",
    image:
      "https://res.cloudinary.com/divio4grm/image/upload/v1766964238/WhatsApp_Image_2025-12-29_at_00.23.35_fwhr4p.jpg",
    demo: "https://netflix-fawn-mu.vercel.app/",
    github: "https://github.com/olamilekan2025/todo-app",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I’ve built recently. Click on a project
          to view demo.
        </p>

        <div className="filter-buttons">
          {["All", "HTML/CSS", "React"].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => {
                setFilter(cat);
                setShowAll(false);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${
                project.category === "HTML/CSS" ? "html-css" : "react"
              }`}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #38bdf8" }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-info">
                <span className="project-badge">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
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

        {filteredProjects.length > 4 && (
          <div className="see-more-wrapper">
            <button
              className="btn primary"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
