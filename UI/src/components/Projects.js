import React from "react";
import Underline from "./animations/Underline";
import ProjectCard from "./ProjectCard";
import { baseUrl } from "../services/common";

const Projects = () => {
  return (
    <div>
      <div className="text-4xl text-center">
        <span className="w-min">
          Projects/ Work
          <Underline />
        </span>
      </div>
      <ProjectCard />
    </div>
  );
};

export default Projects;
