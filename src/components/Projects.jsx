import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Fade, Grow } from "@mui/material";
import Background from "../assets/bg.jpg";
import KanbanFlow from "../assets/KanbanFlow.gif";
import TuneTalk from "../assets/TuneTalk.gif";

function Projects() {
  const projects = [
    {
      image: TuneTalk,
      title: "TuneTalk",
      description:
        "A music streaming app that allows users to save to their favorite songs and albums to share their music taste with friends. It includes features like playlists, music recommendations, and more.",
      technologies:
        "React, Node.js, Express, PostgreSQL, SpotifyAPI, Material-UI, TailwindCSS",
    },
    {
      image: KanbanFlow,
      title: "KanbanFlow Clone",
      description:
        "A project management app that allows users to create projects, tasks, and assign tasks to team members. It includes features like project boards, task lists, and task assignments.",
      technologies:
        "React, Node.js, Express, Firebase, DaisyUI, TailwindCSS, Auth0",
    },
    {
      image: Background,
      title: "Property Management Website",
      description:
        "A website that allows users to manage their properties and tenants. It includes features like listing and searching for properties, and saving properties.",
      technologies: "React, Django, PostgreSQL, AWS RDS",
    },
    {
      image: Background,
      title: "Fitness Pals",
      description:
        "A fitness app that allows users to track their workouts, calories and connect with other people who workout. It includes features like workout tracking, calorie tracking, and social feed.",
      technologies: "React, TailwindCSS, Express, DaisyUI, Prisma",
    },
  ];

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Fade in={true} timeout={1000}>
      <div className="flex mx-auto flex-wrap justify-evenly">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </Fade>
  );
}

export default Projects;
