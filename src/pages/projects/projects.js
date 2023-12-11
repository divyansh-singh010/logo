import React from "react";
import "./projects.css";

const ProjectsBox = () => {
  return (
    <div className="projects-box">
      <div className="projects-box-text">
        <h2 className="projects-box-h2">Project Title</h2>
        <div className="projects-box-image"></div>
        <p className="projects-box-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, voluptatem, voluptas, quia doloremque quae quidem
          accusantium quod voluptatum nesciunt dolorum. Quisquam voluptate,
          voluptatem, voluptas, quia doloremque quae quidem accusantium quod
          voluptatum nesciunt dolorum.
        </p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects-h1">PROJECTS</h1>
      <div className="projects-intro">
        <ProjectsBox />
        <ProjectsBox />
        <ProjectsBox />
        <ProjectsBox />
        <ProjectsBox />
      </div>
    </div>
  );
};

export default Projects;
