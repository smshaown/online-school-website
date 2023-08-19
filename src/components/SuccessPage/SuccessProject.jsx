import React from "react";
import img1 from "../../assets/images/success/icon1.png";
import img2 from "../../assets/images/success/icon2.png";
import img3 from "../../assets/images/success/icon3.png";
import img4 from "../../assets/images/success/icon4.png";
import bg from "../../assets/images/success/BG.png";
import bg1 from "../../assets/images/success/double-quote.png";

const SuccessProject = () => {
  return (
    <div className="myContainer">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 mb-20">
        <div className="flex md:text-left text-center flex-col md:flex-row items-center gap-4  border-2 border-gray-300 rounded-xl p-6 bg-[#FEF6E0]">
          <img src={img1} alt="" />
          <div>
            <h3 className="text-xl text-[#161C2D] font-bold">500+</h3>
            <p className="text-sm text-[#232D42] font-normal">Total Courses</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:text-left text-center gap-4  border-2 border-gray-300 rounded-xl p-6 bg-[#E8EBED]">
          <img src={img2} alt="" />
          <div>
            <h3 className="text-xl text-[#161C2D] font-bold">400+</h3>
            <p className="text-sm text-[#232D42] font-normal">
              Total Scholarship
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:text-left text-center gap-4  border-2 border-gray-300 rounded-xl p-6 bg-[#F0ECF9]">
          <img src={img3} alt="" />
          <div>
            <h3 className="text-xl text-[#161C2D] font-bold">20K+</h3>
            <p className="text-sm text-[#232D42] font-normal">Active Users</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:text-left text-center gap-4  border-2 border-gray-300 rounded-xl p-6 bg-[#E7F6F8]">
          <img src={img4} alt="" />
          <div>
            <h3 className="text-xl text-[#161C2D] font-bold">22K+</h3>
            <p className="text-sm text-[#232D42] font-normal">
              Online Sessions
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20 justify-center items-center">
          <div className="flex justify-center items-center">
            <div className=" w-[507px] h-[472px] ">
              <img src={bg} className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <div>
            <div className="w-16 h-16 mt-2">
              <img src={bg1} className="w-full h-full" alt="" />
            </div>
            <p className="text-xl md:text-2xl font-medium text-[#2D2D2D] mt-6 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <h2 className="text-4xl mt-4 font-semibold text-[#2D2D2D]">
              John Smith
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessProject;
