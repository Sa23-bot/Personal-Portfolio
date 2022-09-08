import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className=" flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 duration-100 cursor-pointer">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 animate-pulse">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hello! My name is Samuel</p>
          </div>
          <div>
            <p>
              Hello! My name is Samuel and I enjoy creating things that live on
              the internet. My interest in web development and App developer
              started back in 2016 when I decided to try editing polytech local
              website which is — turns out hacking together a custom reblog
              button taught me a lot about HTML & CSS!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
