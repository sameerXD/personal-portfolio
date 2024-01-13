"use client";
import React, { useState } from "react";
import { CiFacebook, CiLinkedin, CiMenuBurger } from "react-icons/ci";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const HoverNavLink = ({ children }: { children: any[] }) => {
  return (
    <div className="flex md:flex-row flex-col md:items-center  md:gap-[4vw] gap-8">
      {children.map((c) => (
        <div className="hover:border-b-4 border-white cursor-pointer " key={c}>
          {c}
        </div>
      ))}
    </div>
  );
};

const HoverDiv = ({ children }: { children: any[] }) => {
  return (
    <div className="flex  items-center gap-[4vw]">
      {children.map((c) => (
        <div className="cursor-pointer" key={c}>
          {c}
        </div>
      ))}
    </div>
  );
};

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${toggle ? "h-[60vh]" : ""}`}>
      <div
        className={`bg-blue-500 flex min-h-16 justify-between items-center p-3 `}
      >
        <div className="flex md:text-lg text-3xl">
          <HoverDiv>
            <CiLinkedin style={{ color: "white" }} />

            <CiFacebook style={{ color: "white" }} />

            <FaInstagram style={{ color: "white" }} />

            <FaDiscord style={{ color: "white" }} />
          </HoverDiv>
        </div>

        <div
          className={`md:static absolute  md:min-h-fit min-h-[60vh] left-0 ${
            toggle ? "top-[6%]" : "top-[-100%]"
          }  md:w-auto w-full bg-blue-500 flex items-center px-5 duration-500`}
        >
          <HoverNavLink>
            <p className="text-lg text-white">ABOUT</p>

            <p className=" text-white">PROJECTS</p>
            <p className=" text-white">TALKS</p>
            <p className=" text-white">BLOG</p>
            <p className=" text-white">RESUME</p>
            <p className=" text-white">CONTACT</p>
          </HoverNavLink>
        </div>

        <div
          className="flex items-center md:hidden text-3xl"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <IoIosClose style={{ color: "white", cursor: "pointer" }}  />
          ) : (
            <CiMenuBurger style={{ color: "white", cursor: "pointer" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
