import { Section } from "@/data/data";
import Image from "next/image";
import React from "react";

const CategorySection = ({ section }: { section: Section }) => {
  return (
    <section
      data-sanp-section
      className=" relative flex justify-between overflow-hidden max-lg:flex-col max-lg:py-[2.5vw] lg:h-screen"
    >
      <div className=" flex flex-col justify-between pt-[5vw] pb-[1vw] lg:w-[20vw]">
        <h2 className=" text-4xl leading-none whitespace-pre-line lg:text-[72px]">
          {section.title}
        </h2>
        <p className=" indent-[5vw] max-lg:w-2/3 max-lg:pt-[25vw] lg:text-2xl">
          {section.description}
        </p>
      </div>
      <div className=" relative order-3 w-fit lg:order-none lg:h-full">
        <div
          data-media
          className=" relative aspect-[1.93939] h-[50vw] w-full overflow-hidden will-change-transform lg:absolute lg:top-[50vh] lg:left-1/2 lg:h-auto lg:w-[50vw] lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <Image
            src={section.image}
            alt={section.title}
            fill
            sizes="75vw"
            className=" object-cover"
          />
        </div>
      </div>
      <div className=" flex max-lg:absolute max-lg:top-[7.5vw] max-lg:right-0 lg:w-[20vw] lg:pt-[14.5vw]">
        <ul className=" text-xs font-semibold uppercase max-lg:text-end lg:text-sm">
          {section.services.map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategorySection;
