import React from "react";
import about1 from "../../assets/images/aboutUs/about1.png";
import SubTitle from "../SubTitle/SubTitle";
import yes from "../../assets/images/aboutUs/yes.png";

const OurWork = () => {
  return (
    <div className="myContainer mt-96 md:mt-64">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="md:mb-0 mb-0">
          <div className="h-[463px]">
            <img
              className=" object-cover rounded-2xl w-full h-full mt-20 md:mt:0"
              src={about1}
              alt=""
            />
          </div>
        </div>
        <div className="md:mt-20 mt-0">
          <div className="ml-[-131px]">
            <SubTitle h3="Our Work" />
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-[#0E0E0E] mt-3">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-[#9F9F9F] text-base py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet.
          </p>
          <div>
            <div className="flex gap-2 mt-4">
              <img className="w-8 h-8" src={yes} alt="" />
              <div>
                <h2 className="text-base md:text-xl text-[#0E0E0E] font-medium -mt-1">
                  Sponsoring educational courses
                </h2>
                <p className="mt-2 text-base text-[#9F9F9F]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <img className="w-8 h-8" src={yes} alt="" />
              <div>
                <h2 className="text-base md:text-xl text-[#0E0E0E] font-medium -mt-1">
                  Helping families
                </h2>
                <p className="text-base md:text-xl text-[#9F9F9F]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <img className="w-8 h-8" src={yes} alt="" />
              <div>
                <h2 className="text-base md:text-xl text-[#0E0E0E] font-medium -mt-1">
                  Providing free tuition
                </h2>
                <p className="text-base md:text-xl text-[#9F9F9F]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default OurWork;
