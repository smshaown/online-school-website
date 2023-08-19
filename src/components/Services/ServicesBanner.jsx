import React from "react";
import servicesBannerImg from "../../assets/images/banner/banner1.png";
import HeaderSection from "../HeaderSection/HeaderSection";

const ServicesBanner = () => {
  return (
    <div>
      <HeaderSection image={servicesBannerImg} title={"RK Services"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."} ></HeaderSection>
    </div>
  );
};

export default ServicesBanner;
