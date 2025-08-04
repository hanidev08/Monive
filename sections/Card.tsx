// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const videos = [
//   {
//     number: "1",
//     title: "Wildlife in Action: A Glimpse into Nature’s Daily Drama",
//     description:
//       "Witness the fascinating lives of animals in their natural habitats, from playful cubs to stealthy predators.",
//     src: "https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4",
//   },
//   {
//     number: "2",
//     title: "The Changing Seasons: Nature’s Everlasting Cycle",
//     description:
//       "Experience the beauty of nature's transitions, from blooming spring flowers to snowy winter landscapes.",
//     src: "https://videos.pexels.com/video-files/3214448/3214448-uhd_2560_1440_25fps.mp4",
//   },
//   {
//     number: "3",
//     title: "Guardians of Nature: Protecting Our Planet’s Future",
//     description:
//       "Learn about the importance of conservation and how we can work together to preserve the beauty of nature.",
//     src: "https://videos.pexels.com/video-files/4328514/4328514-uhd_2560_1440_30fps.mp4",
//   },
//   {
//     number: "4",
//     title: "Astral Aesthetics: Portraits from the Infinite",
//     description:
//       "Experience the boundless beauty of the cosmos through striking portraits that capture its infinite appeal.",
//     src: "https://videos.pexels.com/video-files/2871916/2871916-hd_1920_1080_30fps.mp4",
//   },
// ];

// const Card = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     if (!sectionRef.current) return;

//     // إعداد الحالة الابتدائية
//     itemRefs.current.forEach((el, index) => {
//       if (el && index !== 0) {
//         gsap.set(el, { yPercent: 100 });
//       }
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         pin: true,
//         start: "top top",
//         end: () => `+=${videos.length * 100}%`,
//         scrub: 1,
//         invalidateOnRefresh: true,
//       },
//       defaults: { ease: "none" },
//     });

//     itemRefs.current.forEach((el, index) => {
//       if (!el) return;
//       tl.to(el, { scale: 0.9, borderRadius: "10px" }).to(
//         itemRefs.current[index + 1],
//         {
//           yPercent: 0,
//         },
//         "<"
//       );
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       tl.kill();
//     };
//   }, []);

//   return (
//     <div
//       className="scroll-section section h-screen overflow-hidden"
//       ref={sectionRef}
//     >
//       <div className="wrapper relative h-full">
//         {videos.map((video, i) => (
//           <div
//             className="item absolute inset-0 flex w-full h-full shadow-lg overflow-hidden"
//             key={i}
//             ref={(el) => {
//               itemRefs.current[i] = el;
//             }}
//           >
//             <div
//               className="bg-white text-[#292929] flex flex-col justify-center 
//             items-start p-12 w-1/2 relative"
//             >
//               <h2
//                 className="text-lg h-12 w-12 mb-2 rounded-full bg-black text-white flex items-center 
//               justify-center font-normal absolute top-24 left-12"
//               >
//                 {video.number}
//               </h2>
//               <h2 className="text-2xl font-bold leading-tight mb-4">
//                 {video.title}
//               </h2>
//               <p className="text-base leading-relaxed">{video.description}</p>
//             </div>
//             <video
//               src={video.src}
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="w-1/2 h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;




// "use client";

// import Image from "next/image";
// import "./style.scss";
// import AboutImage from "@/public/assets/image1.png";

// const servicesData = [
//   {
//     id: "01",
//     title: ["Structural", "Engineering"],
//     description:
//       "Define your edge and steer your company into the future with positioning that clearly defines who you are, what you do, why you matter, and how you'll win.",
//     image: AboutImage,
//   },
//   {
//     id: "02",
//     title: ["Civil", "Engineering"],
//     description:
//       "Define your edge and steer your company into the future with positioning that clearly defines who you are, what you do, why you matter, and how you'llllll win.",
//     image: AboutImage,
//   },
// ];

// export const Services = () => {
//   return (
//     <section className="mt-[200px]">
//       <div className="container">
//         {/* <h1 className="services-titleBig uppercase">Services</h1> */}

//         {servicesData.map((service) => (
//           <div
//             key={service.id}
//             className="item"
//           >
//             <div className="mt-[100px] flex items-start justify-between">
//               <h1 className="services-hone uppercase ">
//                 <span>{service.title[0]}</span>
//                 <br />
//                 <span>{service.title[1]}</span>
//               </h1>
//               <h1 className="services-hone">{service.id}</h1>
//             </div>

//             <hr className="my-[20px] border-[#808080]" />

//             <div className="flex max-md:flex-col max-md:gap-5 justify-between">
//               <h1 className="services-title max-w-[960px]">
//                 {service.description}
//               </h1>
//               <div className="relative w-[347px] h-[434px] max-sm:w-full max-sm:h-[500px]">
//                 <Image
//                   src={service.image}
//                   alt="aboutImage"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
