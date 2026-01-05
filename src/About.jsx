



import React, { useState } from "react";
import "./styling/About.css";
import { Download, Mail, Github, Linkedin } from "lucide-react";

const CLOUD_CV_URL =
  "https://res.cloudinary.com/divio4grm/image/upload/v1767486373/MY_PORTFOLIO_uptwss.jpg";

const About = () => {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState("");

  const downloadCV = async (e) => {
    e.preventDefault();
    if (downloading) return;

    setDownloading(true);
    setError("");

    try {
      const res = await fetch(CLOUD_CV_URL, { cache: "no-cache" });
      if (!res.ok) throw new Error("Failed to fetch CV");

      const blob = await res.blob();
      if (!blob.size) throw new Error("Empty file");

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Oladunjoye_Jelili_CV.jpg";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      setError("Download failed. Opening CV in a new tab.");
      window.open(CLOUD_CV_URL, "_blank", "noopener,noreferrer");
    } finally {
      setDownloading(false);
    }
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

            {/* Who you are */}
            <p className="about-paragraph">
              Hi, I’m <strong>Oladunjoye Jelili</strong>, a frontend developer who
              specializes in building modern, responsive, and user-friendly web
              interfaces.
            </p>

            {/* What you do */}
            <p className="about-paragraph">
              I work with <strong>HTML</strong>, <strong>CSS</strong>,{" "}
              <strong>JavaScript</strong>, and <strong>React</strong> to turn
              designs and ideas into fast, accessible, and maintainable web
              applications.
            </p>

            {/* How you work */}
            <p className="about-paragraph">
              My approach focuses on clean code, mobile-first design, and strong
              attention to user experience. I enjoy solving UI problems and
              building interfaces that feel simple, smooth, and intuitive.
            </p>

            {/* Value to client */}
            <p className="about-paragraph">
              Whether it’s a portfolio, business website, or web application, I
              aim to deliver solutions that are easy to use, visually appealing,
              and optimized for performance.
            </p>

            {/* Key strengths */}
            <ul className="about-highlights">
              <li>✔ Responsive & mobile-first layouts</li>
              <li>✔ Clean, readable, and scalable code</li>
              <li>✔ API integration & dynamic UI logic</li>
              <li>✔ Accessibility & performance awareness</li>
            </ul>

            {/* CTA */}
            <button
              type="button"
              className="download-button"
              onClick={downloadCV}
              aria-label="Download Oladunjoye Jelili CV"
              aria-busy={downloading}
              disabled={downloading}
            >
              <Download size={20} aria-hidden="true" />
              <span>{downloading ? "Downloading…" : "Download CV"}</span>
            </button>

            {error && <p className="download-error">{error}</p>}

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
