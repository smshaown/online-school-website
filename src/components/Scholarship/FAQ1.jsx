import React from "react";
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const FAQ1 = () => {

    const [open, setOpen] = React.useState(1);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);


    return (
        <div className="space-y-2">
        <div className="border rounded">
          <button
            className="w-full flex items-center justify-between p-2 focus:outline-none"
            onClick={() => handleOpen(1)}
          >
            <span className="mr-2">
              {open === 1 ? <FaChevronDown /> : <FaChevronRight />}
            </span>
            What is Material Tailwind?
          </button>
          
          {open === 1 && (
            <div className="p-2">
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
              ourselves and actualize our dreams.
            </div>
          )}
        </div>



        <div className="border rounded">
          <button
            className="w-full flex items-center justify-between p-2 focus:outline-none"
            onClick={() => handleOpen(2)}
          >
            <span className="mr-2">
              {open === 2 ? <FaChevronDown /> : <FaChevronRight />}
            </span>
            What is Material Tailwind?
          </button>
          
          {open === 1 && (
            <div className="p-2">
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
              ourselves and actualize our dreams.
            </div>
          )}
        </div>
        {/* Repeat for other accordions */}
      </div>
    );
};

export default FAQ1;