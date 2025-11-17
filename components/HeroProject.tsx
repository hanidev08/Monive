"use client";
import type { Project } from "@/data/projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

type HeroProjectProps = {
  project: Project;
};

const HeroProject = ({ project }: HeroProjectProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const split = SplitText.create(".mask-reveal", {
        type: "line",
        mask: "lines",
      });

      gsap.from(split.lines, {
        yPercent: 100,
        duration: 1,
        ease: "power3.out",
        stagger: 0,
      });

      gsap.to(heroImageRef.current, {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=1500",
          scrub: 1,
          fastScrollEnd: true,
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef}>
      <div className=" mb-7.5 h-[80svh] overflow-hidden">
        <div
          ref={heroImageRef}
          className=" relative will-change-transform h-svh"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 1280px, 100vw"
            priority
            className="heroImage object-cover"
          />
        </div>
      </div>
      <div className=" flex min-h-[20svh] flex-wrap justify-between px-7.5 font-medium">
        <h1 className="mask-reveal text-4xl">{project.title}</h1>
        {project.description && (
          <p className="mask-reveal max-w-96 text-sm lg:text-lg">
            {project.description}
          </p>
        )}
        <p className="mask-reveal text-xs">Subscribe & follow for more</p>
        <span className="mask-reveal text-xs lg:text-sm">Scrolldown</span>
      </div>
    </section>
  );
};

export default HeroProject;
