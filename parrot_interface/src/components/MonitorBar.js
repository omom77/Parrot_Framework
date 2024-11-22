import React from 'react';
import build_plate from '../media/build_plate.svg';
import extruder from '../media/extruder.svg';
import clock from '../media/clock.svg';
import file from '../media/file.svg';

const StatusItem = ({ imgSrc, altText, title, value }) => {
  return (
    <div className="m-4 flex justify-between items-center bg-[#DEEBFF] rounded-full px-6 py-4 h-24 w-full max-w-4xl mx-auto cursor-pointer hover:opacity-75">
      <img 
        src={imgSrc} 
        alt={altText} 
        className="w-16 h-auto cursor-pointer hover:opacity-75"
      />
      <h1 className="text-black chakra-petch-light text-3xl text-center flex-1 mx-4">{title}</h1>
      <p className="text-black chakra-petch-light text-3xl px-4">{value}</p>
    </div>
  );
};

const MonitorBar = () => {
  return (
    <div className="space-y-4 flex-auto">
      <div className="m-4 px-6 py-4 flex justify-between items-center bg-[#DEEBFF] rounded-full h-20 w-full max-w-3xl mx-auto cursor-pointer hover:opacity-80">
      <img 
        src={file} 
        alt={file} 
        className="w-16 h-auto"
      />
      <h1 className="text-black chakra-petch-light text-3xl text-center flex-1 mx-4">Filename.gcode</h1>
    </div>
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

export default MonitorBar;
