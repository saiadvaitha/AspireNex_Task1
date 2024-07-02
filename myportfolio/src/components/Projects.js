import React from 'react';
import Slider from 'react-slick';
import '../styles/Projects.css';
import backgroundImage from '../assests/back1'; // Ensure this path is correct

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="projects" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="projects-overlay">
        <h2>Projects</h2>
        <Slider {...settings} className="project-slider">
          <div className="project">
            <h3>Project 1: Food Delivery App</h3>
            <p>
              Developed a user-friendly food delivery application using the MERN stack. Implemented functionalities for users to place orders, ensuring a smooth and efficient ordering experience.
              <br />
              <strong>Technologies used:</strong> React, JavaScript, MongoDB, Express.js, Node.js.
            </p>
          </div>
          <div className="project">
            <h3>Project 2: Expense Tracker App</h3>
            <p>
              Designed and implemented an efficient Expense Tracker System for individuals and businesses. Developed and integrated sophisticated expense management tools to record, categorize, and analyze spending data, providing valuable insights into budgeting.
              <br />
              Implemented functionalities for editing, updating, and deleting transactions using Java, XML, and Realm Database.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
