import React from "react";
import "./About.css";
import about1 from "../../assets/images/aboutUs/about1.png";
import about2 from "../../assets/images/aboutUs/about2.png";
import SubTitle from "../SubTitle/SubTitle";
import Button from "../Button/Button";

const AboutUs = () => {
  return (
    <div className="myContainer">
      <div className="flex justify-center items-center mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center items-center order-last md:order-first">
            <div className="w-full  mt-24 md:mt-0  ">
              <div className="ml-[-130px] mb-7">
                <SubTitle h3="About Us" />
              </div>
              <h3 className="text-4xl text-black font-bold ">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-[#9F9F9F] font-normal  mt-4 mb-5 leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
              <div className="mt-10">
                <Button button="Learn More" />
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end items-center ">
            <div className="relative w-[313px] h-[334px] grid justify-end ">
              <img src={about1} className="w-full h-full" alt="" />
              <div className="absolute  left-[-130px] bottom-[-130px] w-[213px] h-[234px]">
                <img
                  src={about2}
                  className="w-full h-full hidden md:block"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
