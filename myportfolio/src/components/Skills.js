import React from 'react';
import Slider from "react-slick";
import '../styles/Skills.css';
import backgroundImage from '../assests/back1';

const skills = [
{ category: "Programming Language", skills: "Java,Python" },
  { category: "Markup/Styling Language", skills: "HTML, CSS" },
  { category: "CSS Framework", skills: "Bootstrap" },
  { category: "Front-end Language", skills: "JavaScript" },
  { category: "JavaScript Framework", skills: "React.js" },
  { category: "Package Manager", skills: "NPM" },
  { category: "Database Management", skills: "SQL, MongoDB" }
];

function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="skills" className="skills" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="skills-overlay">

        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.category}</h3>
              <p>{skill.skills}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Skills;
