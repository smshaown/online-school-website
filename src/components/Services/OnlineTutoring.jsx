import React from "react";
import img1 from "../../assets/images/services/online1.png";
import img2 from "../../assets/images/services/online2.png";
import img3 from "../../assets/images/services/online3.png";
import img4 from "../../assets/images/services/online4.png";
import SubTitle from "../SubTitle/SubTitle";
import Button from "../Button/Button";
import "./Services.css";

const OnlineTutoring = () => {
  return (
    <div className="myContainer mt-20 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="flex justify-center items-center"> 
          <div className="relative">
          <img
            src={img1}
            className="w-[380px] md:h-[508px] h-[750px]  ml-0 md:ml-40"
            alt=""
          />
          <div className=" absolute bottom-0 top-0">
            <div>
              <img src={img2} className="w-[280px] h-[250px]" alt="" />
              <img src={img3} className="w-[280px] h-[250px]" alt="" />
            </div>
            <img
              src={img4}
              className="w-[280px] h-[250px] absolute bottom-0 md:top-[126px] left-0 md:left-[240px]"
              alt=""
            />
          </div>
        </div>

        </div>
        <div className="grid justify-center items-center">
          <div>
            <div className="ml-[-130px] mb-5">
              <SubTitle h3="Online Tutoring" />
            </div>
            <h2 className="text-3xl text-[#0E0E0E] font-semibold mb-8">
              Learning & Training
            </h2>
            <p className="font-normal text-base text-[#9F9F9F] mb-8 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet.
            </p>

            <div className="mt-6">
              <Button button="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <img src={img1} className="w-[380px] h-[508px]" alt="" />
            <img src={img2} className="w-[280px] h-[250px]" alt="" />
                <img src={img3} className="w-[280px] h-[250px]" alt="" /> */
}

export default OnlineTutoring;
