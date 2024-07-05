import React from "react";
import ProjectCard from "./ProjectCard";

function Projects({ image, title, description }) {
  return (
    <div className="flex mx-20 flex-wrap">
      <ProjectCard title={title} description={description} image={image} />
      <ProjectCard title={title} description={description} image={image} />
      <ProjectCard title={title} description={description} image={image} />
      <ProjectCard title={title} description={description} image={image} />
      <ProjectCard title={title} description={description} image={image} />
      <ProjectCard title={title} description={description} image={image} />
      <ProjectCard title={title} description={description} image={image} />
      <ProjectCard title={title} description={description} image={image} />
    </div>
  );
}

export default Projects;
