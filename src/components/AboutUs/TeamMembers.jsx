import React from "react";
import team1 from "../../assets/images/aboutUs/team1.png";
import team2 from "../../assets/images/aboutUs/team2.png";
import team3 from "../../assets/images/aboutUs/team3.png";
import SubTitle from "../SubTitle/SubTitle";

const TeamMembers = () => {
  return (
    <div className="myContainer">
      <div className="text-center grid justify-center items-center mt-24 mb-16 ">
        <div className="-ml-16 md:-ml-0">
          <SubTitle h3="Scholarships" />
        </div>
        <h2 className="text-xl md:text-4xl font-semibold text-[#0E0E0E] mt-3">
          Meet our Team members
        </h2>
      </div>
      <div className="myContainer  mx-auto p-8 flex justify-center items-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-md mb-20">
          <div className="relative rounded-md">
            <img
              className="object-cover"
              src={team1}
              alt=""
            />
           <div className="absolute bottom-[-35px] left-[36px] md:left-[61px] bg-white rounded-md px-[40px] md:px-20 py-4 grid justify-center items-center" style={{ boxShadow: "0px 3px 27px 0px rgba(0, 0, 0, 0.10)" }} >
                <h3 className="text-lg font-semibold ">David William</h3>
                <p className="text-base font-normal mt-1">Founder & CEO</p>
              </div>
          </div>


          <div className="relative mt-16 md:mt-0 rounded-md">
            <img
              className="object-cover w-[410px] h-[510px]"
              src={team2}
              alt=""
            />
             <div className="absolute bottom-[-35px] left-[36px] md:left-[61px] bg-white rounded-md px-[40px] md:px-20 py-4 grid justify-center items-center" style={{ boxShadow: "0px 3px 27px 0px rgba(0, 0, 0, 0.10)" }} >
                <h3 className="text-lg font-semibold ">David William</h3>
                <p className="text-base font-normal mt-1">Founder & CEO</p>
              </div>
          </div>

          <div className="relative mt-16 md:mt-0 rounded-md ">
            <img
              className="object-cover w-full h-full"
              src={team3}
              alt=""
            />

              <div className="absolute bottom-[-35px] left-[36px] md:left-[61px] bg-white rounded-md px-[40px] md:px-20 py-4 grid justify-center items-center" style={{ boxShadow: "0px 3px 27px 0px rgba(0, 0, 0, 0.10)" }} >
                <h3 className="text-lg font-semibold ">David William</h3>
                <p className="text-base font-normal mt-1">Founder & CEO</p>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
