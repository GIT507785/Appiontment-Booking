import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/assets/logo.svg";
import React, { useState } from "react";
import profile_pic from "../assets/assets/profile_pic.png";
import { BiDownArrow } from "react-icons/bi";
import { MenuIcon, X } from "lucide-react";


interface props {
  token:string | null
  setToken:React.Dispatch<React.SetStateAction<string | null>>
}

const Navbar = ({token , setToken}:props) => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState<boolean>(false);
  // const [token, setToken] = useState<boolean>(true);

   

  return (
    <nav className="border-b border-gray-300">
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-36 md:w-44 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-sm">
          {["/", "/doctors", "/about", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : ""
              }
            >
              <li>
                {path === "/"
                  ? "HOME"
                  : path.replace("/", "").toUpperCase()}
              </li>
            </NavLink>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {token ? (
            <div className="relative group hidden md:flex items-center gap-2 cursor-pointer">
              <img
                src={profile_pic}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <BiDownArrow className="size-4" />

              {/* Dropdown */}
              <div className="absolute right-0 top-10 hidden group-hover:block z-20">
                <div className="bg-white shadow-lg rounded-md p-4 w-48 text-sm text-gray-600 flex flex-col gap-3">
                  <p
                    onClick={() => navigate("/my-profile")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/my-appiontments")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => {localStorage.removeItem('token')  , navigate('/login')}}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block bg-blue-700 cursor-pointer text-white px-6 py-2 rounded-full text-sm"
            >
              Create account
            </button>
          )}


          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenu(true)}
            className="md:hidden block"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menu && (
        <div className="fixed inset-0 bg-white z-50 p-6">
          <div className="flex justify-between items-center mb-6">
            <img src={logo} alt="logo" className="w-36" />
            <X onClick={() => setMenu(false)} className="cursor-pointer" />
          </div>

          <ul className="flex flex-col gap-5 font-medium text-lg">
            <NavLink onClick={() => setMenu(false)} to="/">
              HOME
            </NavLink>
            <NavLink onClick={() => setMenu(false)} to="/doctors">
              ALL DOCTORS
            </NavLink>
            <NavLink onClick={() => setMenu(false)} to="/about">
              ABOUT
            </NavLink>
            <NavLink onClick={() => setMenu(false)} to="/contact">
              CONTACT
            </NavLink>
          </ul>

          {!token && (
            <button
              onClick={() => navigate("/login")}
              className="mt-8  w-full bg-blue-700 text-white py-3 rounded-full"
            >
              Create account
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
