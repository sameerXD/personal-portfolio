'use client'
import SkillCard from "./components/SkillCard";
import { FaLaptopCode, FaGoogle } from "react-icons/fa6";
import { CiDatabase } from "react-icons/ci";
import { MdOutlinePermDataSetting } from "react-icons/md";
import BrandIcons from "./components/BrandIcons";
import { FaAirbnb, FaDropbox, FaSpotify } from "react-icons/fa";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div className="min-h-[200vh] ">
      <div className=" bg-blue-300 md:h-[400px] h-[850px] flex justify-between items-center ">
        <div className="flex justify-between items-center content-center gap-[4vw] mx-auto  w-[92%] h-[80%]  md:flex-row flex-col">
          <div className="">
            <img
              src="https://themes.3rdwavemedia.com/instance/bs5/2.2/assets/images/profile.jpg"
              alt="profile image"
              className="w-full"
            />
          </div>
          <div className="text-white flex flex-col md:items-start items-center h-full content-center justify-center">
            <p className="mb-5 text-pretty text-xl ">Hello, my name is</p>
            <h1 className="mb-5 text-5xl font-bold">Sameer Vashisth</h1>

            <p className="mb-5 ">
              I{"'"}m a full-stack developer specialised in frontend and backend
              development for complex scalable web apps. I write about web
              development on my blog and regularly speak at various web
              conferences and meetups. Want to know how I may help your project?
              Check out my project case studies and resume.
            </p>
            <button className="bg-blue-900 hover:bg-blue-700 rounded-full text-white font-bold py-2 px-4 transition duration-300 ease-in-out w-full md:w-28">
              Hire Me
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-5 bg-slate-50  text-center">
        <h1 className="mb-5 text-3xl font-bold text-slate-800">
          Skills Overview
        </h1>
        <p className="text-slate-600">
          I have more than 8 years experience building rich web applications for
          clients all over the world. Below is a quick overview of my main
          technical skill sets and tools I use. Want to find out more about my
          experience? Check out my online resume.
        </p>
        <div className="flex md:flex-row flex-col">
          <SkillCard
            headerIcon={FaLaptopCode()}
            skillList={[
              "Node.js",
              "HTML/CSS",
              "React/Redux",
              "Javascript",
              "Axios",
            ]}
            heading="Frontend"
          />
          <SkillCard
            headerIcon={CiDatabase()}
            skillList={[
              "Node.js",
              "Python/Django",
              "React/Redux",
              "SQL/MongoDb/Neo4j",
              "Redis",
            ]}
            heading="Backend"
          />
          <SkillCard
            headerIcon={MdOutlinePermDataSetting()}
            skillList={["DevOps", "Unit Testing", "Wireframing", "Wordpress"]}
            heading="Others"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-5  text-center">
        <h1 className="mb-5 text-3xl font-bold text-slate-800">
          Great clients I{"'"}ve worked with
        </h1>
        <h1 />
        <div className="flex md:flex-row flex-col w-[80%] md:justify-between justify-center items-center">
          <BrandIcons brandIcon={FaGoogle()} brandName="GOOGLE" />
          <BrandIcons brandIcon={FaAirbnb()} brandName="Airbnb" />
          <BrandIcons brandIcon={FaDropbox()} brandName="Dropbox" />
          <BrandIcons brandIcon={FaSpotify()} brandName="Spotify" />
        </div>
        <div className="w-full ">
          <Slider
            images={[
              "https://themes.3rdwavemedia.com/instance/bs5/2.2/assets/images/profile.jpg",
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
              "https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/awesome-solitude-bess-hamiti.jpg",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
