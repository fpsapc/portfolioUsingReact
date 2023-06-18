import React from 'react';
import Project from './Project';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <Project
          title="Project 1"
          description="Description of Project 1"
          technologies="React, Node.js"
        />
        <Project
          title="Project 2"
          description="Description of Project 2"
          technologies="HTML, CSS, JavaScript"
        />
      </div>
    </section>
  );
}

export default Projects;
