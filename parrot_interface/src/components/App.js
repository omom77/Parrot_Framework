import React from "react";
import './App.css';
import Header from "./Header";
import Monitor_bar from "./Monitor_bar";
import Navbar from "./Navbar";
import Printer_status from "./Printer_status";

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Monitor_bar/> */}
      <div className="flex space-x-4">
        <Monitor_bar />
        <Printer_status />
      </div>

      {/* <header/>
      <Monitor/> */}
    </div>
  );
}

export default App;
