import React from "react";
import "./Footer.css";
import { FaSchool } from "react-icons/fa";
import icon from "../../assets/images/footer/icon.png";
import icon2 from "../../assets/images/footer/icon2.png";
import icon3 from "../../assets/images/footer/icon3.png";
import icon4 from "../../assets/images/footer/icon4.png";
import social from "../../assets/images/footer/social.png";

const Footer = () => {
  return (
    <footer className="text-white bg-[#464646] py-8 mt-10">
      <div className="myContainer ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col justify-center">
            <div>
              <a
                className="flex items-center gap-3  uppercase font-bold ml-2"
                href="/"
              >
                {" "}
                <FaSchool /> <span>Services</span>
              </a>
            </div>
            <p className="text-sm mt-3 text-[#C1C1C1]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-3">
              Join Newsletters
            </h2>

            <div className="relative s">
              <input
                className="bg-[#464646] text-white border rounded-full px-4 py-2 w-full"
                type="email"
                placeholder="Email Address"
              />
              {/* <div className="absolute bottom-[9px] md:bottom-[7px]  right-[195px] md:right-8">
                   <img src={icon} alt="" /> 
                </div>*/}
            </div>
          </div>

          <div className="flex sm:justify-start md:justify-center ">
            <div className="">
              <h2 className="uppercase font-bold">Explore</h2>
              <ul className="text-sm mt-3 text-[#C1C1C1]">
                <li className="mt-4 cursor-pointer">Tutoring</li>
                <li className="mt-4 cursor-pointer">Sponsorship</li>
                <li className="mt-4 cursor-pointer">About Us</li>
                <li className="mt-4 cursor-pointer">Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-start md:justify-center ">
            <div className="">
              <h2 className="uppercase font-bold">Support</h2>
              <ul className="text-sm mt-3 text-[#C1C1C1]">
                <li className="mt-4 cursor-pointer ">Terms & Policy</li>
                <li className="mt-4 cursor-pointer ">Privacy Policy</li>
                <li className="mt-4 cursor-pointer ">Conditions</li>
                <li className="mt-4 cursor-pointer ">Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-start md:justify-center ">
            <div>
              <h2 className="uppercase font-bold">Contact Us</h2>
              <div className="mt-4">
                <div className="flex flex-row gap-4 items-center">
                  <img src={icon2} className="w-10 h-10 object-cover" alt="" />
                  <li className="cursor-pointer list-none">+1(245)5368792</li>
                </div>
                <div className="flex flex-row gap-4 items-center my-3">
                  <img src={icon3} className="w-10 h-10 object-cover" alt="" />
                  <li className="cursor-pointer list-none">+1(245)5368792</li>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <img src={icon4} className="w-10 h-10 object-cover" alt="" />
                  <li className="cursor-pointer list-none">+1(245)5368792</li>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="bg-gray-400 mt-10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs">
            © Copyright RK Trust 2023. All Rights Reserved
          </p>
          <img
            src={social}
            className="h-5 w-48 cursor-pointer mt-6 md:mt-0"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
