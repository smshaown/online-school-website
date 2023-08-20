import React from "react";
import AboutUs from "./AboutUs";
import OurWork from "./OurWork";
import TeamMembers from "./TeamMembers";
import AboutSuccessStory from "./AboutSuccessStory";
import AboutBanner from "./AboutBanner";
// import SuccessStory from "./SuccessStory";
import TeamMembers2 from "./TeamMembers2";

const About = () => {
  return (
    <div>
      <AboutBanner />

      <AboutUs />
      <OurWork />
      {/* <SuccessStory /> */}
      {/* <TeamMembers /> */}
      <TeamMembers2 />
    </div>
  );
};

export default About;
