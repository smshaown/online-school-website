import React from "react";
import group1 from "../../assets/images/services/Group1.png";
import group2 from "../../assets/images/services/Group2.png";
import group3 from "../../assets/images/services/Group3.png";
import group4 from "../../assets/images/services/Group4.png";
import check from "../../assets/images/services/check.png";
import SubTitle from "../SubTitle/SubTitle";
import mapImp from "../../assets/images/services/Map.png";
import { AiOutlineHeart } from "react-icons/ai";
import "./Services.css";

const Scholarships = () => {
  return (
    <div
      className="mt-20 mb-20"
      style={{
        background: `url(${mapImp})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="myContainer mt-8">
        <div className="py-20">
          <div className="flex flex-col justify-center items-center text-center">
            <h5 className="flex text-[#A6B1B7] gap-2 font-medium ">
              <span className="mt-1">
                <AiOutlineHeart />
              </span>{" "}
              Scholar Ships{" "}
            </h5>
            <h2 className=" text-4xl md:text-[40px] font-semibold text-[#0E0E0E] my-6">
              Scholarships
            </h2>
            <p className="text-[#9F9F9F] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit..
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              <div className="flex flex-col justify-center mb-6 md:mb-6">
                <div className="w-20 h-20 mx-auto">
                  <img
                    src={group1}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
                <div className="grid items-center justify-center mt-6">
                  <h2 className="font-semibold text-2xl text-[#0E0E0E] mb-4">
                    JEE Training
                  </h2>
                  <p className="flex">
                    <img src={check} className="w-6 h-6 mr-2" alt="" />
                    <span className="text-[#0E0E0E] text-base font-medium">
                      Lorem ipsum dolor
                    </span>
                  </p>
                  <p className="flex py-2">
                    <img src={check} className="w-6 h-6 mr-2" alt="" />
                    <span className="text-[#0E0E0E] text-base font-medium">
                      Lorem ipsum dolor
                    </span>
                  </p>
                  <p className="flex">
                    <img src={check} className="w-6 h-6 mr-2" alt="" />
                    <span className="text-[#0E0E0E] text-base font-medium">
                      Lorem ipsum dolor
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center mb-6 md:mb-6">
                <div className="w-20 h-20 mx-auto">
                  <img
                    src={group2}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
                <div className="grid items-center justify-center mt-6">
                  <h2 className="font-semibold text-2xl text-[#0E0E0E] mb-4">
                    NEET Training
                  </h2>
                  <p className="flex">
                    <img src={check} className="w-6 h-6 mr-2" alt="" />
                    <span className="text-[#0E0E0E] text-base font-medium">
                      Lorem ipsum dolor
                    </span>
                  </p>
                  <p className="flex py-2">
                    <img src={check} className="w-6 h-6 mr-2" alt="" />
                    <span className="text-[#0E0E0E] text-base font-medium">
                      Lorem ipsum dolor
                    </span>
                  </p>
                  <p className="flex">
                    <img src={check} className="w-6 h-6 mr-2" alt="" />
                    <span className="text-[#0E0E0E] text-base font-medium">
                      Lorem ipsum dolor
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center mb-6 md:mb-6">
                <div className="w-20 h-20 mx-auto">
                  <img
                    src={group3}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
                <div className="grid items-center justify-center mt-6">
                  <h2 className="font-semibold text-2xl text-[#0E0E0E] mb-4">
                    Post-Secondary Edu.
                  </h2>
                  <p className="flex">
                    <img src={check} className="w-6 h-6 mr-2" alt="" />
                    <span className="text-[#0E0E0E] text-base font-medium">
                      Lorem ipsum dolor
                    </span>
                  </p>
                  <p className="flex py-2">
                    <img src={check} className="w-6 h-6 mr-2" alt="" />
                    <span className="text-[#0E0E0E] text-base font-medium">
                      Lorem ipsum dolor
                    </span>
                  </p>
                  <p className="flex">
                    <img src={check} className="w-6 h-6 mr-2" alt="" />
                    <span className="text-[#0E0E0E] text-base font-medium">
                      Lorem ipsum dolor
                    </span>
                  </p>
                </div>
              </div>
              <div class="flex flex-col justify-center  mb-6 md:mb-6">
                <div className="w-20 h-20 mx-auto">
                  <img
                    src={group4}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
                <div className="grid items-center justify-center mt-6">
                  <h2 className="font-semibold text-2xl text-[#0E0E0E] mb-4">
                    School Education
                  </h2>
                  <p className="flex">
                    <img src={check} className="w-6 h-6 mr-2" alt="" />
                    <span className="text-[#0E0E0E] text-base font-medium">
                      Lorem ipsum dolor
                    </span>
                  </p>
                  <p className="flex py-2">
                    <img src={check} className="w-6 h-6 mr-2" alt="" />
                    <span className="text-[#0E0E0E] text-base font-medium">
                      Lorem ipsum dolor
                    </span>
                  </p>
                  <p className="flex">
                    <img src={check} className="w-6 h-6 mr-2" alt="" />
                    <span className="text-[#0E0E0E] text-base font-medium">
                      Lorem ipsum dolor
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
