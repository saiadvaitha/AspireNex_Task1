import React from 'react';
import Slider from 'react-slick';
import '../styles/Home.css';
import backgroundImage from '../assests/back1'; 

function Home() {
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
    <header className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <h2>Sai Advaitha</h2>
        <Slider {...settings}>
          <div>
            <h3>Web Developer</h3>
            <p>Done Projects in MERN stack, creating responsive and dynamic web applications.</p>
          </div>
          <div>
            <h3>Java Developer</h3>
            <p>Skilled in Java</p>
          </div>
          <div>
            <h3>Problem Solver</h3>
            <p>Strong analytical and problem-solving skills with a keen eye for detail.</p>
          </div>
        </Slider>
      </div>
    </header>
  );
}

export default Home;
