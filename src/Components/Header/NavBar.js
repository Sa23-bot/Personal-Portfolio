import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
// import logo from '../assets/WhatsApp Image 2021-07-26 at 02.26.10.jpeg'

// Array of links that give a navigation lists
const Links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "portifolio",
  },
  {
    id: 4,
    link: "experience",
  },
  {
    id: 5,
    link: "contact",
  },
];

const NavBar = () => {
  const [menuiconclick, setMenuIconClick] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r fixed">
      <div>
        <h1 className="text-5xl font-signature text-white ml-2">Ezgihaysh</h1>
        {/* <img src={logo} alt="" className="flex rounded-full w-20 h-30"/> */}
      </div>

      {/* Navigation bars */}

      <ul className="hidden md:flex">
        {Links.map(({id, link}) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200 hover:text-cyan-500"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* menu and times icons involved */}

      <div
        onClick={() => setMenuIconClick(!menuiconclick)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {menuiconclick ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* List of the menus */}

      {menuiconclick && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600 text-gray-300">
          {Links.map((link) => (
            <li
              key={link.id}
              className="px-8 py-8 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-gray-300 text-3xl"
            >
              {link.link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
