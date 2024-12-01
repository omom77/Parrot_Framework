import React from "react";
import './App.css';
import Header from "./Header";
// import MonitorBar from "./Header";
import Navbar from "./Navbar";
import PrinterStatus from "./PrinterStatus";
import MonitorBar from "./MonitorBar"
import CameraStream from "./CameraStream"
import ControlBar from "./ControlBar"

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <Header />
        {/* <PrinterStatus /> */}
      </div>

      <div className="flex justify-between m-4 space-x-4">
        
        <div className="w-1/2">
          <MonitorBar />
        </div>

        <div className="w-1/2">
          <CameraStream />
        </div>
      
      </div>
      
      <div className="">
      <ControlBar/>
      </div>
    
    </div>
  );
}

export default App;
