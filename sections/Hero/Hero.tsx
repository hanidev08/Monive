"use client";
import one from "@/public/assets/image3.png";

import Image from "next/image";
import "./style.scss";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  useEffect(() => {
    // const titleSplit = SplitText.create(".hero-title", {
    //   type: "chars",
    // });

    const titleSplit = SplitText.create(".hero-title", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });
    const paragraphSplit = SplitText.create(".paragraph-title", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const tl = gsap.timeline();

    tl.to(".message-content", {
      ease: "power1.inOut",
    });

    tl.from(
      titleSplit.words,
      {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      },
      "0"
    ).from(
      paragraphSplit.words,
      {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      },
      "0"
    );

    // const heroTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".message-content",
    //     start: "1% top",
    //     end: "bottom top",
    //     scrub: true,
    //   },
    // });
    // heroTl.to(".message-content", {
    //   scale: 0.9,
    //   yPercent: 30,
    //   ease: "power1.inOut",
    // });
  }, []);
  return (
    <section className="relative message-content">
      <div className="overflow-hidden">
        <div className=" relative w-[100vw] min-h-[100vh]">
          <Image
            src={one}
            alt="img1"
            fill
            className="filter brightness-40 object-cover object-right-bottom"
          />
          <div className="container z-50">
            <div className=" inline-flex flex-col justify-between h-[calc(100vh-100px)] relative top-[100px]">
              <div className=" flex flex-col gap-[40px]">
                <h1 className="hero-title hone text-white  tracking-tight overflow-hidden">
                  <span>Get set for a</span>
                  <br />
                  <span>solid foundation</span>
                </h1>
                <div className="hidden sm:flex">
                  <button className=" cursor-pointer  w-[217px] h-[57px] rounded-[5px] flex justify-between items-center uppercase text-white py-[20px] px-[10px] border border-white relative overflow-hidden btn-mimas-hover transition-colors duration-500 bg-transparent">
                    <span className="relative z-10 transition-colors duration-500">
                      See all projects
                    </span>
                    <span className="text-[21px] leading-[30px] relative z-10 transition-colors duration-500">
                      →
                    </span>
                  </button>
                </div>
              </div>
              <div className="hidden sm:flex">
                <p className="   pone text-white sm:pb-[20px] paragraph-title">
                  <span> Engineering resilient cities</span>
                  <br />
                  <span>with smart and sustainable</span>
                  <br />
                  <span>structures</span>
                </p>
              </div>

              <div className="sm:hidden flex flex-col gap-10">
                <p className="pone text-white sm:pb-[20px] paragraph-title">
                  <span> Engineering resilient cities</span>
                  <br />
                  <span>with smart and sustainable</span>
                  <br />
                  <span>structures</span>
                </p>
                <div className="pb-[20px]">
                  <p className="expolore text-white flex gap-1 items-center">
                    <span> Explore</span> <span>↓</span>
                  </p>
                </div>
              </div>
            </div>

            <div className=" hidden sm:flex absolute bottom-[20px] right-[0px] pr-7">
              <p className="expolore text-white flex gap-1 items-center">
                <span> Explore</span> <span>↓</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// "use client";
// import one from "@/public/assets/image3.png";
// import Image from "next/image";
// import "./style.scss";
// import gsap from "gsap";
// import { SplitText } from "gsap/all";
// import { useEffect, useRef, useState } from "react";
// import { ScrollTrigger } from "gsap/all";
// import { Flip } from "gsap/Flip";

// gsap.registerPlugin(ScrollTrigger, Flip);

// export const Hero = () => {
//   const [isInitial, setIsInitial] = useState(false);
//   const [showContent, setShowContent] = useState(false); // ✅ حالة لظهور النصوص

//   const state = useRef<Flip.FlipState | null>(null);
//   const centerImage = useRef<HTMLImageElement | null>(null);
//   const centerImageWrapper = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     // ⛔️ منع التمرير أثناء الأنيميشن
//     document.body.style.overflowX = "hidden";
//     document.body.style.overflowY = "hidden";

//     const runAnimation = () => {
//       if (!centerImageWrapper.current || !centerImage.current) return;

//       gsap.set(centerImageWrapper.current, {
//         xPercent: -50,
//         yPercent: -50,
//       });

//       state.current = Flip.getState([centerImageWrapper.current]);

//       setIsInitial(true);

//       gsap.set(centerImageWrapper.current, {
//         y: 80,
//         scale: 0.2,
//         borderRadius: "30px",
//       });

//       gsap.to(centerImageWrapper.current, {
//         y: 0,
//         opacity: 1,
//         duration: 3,
//         ease: "power3.inOut",

//         onComplete: () => {
//           if (!state.current) return;

//           Flip.to(state.current, {
//             duration: 2,
//             ease: "expo.inOut",
//             onComplete: () => {
//               const tl = gsap.timeline();
//               tl.to(centerImageWrapper.current, {
//                 scale: 1,
//                 duration: 2,
//                 ease: "expo.inOut",
//                 borderRadius: "0px",
//               })
//                 .to(
//                   centerImage.current,
//                   {
//                     scale: 1,
//                     duration: 2,
//                     ease: "expo.inOut",
//                   },
//                   0
//                 )
//                 .add(() => {
//                   // ✅ إظهار المحتوى
//                   setShowContent(true);

//                   // ✅ السماح بالتمرير بعد الأنيميشن
//                   document.body.style.overflowY = "auto";
//                 });
//             },
//           });
//         },
//       });
//     };

//     runAnimation();

//     // ✅ في حال تم إلغاء المكون فجأة (clean-up)
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   useEffect(() => {
//     if (!showContent) return; // ✅ انتظر حتى يظهر المحتوى

//     const titleSplit = SplitText.create(".hero-title", {
//       type: "words, lines",
//       linesClass: "paragraph-line",
//     });
//     const paragraphSplit = SplitText.create(".paragraph-title", {
//       type: "words, lines",
//       linesClass: "paragraph-line",
//     });

//     const tl = gsap.timeline();

//     tl.to(".hero-content", {
//       opacity: 1,
//       ease: "power1.inOut",
//     });

//     tl.from(
//       titleSplit.words,
//       {
//         yPercent: 300,
//         rotate: 3,
//         ease: "power1.inOut",
//         duration: 1,
//         stagger: 0.01,
//       },
//       "-=0.5"
//     ).from(
//       paragraphSplit.words,
//       {
//         yPercent: 300,
//         rotate: 3,
//         ease: "power1.inOut",
//         duration: 1,
//         stagger: 0.01,
//       },
//       "-=0.5"
//     );

//     // const heroTl = gsap.timeline({
//     //   scrollTrigger: {
//     //     trigger: ".message-content",
//     //     start: "1% top",
//     //     end: "bottom top",
//     //     scrub: true,
//     //   },
//     // });

//     // heroTl.to(".message-content", {
//     //   scale: 0.9,
//     //   yPercent: 30,
//     //   ease: "power1.inOut",
//     // });
//   }, [showContent]); // ✅ يعتمد على showContent

//   return (
//     <section className="relative min-h-screen message-content overflow-hidden ">
//       <div className="overflow-hidden">
//         <div
//           ref={centerImageWrapper}
//           className={`introCenterImage w-full h-screen absolute top-1/2 left-1/2
//         z-20 overflow-hidden -translate-x-1/2 -translate-y-1/2 opacity-0 ${
//           isInitial ? "initial" : ""
//         }`}
//         >
//           <Image
//             src={one}
//             alt="img1"
//             fill
//             ref={centerImage}
//             className="absolute top-0 left-0 w-full h-full filter brightness-40 object-cover"
//           />

//           {showContent && (
//             <div className="container z-50 hero-content opacity-0">
//               <div
//                 className="inline-flex flex-col justify-between
//                h-[calc(100vh-100px)] relative top-[100px]"
//               >
//                 <div className="flex flex-col gap-[40px]">
//                   <h1 className="hero-title hone text-white z-50 tracking-tight overflow-hidden">
//                     <span>Get set for a</span>
//                     <br />
//                     <span>solid foundation</span>
//                   </h1>
//                   <div className="hidden sm:flex">
//                     <button
//                       className="cursor-pointer z-50 w-[217px] h-[57px]
//                     rounded-[5px] flex justify-between items-center uppercase
//                     text-white py-[20px] px-[10px] border border-white
//                     relative overflow-hidden btn-mimas-hover transition-colors
//                     duration-500 bg-transparent"
//                     >
//                       <span className="relative z-50 transition-colors duration-500">
//                         Let’s work
//                       </span>
//                       <span
//                         className="text-[21px] leading-[30px] relative
//                       z-50 transition-colors duration-500"
//                       >
//                         →
//                       </span>
//                     </button>
//                   </div>
//                 </div>

//                 <div className="hidden sm:flex">
//                   <p className="pone text-white sm:pb-[20px] paragraph-title">
//                     <span> Engineering resilient cities</span>
//                     <br />
//                     <span>with smart and sustainable</span>
//                     <br />
//                     <span>structures</span>
//                   </p>
//                 </div>

//                 <div className="sm:hidden flex flex-col gap-10">
//                   <p className="pone text-white sm:pb-[20px] paragraph-title">
//                     <span> Engineering resilient cities</span>
//                     <br />
//                     <span>with smart and sustainable</span>
//                     <br />
//                     <span>structures</span>
//                   </p>
//                   <div className="pb-[20px]">
//                     <p className="expolore text-white flex gap-1 items-center">
//                       <span> Explore</span> <span>↓</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="hidden sm:flex absolute bottom-[20px] right-[0px] pr-5">
//                 <p className="expolore text-white flex gap-1 items-center">
//                   <span> Explore</span> <span>↓</span>
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };
