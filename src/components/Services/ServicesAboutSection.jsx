import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import about1 from '../../assets/images/services/about1.png'
import about2 from '../../assets/images/services/about2.png'
import about3 from '../../assets/images/services/about3.png'
import Button from '../Button/Button';
import scholarships2 from '../../assets/images/services/scholarships3.png' 

const ServicesAboutSection = () => {
  return (
    <div className="myContainer mt-10 md:mt-20 mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-0">
        <div className="mb-6 lg:mb-0">
          <div className="">
            <img src={about1} alt="" className="w-full h-auto" />
          </div>
          <div className="grid grid-col-2 gap-4 justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
              <img src={about2} alt="" className="mb-4" />
              <img src={about3} alt="" className="" />
          </div>
        </div>
      </div>


    <div className="mt-6 md:mt-10">
      <h5 className="flex text-[#A6B1B7] gap-2 font-medium">
        <span className="mt-1">
          <AiOutlineHeart />
        </span>{" "}
        About Us
      </h5>
      <h1 className="text-2xl lg:text-4xl font-semibold mt-2 lg:mt-4">
        We are working with 15 years experience
      </h1>
      <p className="mt-4 lg:mt-6 text-[18px] text-[#9F9F9F]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet.
      </p>
      <div className="flex flex-col mt-4 lg:mt-6 space-y-2 lg:space-y-4">
        <div className="flex items-center space-x-2">
          <FiCheck className="text-[#A6B1B7]" />
          <span className="text-sm font-bold lg:text-base">
            Food & water charity
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FiCheck className="text-[#A6B1B7]" />
          <span className="text-sm font-bold lg:text-base">
            Sent a gift anytime
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FiCheck className="text-[#A6B1B7]" />
          <span className="text-sm font-bold lg:text-base">
            Make donation
          </span>
        </div>
        <div className="flex items-center space-x-2 mb-6">
          <FiCheck className="text-[#A6B1B7]" />
          <span className="text-sm font-bold lg:text-base">
            24/7 online support
          </span>
        </div>
      </div>
       <div className="mt-10">
        <Button button="Explore more" />
       </div>
    </div>

  


  </div>
</div>

  );
};

export default ServicesAboutSection;
