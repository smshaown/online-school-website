import React from 'react';
import team1 from "../../assets/images/aboutUs/team1.png";
import team2 from "../../assets/images/aboutUs/team2.png";
import team3 from "../../assets/images/aboutUs/team3.png";
import SubTitle from "../SubTitle/SubTitle";

const TeamMembers2 = () => {
    return (
        <div class="myContainer mx-auto ">

        <div className="text-center grid justify-center items-center mt-32 md:mt-40 mb-16 ">
                <div className="-ml-16 md:-ml-0">
                <SubTitle  h3="Scholarships" />
                </div>
                <h2 className="text-xl md:text-4xl font-semibold text-[#0E0E0E] mt-3">
                Meet our Team members
                </h2>
            </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          <div class="flex justify-center ">

            <div className='relative w-[90%] h-[90%]'>
                <img className='object-cover w-full h-full rounded-xl' src={team1} alt="" />
                <div className='absolute bottom-[-35px] left-8 md:left-9 bg-white rounded-md shadow-md w-4/5 h-[90px] flex flex-col justify-center items-center mx-auto'>
                    <h3 className="text-lg font-semibold ">David William</h3>
                    <p className="text-base font-normal mt-1">Founder & CEO</p>

                </div>
            </div>
            
          </div>
          <div class="flex justify-center ">


          <div className='relative w-[90%] h-[90%]'>
                <img className='object-cover w-full h-full rounded-xl' src={team2} alt="" />
                <div className='absolute bottom-[-35px] left-8 md:left-9 bg-white rounded-md shadow-md w-4/5 h-[90px] flex flex-col justify-center items-center mx-auto'>
                    <h3 className="text-lg font-semibold ">David William</h3>
                    <p className="text-base font-normal mt-1">Founder & CEO</p>

                </div>
            </div>
            

          </div>
          <div class="flex justify-center ">
          <div className='relative w-[90%] h-[90%]'>
                <img className='object-cover w-full h-full rounded-xl' src={team3} alt="" />
                <div className='absolute bottom-[-35px] left-8 md:left-9 bg-white rounded-md shadow-md w-4/5 h-[90px] flex flex-col justify-center items-center mx-auto'>
                    <h3 className="text-lg font-semibold ">David William</h3>
                    <p className="text-base font-normal mt-1">Founder & CEO</p>

                </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TeamMembers2;