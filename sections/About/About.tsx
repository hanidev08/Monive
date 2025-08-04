import Image from "next/image";
import "./style.scss";
import AboutImage from "@/public/assets/image1.png";

export const About = () => {
  return (
    <section className=" mt-[100px]">
      <div className="container flex flex-col-reverse max-lg:gap-[150px] md:flex-row justify-between">
        <div className=" flex flex-col">
          <div className="relative w-[227px] h-[296px] max-sm:w-full max-sm:h-[500px]">
            <Image
              src={AboutImage}
              alt="aboutImage"
              fill
              className=" object-cover"
            />
          </div>
          <div className=" mt-5 max-sm:mb-5 max-w-[227px]">
            <h3 className=" leading-4">
              Ronaldo & Adam @GDC San Francisco 2022
            </h3>
          </div>
        </div>
        <div className="max-w-[792px] max-lg:max-w-[650px] flex items-start">
          <h3 className=" text-[21px] leading-[30px] absolute max-sm:text-[16px] max-sm:leading-[24px]">
            (About Us)
          </h3>
          <h1 className="about-title flex flex-col  tracking-[-2px]">
            <span>
              <span className=" sm:hidden">&nbsp;&nbsp;</span>
              <span className=" lg:hidden">&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We&apos;re a
              creative production studio fueled by passion and innovation.
            </span>
            <span className=" mt-8">
              Our mission is to revolutionize creative work for companies with
              style and substance.
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};
