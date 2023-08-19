import React from 'react';
import SubTitle from '../SubTitle/SubTitle';
import img from '../../assets/images/online/whatOnile.png';

const WhatOnline = () => {
    return (
        <div className='myContainer '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 mt-20'>
                <div>
                    <img className='w-full h-full object-cover' src={img} alt="" />
                </div>
                <div className='mt-6 md:mt-8'>
                    <div className="ml-[-130px]">
                        <SubTitle h3="Online learning" />
                    </div>
                    <h2 className='text-3xl mt-3 text-[#0E0E0E] font-semibold'>What is online learning?</h2>
                    <p className='text-lg mt-4 font-normal text-[#9F9F9F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                </div>
            </div>
        </div>
    );
};

export default WhatOnline;