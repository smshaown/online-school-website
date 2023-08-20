import React from "react";
import Button from "../Button/Button";
import vector from "../../assets/images/Scholarship/Vector.png";
import hyperlink from "../../assets/images/Scholarship/hyperlink.png";
import video from "../../assets/images/Scholarship/vedio.png";
import video2 from "../../assets/images/Scholarship/video2.png";

const ApplyScholarship = () => {
  return (
    <>
      <div className="myContainer mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 md:mt-44">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0E0E0E]">
                How to apply scholarship?
              </h2>
              <p className="text-lg text-[#9F9F9F] mt-4 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac{" "}
              </p>
              <div className="flex gap-4 items-center">
                <img src={vector} className="w-6 h-6 object-cover" alt="" />
                <h4 className="text-base text-[#454545] font-medium">
                  rktrust@gmail.com
                </h4>
              </div>
              <div className="flex gap-4 items-center mt-6">
                <img src={hyperlink} className="w-6 h-6 object-cover" alt="" />
                <h4 className="text-base text-[#454545] font-medium">
                  https://rktrust.com
                </h4>
              </div>

              <button
                href=""
                className="px-8 py-2 bg-gray-800 text-white shadow-md hover:shadow-lg rounded-[30px] mt-8 text-sm"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-8 md:mt-0  ">
            <div className="relative w-[380px] h-[310px] rounded-lg" >
              <img src={video} className="w-full h-full object-cover" alt="" />
              <div className="absolute bottom-0 left-[160px] top-[110px] w-16 h-16">
                <img
                  className="w-full h-full object-cover"
                  src={video2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyScholarship;
