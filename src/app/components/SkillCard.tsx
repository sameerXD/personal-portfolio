"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";

const SkillCard = ({
  headerIcon,
  skillList,
  heading,
}: {
  headerIcon: any;
  skillList: string[];
  heading: string;
}) => {
  return (
    <div className="mt-16 w-80 flex flex-col justify-center items-center bg-white relative min-h-60 md:mr-16">
      <div className="flex items-center justify-center bg-blue-500 rounded-full h-[100px] w-[100px] absolute top-[-20%]">
        <div className="text-[80px] absolute text-white">{headerIcon}</div>
      </div>
      <h1 className="text-xl mt-14">{heading}</h1>
      <div className="w-full p-5">
        <ul className="flex justify-start items-start flex-col gap-2">
          {skillList.map((skill) => {
            return (
              <li className="flex items-start w-full" key={skill}>
                <FaCheck className="mr- text-blue-500 mr-3" />
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
