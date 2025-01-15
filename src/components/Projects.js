import React from "react";

const Projects = () => {
  const projects = [
    { name: "Project 1", description: "Description of project 1", image: "url-to-image" },
    { name: "Project 2", description: "Description of project 2", image: "url-to-image" },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <img src={project.image} alt={project.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
