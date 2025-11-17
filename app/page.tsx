"use client";
import { KeyboardLinkSlider } from "@/components/KeyboardLinkSlider";
import { projects } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Core from "smooothy";

export default function Home() {
  const sliderWrapper = useRef<HTMLDivElement>(null);
  const sliderInstance = useRef<Core | null>(null);
  const isHoveringRef = useRef(false);

  const [displayNumber, setDisplayNumber] = useState(projects[0].number);
  const [displayDate, setDisplayDate] = useState(projects[0].date);

  const updateDisplay = (index: number) => {
    setDisplayDate(projects[index].date);
    setDisplayNumber(projects[index].number);
  };

  useEffect(() => {
    if (!sliderWrapper.current) return;

    const slider = new Core(sliderWrapper.current, {
      infinite: true,
      snap: false,
      scrollInput: true,
      scrollSensitivity: 5,
      dragSensitivity: 0.08,
      lerpFactor: 0.1,
      onSlideChange: (slide: number) => {
        if (!isHoveringRef.current) {
          updateDisplay(slide);
        }
      },
    });

    sliderInstance.current = slider;

    let animionId: number;
    function animate() {
      slider.update();
      animionId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animionId);
      slider.destroy();
      sliderInstance.current = null;
    };
  }, []);
  return (
    <>
      <div
        ref={sliderWrapper}
        data-slider
        className="slider-wrapper h-svh flex items-center overflow-x-hidden px-[calc(50%-30vw)] lg:px-[calc(50%-11.5vw)]"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="slide px-4 select-none"
            onMouseEnter={() => {
              isHoveringRef.current = true;
              updateDisplay(index);
            }}
            onMouseLeave={() => {
              isHoveringRef.current = false;
              if (sliderInstance.current) {
                updateDisplay(sliderInstance.current.currentSlide);
              }
            }}
          >
            <Link href={`/${project.slug}`}>
              <div className="relative  w-[60vw] lg:w-[23vw] aspect-video ">
                <Image
                  src={project.image}
                  alt={project.slug}
                  fill
                  className="object-cover"
                  sizes="50vw, (max-width: 1024px) 80vw, 70vw"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className=" fixed bottom-[20%] left-1/2 -translate-x-1/2  overflow-hidden  text-center select-none pointer-events-none">
        <h2 className=" text-2xl font-bold ">{displayNumber}</h2>
        <span className=" text-lg italic font-medium ">{displayDate}</span>
      </div>
    </>
  );
}
// import Project from "@/components/Project";
// import { getNextProject, projects } from "@/data/projects";

// export default function Home() {
//   const firstProject = projects[0];
//   const nextProject = getNextProject(firstProject.slug);
//   return (
//     <main>
//       <Project project={firstProject} nextProject={nextProject} />
//     </main>
//   );
// }
// "use client";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { CustomEase, ScrollTrigger, SplitText } from "gsap/all";
// import Image from "next/image";
// import { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText);

// const IMAGES_CONFIG = {
//   top: [
//     {
//       src: "/section1.png",
//       type: "side",
//       postion: "left-1/2",
//     },
//     {
//       src: "/section2.png",
//       type: "side",
//       postion: "right-1/2",
//     },
//   ],
//   center: [
//     {
//       src: "/section3.png",
//       type: "side",
//       postion: "right-full",
//     },
//     {
//       src: "/section4.png",
//       type: "main",
//       postion: "",
//     },
//     {
//       src: "/section5.png",
//       type: "side",
//       postion: "left-full",
//     },
//   ],
//   bottom: [
//     {
//       src: "/section6.png",
//       type: "side",
//       postion: "left-1/2",
//     },
//     {
//       src: "/section7.png",
//       type: "side",
//       postion: "right-1/2",
//     },
//   ],
// };

// export default function Home() {
//   const stickyContainerRef = useRef<HTMLDivElement | null>(null);

//   useGSAP(
//     () => {
//       CustomEase.create(
//         "slowStart",
//         "M0,0 C0,0 0.226,-0.006 0.549,0.145 0.754,0.242 1,1.019 1,1.029"
//       );

//       const text1 = SplitText.create("[data-text='1']", {
//         type: "words,chars",
//         autoSplit: true,
//       });

//       const text2 = SplitText.create("[data-text='2']", {
//         type: "words,chars",
//         autoSplit: true,
//       });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: stickyContainerRef.current,
//           start: "top top",
//           end: "bottom bottom",
//           scrub: 0.5,
//         },
//       });

