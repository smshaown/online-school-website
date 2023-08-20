import React from "react";
import quotation from "../../assets/images/aboutUs/quotation.png";
import quotation2 from "../../assets/images/success/quotation.png";
import Ellipse6 from "../../assets/images/aboutUs/Ellipse1.png";
import img1 from "../../assets/images/success/Ellipse1.png";
import img2 from "../../assets/images/success/Ellipse2.png";
import img3 from "../../assets/images/success/Ellipse3.png";
import img4 from "../../assets/images/success/Ellipse4.png";

const SuccessStory = () => {
  return (
    <div className="myContainer">
      <h2 className="text-3xl text-center mb-20 font-semibold mt-20">
        Success Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        <div
          className="flex flex-col  p-8 rounded-md border-l-4 border-yellow-400"
          style={{ boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.15)" }}
        >
          <p className="text-base text-[#9F9F9F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent
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
              </div>
            </div>
            <img src={quotation} alt="" />
          </div>
        </div>

        <div
          className="flex flex-col  p-8 rounded-md border-l-4 border-cyan-500"
          style={{ boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.15)" }}
        >
          <p className="text-base text-[#9F9F9F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-center pt-6 lg:pt-10">
            <div className="flex gap-2 lg:gap-6 justify-center items-center">
              <img
                src={img2}
                className="p-2 mt-2 border border-red-500 rounded-full w-14 h-14 lg:w-20 lg:h-20"
                alt=""
              />
              <div>
                <h3 className="text-lg lg:text-xl text-[#0E0E0E] font-semibold">
                  John Smith
                </h3>
              </div>
            </div>
            <img src={quotation2} alt="" />
          </div>
        </div>

        <div
          className="flex flex-col  p-8 rounded-md border-l-4 border-cyan-400"
          style={{ boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.15)" }}
        >
          <p className="text-base text-[#9F9F9F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-center pt-6 lg:pt-10">
            <div className="flex gap-2 lg:gap-6 justify-center items-center">
              <img
                src={img3}
                className="p-2 mt-2 border border-red-500 rounded-full w-14 h-14 lg:w-20 lg:h-20"
                alt=""
              />
              <div>
                <h3 className="text-lg lg:text-xl text-[#0E0E0E] font-semibold">
                  John Smith
                </h3>
              </div>
            </div>
            <img src={quotation2} alt="" />
          </div>
        </div>

        <div
          className="flex flex-col  p-8 rounded-md border-l-4 border-yellow-500"
          style={{ boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.15)" }}
        >
          <p className="text-base text-[#9F9F9F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-center pt-6 lg:pt-10">
            <div className="flex gap-2 lg:gap-6 justify-center items-center">
              <img
                src={img1}
                className="p-2 mt-2 border border-red-500 rounded-full w-14 h-14 lg:w-20 lg:h-20"
                alt=""
              />
              <div>
                <h3 className="text-lg lg:text-xl text-[#0E0E0E] font-semibold">
                  John Smith
                </h3>
              </div>
            </div>
            <img src={quotation} alt="" />
          </div>
        </div>

        <div
          className="flex flex-col  p-8 rounded-md border-l-4 border-yellow-500"
          style={{ boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.15)" }}
        >
          <p className="text-base text-[#9F9F9F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-center pt-6 lg:pt-10">
            <div className="flex gap-2 lg:gap-6 justify-center items-center">
              <img
                src={img4}
                className="p-2 mt-2 border border-red-500 rounded-full w-14 h-14 lg:w-20 lg:h-20"
                alt=""
              />
              <div>
                <h3 className="text-lg lg:text-xl text-[#0E0E0E] font-semibold">
                  John Smith
                </h3>
              </div>
            </div>
            <img src={quotation} alt="" />
          </div>
        </div>

        <div
          className="flex flex-col  p-8 rounded-md border-l-4 border-cyan-500"
          style={{ boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.15)" }}
        >
          <p className="text-base text-[#9F9F9F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-center pt-6 lg:pt-10">
            <div className="flex gap-2 lg:gap-6 justify-center items-center">
              <img
                src={img2}
                className="p-2 mt-2 border border-red-500 rounded-full w-14 h-14 lg:w-20 lg:h-20"
                alt=""
              />
              <div>
                <h3 className="text-lg lg:text-xl text-[#0E0E0E] font-semibold">
                  John Smith
                </h3>
              </div>
            </div>
            <img src={quotation2} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-12 mb-20">
        <div>
          <p className="text-base text-[#9F9F9F] font-medium">
            Showing 8 of 40
          </p>
        </div>
        <div>
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-2.5 h-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-2.5 h-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
