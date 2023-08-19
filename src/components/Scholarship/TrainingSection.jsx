import React from "react";
import JeeTTraining from "./JeeTTraining";
import NeeTSection from "./NeeTSection";
import PostSecondary from "./PostSecondary";
import EducationSection from "./EducationSection";

const TrainingSection = () => {
  return (
    <>
      <div className="myContainer ">

        <JeeTTraining />   
        <NeeTSection />
        <PostSecondary />
        <EducationSection />
        
      </div>

      
    </>
  );
};

export default TrainingSection;
