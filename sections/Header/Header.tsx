import Link from "next/link";
import React from "react";
import "./style.scss";


export const Header = () => {
  return (
    <header className=" fixed z-50 w-full text-white">
      <div className="container pt-3 md:pt-5 flex items-center justify-between">
        <div className=" uppercase text-[30px] font-bold leading-[40px]">
          Monive
        </div>
        <div className="menu sm:hidden">
          Menu
        </div>
        <div className="hidden sm:flex items-center gap-10 ">
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
    </header>
  );
};
