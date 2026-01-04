import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styling/Contact.css";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mzdbjaev", {
        method: "POST",
        body: new FormData(e.target),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("success");
        setMessage("Thank you! I've received your message and will reply soon.");
        e.target.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error(err);
      setFormStatus("error");
      setMessage("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <h2 className="section-heading">Let's Work Together</h2>
          <p className="section-subheading">
            Have a project in mind? I'm ready to bring your ideas to life.
          </p>
        </motion.div>

        <div className="contact-grid">
      
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="contact-info-card"
          >
            <h3>Contact Information</h3>
            <p className="info-description">
              Feel free to reach out—I'm always excited to discuss new opportunities!
            </p>

            <div className="info-list">
              <div className="info-row">
                <span className="info-icon">Email</span>
                <a href="mailto:jelilioladunjoye04@gmail.com" className="info-value">
                  jelilioladunjoye04@gmail.com
                </a>
              </div>
              <div className="info-row">
                <span className="info-icon">Location</span>
                <p className="info-value">Nigeria</p>
              </div>
              <div className="info-row">
                <span className="info-icon">Availability</span>
                <p className="info-value">Open to Opportunities</p>
              </div>
            </div>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="contact-form-card"
          >
            <h3>Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="modern-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={formStatus === "submitting"}
                className="send-button"
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </motion.button>
            </form>

          
            {formStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="feedback success"
              >
                Success! Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            {formStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="feedback error"
              >
                Error! {message} <br />
                <a href="mailto:jelilioladunjoye04@gmail.com">
                  Email me directly
                </a>
              </motion.div>
            )}

            {formStatus === "idle" && (
              <p className="form-hint">
                Messages are sent directly to <strong>jelilioladunjoye04@gmail.com</strong>
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;