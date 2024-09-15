import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

const Layout = () => {
  return (
    <div className="bg-gray-900 pb-10">
      <div className="w-[100%] fixed h-28">
        <Navbar />
      </div>
      <div className="container mx-auto pt-16 flex flex-col gap-14">
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  );
};

export default Layout;
