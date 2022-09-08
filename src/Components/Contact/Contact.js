import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full md:h-screen bg-[#0a192f] flex justify-center item-center p-4"
    >
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <form
          action="https://getform.io/f/8e22137c-3344-43db-b718-470e677e8708"
          method="POST"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl py-4 font-bold inline border-b-4 border-gray-600 text-gray-300 cursor-pointer">
              Contact
            </p>
            <p className="text-xl font-semibold py-6  text-gray-300">
              I'm always open to discussing about Software Development and
              Technology in general. shot me an email....
            </p>
          </div>
          <input
            type="text"
            placeholder="Name"
            className="p-2 bg-[#0e7490] rounded-md text-white"
            required
          />
          <input
            type="text"
            placeholder="Email"
            className="my-2 p-2 bg-[#0e7490]  rounded-md text-white"
            required
          />
          <textarea
            name="Message"
            className="p-2 bg-[#0e7490] rounded-md text-white"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button className="group text-white border-2 px-4 py-3 my-8 mx-auto flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            Let's talk
            <span className="group-hover:animate-bounce duration-900">
              <FaLocationArrow size={25} className="ml-2" />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
