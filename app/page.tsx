import { About } from "@/sections/About";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <div className=" h-dvh"></div>
    </div>
  );
}
