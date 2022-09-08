import React from "react";
import workImg from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/workImg.PNG";
import workImgthree from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/workImgthree.PNG";
import workImgfour from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/workImgfour.PNG";
import workImgfive from "C:/Users/Dell/Desktop/Linkedin-Projects/Personal Portifoli/personal-portifoli/src/assets/workImgfive.PNG";

const Experience = () => {
  return (
    <div
      name="Experience"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl py-4 font-bold inline border-b-4 border-gray-600 cursor-pointer">
            Experience
          </p>
          <p className="text-xl font-semibold py-6">
            Here it's some of the recent and coming soon projects using the
            above technologies...
          </p>
        </div>

        {/* Container - 1 */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white tracking-wider">
                Tailwind css - Email card
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Sa23-bot/Email-card" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Sa23-bot/Email-card" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Container - 2 */}
          <div
            style={{ backgroundImage: `url(${workImgthree})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tesla Clone
              </span>
              <div className="pt-8 text-center">
                <a href="https://pmf8fz.csb.app/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Sa23-bot/Tesla-Clone" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*container - 3*/}
          <div
            style={{ backgroundImage: `url(${workImgfour})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Season Website 
              </span>
              <div className="pt-8 text-center">
                <a href="https://xe68wu.csb.app/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Sa23-bot/Seasons" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Container - 4  */}
          <div
            style={{ backgroundImage: `url(${workImgfive})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Movie website
              </span>
              <div className="pt-8 text-center">
                <a href="https://sxydyp.csb.app/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Sa23-bot/MovieStore" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
