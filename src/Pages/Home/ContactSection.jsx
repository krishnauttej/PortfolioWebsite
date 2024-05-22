import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPenRuler, faMicrochip, faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faGithub,faXTwitter} from '@fortawesome/free-brands-svg-icons'
import './contact-section.css';
const ContactSection = () => {
  return (
    <div className="contact-l">
      <h1 className="sub-header">Let's Connect</h1>
      <p ><FontAwesomeIcon icon={faEnvelope} /> krishna.uttej.kondisetty@gmail.com</p>
      <div className="social">
        <a href="mailto:krishna.uttej.kondisetty@gmail.com?subject=Contact%20Form%20Submission" target="_blank" rel="noreferrer noopener" aria-label='email'>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/in/krishnauttej" target="_blank" rel="noreferrer noopener" aria-label='linkedin-account'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/krishnauttej" target="_blank" rel="noreferrer noopener" aria-label='github-account'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://x.com/krishna_uttej" target="_blank" rel="noreferrer noopener" aria-label='twitter-account'>
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="https://www.instagram.com/krishna_uttej" target="_blank" rel="noreferrer noopener" aria-label='instagram-account'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
