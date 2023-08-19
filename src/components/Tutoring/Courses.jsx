import React from "react";
import coursesImg1 from "../../assets/images/online/coursesImg1.png";
import coursesImg2 from "../../assets/images/online/coursesImg2.png";
import coursesImg3 from "../../assets/images/online/coursesImg3.png";
import coursesImg4 from "../../assets/images/online/coursesImg4.png";
import img1 from "../../assets/images/online/Vector.png";
import filter from "../../assets/images/online/filter.png";
// import img2 from '../../assets/images/online/signal1.png';
import { GiNetworkBars } from "react-icons/gi";

const Courses = () => {
  return (
    <div className="myContainer  mt-10">
      <h2 className="text-3xl mt-20 text-center font-semibold mb-20">
        Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center mb-10">
        <div className="flex justify-center  items-center gap-2 border-2 border-gray-300 rounded-full  shadow-sm w-full md:w-28 h-[50px]">
          <img src={filter} alt="" />
          <h3 className="text-lg font-semibold text-[#2C2C2C]">Filter</h3>
        </div>

        <div className="flex flex-col md:justify-end md:items-end md:mt-0 mt-4">
        <form>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full md:w-[350px]  p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." required />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
        </div>
      </div>











      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* cards 1 */}
          <div className="bg-white  rounded-lg shadow-md">
            <div className="relative">
              <img
                src={coursesImg1}
                alt="Image 1"
                className="object-cover w-full "
              />

              <div className="absolute -top-1 left-4">
                <button className="mt-4 bg-black text-sm text-white font-semibold py-2 px-4 rounded-md ">
                  AP Physics
                </button>{" "}
              </div>
            </div>

            <div className="p-4">
              <p className="mt-4 text-[#9A9A9A] text-lg font-medium ">
                Lorem ipsum dolor sit amet conse ctetur adipiscint.{" "}
              </p>
              <div className="flex gap-3 mt-4 items-center">
                <img className="w-5 h-5 object-cover" src={img1} alt="" />
                <h3 className="text-base font-semibold text-[#1A1A1A]">
                  20 Questions
                </h3>
              </div>
              <hr className="#DEDEDE mt-4" />
              <div className="flex justify-between">
                <div className="flex gap-3 mt-4 items-center">
                  {/* <img className="w-5 h-5 object-cover bg-[#D9D9D9]" src={img2} alt="" /> */}
                  <GiNetworkBars className="w-5 h-5 text-[#D9D9D9]" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    L1 -L5
                  </h3>
                </div>
                <button className="mt-4 bg-black text-xs text-white font-semibold py-2 px-4 rounded-3xl">
                  Start Learning
                </button>
              </div>
            </div>
          </div>

          {/* cards 2 */}
          <div className="bg-white  rounded-lg shadow-md">
            <div className="relative">
              <img
                src={coursesImg2}
                alt="Image 1"
                className="object-cover w-full "
              />

              <div className="absolute -top-1 left-4">
                <button className="mt-4 bg-black text-sm text-white font-semibold py-2 px-4 rounded-md ">
                  AP Chemistry
                </button>{" "}
              </div>
            </div>

            <div className="p-4">
              <p className="mt-4 text-[#9A9A9A] text-lg font-medium ">
                Lorem ipsum dolor sit amet conse ctetur adipiscint.{" "}
              </p>
              <div className="flex gap-3 mt-4 items-center">
                <img className="w-5 h-5 object-cover" src={img1} alt="" />
                <h3 className="text-base font-semibold text-[#1A1A1A]">
                  20 Questions
                </h3>
              </div>
              <hr className="#DEDEDE mt-4" />
              <div className="flex justify-between">
                <div className="flex gap-3 mt-4 items-center">
                  {/* <img className="w-5 h-5 object-cover bg-[#D9D9D9]" src={img2} alt="" /> */}
                  <GiNetworkBars className="w-5 h-5 text-[#D9D9D9]" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    L1 -L5
                  </h3>
                </div>
                <button className="mt-4 bg-black text-xs text-white font-semibold py-2 px-4 rounded-3xl">
                  Start Learning
                </button>
              </div>
            </div>
          </div>

          {/* cards 3 */}
          <div className="bg-white  rounded-lg shadow-md">
            <div className="relative">
              <img
                src={coursesImg3}
                alt="Image 1"
                className="object-cover w-full "
              />

              <div className="absolute -top-1 left-4">
                <button className="mt-4 bg-black text-xs text-white font-semibold py-2 px-4 rounded-md ">
                  AP Calculus
                </button>{" "}
              </div>
            </div>

            <div className="p-4">
              <p className="mt-4 text-[#9A9A9A] text-lg font-medium ">
                Lorem ipsum dolor sit amet conse ctetur adipiscint.{" "}
              </p>
              <div className="flex gap-3 mt-4 items-center">
                <img className="w-5 h-5 object-cover" src={img1} alt="" />
                <h3 className="text-base font-semibold text-[#1A1A1A]">
                  20 Questions
                </h3>
              </div>
              <hr className="#DEDEDE mt-4" />
              <div className="flex justify-between">
                <div className="flex gap-3 mt-4 items-center">
                  {/* <img className="w-5 h-5 object-cover bg-[#D9D9D9]" src={img2} alt="" /> */}
                  <GiNetworkBars className="w-5 h-5 text-[#D9D9D9]" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    L1 -L5
                  </h3>
                </div>
                <button className="mt-4 bg-black text-xs text-white font-semibold py-2 px-4 rounded-3xl">
                  Start Learning
                </button>
              </div>
            </div>
          </div>

          {/* cards 4 */}
          <div className="bg-white  rounded-lg shadow-md">
            <div className="relative">
              <img
                src={coursesImg4}
                alt="Image 1"
                className="object-cover w-full "
              />

              <div className="absolute -top-1 left-4">
                <button className="mt-4 bg-black text-sm text-white font-semibold py-2 px-4 rounded-md ">
                  AP Algebra
                </button>{" "}
              </div>
            </div>

            <div className="p-4">
              <p className="mt-4 text-[#9A9A9A] text-lg font-medium ">
                Lorem ipsum dolor sit amet conse ctetur adipiscint.{" "}
              </p>
              <div className="flex gap-3 mt-4 items-center">
                <img className="w-5 h-5 object-cover" src={img1} alt="" />
                <h3 className="text-base font-semibold text-[#1A1A1A]">
                  20 Questions
                </h3>
              </div>
              <hr className="#DEDEDE mt-4" />
              <div className="flex justify-between">
                <div className="flex gap-3 mt-4 items-center">
                  {/* <img className="w-5 h-5 object-cover bg-[#D9D9D9]" src={img2} alt="" /> */}
                  <GiNetworkBars className="w-5 h-5 text-[#D9D9D9]" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    L1 -L5
                  </h3>
                </div>
                <button className="mt-4 bg-black text-xs text-white font-semibold py-2 px-4 rounded-3xl">
                  Start Learning
                </button>
              </div>
            </div>
          </div>

          {/* cards 5 */}
          <div className="bg-white  rounded-lg shadow-md">
            <div className="relative">
              <img
                src={coursesImg2}
                alt="Image 1"
                className="object-cover w-full "
              />

              <div className="absolute -top-1 left-4">
                <button className="mt-4 bg-black text-xs text-white font-semibold py-2 px-4 rounded-md ">
                  Intro to Computing
                </button>{" "}
              </div>
            </div>

            <div className="p-4">
              <p className="mt-4 text-[#9A9A9A] text-lg font-medium ">
                Lorem ipsum dolor sit amet conse ctetur adipiscint.{" "}
              </p>
              <div className="flex gap-3 mt-4 items-center">
                <img className="w-5 h-5 object-cover" src={img1} alt="" />
                <h3 className="text-base font-semibold text-[#1A1A1A]">
                  20 Questions
                </h3>
              </div>
              <hr className="#DEDEDE mt-4" />
              <div className="flex justify-between">
                <div className="flex gap-3 mt-4 items-center">
                  {/* <img className="w-5 h-5 object-cover bg-[#D9D9D9]" src={img2} alt="" /> */}
                  <GiNetworkBars className="w-5 h-5 text-[#D9D9D9]" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    L1 -L5
                  </h3>
                </div>
                <button className="mt-4 bg-black text-xs text-white font-semibold py-2 px-4 rounded-3xl">
                  Start Learning
                </button>
              </div>
            </div>
          </div>

          {/* cards 6 */}
          <div className="bg-white  rounded-lg shadow-md">
            <div className="relative">
              <img
                src={coursesImg3}
                alt="Image 1"
                className="object-cover w-full "
              />

              <div className="absolute -top-1 left-4">
                <button className="mt-4 bg-black text-sm text-white font-semibold py-2 px-4 rounded-md ">
                  AP Biology
                </button>{" "}
              </div>
            </div>

            <div className="p-4">
              <p className="mt-4 text-[#9A9A9A] text-lg font-medium ">
                Lorem ipsum dolor sit amet conse ctetur adipiscint.{" "}
              </p>
              <div className="flex gap-3 mt-4 items-center">
                <img className="w-5 h-5 object-cover" src={img1} alt="" />
                <h3 className="text-base font-semibold text-[#1A1A1A]">
                  20 Questions
                </h3>
              </div>
              <hr className="#DEDEDE mt-4" />
              <div className="flex justify-between">
                <div className="flex gap-3 mt-4 items-center">
                  {/* <img className="w-5 h-5 object-cover bg-[#D9D9D9]" src={img2} alt="" /> */}
                  <GiNetworkBars className="w-5 h-5 text-[#D9D9D9]" />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    L1 -L5
                  </h3>
                </div>
                <button className="mt-4 bg-black text-xs text-white font-semibold py-2 px-4 rounded-3xl">
                  Start Learning
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
  );
};

export default Courses;
