import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { SiIfood } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { FaSchool } from "react-icons/fa";
// import logo2 from "../../../assets/images/banner/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOPen] = useState(false);

  return (
    <div className=" myContainer  px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 myContainer ">
      <div className="flex items-center justify-between pt-12">
        <Link to="/" className=" inline-flex items-center">
          <FaSchool className="text-white w-[40px] h-40px]" />
          <h2 className="text-white sm:mt-1 md:mt-1 font-bold">
            Online School
          </h2>
        </Link>

        {/* nave Link  */}
        <ul className="items-center hidden space-x-8 lg:flex text-base font-normal">
         

          <li>
            <NavLink
              to="/aboutUs"
              title="Blog Link"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/scholarShip"
              title="Scholar Ship"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Sponsorship
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/online"
              title="Online Learning"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Tutoring
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contactUs"
              title="Contact Us"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              title="Login"
              className="py-[6px] px-8 rounded-full text-white bg-black"
            >
              Login
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/register"
              title="Register"
              className="ring-offset-2 ring py-[2px] px-4 rounded-full text-white"
            >
              Register
            </NavLink>
          </li>
        </ul>
        {/* Mobile Navbar section  */}
        <div className="lg:hidden">
          <button
            aria-level="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOPen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-white" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-black border rounded shadow-sm">
                <div className="flex items-center justify-between ">
                  <div>
                    <Link to="/" className=" inline-flex items-center">
                      <FaSchool className="text-white w-[40px] h-40px]" />
                      <h2 className="text-white sm:mt-1 md:mt-1 font-bold">
                        Online School
                      </h2>
                    </Link>
                  </div>

                  <div>
                    <button
                      aria-level="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOPen(false)}
                    >
                      <XMarkIcon className="w-5 text-white" />
                    </button>
                  </div>
                </div>

                <nav>
                  <ul className="space-y-4 mt-4 md:mt-0">
                    <li>
                      <NavLink to="/" title="Home Link" className="default">
                        Services
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/aboutUs"
                        title="About Us"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        About Us
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/scholarShip"
                        title="Scholar Ship"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Sponsorship
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/online"
                        title="Online Learning"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Tutoring
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/contactUs"
                        title="Contact Us"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Contact Us
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/login"
                        title="Login"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Login
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/register"
                        title="Register"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Register
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
