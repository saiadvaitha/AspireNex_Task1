import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar({ scrollToSection }) {
  const [activeSection, setActiveSection] = useState('');

  const handleButtonClick = (section) => {
    setActiveSection(section);
    setTimeout(() => scrollToSection(section), 300); // Adjust delay to match animation duration
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">My Portfolio</div>
      <ul className="navbar-links">
        <li>
          <button
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => handleButtonClick('home')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleButtonClick('about')}
          >
            About Me
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => handleButtonClick('projects')}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => handleButtonClick('skills')}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => handleButtonClick('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

// import React from 'react';
// import '../styles/Navbar.css';

// function Navbar({ scrollToSection }) {
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">My Portfolio</div>
//       <ul className="navbar-links">
//         <li><button onClick={() => scrollToSection('home')}>Home</button></li>
//         <li><button onClick={() => scrollToSection('about')}>About Me</button></li>
//         <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
//         <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
//         <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
