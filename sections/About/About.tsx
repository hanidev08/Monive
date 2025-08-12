"use client";
 import "./style.scss";
import img1 from "@/public/assets/image5.png";
import img2 from "@/public/assets/image2.png";
import img3 from "@/public/assets/image3.png";
import img4 from "@/public/assets/image6.png";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

const images = [img1.src, img2.src, img3.src, img4.src];

export const About = () => {
  const [current, setCurrent] = useState(0);
  const imgRef = useRef(null);

  const isInViewImg = useInView(imgRef);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className=" mt-[100px]" id="about">
      <div className="container grid  grid-cols-4  sm:grid-cols-12 gap-y-[40px] sm:gap-y-0">
        <div className="order-1 max-sm:order-2 sm:col-span-5 col-span-4 flex flex-col">
          <div
            ref={imgRef}
            className="relative max-w-[223px] w-[14.8vw] max-sm:w-[90vw] 
          max-sm:max-w-[650px] aspect-[4/5] max-sm:aspect-[6/5]"
          >
            {images.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`img-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === current ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`image absolute inset-0 size-full object-cover ${
                  isInViewImg ? "is-reveal" : ""
                }`}
              />
            ))}
          </div>
          <div className=" mt-5 max-sm:mb-5 max-w-[227px]">
            <h3
              className="max-sm:text-[16px] max-sm:leading-[24px]
            text-[20px] leading-[29px]"
            >
              Some photos of our work in design field.
            </h3>
          </div>
        </div>
        <div className=" order-2 max-sm:order-1 sm:col-span-7 col-span-4 flex items-start">
          <h3 className=" text-[20px] leading-[29px] absolute max-sm:text-[16px] max-sm:leading-[24px]">
            (About Us)
          </h3>
          <h1 className="about-title flex flex-col tracking-[-1px]">
            <span className=" indent-22 sm:indent-38">
              We are a consulting firm combining structural and civil
              engineering
            </span>
            <span className=" mt-8">
              expertise to provide innovative and cost-effective solutions for
              modern infrastructure projects.
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};
