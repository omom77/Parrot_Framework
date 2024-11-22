import React from 'react';
import start_img from '../media/start_img.svg';
import stop_img from '../media/stop_img.svg';
import cancel_img from '../media/cancel_img.svg';

const StatusItem = ({ imgSrc, altText, title }) => {
  return (
    <div className="flex items-center justify-center bg-[#A1C6FF] text-black rounded-full px-6 py-4 w-full hover:opacity-75">
      <img 
        src={imgSrc} 
        alt={altText} 
        className="w-12 h-auto mr-4" // Adjust the margin between image and text
      />
      <h1 className="chakra-petch-light text-3xl text-center">{title}</h1>
    </div>
  );
};

const ControlBar = () => {
  return (
    <div className="flex justify-between items-center mx-4 space-x-4"> {/* Row layout with spacing */}
      <StatusItem 
        imgSrc={start_img} 
        altText="Start Icon" 
        title="Start Print"  
      />
      <StatusItem 
        imgSrc={stop_img} 
        altText="Stop Icon" 
        title="Stop Print" 
      />
      <StatusItem 
        imgSrc={cancel_img} 
        altText="Cancel Icon" 
        title="Cancel Print" 
      />
    </div>
  );
};

export default ControlBar;
