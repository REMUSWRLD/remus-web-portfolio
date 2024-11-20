import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Name</h1>
        <p>Web Developer | React Enthusiast</p>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Hello! I'm a passionate web developer with a focus on creating responsive and user-friendly applications using React.</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Short description of Project 1</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Short description of Project 2</p>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            {/* Add more skills */}
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: your.email@example.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></p>
          <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Your GitHub</a></p>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;