import React from 'react';
import build_plate from '../media/build_plate.svg';
import extruder from '../media/extruder.svg';
import clock from '../media/clock.svg';

const StatusItem = ({ imgSrc, altText, title, value }) => {
  return (
    <div className="m-4 flex justify-between items-center bg-[#DEEBFF] rounded-full px-6 py-4 w-full max-w-3xl mx-auto">
      <img 
        src={imgSrc} 
        alt={altText} 
        className="w-16 h-auto cursor-pointer hover:opacity-75"
      />
      <h1 className="text-black chakra-petch-light text-4xl text-center flex-1 mx-4">{title}</h1>
      <p className="text-black chakra-petch-light text-3xl px-4">{value}</p>
    </div>
  );
};

const Status_bar = () => {
  return (
    <div className="space-y-4 flex-auto">
      <StatusItem 
        imgSrc={build_plate} 
        altText="build_plate" 
        title="Build Plate Temperature" 
        value="0" 
      />
      <StatusItem 
        imgSrc={extruder} 
        altText="extruder" 
        title="Extruder Temperature" 
        value="0" 
      />
      <StatusItem 
        imgSrc={clock} 
        altText="clock" 
        title="Estimated Completion Time" 
        value="0" 
      />
    </div>
  );
};

export default Status_bar;
