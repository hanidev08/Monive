"use client";

import type { Project } from "@/data/projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type NextProjectProps = {
  nextProject?: Project;
};

const NextProject = ({ nextProject }: NextProjectProps) => {
  const nextRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useGSAP(
    () => {
      gsap.from(".nextProjectImageContainer", {
        y: -200,
        ease: "none",
        scrollTrigger: {
          trigger: stickyRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: nextRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
          onLeave: () => {
            const exitTl = gsap.timeline({
              onComplete: () => {
                router.push(`/${nextProject?.slug}`);
              },
            });

            exitTl
              .to(
                ".title",
                {
                  opacity: 0,
                  duration: 0.3,
                  ease: "power2.out",
                },
                0
              )
              .to(
                ".progressContainer",
                {
                  scaleX: 0,
                  duration: 0.3,
                  ease: "power2.out",
                },
                0
              )
              .to(".nextProjectImage", {});
          },
        },
      });

      tl.to(".nextProjectImage", {
        scale: 1,
        ease: "power2.out",
      }).to(
        ".progress",
        {
          width: "100%",
          ease: "none",
        },
        0
      );
    },
    { scope: nextRef }
  );

  if (!nextProject) return null;

  return (
    <section ref={nextRef} className=" relative h-[3000px]">
      <div ref={stickyRef} className=" sticky inset-0 h-svh overflow-hidden">
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <h2 className=" title mb-4 text-center text-2xl font-medium uppercase">
            {nextProject.title}
          </h2>
          <div className="progressContainer relative mx-auto h-[1px] w-[180px] origin-right bg-[#7e7b7b]">
            <div className="progress absolute top-0 left-0 h-[1px] w-[0px] bg-white"></div>
          </div>
        </div>
        <div className=" absolute inset-0 h-svh overflow-hidden">
          <div className="nextProjectImageContainer will-change-transform relative h-full">
            <Image
              src={nextProject.image}
              alt={nextProject.title}
              fill
              sizes="(max-width: 768px) 1280px, 100vw"
              className="nextProjectImage scale-120 object-cover"
              style={{
                clipPath: "inset(0% 0% 0% 0%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextProject;
