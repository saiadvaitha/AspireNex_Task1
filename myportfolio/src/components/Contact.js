import React from 'react';
import '../styles/Contact.css';
import backgroundImage from '../assests/back1';
import githubIcon from '../assests/github';
import linkedinIcon from '../assests/linkedln';

function Contact() {
  const contactDetails = {
    name: 'Sai Advaitha',
    email: 'saiadvaithasiddi@gmail.com', 
    github: 'https://github.com/saiadvaitha', 
    linkedin: 'https://www.linkedin.com/in/sai-advaitha',
  };

  return (
    <section id="contact" className="contact" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="contact-overlay">
        <h2>Contact Me</h2>
        <div className="contact-details">
          <p><strong>Name:</strong> {contactDetails.name}</p>
          <p><strong>Email:</strong> {contactDetails.email}</p>
          <div className="contact-links">
            <a href={contactDetails.github} target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
