import React from 'react';
import '../styles/About.css';
import backgroundImage from '../assests/back1';

function About() {
  return (
    <section id="about" className="about" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="about-overlay">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            Hi, this is Sai Advaitha, currently pursuing a B.Tech at KMIT.
            I am skilled in technologies such as Java, JavaScript, MERN stack,
            HTML, CSS, React, Node.js, and MongoDB. Based on these skills,
            I have completed two projects:
          </p>
          <ul>
            <li>
              <strong>Food Delivery App:</strong> Developed using the MERN stack,
              this app allows users to order food items and keep them in their cart.
              And this project is developed using Mern Stack.
            </li>
            <li>
              <strong>Expense Tracker:</strong> Developed using Java, XML, and Realm database,
              this app allows users to record their expenses on a weekly, monthly, and yearly basis,
              with options to update and delete records easily.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;











// import React from 'react';
// import '../styles/About.css';
// import backgroundImage from '../assests/back1';

// function About() {
//   return (
//     <section id="about" className="about" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="about-overlay">
//         <h2>About Me</h2>
//         <div className="about-content">
//           <p>
//             Hi, this is Sai Advaitha, currently pursuing a B.Tech at KMIT.
//             I am skilled in technologies such as Java, JavaScript, MERN stack,
//             HTML, CSS, React, Node.js, and MongoDB. Based on these skills,
//             I have completed two projects:
//           </p>
//           <ul>
//             <li>
//               <strong>Food Delivery App:</strong> Developed using the MERN stack,
//               this app allows users to order food items and keep them in their cart.
//               And this project is developed using Mern Stack.
//             </li>
//             <li>
//               <strong>Expense Tracker:</strong> Developed using Java, XML, and Realm database,
//               this app allows users to record their expenses on a weekly, monthly, and yearly basis,
//               with options to update and delete records easily.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;








// // import React from 'react';
// // import '../styles/Home.css'
// // import backgroundImage from '../assests/background.png'; 
// // function About() {
// //   return (
// //     <section id="about" className="about">
// //       <h2>About Me</h2>
// //       <header className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
// //       <div className="about-content">
// //         <p>Hi this is Sai Advaitha currently pursuing btech at kmit
// //              and i skilled in technologies like Java, Javascript,
// //               Mern stack, HTML,CSS, React, node js, MongoDB and 
// //               based on this I have done 2 projects first one is 
// //               food delivery app developed using Mern stack this 
// //               allows us to order the food items and keep it in our 
// //               cart and it uses React, node js, MongoDB and express js
// //                and second one is expense tracker developed using Java,
// //                 XML and Realm database this app allows us to record our
// //                  expenses spent in weekly monthly and yearly and also 
// //                  it is easy to update, delete the records
// //         </p>
// //       </div>
// //       </header>
// //     </section>
// //   );
// // }

// // export default About;
