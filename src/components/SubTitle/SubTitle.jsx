import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";

const SubTitle = ({h3}) => {
    return (
        <div>           
            <h5 className="flex text-[#A6B1B7] gap-2 font-medium pl-[135px]"><span className='mt-1'><AiOutlineHeart /></span>{h3}</h5>
        </div>
    );
};

export default SubTitle;