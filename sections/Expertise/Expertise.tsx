import React, { useState } from "react";
import "./style.scss";
import AboutImage from "@/public/assets/image6.png";
import AboutOne from "@/public/assets/image2.png";
import AboutTow from "@/public/assets/image3.png";
import Image from "next/image";

const expertiseData = [
  {
    title: "Residential",
    image: AboutImage,
    description:
      "Expertise in residential design, from private homes to multi-unit builds with smart solutions.",
  },
  {
    title: "Community",
    image: AboutOne,
    description:
      "Creating vibrant community spaces that foster connection and shared experiences.",
  },
  {
    title: "Retirement",
    image: AboutTow,
    description:
      "Designing comfortable and functional retirement living environments.",
  },
];

export const Expertise = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <section className="mt-[100px] sm:mt-[200px]" id="expertise">
      <div className="container">
        {/* العناوين العلوية */}
        <div className="flex items-start justify-between">
          <h3 className="text-[20px] leading-[29px]">(Expertise)</h3>
          <h3 className="text-[20px] leading-[29px] max-w-[370px] hidden md:flex">
            From core brand foundations to dynamic brand extensions.
          </h3>
          <h3 className="text-[20px] leading-[29px] hidden md:flex">
            Let’s work together
          </h3>
        </div>

        <div className="mt-[100px] flex items-start gap-[144px]">
          {/* الصورة والوصف للشاشات الكبيرة */}
          <div className="hidden sm:flex sm:flex-col sm:gap-5">
            <div className="relative max-w-[473px] w-[32vw] aspect-[9/5]">
              <Image
                src={expertiseData[selectedProject].image}
                alt="aboutImage"
                fill
                className="object-cover rounded-[10px]"
              />
            </div>
            <div>
              <h3 className="text-[20px] leading-[29px] max-w-[473px]">
                {expertiseData[selectedProject].description}
              </h3>
            </div>
          </div>

          {/* القائمة + الصور للشاشات الصغيرة */}
          <div className="flex flex-col max-sm:gap-[50px]">
            {expertiseData.map((item, index) => (
              <div key={index} className="flex flex-col gap-[30px]">
                <h1
                  className="expertise-hone font-bold uppercase cursor-pointer"
                  onMouseOver={() => setSelectedProject(index)}
                >
                  {item.title}
                </h1>

                {/* الصورة والوصف للشاشات الصغيرة */}
                <div className="sm:hidden flex flex-col gap-[30px]">
                  <div className="relative max-w-[580px] w-[90vw] aspect-[9/5]">
                    <Image
                      src={item.image}
                      alt={`${item.title} image`}
                      fill
                      className="object-cover rounded-[10px]"
                    />
                  </div>
                  <div>
                    <h3 className="text-[20px] leading-[29px] max-w-[350px]">
                      {item.description}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
