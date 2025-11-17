import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";

interface BounceInTextReveal {
  text: string;
}

const BounceinTextReveal = ({ text }: BounceInTextReveal) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !titleRef.current) return;

      gsap.set(titleRef.current, { x: "100vw" });

      const titleWidth = titleRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      const finalPostion = -(titleWidth - viewportWidth / 2);

      const split = SplitText.create(titleRef.current, { type: "chars" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: containerRef.current,
          pinSpacing: false,
          invalidateOnRefresh: true,
        },
      });

      gsap.set(split.chars, {
        yPercent: "random(-250, 250)",
        rotation: "random(-30, 30)",
      });

      tl.to(titleRef.current, {
        x: finalPostion,
        duration: 1.4,
        ease: "none",
      });
      tl.to(
        split.chars,
        {
          yPercent: 0,
          rotation: 0,
          duration: 0.4,
          stagger: {
            amount: 1,
          },
          ease: "back.out(2)",
        },
        0
      );
    },
    {
      scope: containerRef,
    }
  );

  return (
    <section ref={containerRef} className=" relative h-[300vh]">
      <div className=" relative flex h-screen items-center overflow-hidden">
        <h2
          ref={titleRef}
          className=" text-[14.2vw] font-bold whitespace-nowrap will-change-transform lg:-text-[9vw]"
        >
          {text}
        </h2>
        <div className=" absolute bottom-24 flex w-full justify-center text-center">
          <p className=" px-5 text-center text-xl lg:max-w-[50vw]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quos
            adipisci accusamus et hic culpa, maxime dolore, optio autem quasi
            ipsam fuga nesciunt illum nam nisi vel, harum aperiam porro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BounceinTextReveal;
