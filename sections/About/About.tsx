import Image from "next/image";
import "./style.scss";
import AboutImage from "@/public/assets/image1.png";

export const About = () => {
  return (
    <section className=" mt-[100px]" id="#about">
      <div className="container grid grid-cols-12 max-sm:grid-cols-4 max-sm:gap-40">
        <div className="order-1 max-sm:order-2 col-span-5 max-sm:col-span-4 flex flex-col">
          <div className="relative max-w-[223px] w-[14.8vw] max-sm:w-[100vw] 
          max-sm:max-w-[650px] aspect-[4/5] max-sm:aspect-[6/5]">
            <Image
              src={AboutImage}
              alt="aboutImage"
              fill
              className=" object-cover"
            />
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
        <div className=" order-2 max-sm:order-1 col-span-7 max-sm:col-span-4 flex items-start">
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
