// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const OCTOPRINT_BASE_URL = "http://localhost:5000"; // Replace with your OctoPrint server IP
const API_KEY = "ztt4MNBH5VaKhblUc4YMleMM6Tjt_Ycb1hZ-OSprSrE"; // Replace with your OctoPrint API key

const headers = {
  "X-Api-Key": API_KEY,
  "Content-Type": "application/json",
};

/**
 * Pause the current print job via OctoPrint API.
 */
export const pausePrintJob = async () => {
  try {
    const response = await fetch(`${OCTOPRINT_BASE_URL}/api/job`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        command: "pause",
        action: "toggle", // Toggles between pause and resume
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to pause the print: ${response.statusText}`);
    }

    return "Pause command sent successfully!";
  } catch (error) {
    console.error("Error sending pause command:", error);
    throw error;
  }
};
