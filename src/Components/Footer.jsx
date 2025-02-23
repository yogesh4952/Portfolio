import { NavLink } from "react-router-dom";
import Github from "../Icons/Github";
import LinkedIn from "../Icons/LinkedIn";
import X from "../Icons/X";
import Medium from "../Icons/Medium";

const Footer = () => {
  const footerNav = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Blog",
      to: "/blog",
    },
    {
      label: "Project",
      to: "/project",
    },
    {
      label: "About",
      to: "/about",
    },
  ];

  const socialLinks = [
    {
      label: "Github",
      link: "https://github.com/yogesh4952",
      element: <Github />,
    },

    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/yogesh-shah-thakuri-8a0669275",
      element: <LinkedIn />,
    },

    {
      label: "X",
      link: "https://x.com/Yogesh29146908",
      element: <X />,
    },

    {
      label: "Medium",
      link: "https://medium.com/@yogeshshah2063",
      element: <Medium />,
    },
  ];

  return (
    <div className="bg-black text-white shadow-md w-full rounded-sm py-8 mt-8">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div id="logo" className="flex flex-col items-start text-pink-600 ">
          <h1 className="font-display text-3xl mb-2 font-extrabold">Yogesh</h1>
          <p className="roboto text-sm text-slate-300 leading-relaxed text-justify">
            I am a passionate and dedicated web developer with expertise in both
            frontend and backend technologies, continuously learning and growing
            in the tech field to create innovative and user-friendly
            applications.
          </p>
        </div>

        {/* Contacts Section */}
        <div id="contacts" className="flex flex-col space-y-4  items-center">
          {socialLinks.map((val, index) => (
            <div
              key={index}
              className="text-lg hover:text-gray-400 flex items-center space-x-2"
            >
              <NavLink target="_blank" to={val.link} className={`text-lg`}>
                {" "}
                {val.label}{" "}
              </NavLink>
              {val.element}
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-4  items-center">
          {footerNav.map((value, index) => (
            <NavLink
              className={({ isActive }) =>
                `text-lg font-bold hover:text-gray-400 ${
                  isActive ? "text-pink-800 hover:text-pink-500" : ""
                }`
              }
              key={index}
              to={value.to}
            >
              {value.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
