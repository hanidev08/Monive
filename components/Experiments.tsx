import { Project } from "@/data/projects";
import Image from "next/image";
import React from "react";

type HeroProjectProps = {
  project: Project;
};

const Experiments = ({ project }: HeroProjectProps) => {
  if (!project.details) return null;
  const { sectionImage, items } = project.details;

  return (
    <section className=" relative flex min-h-screen flex-col justify-between px-7.5 py-25 lg:flex-row">
      <div className=" mb-7.5 h-full lg:sticky lg:top-[120px] lg:mb-0">
        <div className=" relative aspect-video h-[30vh] w-full lg:h-[40vh]">
          <Image
            src={sectionImage}
            alt={`${project.title} details`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className=" w-full lg:w-5xl">
        {items.map((item, index) => (
          <div
            key={index}
            className=" flex w-full items-center justify-between border-b border-gray-200 py-4"
          >
            <div className=" text-lg font-medium">{item.label}</div>
            <div className=" text-sm font-medium">{item.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiments;
