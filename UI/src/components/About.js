import React from "react";
import Underline from "./animations/Underline";
import ideas from "../Assets/ideas.png";
import ToolsAndTech from "./ToolsAndTech";

const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-4xl text-center">
        <span className="w-min">
          About Me
          <Underline />
        </span>
      </div>
      <div className="flex gap-10">
        <div className="text-gray-300 text-xl w-[80%]">
          <span>
            I’m a passionate developer with a strong focus on building
            user-friendly and dynamic web and mobile applications. I enjoy
            turning creative ideas into functional, responsive designs, whether
            through a portfolio, recipe app, or a resume generation tool. My
            expertise lies in working with React Native and web development
            frameworks, allowing me to create reusable and scalable components.
            I’m always eager to explore ways to optimize workflows, such as
            using metadata to enhance component rendering and developing
            templates that make websites versatile and efficient. When I'm not
            coding, I’m likely brainstorming new projects that combine design
            aesthetics with robust functionality, ensuring that every
            application I build serves its purpose effectively while providing a
            seamless user experience.
          </span>
        </div>
        <div>
          <img
            className="object-contain w-56 rounded-full"
            src={ideas}
            alt="ideas"
          />
        </div>
      </div>
      <ToolsAndTech />
    </div>
  );
};

export default About;

