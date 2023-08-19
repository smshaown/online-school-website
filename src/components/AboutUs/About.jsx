import React from "react";
import AboutUs from "./AboutUs";
import OurWork from "./OurWork";
import TeamMembers from "./TeamMembers";
import AboutSuccessStory from "./AboutSuccessStory";
import AboutBanner from "./AboutBanner";
import SuccessStory from "./SuccessStory";

const About = () => {
  return (
    <div>
      <AboutBanner />

      <AboutUs />
      <OurWork />
      {/* <SuccessStory /> */}
      <TeamMembers />
    </div>
  );
};

export default About;
