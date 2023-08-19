import React from 'react';
import ServicesBanner from './ServicesBanner';
import Scholarships from './Scholarships';
import ServicesAboutSection from './ServicesAboutSection';
import SuccessStory from './SuccessStory';
import OnlineTutoring from './OnlineTutoring';



const Services = () => {
    return (
        <div>
            <ServicesBanner />       
            <ServicesAboutSection />           
            <Scholarships />   
            <OnlineTutoring />
            <SuccessStory /> 

        </div>
    );
};

export default Services;