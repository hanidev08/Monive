import Image from "next/image";
import "./style.scss";
import one from "@/public/assets/image4.png";

export const Footer = () => {
  return (
    <footer className=" mt-[100px] sm:mt-[200px] overflow-hidden">
      <div className=" relative w-full min-h-screen">
        <Image
          src={one}
          alt="img1"
          fill
          className="filter brightness-10 object-cover"
        />
        <div
          className="flex flex-col justify-between z-50 mt-3  h-[calc(100vh-12px)] relative top-[12px]
          sm:h-[calc(100vh-20px)] sm:top-[20px]"
        >
          <div className="container flex flex-col sm:flex-row sm:justify-between max-sm:gap-3">
            <h1 className="footer-title text-white z-50">Work with us</h1>
            <h1 className="footer-title underline underline-offset-4 text-white z-50">
              work@monive.com
            </h1>
          </div>
          <div className="container relative md:mt-[100px] flex justify-between ">
            <div className=" flex gap-[100px]">
              <ul className="footer-desc ">
                <li className=" text-white z-50">Sitemap</li>
                <li className=" mt-[20px] text-gray-400  z-50">Home</li>
                <li className=" text-gray-400  z-50">Projects</li>
                <li className=" text-gray-400  z-50">Home</li>
                <li className=" text-gray-400  z-50">Contact</li>
              </ul>
              <ul className="footer-desc">
                <li className="text-white z-50">Socials</li>
                <li className="mt-[20px] text-gray-400  z-50">Instagram</li>
                <li className=" text-gray-400  z-50">LinkedIn</li>
                <li className=" text-gray-400  z-50">Behance</li>
              </ul>
            </div>
            <div className=" uppercase text-white">Dev by Zine Hani</div>
          </div>
          <div className=" mb-5">
            <h1 className=" uppercase z-50 text-white footer-big tracking-tighter">
              Monive
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};
