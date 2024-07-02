import React, { useState } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="App" style={{ backgroundImage: `url('./assets/background.png')` }}>
      <Navbar scrollToSection={scrollToSection} />
      {activeSection === 'home' && <Home />}
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'skills' && <Skills />}
      {activeSection === 'contact' && <Contact />}
      {/* <Footer /> */}
      <Footer/>
    </div>
  );
}

export default App;


// import React from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import './styles/App.css';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Home />
//       <About />
//       <Projects />
//       <Skills />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }
// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
