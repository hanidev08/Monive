"use client";

import React, { MouseEvent, useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimate,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import "./style.scss";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Carrers", href: "#carrers" },
  { label: "Contact", href: "#contact" },
];

const slideUp = {
  initial: {
    y: "100%",
  },
  open: {
    y: "0%",
    transition: { duration: 0.5, delay: 0.7 },
  },
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};
export const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [navScope, navAnimate] = useAnimate();
  const description = useRef(null);
  const isInViewAnimate = useInView(description, { once: false });
  const shouldAnimate = isActive && isInViewAnimate;

  useEffect(() => {
    if (isActive) {
      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7,
          ease: "easeInOut",
        }
      );
    } else {
      navAnimate(navScope.current, {
        height: 0,
      });
    }
  }, [navAnimate, navScope, isActive]);

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

  const handleClickMobileNav = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsActive(false);

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed z-50 w-full transition-colors duration-500 h-screen ${
        scrolledPastHero ? "text-black" : "text-white"
      }`}
    >
      <div
        ref={navScope}
        className=" container left-0 right-0 w-full h-0 bg-black overflow-hidden"
      >
        <nav
          ref={description}
          className="h-full flex justify-center flex-col overflow-hidden"
        >
          {navItems.map(({ label, href }) => (
            <a
              href={href}
              onClick={handleClickMobileNav}
              key={label}
              className=" text-white overflow-hidden"
            >
              <motion.span
                variants={slideUp}
                initial="initial"
                animate={shouldAnimate ? "open" : "closed"}
                className="flex flex-col text-[35px] leading-[40px] cursor-pointer"
              >
                {label}
              </motion.span>
            </a>
          ))}
        </nav>
      </div>
      <div className="container fixed top-0 left-0 pt-3 md:pt-5 flex items-center justify-between">
        <div className="uppercase text-[30px] font-bold leading-[40px] z-10 cursor-pointer">
          {isActive ? (
            <div className=" text-white cursor-pointer ">Monive</div>
          ) : (
            <div className=" cursor-pointer">Monive</div>
          )}
        </div>
        <div
          className="menu sm:hidden"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          {isActive ? (
            <div className=" text-white cursor-pointer">CLOSE</div>
          ) : (
            <div className=" cursor-pointer">MENU</div>
          )}
        </div>
        <div className="hidden sm:flex items-center gap-10">
          <a href="#about" className="nav menu-link">
            About
          </a>
          <a href="#carrers" className="nav menu-link">
            Carrers
          </a>
          <a href="#services" className="nav menu-link">
            Services
          </a>
          <a href="#expertise" className="nav menu-link">
            Expertise
          </a>
          <a href="#contact" className="nav menu-link">
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
};
