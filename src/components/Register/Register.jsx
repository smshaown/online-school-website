import React from "react";
import contactImg from "../../assets/images/Contact/contact.jpg";
import Button from "../Button/Button";
import login from "../../assets/images/Contact/logo.png";
import { FaSchool } from "react-icons/fa";

const Register = () => {
  return (
    <>
      <div className="mx-auto max-w-[800px] bg-white myContainer">
        <div>
          <a
            className="flex items-center gap-3 mt-10 uppercase font-bold ml-2 px-3"
            href="/"
          >
            {" "}
            <FaSchool /> <span>Services</span>
          </a>
        </div>
        <div className="rounded-2xl shadow-lg">
          <div
            className="px:2 md:px-12 rounded-t-2xl "
            style={{ background: "rgba(166, 177, 183, 0.20)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center mt-20 py-4">
              <div className="order-last md:order-first px-4 md:px-0">
                <h2 className="font-semibold text-3xl text-[#1A1A1A]">
                  Get In Touch
                </h2>
                <p className="font-normal text-base text-[#5C5C5C] mt-2 w-full md:w-80">
                  Lorem ipsum dolor sit amet consect etent taciti
                </p>
              </div>

              <div className="grid justify-start md:justify-end ">
                <div className="w-32 h-32">
                  <img
                    className="w-full h-full object-cover"
                    src={contactImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="px-2 md:px-12">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-[#454545] font-semibold mt-5 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-[#454545] font-semibold mb-1 "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-[#454545] font-semibold mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-[#454545] font-semibold mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your confirm password"
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    for="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <div className="grid justify-center mt-12 mb-16 pb-10">
                <Button button="Sign Up" />
              </div>
            </form>
          </div>
        </div>
        <div className="text-sm text-black font-normal mb-10 text-center">
          <span>
            Already have an account?{" "}
            <a href="/login" className="text-[#2753FF]">
              Sign In
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;
