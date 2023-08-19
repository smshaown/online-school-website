import React from "react";
import img1 from "../../assets/images/online/liveImg1.png";
import img2 from "../../assets/images/online/liveImg2.png";
import img3 from "../../assets/images/online/liveImg3.png";
import img4 from "../../assets/images/online/liveImg4.png";
import img5 from "../../assets/images/online/liveImg5.png";
import img6 from "../../assets/images/online/liveImg6.png";
import iconImg1 from "../../assets/images/online/calendar.png";
import iconImg2 from "../../assets/images/online/video.png";
import iconImg3 from "../../assets/images/online/frame.png";
import { GiNetworkBars } from "react-icons/gi";

const LiveSessions = () => {
  return (
    <div className="myContainer  mt-10">
      <div>

        <h2 className="text-3xl mt-20 text-center font-semibold">Live Sessions</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-20">
          {/* cards 1 */}
          <div>
            <div className="bg-white  rounded-lg shadow-md">
              <div className="relative">
                <img src={img1} alt="Image 1" className="object-cover w-full" />

                <h3 className="absolute rounded-2xl  bottom-0 left-0  inset-0 bg-gray-800 bg-opacity-50 text-white text-2xl font-semibold grid items-center justify-center">
                  AP Physics
                </h3>
              </div>

              <div className="p-4">
                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg1} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    2/2/2023 - 28/2/2023
                  </h3>
                </div>
                <hr className="#DEDEDE mt-4" />              

                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg2} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    11:00- 11:30 am
                  </h3>
                </div>
                <hr className="#DEDEDE mt-4" />

                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg3} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    11:00- 11:30 am
                  </h3>
                </div>

                <div className="grid justify-end">
                  <button className="mt-2 bg-black text-xs text-white font-semibold py-2 px-4 rounded-3xl">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>

        
        {/* cards 2 */}

          <div>
            <div className="bg-white  rounded-lg shadow-md">
              <div className="relative">
                <img src={img2} alt="Image 1" className="object-cover w-full" />

                <h3 className="absolute rounded-2xl  bottom-0 left-0  inset-0 bg-gray-800 bg-opacity-50 text-white text-2xl font-semibold grid items-center justify-center">
                AP Chemistry
                </h3>
              </div>

              <div className="p-4">
                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg1} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    2/2/2023 - 28/2/2023
                  </h3>
                </div>
                <hr className="#DEDEDE mt-4" />              

                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg2} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    11:00- 11:30 am
                  </h3>
                </div>
                <hr className="#DEDEDE mt-4" />

                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg3} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    11:00- 11:30 am
                  </h3>
                </div>

                <div className="grid justify-end">
                  <button className="mt-2 bg-black text-xs text-white font-semibold py-2 px-4 rounded-3xl">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>


   {/* cards 3 */}

         <div>
            <div className="bg-white  rounded-lg shadow-md">
              <div className="relative">
                <img src={img3} alt="Image 1" className="object-cover w-full" />

                <h3 className="absolute rounded-2xl  bottom-0 left-0  inset-0 bg-gray-800 bg-opacity-50 text-white text-2xl font-semibold grid items-center justify-center">
                AP Physics
                </h3>
              </div>

              <div className="p-4">
                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg1} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    2/2/2023 - 28/2/2023
                  </h3>
                </div>
                <hr className="#DEDEDE mt-4" />              

                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg2} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    11:00- 11:30 am
                  </h3>
                </div>
                <hr className="#DEDEDE mt-4" />

                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg3} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    11:00- 11:30 am
                  </h3>
                </div>

                <div className="grid justify-end">
                  <button className="mt-2 bg-black text-xs text-white font-semibold py-2 px-4 rounded-3xl">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>

        {/* cards 4 */}

        <div>
            <div className="bg-white  rounded-lg shadow-md">
              <div className="relative">
                <img src={img4} alt="Image 1" className="object-cover w-full" />

                <h3 className="absolute rounded-2xl  bottom-0 left-0  inset-0 bg-gray-800 bg-opacity-50 text-white text-2xl font-semibold grid items-center justify-center">
                IB Math
                </h3>
              </div>

              <div className="p-4">
                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg1} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    2/2/2023 - 28/2/2023
                  </h3>
                </div>
                <hr className="#DEDEDE mt-4" />              

                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg2} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    11:00- 11:30 am
                  </h3>
                </div>
                <hr className="#DEDEDE mt-4" />

                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg3} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    11:00- 11:30 am
                  </h3>
                </div>

                <div className="grid justify-end">
                  <button className="mt-2 bg-black text-xs text-white font-semibold py-2 px-4 rounded-3xl">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>


        {/* cards 5 */}

          <div>
            <div className="bg-white  rounded-lg shadow-md">
              <div className="relative">
                <img src={img5} alt="Image 1" className="object-cover w-full" />

                <h3 className="absolute rounded-2xl  bottom-0 left-0  inset-0 bg-gray-800 bg-opacity-50 text-white text-2xl font-semibold grid items-center justify-center">
                IB Physics
                </h3>
              </div>

              <div className="p-4">
                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg1} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    2/2/2023 - 28/2/2023
                  </h3>
                </div>
                <hr className="#DEDEDE mt-4" />              

                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg2} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    11:00- 11:30 am
                  </h3>
                </div>
                <hr className="#DEDEDE mt-4" />

                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg3} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    11:00- 11:30 am
                  </h3>
                </div>

                <div className="grid justify-end">
                  <button className="mt-2 bg-black text-xs text-white font-semibold py-2 px-4 rounded-3xl">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>

            {/* cards 6 */}

            <div>
            <div className="bg-white  rounded-lg shadow-md">
              <div className="relative">
                <img src={img6} alt="Image 1" className="object-cover w-full" />

                <h3 className="absolute rounded-2xl  bottom-0 left-0  inset-0 bg-gray-800 bg-opacity-50 text-white text-2xl font-semibold grid items-center justify-center">
                IB Biology
                </h3>
              </div>

              <div className="p-4">
                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg1} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    2/2/2023 - 28/2/2023
                  </h3>
                </div>
                <hr className="#DEDEDE mt-4" />              

                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg2} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    11:00- 11:30 am
                  </h3>
                </div>
                <hr className="#DEDEDE mt-4" />

                <div className="flex gap-3 mt-4 items-center">
                  <img className="w-5 h-5 object-cover" src={iconImg3} alt="" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    11:00- 11:30 am
                  </h3>
                </div>

                <div className="grid justify-end">
                  <button className="mt-2 bg-black text-xs text-white font-semibold py-2 px-4 rounded-3xl">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className="grid justify-end">
        <button className="mt-10 bg-black text-xs text-white font-semibold py-2 px-4 rounded-3xl">
          See All
        </button>
      </div>
      </div>
    </div>
  );
};

export default LiveSessions;
