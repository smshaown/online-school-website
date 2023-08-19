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

const AboutSuccessStory = () => {
  return (
    <div className=" bg-opacity-75 " style={{backgroundColor: "rgba(166, 177, 183, 0.40)"}}>
      <div className="myContainer ">
        <div className="flex flex-col mx-auto lg:flex-row gap-3 pb-28">
          <div className="lg:w-1/3 mt-[137px]">
            <SubTitle h3="Success Stories" />
            <h2 className="text-2xl lg:text-3xl font-semibold">
              What they’re talking about us
            </h2>
            <p className="text-xl text-[#9F9F9F] lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet.
            </p>
          </div>
          <div className="lg:w-2/3 mt-6 lg:mt-32 relative">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex flex-col justify-center space-y-4 lg:space-y-0">
                <img
                  className="w-12 h-12 lg:w-24 lg:h-24 object-cover lg:-mt-12"
                  src={Ellipse5}
                  alt=""
                />
                <img
                  className="w-16 h-16 lg:-ml-5 lg:mt-4 mt-48"
                  src={Ellipse4}
                  alt=""
                />
              </div>
              <img
                className="mt-4 lg:mt-0 w-12 h-12 lg:w-24 lg:h-24 object-cover"
                src={Ellipse3}
                alt=""
              />
              <img
                className="w-12 h-12 lg:w-[100px] lg:h-[100px] object-cover lg:-mt-1 lg:-ml-4"
                src={Ellipse2}
                alt=""
              />
              <img
                className="w-10 h-10 lg:w-20 lg:h-20 mt-4 lg:mt-6 lg:ml-6 left-6 pl-5 pt-5"
                src={Ellipse1}
                alt=""
              />
            </div>

            <div className="w-full md:w-[90%] lg:w-[692px] h-[300px] absolute bg-white top-0 left-0 lg:left-10 rounded-md border-l-4 border-yellow-400 p-8">
              <div>
                <p className="text-[#9F9F9F] text-xl lg:text-2xl font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent tac.
                </p>
                <div className="flex flex-col lg:flex-row justify-between items-center pt-6 lg:pt-10">
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

            
            <div className="absolute bottom-0 md:bottom-[-123px] left-[50px] md:left-[70px]">
              <img className="" src={Vector} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSuccessStory;
