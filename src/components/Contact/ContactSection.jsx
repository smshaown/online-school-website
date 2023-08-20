import React from "react";
import contactImg from "../../assets/images/Contact/contact.jpg";
import img1 from "../../assets/images/Contact/call.png";
import img2 from "../../assets/images/Contact/email.png";
import Button from "../Button/Button";

const ContactSection = () => {
  return (
    <div className="myContainer ">
      <div className="mx-auto  bg-white rounded-2xl shadow-lg">
        <div>
          <div
            className="px-2 md:px-12 rounded-t-2xl"
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
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-[#454545] font-semibold mt-12 mb-1"
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
                  htmlFor="phone"
                  className="block text-[#454545] font-semibold mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone"
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-[#454545] font-semibold mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message here..."
                  rows="4"
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              {/* <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Sign Up
              </button> */}
              <div className="grid justify-center pb-20 mt-12 ">
                <Button button="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Cards  */}

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-32 mb-32">
        <div class="relative border-2 border-gray-300 rounded-xl p-6 bg-gray-100 h-[200px] flex flex-col justify-center items-center">
          <div class=" text-white flex items-center absolute rounded-full py-1 px-1  bg-gray-500 left:0 md:left-[16.6rem] -top-[2.5rem]">
            <img src={img1} className="h-16 w-16" alt="" />
          </div>

          <div class="mt-0 text-center">
            <p class="text-2xl font-semibold my-2">Phone Number </p>
            <p className="mb-3 text-[#8C8C8C] text-base">+1 (780) 273456987</p>
            <p className="text-[#8C8C8C] text-base">+1 (456) 4547744</p>
          </div>
        </div>

        <div class="relative border-2 border-gray-300 rounded-xl p-6 bg-gray-100 h-[200px] flex flex-col justify-center items-center mt-10 md:mt-0">
          <div class=" text-white flex items-center absolute rounded-full py-1 px-1  bg-gray-500 left:0 md:left-[16.6rem] -top-[2.5rem]">
            <img src={img2} className="h-16 w-16" alt="" />
          </div>
          <div class="mt-0 text-center">
            <p class="text-2xl font-semibold my-2">Email Address</p>
            <p className="mb-3 text-[#8C8C8C] text-base">+1 (780) 273456987</p>
            <p className="text-[#8C8C8C] text-base">+1 (456) 4547744</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
