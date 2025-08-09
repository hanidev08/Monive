"use client";

import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { Loader } from "@/sections/Loader";

export default function Home() {
  const router = useRouter();
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => router.push("/landing"),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);
  return (
    <div>
      <Loader timeline={timeline} />
    </div>
  );
}

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
