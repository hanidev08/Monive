"use client";
import { About } from "@/sections/About";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ← مهم
import { Expertise } from "@/sections/Expertise";
import { Careers } from "@/sections/Careers";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 🧠 هذا يخبر ScrollTrigger بأن هناك تمرير يتم بواسطة Lenis
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Expertise />
      <Careers />
      <div className="h-dvh"></div>
    </div>
  );
}
