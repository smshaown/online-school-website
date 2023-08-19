import React from "react";
import SubTitle from "../SubTitle/SubTitle";
import Ellipse1 from "../../assets/images/aboutUs/Ellipse6.png";
import Ellipse2 from "../../assets/images/aboutUs/Ellipse2.png";
import Ellipse3 from "../../assets/images/aboutUs/Ellipse3.png";
import Ellipse4 from "../../assets/images/aboutUs/Ellipse4.png";
import Ellipse5 from "../../assets/images/aboutUs/Ellipse5.png";
import Ellipse6 from "../../assets/images/aboutUs/Ellipse1.png";

import Vector from "../../assets/images/aboutUs/Vector.png";
import quotation from "../../assets/images/aboutUs/quotation.png";

const SuccessStory = () => {
  return (
    <div
      className="py-20 h-[500px] "
      style={{ backgroundColor: "rgba(166, 177, 183, 0.40)" }}
    >
      <div className="myContainer ">
        <div class="flex flex-col md:flex-row justify-center items-center">
          <div class="w-30 md:w-1/3 md:ml-10 ml-0 text-center md:text-left">
            <div className="ml-[-131px]">
              <SubTitle h3="Success Stories" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-semibold py-4">
              What they’re talking about us
            </h2>
            <p className="text-lg text-[#9F9F9F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet.
            </p>
          </div>
          <div class="w-70 md:w-2/3 ">
            <div className="relative">
              <img src={Ellipse5} className="absolute bottom-0 left-0" alt="" />

              <img
                src={Ellipse2}
                className="absolute bottom-0 right-0"
                alt=""
              />

              <img
                src={Ellipse3}
                className="absolute bottom-0 left-[50%] top-[50%]"
                alt=""
              />

              <div className="w-full md:w-[592px] h-[250px] absolute bg-white bottom-0 top-0 left-0 lg:left-10 rounded-md border-l-4 border-yellow-400 p-8">
                <div>
                  <p className="text-[#9F9F9F] text-lg font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent tac.
                  </p>
                  <div className="flex flex-col lg:flex-row justify-between items-center pt-4 lg:pt-6">
                    <div className="flex gap-2 lg:gap-6 justify-center items-center">
                      <img
                        src={Ellipse6}
                        className="p-2 mt-2 border border-red-500 rounded-full w-14 h-14 lg:w-20 lg:h-20"
                        alt=""
                      />
                      <div>
                        <h3 className="text-lg lg:text-xl text-[#0E0E0E] font-semibold">
                          John Smith
                        </h3>
                        <p className="text-base lg:text-lg text-[#9F9F9F]">
                          Founder & CEO
                        </p>
                      </div>
                    </div>
                    <img src={quotation} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