//       tl.to("[data-scale]", {
//         scale: 0.51,
//         duration: 10,
//       });

//       tl.to(
//         "[data-zoom-type='side'], [data-zoom-type='main']",
//         {
//           clipPath: "inset(10px round 10px)",
//           ease: "power4.out",
//           duration: 10,
//         },
//         0
//       );

//       tl.to(
//         "[data-scale], [data-text-center]",
//         {
//           y: "-25vh",
//           ease: "slowStart",
//           duration: 10,
//         },
//         0
//       );

//       tl.from(
//         text1.chars,
//         {
//           opacity: 0,
//           stagger: 0.03,
//           duration: 1,
//         },
//         0
//       ).to(
//         text1.chars,
//         {
//           opacity: 0,
//           stagger: 0.03,
//           duration: 1,
//         },
//         ">0.3"
//       );

//       tl.from(
//         text2.chars,
//         {
//           opacity: 0,
//           stagger: 0.03,
//           duration: 1,
//         },
//         ">0.3"
//       ).to(
//         text2.chars,
//         {
//           opacity: 0,
//           stagger: 0.03,
//           duration: 1,
//         },
//         ">0.3"
//       );
//     },
//     { scope: stickyContainerRef }
//   );

//   return (
//     <main ref={stickyContainerRef} className="relative h-[400vh]">
//       <section className="sticky top-0 h-screen overflow-hidden">
//         <div
//           data-scale
//           className="relative h-screen w-screen will-change-transform"
//         >
//           <div
//             data-section="top"
//             className=" absolute bottom-full h-screen w-screen"
//           >
//             {IMAGES_CONFIG.top.map((img, idx) => (
//               <div
//                 key={`top-${idx}`}
//                 className={` absolute aspect-video h-screen w-screen ${img.postion}`}
//               >
//                 <Image
//                   data-zoom-type={img.type}
//                   src={img.src}
//                   alt="Image"
//                   fill
//                   sizes="(max-width: 640px) 1080px, 100vw"
//                   className=" object-cover"
//                   priority={false}
//                 />
//               </div>
//             ))}
//           </div>
//           <div data-section="center">
//             {IMAGES_CONFIG.center.map((img, idx) => (
//               <div
//                 key={`center-${idx}`}
//                 className={` absolute aspect-video h-screen w-screen ${img.postion}`}
//               >
//                 <Image
//                   data-zoom-type={img.type}
//                   src={img.src}
//                   alt="Image"
//                   fill
//                   sizes="(max-width: 640px) 1080px, 100vw"
//                   className=" object-cover"
//                   priority={img.type === "main"}
//                 />
//               </div>
//             ))}
//           </div>
//           <div
//             data-section="bottom"
//             className=" absolute top-full h-screen w-screen"
//           >
//             {IMAGES_CONFIG.bottom.map((img, idx) => (
//               <div
//                 key={`bottom-${idx}`}
//                 className={` absolute aspect-video h-screen w-screen ${img.postion}`}
//               >
//                 <Image
//                   data-zoom-type={img.type}
//                   src={img.src}
//                   alt="Image"
//                   fill
//                   sizes="(max-width: 640px) 1080px, 100vw"
//                   className=" object-cover"
//                   priority={false}
//                 />
//               </div>
//             ))}
//           </div>
//           <div
//             data-text-center
//             className=" absolute top-1/2 left-1/2 w-[45vw] -translate-x-1/2 -translate-y-1/2 will-change-transform max-sm:w-[95vw]"
//           >
//             <p
//               data-text="1"
//               className=" text absolute top-1/2 block w-full -translate-y-1/2 text-center font-medium"
//             >
//               Dicover our artisanal pastries made with love
//             </p>
//             <p
//               data-text="2"
//               className=" text absolute top-1/2 block w-full -translate-y-1/2 text-center font-medium"
//             >
//               Frech breakfast delights to start your day right
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
// "use client";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";
// import { ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger, useGSAP);

// const CONTENT_SECTION = [
//   ["INFINITY"],
//   ["DICOVER", "WONDER", "EXPLORATION"],
//   ["ENDURING", "SUPREME", "ELOAUENT"],
//   ["TIMELESS", "REFIND", "BRILLIANT"],
//   ["HARMONY", "SEAMILESS"],
// ];

// export default function Home() {
//   const containerRef = useRef<HTMLElement>(null);

//   useGSAP(
//     () => {
//       const mm = gsap.matchMedia();

