import React from 'react';
import arrow_down from '../media/arrow_down.svg';

const MonitorBar = () => {
  return (
    <div className="mx-4 inline-flex justify-center items-center border-2 border-black rounded-full px-4 py-2">
      <h1 className="text-black chakra-petch-light text-6xl mr-4 pl-4 pr-16">Monitor & Control</h1>
      <img 
        src={arrow_down} 
        alt="Arrow Down" 
        className="w-16 h-auto pr-4 cursor-pointer hover:opacity-75"
      />
    </div>
  );
};

export default MonitorBar;
