import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>
            Prathap<span>.dev</span>
          </h2>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/Prathap1910"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/prathap19/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/YOUR_INSTAGRAM"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a href="mailto:prathapkumarneymar@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} <span>Prathap.dev</span> | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
