import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSchool } from "react-icons/fa";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800">
      <div className="myContainer mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 pt-6">
        <Link to="/" className=" inline-flex items-center">
          <FaSchool className="text-white w-[40px] h-40px]" />
          <h2 className="text-white sm:mt-1 md:mt-1 font-bold">
            Online School
          </h2>
        </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 list-none gap-5">

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


              {/* Add more links here */}


            </div>
          </div>
          <div className="hidden md:block">
            <button to="/login"
              className="py-[6px] px-8 rounded-full text-white bg-black mr-8">login</button>
            <button to="/register"
              className="border-solid border-2 px-4 rounded-full text-white">Register</button>
          </div>


          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:ring"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-gray-800 z-10 ">
            
            <div className='flex justify-end'>
            <button
            type="button"
            className="block text-sm font-medium text-gray-300 hover:text-white focus:outline-none focus:ring"
            onClick={closeMenu}
          >
            {/* "ক্লোজ" আইকন */}
            <svg
              className="h-8 w-8 mt-5 mr-5  text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>            
          </button>
            </div>


          <div className="px-2 pt-2 pb-3 space-y-4 flex flex-col justify-center items-center list-none">
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
                        Contact
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
            {/* Add more mobile menu items */}
          </div>
         
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
