import React, { useState, useEffect } from "react";
import { navItems, name } from "../data/navData";
import { BiHome } from "react-icons/bi";

const Navbar = () => {
  const selected = 1;
  // const [scroll, setScroll] = useState(false);
  // const handleScroll = () => {
  //   window.scrollY > 50 ? setScroll(true) : setScroll(false);
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // }, [scroll])

  return (
    // <div className={`flex flex-row items-center justify-around text-lg ${scroll ? 'backdrop-blur-sm ' : ''}`}>
    <div
      className={
        "flex flex-row items-center justify-around text-lg backdrop-blur-sm"
      }
    >
      <div className="hover:cursor-pointer font-name text-headings ">
        {name}
      </div>

      {/* <div class="relative inline-flex  group">
        <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <a
          href="#"
          title="Get quote now"
          class="relative inline-flex items-center justify-center px-2 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          <BiHome />
        </a>
      </div> */}

      <div className="p-2 flex flex-row justify-evenly w-96">
        {navItems.map((item) => {
          return (
            <span
              className={`hover:cursor-pointer ${
                selected === item.id ? "text-light-blue" : "text-normal"
              }`}
            >
              {item.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
