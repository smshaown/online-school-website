import React from 'react';
import HeaderSection from '../HeaderSection/HeaderSection';
import bannerImg from '../../assets/images/Scholarship/banner.png';

const SectionBanner = () => {
    return (
        <div>
             <HeaderSection image={bannerImg} title={"Scholar Ship"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} ></HeaderSection>
        </div>
    );
};

export default SectionBanner;