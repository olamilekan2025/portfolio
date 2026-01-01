import React from "react";
import { motion } from "framer-motion";
import { 
  FaWhatsapp, 
  FaFacebookF, 
  FaInstagram, 
  FaXTwitter, 
  FaPhone, 
  FaEnvelope 
} from "react-icons/fa6"; // Updated imports from fa6
import "./styling/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <motion.div
          className="footer-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Brand */}
          <div className="footer-brand">
            <h3>Oladunjoye Jelili</h3>
            <p>Frontend Developer</p>
            <p className="brand-tagline">Crafting modern, responsive web experiences</p>
          </div>

          {/* Services */}
          <div className="footer-services">
            <h4>Services</h4>
            <ul>
              <li>Web Design</li>
              <li>Frontend Development</li>
              <li>Responsive UI/UX</li>
              <li>Web3 Integration</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <div className="contact-item">
              <FaPhone />
              <span>+234 912 906 9652<br />+234 707 405 2461</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <a href="mailto:jelilioladunjoye04@gmail.com">jelilioladunjoye04@gmail.com</a>
            </div>
          </div>

          {/* Social Links - Updated to WhatsApp, Facebook, Instagram, X */}
          <div className="footer-socials">
            <h4>Connect</h4>
            <div className="social-icons">
              <a 
                href="https://wa.me/2349129069652" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="https://facebook.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://instagram.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://x.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X (Twitter)"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p>© {new Date().getFullYear()} <span>Oladunjoye jelil</span>. All rights reserved.</p>
          <p className="made-with">Made with passion & React</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;