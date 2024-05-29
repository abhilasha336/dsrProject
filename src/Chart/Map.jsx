

// import React, { useState } from "react";
// import India from "@svg-maps/india";
// import "react-svg-map/lib/index.css";
// import ReactDatamaps from "react-india-states-map";

// const hindlabsData = {
//   MH: {
//     scanCount: 1000,
//     patientCount: 650
//   },
//   DL: {
//     scanCount: 800,
//     patientCount: 550
//   },
//   KA: {
//     scanCount: 750,
//     patientCount: 510
//   }
//   // Add more states here...
// };

// function IndiaMap() {
//   const [stateCode, setStateCode] = useState("");
//   const [stateName, setStateName] = useState("");
//   const [scanCount, setScanCount] = useState(0);
//   const [patientCount, setPatientCount] = useState(0);

//   function onLocationClick(code, name) {
//     setStateCode(code);
//     setStateName(name);

//     // Log the hindlabsData and code for debugging
//     console.log('hindlabsData:', hindlabsData);
//     console.log('Selected state code:', code);

//     // Fetch Hindlabs data for the selected state
//     if (hindlabsData[code]) {
//       const { scanCount, patientCount } = hindlabsData[code];
//       setScanCount(scanCount);
//       setPatientCount(patientCount);
//     } else {
//       setScanCount(0);
//       setPatientCount(0);
//     }
// }


//   return (
//     <>
//     <div className="mt-10 head">
    
//       <div className="mt-10  mysvg">
//       <ReactDatamaps className="mysvg" map={India} onClick={(stateCode,stateName)=>{onLocationClick(stateCode,stateName)}} />

//       </div>
//       <div className="mt-10">
//       <p>{stateName}</p>
//       <p>{stateCode}</p>
//       <p>Scan Count: {scanCount}</p>
//       <p>Patient Count: {patientCount}</p>
//       </div>
//     </div>
    
//     </>
//   );
// }

// export default IndiaMap;



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
    KA: {
      scanCount: 750,
      patientCount: 510,
      location: { x: 300, y: 320} // Example location coordinates for Karnataka (KA)
    },
    KL: {
      scanCount: 920,
      patientCount: 620,
      location: { x: 250, y: 400 } // Example location coordinates for Kerala (KL)
    },
    MP: {
      scanCount: 880,
      patientCount: 580,
      location: { x: 200, y: 350 } // Example location coordinates for Madhya Pradesh (MP)
    },
    TN: {
      scanCount: 890,
      patientCount: 630,
      location: { x: 230, y: 300 } // Example location coordinates for Tamil Nadu (TN)
    },
    WB: {
      scanCount: 830,
      patientCount: 570,
      location: { x: 320, y: 400 } // Example location coordinates for West Bengal (WB)
    },
    HP: {
      scanCount: 860,
      patientCount: 590,
      location: { x: 320, y: 200 } // Example location coordinates for Himachal Pradesh (HP)
    },
    JH: {
      scanCount: 820,
      patientCount: 560,
      location: { x: 320, y: 350 } // Example location coordinates for Jharkhand (JH)
    },
    CT: {
      scanCount: 840,
      patientCount: 580,
      location: { x: 320, y: 300 } // Example location coordinates for Chhattisgarh (CT)
    },
    MH: {
      scanCount: 1000,
      patientCount: 650,
      location: { x: 300, y: 300 } // Example location coordinates for Maharashtra (MH)
    },
    UP: {
      scanCount: 930,
      patientCount: 670,
      location: { x: 300, y: 200 } // Example location coordinates for Uttar Pradesh (UP)
    }
  };

  function IndiaMap() {
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
          
          <ReactDatamaps className="mysvg" map={India} onClick={(stateCode, stateName) => onLocationClick(stateCode, stateName)} />

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

  export default IndiaMap;


