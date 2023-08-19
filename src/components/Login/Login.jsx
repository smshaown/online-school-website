import React from "react";
import contactImg from "../../assets/images/Contact/contact.jpg";
import Button from "../Button/Button";
import { FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="mx-auto max-w-[800px] bg-white">
        <div>
          {/* <img src={login} className="w-20 h-14" alt="" /> */}
          <a
            className="flex items-center gap-3 mt-10 uppercase font-bold ml-2"
            href="/"
          >
            {" "}
            <FaSchool /> <span>Services</span>
          </a>
        </div>
        <div className="rounded-2xl shadow-lg">
          <div
            className="px-2 md:px-12 rounded-t-2xl "
            style={{ background: "rgba(166, 177, 183, 0.20)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center mt-20 py-4">
              <div className="order-last md:order-first">
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
              <div className="mb-4 mt-14">
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
                  required=""
                />
              </div>
              <div className="mb-4 mt-4">
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
                  required=""
                />
              </div>

              <div className="flex items-center justify-between mt-7 mb-16">
                <div className="flex items-start">
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
                <a
                  href="#"
                  className="text-sm font-medium text-[#A6B1B7] hover:underline "
                >
                  Forgot password?
                </a>
              </div>

              <div className="grid justify-center  pb-10">
                <Button button="Sign Up" />
              </div>
            </form>
          </div>
        </div>

        <div className="text-sm text-black font-normal mt-10 mb-10 text-center">
          <span>
            Don’t have an account?{" "}
            <Link to="/register" className="text-[#2753FF]">
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
