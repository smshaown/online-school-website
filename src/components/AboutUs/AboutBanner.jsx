import React from "react";
import aboutBannerImg from "../../assets/images/banner/aboutBanner.png";
import HeaderSection from "../HeaderSection/HeaderSection";

const AboutBanner = () => {
  return (
    <div>
      <HeaderSection image={aboutBannerImg} title={"About Us"} description={"Charity activities are taken place around the world."} ></HeaderSection>
    </div>
  );
};

export default AboutBanner;
