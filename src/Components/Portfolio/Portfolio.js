import React from "react";
import image from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/Components/Portfolio/images/project-idea-1.PNG";
// import arrayDestruct from '../Portfolio/images/arrayDestruct.jpg';
import reactWeather from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/portfolio/reactWeather.jpg";
import reactParallax from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/portfolio/reactParallax.jpg";
import reactSmooth from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/portfolio/reactSmooth.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: image,
    },
    {
      id: 2,
      src: reactWeather,
    },
    {
      id: 3,
      src: reactParallax,
    },
    {
      id: 4,
      src: reactSmooth,
    },
  ];

  return (
    <div
      name="Portfolio"
      className="w-full h-screen bg-gradient-to-b from-slate-700 to-gray-900 text-white md:h-screen"
    >
      <div className="max-w-screen p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl pt-10 font-bold inline hover:border-b-4 hover:border-gray-500 duration-100 cursor-pointer">
            Portfolio
          </p>
          <p className="text-xl font-bold py-6">Some Things I've Built...</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-clos-3 gap-8 px-12 sm:px-0">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="shadow-md shadow-slate-400 rounded-lg"
            >
              <img
                src={portfolio.src}
                alt=""
                className="rounded-md duration-100 hover:scale-105 cursor-pointer"
              />
              <div className="flex items-center just">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
      </div>
    </div>
  );
};

export default Portfolio;
