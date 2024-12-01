import React from 'react';
import build_plate from '../media/build_plate.svg';
import extruder from '../media/extruder.svg';
import clock from '../media/clock.svg';
import file from '../media/file.svg';
import { pausePrintJob } from '../api/octoprintApi';

const StatusItem = ({ imgSrc, altText, title, value, onClick }) => {
  return (
    <div 
      className="m-4 px-6 py-4 flex justify-between items-center bg-[#DEEBFF] rounded-3xl h-24 w-full max-w-4xl mx-auto cursor-pointer hover:opacity-75"
      onClick={onClick} // Add an onClick handler
    >
      <img 
        src={imgSrc} 
        alt={altText} 
        className="w-16 h-auto cursor-pointer hover:opacity-75"
      />
      <h1 className="text-black chakra-petch-light text-3xl text-center flex-1">{title}</h1>
      <p className="text-black chakra-petch-light text-3xl px-4">{value}</p>
    </div>
  );
};

const MonitorBar = () => {
  const handlePausePrint = async () => {
    try {
      const message = await pausePrintJob();
      alert(message);
    } catch (error) {
      alert("Error: Unable to send pause command.");
    }
  };

  return (
    <div className="space-y-4 flex-auto">
      <div className="m-4 px-6 py-4 flex justify-between items-center bg-[#DEEBFF] rounded-3xl h-24 w-full max-w-3xl mx-auto cursor-pointer hover:opacity-80">
        <img 
          src={file} 
          alt="File Icon" 
          className="w-16 h-auto"
        />
        <h1 className="text-black chakra-petch-light text-3xl text-center flex-1">{/* Removed mx-4 to align correctly */}Filename.gcode</h1>
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
      {/* Uncomment if you want to add a Pause Print item */}
      {/* 
      <StatusItem 
        imgSrc={clock} 
        altText="clock" 
        title="Pause Print" // Update the title for clarity
        value="0"
        onClick={handlePausePrint} // Attach the Pause Print handler
      /> 
      */}
    </div>
  );
};

export default MonitorBar;
