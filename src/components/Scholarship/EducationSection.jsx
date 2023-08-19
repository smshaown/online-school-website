import React from "react";
import img1 from "../../assets/images/Scholarship/img7.png";
import img2 from "../../assets/images/Scholarship/img8.png";
import yes from "../../assets/images/aboutUs/yes.png";
import Button from "../Button/Button";
import SubTitle from "../SubTitle/SubTitle";

const EducationSection = () => {
  return (
    <>
     <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 md:mt-32">

        <div className="grid justify-center md:justify-start">
            <div className="relative ">
              <div className="w-[350px] h-[400px] p-8">
                <img
                  className="object-cover w-full h-full hidden md:block"
                  src={img1}
                  alt=""
                />
                <div className="absolute bottom:0 left:0 md:bottom-[-80px] md:left-[200px] w-[260px] h-[317px]">
                  <img
                    src={img2}
                    className="w-full h-w-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>


          <div className="">
            <div className="ml-[-130px] -mt-8 md:mt-2">
              <SubTitle h3="NEET Training" />
            </div>
            <div>
              <h3 className="text-2xl text-black font-bold my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <p className="text-[#9F9F9F] font-normal space-x-2 leading-7 mt-3 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>

            <div>
              <div className="flex gap-4 mt-7">
                <img className="w-8 h-8" src={yes} alt="" />
                <div>
                  <h2 className="text-base md:text-xl text-[#0E0E0E] font-semibold -mt-1">
                    Lorem ipsum dolor sit amet elit
                  </h2>
                  <p className="text-base mt-2 text-[#9F9F9F]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-7">
                <img className="w-8 h-8" src={yes} alt="" />
                <div>
                  <h2 className="text-base md:text-lg text-[#0E0E0E] font-semibold -mt-1">
                    Lorem ipsum dolor sit amet elit
                  </h2>
                  <p className="text-base mt-2 text-[#9F9F9F]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-7">
                <img className="w-8 h-8" src={yes} alt="" />
                <div>
                  <h2 className="text-base md:text-lg text-[#0E0E0E] font-semibold -mt-1">
                    Lorem ipsum dolor sit amet elit
                  </h2>
                  <p className="text-base mt-2 text-[#9F9F9F]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Button button="Apply now" />
              </div>
            </div>
          </div>         

          <div></div>
        </div>
      </div>
    </>
  );
};

export default EducationSection;
