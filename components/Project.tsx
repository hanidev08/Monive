import type { Project } from "@/data/projects";
import React from "react";
import HeroProject from "./HeroProject";
import Experiments from "./Experiments";
import NextProject from "./NextProject";

type ProjectProps = {
  project: Project;
  nextProject?: Project;
};

const Project = ({ project, nextProject }: ProjectProps) => {
  return (
    <div>
      <HeroProject project={project} />
      <Experiments project={project} />
      <NextProject nextProject={nextProject} />
    </div>
  );
};

export default Project;
