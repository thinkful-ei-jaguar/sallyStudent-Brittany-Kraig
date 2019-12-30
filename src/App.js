import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Sally Student | Resume</h1>
      </header>
      <main>
        <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" width="300" alt="Sally Student Picture" />
        <section className="objective">
          <h2>Objective: Seeking employment as a front-end software developer</h2>
        </section>
        <section className="education">
          <ul>
            <li>John Muir High School Graduated 2009<br /> -High School Diploma</li>
            <li>Simpson University 2009-2013 <br />- Graduated with Bachelor's Degree in Computer Science</li>
          </ul>
        </section>
        <section className="employment">
          <h2>Employment History</h2>
          <ul>
            <li><b>Twitter</b><br /> Junior Developer 2013-2017 <br />
              Job Summary: Lorem imsum dolor</li>

            <li><b>Ebay</b><br />
              Senior Developer 2017-Present <br /> Job Summary: Lorem imsum dolor</li>

          </ul>
        </section>
        <section className="contact-info">
          <h2>Contact Me</h2>
          <address>
            Name: Sally Student<br />
            Phone Number: (999)999-999<br />
            Send me an Email: <a href="mailto:sallystudent@gmail.com">Click to Email me</a>
          </address>
        </section>
      </main>
    </div>
  );
}

export default App;
