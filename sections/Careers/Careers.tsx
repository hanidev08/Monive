"use client";
import { useState } from "react";
import Image from "next/image";
import "./style.scss";
import AboutImage from "@/public/assets/image1.png";

const careerItems = [
  {
    id: "01",
    title: "Wellbeing & Flexibility",
    answer:
      "We prioritize your health and work-life balance through flexible schedules and wellness programs.",
  },
  {
    id: "02",
    title: "Continuous Learning",
    answer:
      "We foster a culture of growth through workshops, mentorship, and access to industry resources.",
  },
  {
    id: "03",
    title: "Commitment to ESG",
    answer:
      "We take responsibility for our environmental, social, and governance practices seriously.",
  },
  {
    id: "04",
    title: "Career Growth",
    answer:
      "Your career path matters. We offer structured growth plans and promotions based on merit.",
  },
  {
    id: "05",
    title: "Team Building",
    answer:
      "We believe in strong teams and organize regular activities to boost collaboration and morale.",
  },
];

export const Careers = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-[200px]" id="careers">
      <div className="container">
        <h1 className="careers-titleBig uppercase mb-[100px]">Careers</h1>

        <div className="mt-[100px] grid grid-cols-12 max-sm:grid-cols-4 max-sm:gap-[12px] ">
          <h3 className="careers-desc col-span-1 sm:col-span-5">(Team)</h3>
          <p className=" col-span-4 sm:col-span-6 careers-desc max-w-[400px] sm:max-w-[344px]">
            Our team blends technical excellence with a culture of trust and
            collaboration, ensuring every project benefits from shared insight,
            creativity, and precision.
          </p>
        </div>

        <div className="mt-[100px] grid grid-cols-12 max-sm:grid-cols-4 max-sm:gap-[77px]">
          <div
            className=" order-1 max-sm:order-2 col-span-5 max-sm:col-span-4 relative max-w-[1024px] w-[95vw] aspect-[7/5] 
            sm:max-w-[473px] sm:w-[32vw] sm:aspect-[5.5/5]"
          >
            <Image
              src={AboutImage}
              alt="aboutImage"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>
          <div
            className=" order-2 max-sm:order-1 col-span-7 max-sm:col-span-4 
          flex flex-col w-full gap-3 sm:gap-5"
          >
            {careerItems.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col gap-3 sm:gap-5 border-[#808080] cursor-pointer"
              >
                <div
                  className=" grid grid-cols-12 "
                  onClick={() => toggleItem(index)}
                >
                  <h1 className="careers-title col-span-3">{item.id}</h1>
                  <div className="col-span-9 flex justify-between">
                    <h1 className="careers-title">{item.title}</h1>
                    <h1 className="careers-title">
                      {openIndex === index ? "-" : "+"}
                    </h1>
                  </div>
                </div>
                {openIndex === index && (
                  <div className=" grid grid-cols-12">
                    <p
                      className=" col-start-4 col-end-12 text-[14px] leading-[20px] 
                      max-w-[400px] max-sm:max-w-[250px] transition-all 
                    duration-300 ease-in-out text-gray-400"
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
                <hr className=" border-gray-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// import Image from "next/image";
// import "./style.scss";
// import AboutImage from "@/public/assets/image1.png";

// const careerItems = [
//   { id: "01", title: "Wellbeing & Flexibility" },
//   { id: "02", title: "Continuous Learning" },
//   { id: "03", title: "Commitment to ESG" },
//   { id: "04", title: "Career Growth" },
//   { id: "05", title: "Team Building" },
// ];

// export const Careers = () => {
//   return (
//     <section className="mt-[200px]">
//       <div className="container">
//         <h1 className="careers-titleBig uppercase mb-[100px]">Careers</h1>

//         <div className="mt-[100px] flex flex-col sm:flex-row gap-[12px] sm:gap-[556px]">
//           <h3 className="careers-desc">(Team)</h3>
//           <p className="careers-desc max-w-[323px] sm:max-w-[344px]">
//             Precision engineering supported by robust and well-integrated
//             systems that ensure efficiency, consistency, and long- term
//             reliability.
//           </p>
//         </div>

//         <div
//           className="flex flex-col max-md:gap-[77px] sm:items-start
//         md:flex-row-reverse md:gap-[144px]
//         mt-[100px] "
//         >
//           <div className="flex flex-col max-md:w-full w-[843px] gap-3 sm:gap-5">
//             {careerItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex flex-col gap-3 sm:gap-5 border-[#808080]"
//               >
//                 <div className="flex justify-between">
//                   <h1 className="careers-title">{item.id}</h1>
//                   <h1 className="careers-title">{item.title}</h1>
//                   <h1 className="careers-title">+</h1>
//                 </div>
//                 <hr />
//               </div>
//             ))}
//           </div>

//           <div
//             className="relative max-w-[1024px] w-[95vw] aspect-[7/5]
//           md:max-w-[473px] md:w-[32vw] md:aspect-[5.5/5]"
//           >
//             <Image
//               src={AboutImage}
//               alt="aboutImage"
//               fill
//               className="object-cover rounded-[10px]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
