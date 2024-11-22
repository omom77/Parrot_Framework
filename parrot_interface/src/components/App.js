import React from "react";
import './App.css';
import Header from "./Header";
import MonitorBar from "./MonitorBar";
import Navbar from "./Navbar";
import PrinterStatus from "./PrinterStatus";
import StatusBar from "./StatusBar"
import CameraStream from "./CameraStream"

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <MonitorBar />
        {/* <PrinterStatus /> */}
      </div>
      <div className="flex justify-between m-4">
        <div className="w-1/2">
          <StatusBar />
        </div>
        <div className="w-1/2">
          <CameraStream />
        </div>
      </div>
    </div>
  );
}

export default App;
