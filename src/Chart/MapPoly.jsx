import React, { useState } from "react";
import India from "@svg-maps/india";
import "react-svg-map/lib/index.css";
import ReactDatamaps from "react-india-states-map";

const hindlabsData = {
  AP: {
    scanCount: 900,
    patientCount: 600,
    location: { x: 300, y: 200 } // Example location coordinates for Andhra Pradesh (AP)
  },
  HR: {
    scanCount: 850,
    patientCount: 590,
    location: { x: 300, y: 250 } // Example location coordinates for Haryana (HR)
  },
};

function MapPoly() {
  const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");
  const [scanCount, setScanCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);

  function onLocationClick(code, name) {
    setStateCode(code);
    setStateName(name);

    // Fetch Hindlabs data for the selected state
    if (hindlabsData[code]) {
      const { scanCount, patientCount } = hindlabsData[code];
      setScanCount(scanCount);
      setPatientCount(patientCount);
    } else {
      setScanCount(0);
      setPatientCount(0);
    }
  }

  return (
    <>
      <div className=" absolute w-[60%]  mysvg">
        <ReactDatamaps  map={India} onClick={(stateCode, stateName) => onLocationClick(stateCode, stateName)} />

        {/* Render location icons */}
        {Object.keys(hindlabsData).map((stateCode, index) => (
          <svg key={index} className="location-icon" style={{ position: 'absolute', top: hindlabsData[stateCode].location.y, left: hindlabsData[stateCode].location.x, width: '50px', height: '50px' }}>
            <text x="20" y="30" fontSize="20" fill="black">📍</text>
          </svg>
        ))}
      </div>
      
    </>
  );
}

export default MapPoly;