//       mm.add(
//         {
//           isDesktop: "(min-width: 1024px)",
//           isMobile: "(max-width: 1023px)",
//         },
//         (context) => {
//           const { isDesktop } = context.conditions || { isDesktop: false };
//           const texts = gsap.utils.toArray<HTMLElement>(".animated-text");

//           const conentContainer =
//             containerRef?.current?.querySelector(".content-container");

//           if (!conentContainer) return;

//           const querySelectters = texts.map((text) =>
//             gsap.quickTo(text, "x", { duration: 0.6, ease: "power4.out" })
//           );

//           texts.forEach((text, index) => {
//             const minX = isDesktop ? 192 : 0;
//             const maxX = isDesktop ? 511 : 150;
//             const range = maxX - minX;
//             const waveNumber = 0.5;

//             const initialPhase = waveNumber * index + 0 - Math.PI / 2;
//             const initialWave = Math.sin(initialPhase);
//             const initialProgress = (initialWave + 1) / 2;
//             const startX = minX + initialProgress + range;

//             gsap.set(text, { x: startX });
//           });

//           ScrollTrigger.create({
//             trigger: conentContainer,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1,
//             onUpdate: (self) => {
//               const globalProgress = self.progress;
//               const minX = isDesktop ? 192 : 0;
//               const maxX = isDesktop ? 511 : 150;
//               const range = maxX - minX;
//               const waveNumber = 0.5;
//               const waveSpeed = 1.2;

//               const viweportCenter = window.innerHeight / 2;

//               let closesIndex = 0;
//               let minDistance = Infinity;

//               texts.forEach((text, index) => {
//                 const rect = text.getBoundingClientRect();
//                 const elementCenter = rect.top + rect.height / 2;
//                 const distance = Math.abs(elementCenter - viweportCenter);

//                 if (distance < minDistance) {
//                   minDistance = distance;
//                   closesIndex = index;
//                 }
//               });

//               texts.forEach((text, index) => {
//                 const phase =
//                   waveNumber * index +
//                   waveSpeed * globalProgress * Math.PI * 2 -
//                   Math.PI / 2;

//                 const wave = Math.sin(phase);
//                 const cycleProgress = (wave + 1) / 2;
//                 const finalX = minX + cycleProgress * range;

//                 querySelectters[index](finalX);

//                 if (index === closesIndex) {
//                   text.classList.remove("text-[#4d4d4d4]");
//                   text.classList.add("text-white");
//                 } else {
//                   text.classList.remove("text-white");
//                   text.classList.add("text-[#4d4d4d4]");
//                 }
//               });
//             },
//           });
//         }
//       );
//     },
//     { scope: containerRef }
//   );
//   return (
//     <main ref={containerRef}>
//       <div className=" h-[75vh]"></div>
//       <div
//         className=" content-container flex w-full flex-col justify-between gap-5 pb-[300px] text-[9vw]
//       leading-none font-semibold lg:gap-16 lg:text-[7vw]"
//       >
//         {CONTENT_SECTION.map((section, sectionIndex) => (
//           <div key={sectionIndex} className=" flex flex-col">
//             {section.map((text, textIndex) => (
//               <div
//                 key={textIndex}
//                 className="animated-text w-max text-[#4d4d4d] transition-colors duration-150 ease-out"
//               >
//                 {text}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <div className=" h-screen"></div>
//     </main>
//   );
// }
// "use client";

// import { KeyboardLinkSlider } from "@/components/KeyboardLinkSlider";
// import { projects } from "@/data/data";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// export default function Home() {
//   const sliderWrapper = useRef<HTMLDivElement>(null);
//   const sliderInstance = useRef<KeyboardLinkSlider | null>(null);
//   const isHoveringRef = useRef(false);

//   const [displayNumber, setDisplayNumber] = useState(projects[0].number);
//   const [displayDate, setDisplayDate] = useState(projects[0].date);

//   const updateDisplay = (index: number) => {
//     setDisplayDate(projects[index].date);
//     setDisplayNumber(projects[index].number);
//   };

//   useEffect(() => {
//     if (!sliderWrapper.current) return;

//     const slider = new KeyboardLinkSlider(sliderWrapper.current, {
//       infinite: true,
//       snap: false,
//       scrollInput: true,
//       scrollSensitivity: 5,
//       dragSensitivity: 0.08,
//       lerpFactor: 0.1,
//       onSlideChange: (slide: number) => {
//         if (!isHoveringRef.current) {
//           updateDisplay(slide);
//         }
//       },
//     });

