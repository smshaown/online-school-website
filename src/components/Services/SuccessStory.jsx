import React from "react";
import SubTitle from "../SubTitle/SubTitle";
import bg1 from "../../assets/images/services/BG1.png";
import bg2 from "../../assets/images/services/BG2.png";
import bg3 from "../../assets/images/services/BG3.png";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const SuccessStory = () => {
  return (
    <div className="myContainer ">
      <div className="flex flex-col justify-center items-center text-center">
        <h5 className="flex text-[#A6B1B7] gap-2 font-medium  mt-24">
          <span className="mt-1">
            <AiOutlineHeart />
          </span>
          Success Story
        </h5>

        <h2 className=" text-3xl md:text-[40px] font-semibold text-[#0E0E0E] py-4">
          Success Stories
        </h2>
        <p className="text-[#9F9F9F]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        </p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center items-center mt-10">
        <div>
          <div className="relative ">
            <img
              className="w-full h-full object-cover mt-[22px]"
              src={bg1}
              alt=""
            />
            <div className="absolute bottom-[17px] md:bottom-[20px] px-3 py-3 bg-black bg-opacity-70  rounded-br-xl rounded-bl-xl text-center ml-[14px] mr-[14px] md:ml-4 md:mr-4">
              <h1 className="text-white font-semibold text-2xl">Story one</h1>
              <p className="text-gray-200 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulput
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              className="w-full h-full object-cover mt-[22px]"
              src={bg3}
              alt=""
            />
            <div className="absolute bottom-[17px] md:bottom-[20px] px-3 py-3 bg-black bg-opacity-70  rounded-br-xl rounded-bl-xl text-center ml-[14px] mr-[14px] md:ml-4 md:mr-4">
              <h1 className="text-white font-semibold text-2xl">Story two</h1>
              <p className="text-gray-200 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulput
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="relative ">
            <div>
              <img
                className="w-full h-full object-cover mt-[22px]"
                src={bg2}
                alt=""
              />
              <div className="absolute bottom-[17px] md:bottom-[20px] px-3 py-3 bg-black bg-opacity-70  rounded-br-xl rounded-bl-xl text-center ml-[14px] mr-[14px] md:ml-4 md:mr-4">
                <h1 className="text-white font-semibold text-2xl">
                  Story three
                </h1>
                <p className="text-gray-200 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulput
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid justify-center items-center mt-14">
        <Link
          to="/success"
          className="px-10 py-3 bg-gray-800 text-white shadow-md hover:shadow-lg rounded-[30px] mb-20"
        >
          Share your Story
        </Link>
      </div>
    </div>
  );
};

export default SuccessStory;
