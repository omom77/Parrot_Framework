import React from 'react';

const CameraStream = () => {
  return (
    <div className="space-y-4 flex-auto">
      {/* <div className="m-4 flex justify-between items-center bg-[#DEEBFF] rounded-3xl px-6 py-4 w-full h-full max-h-screen max-w-3xl mx-auto cursor-pointer hover:opacity-80 flex-grow"> */}
        {/* <h1 className="text-black chakra-petch-light text-3xl text-center flex-1 mx-4">Filename.gcode</h1> */}
      {/* </div> */}
    <div className="m-4 px-6 py-4 flex justify-between items-center bg-[#DEEBFF] rounded-3xl h-96 w-full max-w-3xl mx-auto cursor-pointer hover:opacity-80">
        <h1 className="text-black chakra-petch-light text-3xl text-center flex-1">{/* Removed mx-4 to align correctly */}Camera Feed</h1>
      </div>
    </div>
  );
};

export default CameraStream;
