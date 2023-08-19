import React from "react";
import { Link } from "react-router-dom";



const Button = ({ button }) => {
  return (
    <div>        
      <a href="" className="px-10 py-3 bg-gray-800 text-white shadow-md hover:shadow-lg rounded-[30px]">
        {button}
      </a>
    </div>
  );
};

export default Button;
