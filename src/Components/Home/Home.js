import React from "react";
import image from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/Slide-Image.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-screen mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500  text-xl sm:text-7xl ">
            I'm a Full Stack Developer
          </h2>
          <p className="bg-radial-at-bl from-purple-100 via-sky-200 to-cyan-700 py-4 max-w-md">
            I'm a Senior IT Student @Zayed University,Aspiring MERN Stack
            Developer and ML Practitioner, who is passionate to be software
            engineer also contributing creative and innovate ideas/projects to
            elevate people and building community. Some technologies that I
            enjoy working with Javascript with it's frameworks such as React,
            React Native, Node.js, and Java, Python programming languages. I
            spend most of time coding outstanding projects that help our
            community.
          </p>

          <div>
            <Link
              to="Experience"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 animate-pulse">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Import Image */}
        <div className="hidden md:block">
          <img
            src={image}
            alt=""
            className="rounded-3xl w-2/3 md:w-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
