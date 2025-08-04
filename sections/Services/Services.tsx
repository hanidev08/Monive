"use client";
import AboutImage from "@/public/assets/image1.png";
import "./style.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: "01",
    title: ["Structural", "Engineering"],
    description:
      "Define your edge and steer your company into the future with positioning that clearly defines who you are, what you do, why you matter, and how you'll win.",
    image: AboutImage,
  },
  {
    id: "02",
    title: ["Civil", "Engineering"],
    description:
      "Define your edge and steer your company into the future with positioning that clearly defines who you are, what you do, why you matter, and how you'llllll win.",
    image: AboutImage,
  },
  {
    id: "03",
    title: ["Civil", "Engineering"],
    description:
      "Define your edge and steer your company into the future with positioning that clearly defines who you are, what you do, why you matter, and how you'llllll win.",
    image: AboutImage,
  },
];
export const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // إعداد الحالة الابتدائية
    itemRefs.current.forEach((el, index) => {
      if (el && index !== 0) {
        gsap.set(el, { yPercent: 100 });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: () => `+=${servicesData.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none", duration: 1 },
    });

    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      tl.to(el, { scale: 0.5, borderRadius: "0px" }).to(
        itemRefs.current[index + 1],
        {
          yPercent: 0,
        },
        "<"
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);
  return (
    <div className=" mt-[200px]">
      <div className="container">
        <h1 className="services-titleBig uppercase mb-[100px]">Services</h1>
        <div className=" h-screen overflow-hidden" ref={sectionRef}>
          <div className=" wrapper relative h-full">
            {servicesData.map((service, i) => (
              <div
                key={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="item absolute inset-0 shadow-lg overflow-hidden"
              >
                <div className=" bg-white text-black">
                  <div className="flex items-start justify-between p-2">
                    <h1 className="services-hone uppercase ">
                      <span>{service.title[0]}</span>
                      <br />
                      <span>{service.title[1]}</span>
                    </h1>
                    <h1 className="services-hone">{service.id}</h1>
                  </div>
                  <hr className="my-[20px] border-[#808080]" />
                  <div className="flex max-md:flex-col max-md:gap-5 justify-between">
                    <h1 className="services-title max-w-[960px] pl-2">
                      {service.description}
                    </h1>
                    <div className="relative w-[347px] h-[434px] max-sm:w-full max-sm:h-[600px]">
                      <Image
                        src={service.image}
                        alt="aboutImage"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
