"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-300 flex justify-center items-center flex-col text-white">
      <div className="  flex justify-center items-center flex-col w-[60%] justify-center items-center text-center">
        <div className="w-36 m-2">
          <img
            src="https://themes.3rdwavemedia.com/instance/bs5/2.2/assets/images/profile.jpg"
            alt="profile image"
            className="w-full rounded-full"
          />
        </div>
        <p className="text-4xl mb-1">Interested in hiring me for your project?</p>
        <p>
          Looking for an experienced full-stack developer to build your web app
          or ship your software product? To start an initial chat, just drop me
          an email at <Link href={""} className="underline">steve.doe@youremail.com</Link> or use the <Link href={""} className="underline">form on the contact
          page.</Link>
        </p>
        <button className="bg-blue-900 hover:bg-blue-700 rounded-full text-white font-bold py-2 px-4 transition duration-300 ease-in-out w-full md:w-28 m-2">
          Let{"'"}s Talk
        </button>
      </div>
      <div className="flex bg-slate-700 w-full justify-center items-center  font-extralight">
        <p>Template Copyright © Sameer Vashisth</p>
      </div>
    </div>
  );
};

export default Footer;