//     sliderInstance.current = slider;

//     let animionId: number;
//     function animate() {
//       slider.update();
//       animionId = requestAnimationFrame(animate);
//     }
//     animate();

//     return () => {
//       cancelAnimationFrame(animionId);
//       slider.destroy();
//       sliderInstance.current = null;
//     };
//   }, []);

//   return (
//     <>
//       <div
//         ref={sliderWrapper}
//         data-slider
//         className="slider-wrapper h-svh flex items-center overflow-x-hidden px-[calc(50%-30vw)]
//         lg:px-[calc(50%-11.5vw)]"
//       >
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="slide px-4"
//             onMouseEnter={() => {
//               isHoveringRef.current = true;
//               updateDisplay(index);
//             }}
//             onMouseLeave={() => {
//               isHoveringRef.current = false;
//               if (sliderInstance.current) {
//                 updateDisplay(sliderInstance.current.currentSlide);
//               }
//             }}
//           >
//             <Link href={`/${project.slug}`}>
//               <div className="relative  w-[60vw] lg:w-[23vw] aspect-video ">
//                 <Image
//                   src={project.image}
//                   alt={project.slug}
//                   fill
//                   className="object-cover"
//                   sizes="50vw, (max-width: 1024px) 80vw, 70vw"
//                 />
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//       <div className=" fixed left-1/2 bottom-[20%] -translate-y-1/2 text-center select-none pointer-events-none">
//         <h2 className=" text-2xl font-bold">{displayNumber}</h2>
//         <span className=" text-lg italic font-medium">{displayDate}</span>
//       </div>
//     </>
//   );
// }
// "use client";

// import { useEffect, useRef } from "react";
// import ReactLenisn, { LenisRef } from "lenis/react";
// import gsap from "gsap";
// import { ScrollTrigger, SplitText } from "gsap/all";
// import { useGSAP } from "@gsap/react";
// import FlowingSection from "@/components/FlowingSection";

// gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// export default function Home() {
//   const lenisRef = useRef<LenisRef | null>(null);

//   useEffect(() => {
//     function update(time: number) {
//       lenisRef.current?.lenis?.raf(time * 2000);
//     }

//     gsap.ticker.add(update);

//     return () => gsap.ticker.remove(update);
//   }, []);

//   return (
//     <main>
//       <ReactLenisn root ref={lenisRef} options={{ autoRaf: false }} />
//       <FlowingSection />
//       {/* <BounceinTextReveal text="was it worth the recreate ?" /> */}
//     </main>
//   );
// }

// "use client";

// import { useEffect, useLayoutEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { gsap } from "gsap";
// import { Loader } from "@/sections/Loader";
// import Lenis from "lenis";

// export default function Home() {
//   // useEffect(() => {
//   //   const lenis = new Lenis();
//   //   function raf(time: number) {
//   //     lenis.raf(time);
//   //     requestAnimationFrame(raf);
//   //   }
//   //   requestAnimationFrame(raf);
//   // }, []);
//   const router = useRouter();
//   const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

//   useLayoutEffect(() => {
//     const context = gsap.context(() => {
//       const tl = gsap.timeline({
//         onComplete: () => router.push("/landing"),
//       });
//       setTimeline(tl);
//     });

//     return () => context.revert();
//   }, []);
//   return (
//     <div>
//       <Loader timeline={timeline} />
//     </div>
//   );
// }

// "use client";
// import { About } from "@/sections/About";
// import { Header } from "@/sections/Header";
// import { Hero } from "@/sections/Hero";
// import { Services } from "@/sections/Services";
// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // ← مهم
// import { Expertise } from "@/sections/Expertise";
// import { Careers } from "@/sections/Careers";
// import { Footer } from "@/sections/Footer";

// export default function Home() {
//   // useEffect(() => {
//   //   const lenis = new Lenis();

//   //   function raf(time: number) {
//   //     lenis.raf(time);
//   //     requestAnimationFrame(raf);
//   //   }
//   //   requestAnimationFrame(raf);
//   //   lenis.on("scroll", () => {
//   //     ScrollTrigger.update();
//   //   });

//   //   return () => {
//   //     lenis.destroy();
//   //   };
//   // }, []);

//   return (
//     <div>
//       <Header />
//       <Hero />
//       <About />
//       <Services />
//       <Expertise />
//       <Careers />
//       <Footer />
//     </div>
//   );
// }
