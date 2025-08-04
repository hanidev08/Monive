import React, { useState } from "react";
import "./style.scss";
import AboutImage from "@/public/assets/image1.png";
import AboutOne from "@/public/assets/image2.png";
import AboutTow from "@/public/assets/image3.png";

import Image from "next/image";

const expertiseData = [
  {
    title: "Residential",
    image: AboutImage,
  },
  {
    title: "Community",
    image: AboutOne,
  },
  {
    title: "Retirement",
    image: AboutTow,
  },
];

export const Expertise = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <section className="mt-[100px] sm:mt-[200px]">
      <div className="container">
        <div className="flex items-start justify-between">
          <h3 className="text-[21px] leading-[30px]">(Expertise)</h3>
          <h3 className="text-[21px] leading-[30px] max-w-[370px] hidden md:flex">
            From core brand foundations to dynamic brand extensions.
          </h3>
          <h3 className="text-[21px] leading-[30px] hidden md:flex">
            Let’s work together
          </h3>
        </div>

        <div className="mt-[100px] flex items-start gap-[144px]">
          {/* صورة على اليسار للحجم الكبير فقط */}
          <div className="hidden sm:flex relative max-w-[473px] w-[32vw] aspect-[9/5]">
            <Image
              src={expertiseData[selectedProject].image}
              alt="aboutImage"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>

          {/* تكرار العناصر باستخدام map */}
          <div className="flex flex-col max-sm:gap-[50px]">
            {expertiseData.map((item, index) => (
              <div key={index} className="flex flex-col gap-[30px]">
                <h1
                  className="expertise-hone font-bold uppercase cursor-pointer"
                  onMouseOver={() => {
                    setSelectedProject(index);
                  }}
                >
                  {item.title}
                </h1>

                {/* تظهر الصورة فقط على الشاشات الصغيرة */}
                <div className="sm:hidden relative max-w-[580px] w-[90vw] aspect-[9/5]">
                  <Image
                    src={item.image}
                    alt={`${item.title} image`}
                    fill
                    className="object-cover rounded-[10px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
