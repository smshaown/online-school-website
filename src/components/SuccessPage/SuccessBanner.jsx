import React from 'react';
import banner from '../../assets/images/success/banner.png';
import HeaderSection from '../HeaderSection/HeaderSection';

const SuccessBanner = () => {
    return (
        <div>
             <HeaderSection image={banner} title={"Success Stories"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} ></HeaderSection>
        </div>
         
    );
};

export default SuccessBanner;