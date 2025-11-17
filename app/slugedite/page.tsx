"use client";

import Project from "@/components/Project";
import { getNextProject, getProjectBySlug } from "@/data/projects";
import { notFound, useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  const slug = params.slug as string;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);
  return (
    <main>
      <Project project={project} nextProject={nextProject} />
    </main>
  );
};

export default Page;
