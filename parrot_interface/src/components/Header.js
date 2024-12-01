import React from 'react';
import arrow_down from '../media/arrow_down.svg';

const Header = () => {
  return (
    // <div className="mx-4 inline-flex justify-center items-center border-2 border-black rounded-full px-4 py-2">
    // <div className="flex justify-center">
        <div className="mx-4 inline-flex justify-center items-center px-4 py-1">
        <h1 className="text-white chakra-petch-light text-8xl">Control</h1>
        {/* <img 
            src={arrow_down} 
            alt="Arrow Down" 
            className="w-16 h-auto pr-4 cursor-pointer hover:opacity-75"
            fill="white"
        /> */}
        </div>
    // </div>
  );
};

export default Header;
