import React from 'react';
import HeaderSection from '../HeaderSection/HeaderSection';
import onlineBanner from '../../assets/images/online/online.png';

const SectionBanner = () => {
    return (
        <div>
            <HeaderSection image={onlineBanner} title={"Online Learning"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} ></HeaderSection>
        </div>
    );
};

export default SectionBanner;