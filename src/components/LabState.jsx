import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontAwesome.js'

import {useState } from 'react';


function LabState() {
    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
      };
      const [isLoading, setIsLoading] = useState(false);

      const [fromDate, setFromDate] = useState('2024-01-01');
      const [toDate, setToDate] = useState(getCurrentDate());
    
      const handleFromDateChange = (e) => {
        setFromDate(e.target.value);
      };
    
      const handleToDateChange = (e) => {
        setToDate(e.target.value);
      };
  return (
    <>
            <div className="flex flex-col items-center p-5  min-h-screen bg-custom-image">
                <div className="w-full max-w-xl  bg-yellow-700 p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex flex-col">
                            <label htmlFor="fromDate" className="text-white">From Date</label>
                            <input
                                id="fromDate"
                                type="date"
                                value={fromDate}
                                onChange={handleFromDateChange}
                                className="mt-1 p-2 border rounded-md text-white"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="toDate" className="text-white">To Date</label>
                            <input
                                id="toDate"
                                type="date"
                                value={toDate}
                                onChange={handleToDateChange}
                                className="mt-1 p-2 border rounded-md text-white font-black"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="options" className="text-white">Select Lab Centres</label>
                        <select
                            id="options"
                            name="options"
                            className="mt-1 p-2 border rounded-md w-full"
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            <option value="option4">Option 4</option>
                            <option value="option5">Option 5</option>
                            <option value="option6">Option 6</option>
                            <option value="option7">Option 7</option>
                            <option value="option8">Option 8</option>
                            <option value="option9">Option 9</option>
                            <option value="option10">Option 10</option>
                        </select>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="w-40 h-40 border rounded-full flex items-center justify-center bg-yellow-700 shadow-md">
                        <div className="text-center">
                        <FontAwesomeIcon icon="user-injured"/>
                            <div className="text-white font-semibold">Patient Count</div>
                            <h6>1400 Cr</h6>

                        </div>
                        
                    </div>
                    <div className="w-40 h-40 border rounded-full mt-12 flex items-center justify-center bg-yellow-700 shadow-md">
                        <div className="text-center">
                        <FontAwesomeIcon icon="x-ray"/>
                            <div className="text-white font-semibold">Scan Count</div>
                            <h6>1200 Cr</h6>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
  )
}

export default LabState










