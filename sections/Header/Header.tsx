"use client";

import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import "./style.scss";

export const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // إخفاء الهيدر عند التمرير للأسفل
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // تغيير لون النص بعد تخطي hero
    if (latest > 600) {
      setScrolledPastHero(true);
    } else {
      setScrolledPastHero(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed z-50 w-full transition-colors duration-500 ${
        scrolledPastHero ? "text-black" : "text-white"
      }`}
    >
      <div className="container pt-3 md:pt-5 flex items-center justify-between">
        <div className="uppercase text-[30px] font-bold leading-[40px]">
          Monive
        </div>
        <div className="menu sm:hidden">Menu</div>
        <div className="hidden sm:flex items-center gap-10">
          <Link href="#" className="nav menu-link">
            About
          </Link>
          <Link href="#" className="nav menu-link">
            Works
          </Link>
          <Link href="#" className="nav menu-link">
            Services
          </Link>
          <Link href="#" className="nav menu-link">
            Expertise
          </Link>
          <Link href="#" className="nav menu-link">
            Contact
          </Link>
        </div>
      </div>
    </motion.header>
  );
};
