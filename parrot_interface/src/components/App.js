import React from "react";
import './App.css';
import Header from "./Header";
import Monitor_bar from "./Monitor_bar";
import Navbar from "./Navbar";
import Printer_status from "./Printer_status";
import Status_bar from "./Status_bar"

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Monitor_bar/> */}
      <div className="flex justify-center">
        <Monitor_bar />
        {/* <Printer_status /> */}
      </div>
      <div className="flex justify-start">
        <Status_bar />
      </div>

      

      {/* <header/>
      <Monitor/> */}
    </div>
  );
}

export default App;
