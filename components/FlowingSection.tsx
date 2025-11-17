import { sections } from "@/data/data";
import React, { Fragment, useRef } from "react";
import CategorySection from "./CategorySection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const FlowingSection = () => {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        if (!mainRef.current) return;

        const sections = Array.from(
          mainRef.current.querySelectorAll<HTMLElement>("[data-sanp-section]")
        );

        const medias = Array.from(
          mainRef.current.querySelectorAll<HTMLElement>("[data-media]")
        );

        medias.forEach((media, index) => {
          const isLast = index === medias.length - 1;

          gsap.fromTo(
            media,
            { y: "-100vh" },
            {
              y: isLast ? "0vh" : "100vh",
              ease: "none",
              scrollTrigger: {
                trigger: sections[index],
                start: "top bottom",
                end: isLast ? "bottom bottom" : "bottom top",
                scrub: true,
              },
            }
          );
        });

        ScrollTrigger.create({
          snap: {
            snapTo: (progress: number) => {
              const totalSections = sections.length;
              const sectionsProgress = progress * (totalSections - 1);
              const progressInSection = sectionsProgress % 1;

              if (progressInSection >= 0.3 && progressInSection <= 0.7) {
                return progress;
              }

              const closestSection = Math.round(sectionsProgress);
              return closestSection / (totalSections - 1);
            },
            duration: { min: 0.4, max: 0.8 },
            delay: 0.1,
            ease: "power2.inOut",
          },
        });
      });
    },
    {
      scope: mainRef,
    }
  );
  return (
    <main ref={mainRef}>
      {sections.map((section, index) => (
        <Fragment key={index}>
          <CategorySection section={section} />
          {index < sections.length - 1 && <hr />}
        </Fragment>
      ))}
    </main>
  );
};

export default FlowingSection;
