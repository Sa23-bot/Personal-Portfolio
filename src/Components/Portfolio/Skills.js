import React from "react";

import aws from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/aws.png";
import css from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/css.png";
import firebase from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/firebase.png";
import github from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/github.png";
import html from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/html.png";
import javascript from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/javascript.png";
import mongo from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/mongo.png";
import nextjs from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/nextjs.png";
import react from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/react.png";
import tailwind from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/tailwind.png";
import node from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/node.png";

const Skills = () => {
  return (
    <div name="Skills" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sm:text-left pb-8 pl-4">
          <p className="text-4xl py-4 font-bold inline border-b-4 border-gray-600 cursor-pointer">
            Skills
          </p>
          <p className="text-xl font-semibold py-6">
            Technology I've worked with...
          </p>
        </div>

        {/* skills in the form of cards */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-12">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-100">
            <img src={html} alt="" className=" mx-auto w-20 cursor-pointer" />
            <p className="my-4 flex justify-center items-center">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-100">
            <img src={css} alt="" className=" mx-auto w-20 cursor-pointer" />
            <p className="my-4 flex justify-center items-center">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-100">
            <img
              src={javascript}
              alt=""
              className=" mx-auto w-20 cursor-pointer"
            />
            <p className="my-4 flex justify-center items-center">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-100">
            <img src={aws} alt="" className=" mx-auto w-20 cursor-pointer" />
            <p className="my-4 flex justify-center items-center">AWS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-100">
            <img
              src={firebase}
              alt=""
              className=" mx-auto w-20 cursor-pointer"
            />
            <p className="my-4 flex justify-center items-center">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-100">
            <img src={github} alt="" className=" mx-auto w-20 cursor-pointer" />
            <p className="my-4 flex justify-center items-center">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-100">
            <img src={mongo} alt="" className=" mx-auto w-20 cursor-pointer" />
            <p className="my-4 flex justify-center items-center">Mongo</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-100">
            <img src={nextjs} alt="" className=" mx-auto w-20 cursor-pointer" />
            <p className="my-4 flex justify-center items-center">Nextjs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-100">
            <img src={react} alt="" className=" mx-auto w-20 cursor-pointer" />
            <p className="my-4 flex justify-center items-center">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-100">
            <img
              src={tailwind}
              alt=""
              className=" mx-auto w-20 cursor-pointer"
            />
            <p className="my-4 flex justify-center items-center">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-100">
            <img src={node} alt="" className=" mx-auto w-20 cursor-pointer" />
            <p className="my-4 flex justify-center items-center">Node</p>
          </div>
        </div>

        {/* Cards */}
      </div>
    </div>
  );
};

export default Skills;
