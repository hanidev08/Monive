"use client";
import { About } from "@/sections/About";
import { Careers } from "@/sections/Careers";
import { Expertise } from "@/sections/Expertise";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
  
const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Expertise />
      <Careers />
      <Footer />
    </div>
  );
};

export default page;
