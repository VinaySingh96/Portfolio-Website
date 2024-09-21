import React from "react";
import { toolAndTechnologies } from "../data/tools";
import Underline from "./animations/Underline";
import { redirectToLink } from "../utils/commonFunction";

const ToolsAndTech = () => {
  return (
    <div className="text-center p-2">
      <span className="w-min text-4xl">
        Tools & Technologies
        <Underline />
      </span>
      <div className="flex gap-4 flex-wrap mt-8">
        {toolAndTechnologies.map((item, index) => {
          const Icon = item.icon;
          return (
            !item.isDisabled && (
              <div
                className="bg-gray-200 rounded-sm flex p-4 w-48 justify-around gap-2 items-center cursor-pointer hover:bg-white hover:duration-300"
                onClick={() => redirectToLink(item.docsLink)}
              >
                <Icon className="w-14" size={item.size} color={item.color} />
                <span className="w-[100%] text-left text-slate-900">
                  {item.label}
                </span>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default ToolsAndTech;
