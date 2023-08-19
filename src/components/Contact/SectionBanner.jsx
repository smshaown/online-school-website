import React from 'react';
import contact from '../../assets/images/Contact/ContactUs.jpg';
import HeaderSection from '../HeaderSection/HeaderSection';


const SectionBanner = () => {
    return (
        <div>
             <HeaderSection image={contact} title={"Contact Us"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} ></HeaderSection>
        </div>
    );
};

export default SectionBanner;