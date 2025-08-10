import React, { useEffect, useRef } from "react";
import "./style.scss";
import one from "@/public/assets/image3.png";
import Image from "next/image";
import { introAnimation, scaleCenterImage } from "./animations";
 
interface LoaderProps {
  timeline: gsap.core.Timeline | null;
}

export const Loader: React.FC<LoaderProps> = ({ timeline }) => {
  const centerImageRef = useRef(null);
  const centerImageWrapperRef = useRef(null);

  useEffect(() => {
    introAnimation(centerImageWrapperRef.current);
    if (timeline) {
      timeline.add(scaleCenterImage(centerImageWrapperRef.current), "<");
    }
  }, [timeline]);

  return (
    <section className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      <div className="flex items-center justify-center gap-[2.4rem] w-[200%]">
        <div
          ref={centerImageWrapperRef}
          className="relative w-[100px] h-[70px] sm:w-[300px] sm:h-[150px] overflow-hidden rounded-2xl opacity-0"
        >
          <Image
            ref={centerImageRef}
            priority
            fill
            className="w-full h-full filter brightness-40 object-cover object-right-bottom"
            src={one}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

// import React, { useEffect, useRef } from "react";
// import "./style.scss";
// import one from "@/public/assets/image3.png";
// import Image from "next/image";
// import { introAnimation, scaleCenterImage } from "./animations";

// export const Loader = ({ timeline }) => {
//   const centerImageRef = useRef(null);
//   const centerImageWrapperRef = useRef(null);

//   useEffect(() => {
//     introAnimation(centerImageWrapperRef.current);
//     timeline &&
//       timeline.add(
//         scaleCenterImage(centerImageWrapperRef.current, centerImageRef.current),
//         "<"
//       );
//   }, [timeline]);
//   return (
//     <section className=" relative flex items-center justify-center w-full h-screen overflow-hidden">
//       <div className="flex items-center justify-center gap-[2.4rem] w-[200%]">
//         <div
//           ref={centerImageWrapperRef}
//           className=" relative w-[300px] h-[150px] overflow-hidden rounded-2xl opacity-0"
//         >
//           <Image
//             ref={centerImageRef}
//             priority
//             fill
//             className=" w-full h-full object-cover"
//             src={one}
//             alt=""
//           />
//         </div>
//       </div>
//     </section>
//   );
// };
