
import React, { useState } from "react";
import "./styling/About.css";
import { Download, Mail, Github, Linkedin } from "lucide-react";

const CV_URL =
  "https://res.cloudinary.com/divio4grm/image/upload/v1767486373/MY_PORTFOLIO_uptwss.jpg";

const About = () => {
  const [downloading, setDownloading] = useState(false);

  const downloadCV = () => {
    setDownloading(true);

    const link = document.createElement("a");
    link.href = CV_URL;
    link.download = "Oladunjoye_Jelili_CV.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloading(false), 800);
  };

  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="container">
        {/* Header */}
        <header className="about-header">
          <h1 id="about-title">About Me</h1>
          <p className="subtitle">
            Frontend Developer focused on building real-world web experiences
          </p>
        </header>

        <div className="about-content">
          <div className="text-section">
            <p className="about-paragraph">
              Hi, I’m <strong>Oladunjoye Jelili</strong>, a frontend developer who
              specializes in building modern, responsive, and user-friendly web
              interfaces.
            </p>

            <p className="about-paragraph">
              I work with <strong>HTML</strong>, <strong>CSS</strong>,{" "}
              <strong>JavaScript</strong>, and <strong>React</strong> to turn
              designs into fast, accessible, and maintainable applications.
            </p>

            <p className="about-paragraph">
              My focus is clean code, mobile-first design, and smooth user
              experience.
            </p>

            <ul className="about-highlights">
              <li>✔ Responsive & mobile-first layouts</li>
              <li>✔ Clean, scalable code</li>
              <li>✔ API integration</li>
              <li>✔ Performance & accessibility</li>
            </ul>

            {/* Download Button */}
            <button
              type="button"
              className="download-button"
              onClick={downloadCV}
              disabled={downloading}
              aria-busy={downloading}
            >
              <Download size={20} />
              <span>{downloading ? "Downloading…" : "Download CV"}</span>
            </button>

            {/* Contact */}
            <div className="about-contacts">
              <a href="mailto:jelilioladunjoye04@gmail.com" aria-label="Email">
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

