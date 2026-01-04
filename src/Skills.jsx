import React, { useRef, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView, animate } from "framer-motion";
import "./styling/Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";


const skillCategories = [
  {
    title: "Technical Skills",
    items: [
      {
        name: "HTML",
        level: "Expert",
        desc: "Semantic markup, forms, accessibility",
        percent: 95,
      },
      {
        name: "CSS",
        level: "Expert",
        desc: "Flexbox, Grid, responsive design",
        percent: 92,
      },
      {
        name: "JavaScript",
        level: "Advanced",
        desc: "ES6+, DOM manipulation, async logic",
        percent: 90,
      },
      {
        name: "React",
        level: "Advanced",
        desc: "Hooks, components, state management",
        percent: 90,
      },
      {
        name: "Git",
        level: "Intermediate",
        desc: "Version control & collaboration",
        percent: 80,
      },
      {
        name: "Postman",
        level: "Intermediate",
        desc: "API testing & debugging",
        percent: 75,
      },
    ],
  },
];

const SkillBar = ({ percent, name }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, percent, {
        duration: 1,
        onUpdate: (v) => setValue(Math.round(v)),
      });
      return () => controls.stop();
    }
  }, [inView, percent]);

  return (
    <div ref={ref} className="progress-wrapper">
      <div
        className="progress-bar-bg"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={`${name} proficiency`}
      >
        <div className="progress-bar-fill" style={{ width: `${value}%` }} />
      </div>
      <span className="progress-label">{value}%</span>
    </div>
  );
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frontend Skills
        </motion.h2>

        <p className="section-subtitle">
          Core technologies I use to build modern, responsive web applications.
        </p>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="skill-category"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="category-title">{cat.title}</h3>

              <div className="skill-tags">
                {cat.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skill-item"
                    whileHover={{ scale: 1.03 }}
                  >
                    <strong className="skill-label">{skill.name}</strong>
                    <p className="skill-desc">{skill.desc}</p>

                    <SkillBar
                      name={skill.name}
                      percent={skill.percent}
                    />

                    <span className="skill-level">{skill.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
