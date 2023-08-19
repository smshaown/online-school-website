import React from "react";

const SectionBanner = ({ bannerImg, heading, subHeading }) => {
  return (
    <div>
      <div className="relative overflow-hidden -z-40 -mt-[-76px]" style={{ background: 'rgba(0, 0, 0, 0.40)' }}  >
        <img src={bannerImg} alt="" className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 py-4 md:py-0 md:px-10 lg:px-20 xl:px-32 bg-black bg-opacity-40">
          <h2 className="mb-4 text-3xl font-semibold text-white sm:text-3xl md:text-5xl lg:text-6xl pt-20 md:pt-0">
            {heading}
          </h2>

          <p className="sm:text-base md:text-xl text-[#D0D0D0] mb-8 max-w-xl">
            {subHeading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
