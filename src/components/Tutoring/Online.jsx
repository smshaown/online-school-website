import React from 'react';
import WhatOnline from './WhatOnline';
import Courses from './Courses';
import LiveSessions from './LiveSessions';
import SectionBanner from './SectionBanner';

const Online = () => {
    return (
        <div>
            
         <SectionBanner />
         <WhatOnline />
         <Courses />
         <LiveSessions />

        </div>
    );
};

export default Online;