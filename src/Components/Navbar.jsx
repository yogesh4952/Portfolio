import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Blog", to: "/blog" },
    { label: "Project", to: "/Project" },
    { label: "About", to: "/about" },
  ];

  return (
    <nav className="w-full grid grid-cols-1 text-center lg:grid-cols-2 gap-4 items-center px-5 py-3 shadow-xl rounded-sm">
      {/* Logo */}
      <div className="text-2xl font-bold font-display">
        <h1 className="font-extrabold">YoGesh</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-6 relative">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `group relative text-gray-700 font-bold roboto hover:text-gray-900 ${
                isActive ? "text-pink-500 hover:text-pink-800" : ""
              }`
            }
          >
            {item.label}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black group-hover:w-full transition-all duration-300"></span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
