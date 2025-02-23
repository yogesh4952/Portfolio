import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import "./Home.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Computer Science Student"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  useEffect(() => {
    console.log("RUnned");
  }, [text]);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center  items-center py-4 mt-20 shadow roboto">
      <div id="image" className="mb-5 flex justify-around">
        <img
          src="/assets/walp.jpg"
          className="h-3/4 w-96 rounded-2xl "
          alt="Profile"
        />
      </div>

      <div className="flex justify-start items-center flex-col">
        <div id="introduction">
          <h1 className="text-3xl lg:text-7xl underline font-extrabold text-gray-700 font-display">
            Yogesh Shah Thakuri
          </h1>
          <div className="mt-4">
            <h1 className="text-2xl lg:text-4xl">
              I am a{" "}
              <span className="text-pink-500 font-bold italic roboto">
                {text}
              </span>
              <span className="text-red-500">
                <Cursor cursorStyle="<" />
              </span>
            </h1>
          </div>
        </div>

        <div className="flex  gap-2 md:flex md:flex-row ">
          <NavLink
            to="/about"
            className="px-4 py-2  bg-white text-pink-500 rounded-sm mt-4 shadow-sm font-semibold  shadow-slate-700 hover:bg-pink-500 hover:text-white"
          >
            About Me
          </NavLink>

          <NavLink
            to="/contact-us"
            className="px-4 py-2 bg-black text-white rounded-sm mt-4 shadow-sm bold   shadow-slate-700 hover:bg-pink-500"
          >
            Hire Me
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
