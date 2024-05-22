


// import React, { useState } from "react";
// import India from "@svg-maps/india";
// // import { SVGMap } from "react-svg-map";
// import "react-svg-map/lib/index.css";
// import ReactDatamaps from "react-india-states-map";

// function IndiaMap() {
//   const [stateCode, setStateCode] = useState("");
//   const [stateName, setStateName] = useState("");

//   function onLocationClick(event) {
//     setStateCode(event.target.id);
//     setStateName(event.target.getAttribute("name"));
//     // console.log(event.target);
//     console.log("Id", event.target.id);
//     console.log("Name", event.target.getAttribute("name"));
//   }

//   return (
//     <>
//       <p>{stateName}</p>
//       <p>{stateCode}</p>
//       {/* <SVGMap map={India} onLocationClick={onLocationClick} /> */}
//       <ReactDatamaps map={India} onClick={onLocationClick} />
//     </>
//   );
// }

import React, { useState } from "react";
import India from "@svg-maps/india";
import "react-svg-map/lib/index.css";
import ReactDatamaps from "react-india-states-map";

const hindlabsData = {
  MH: {
    scanCount: 1000,
    patientCount: 650
  },
  DL: {
    scanCount: 800,
    patientCount: 550
  },
  KA: {
    scanCount: 750,
    patientCount: 510
  }
  // Add more states here...
};

function IndiaMap() {
  const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");
  const [scanCount, setScanCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);

  function onLocationClick(code, name) {
    setStateCode(code);
    setStateName(name);

    // Log the hindlabsData and code for debugging
    console.log('hindlabsData:', hindlabsData);
    console.log('Selected state code:', code);

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
    <div className="mt-10 head">
    
      <div className="mt-10  mysvg">
      <ReactDatamaps className="mysvg" map={India} onClick={(stateCode,stateName)=>{onLocationClick(stateCode,stateName)}} />

      </div>
      <div className="mt-10">
      <p>{stateName}</p>
      <p>{stateCode}</p>
      <p>Scan Count: {scanCount}</p>
      <p>Patient Count: {patientCount}</p>
      </div>
    </div>
    
    </>
  );
}

export default IndiaMap;
