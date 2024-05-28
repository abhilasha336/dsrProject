import React from 'react'
import PieChartComponentOne from '../Chart/PieChart'
import BarChartComponentOne from '../Chart/BarChart'
import LineChartComponentOne from '../Chart/LineChart'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontAwesome.js'
import { useRef,useEffect } from 'react';
import '../index.css'



function Home({sidebarOpen}) {
    const homeRef = useRef(null);
    useEffect(() => {
        if (homeRef.current) {
            if (sidebarOpen) {
                homeRef.current.style.marginLeft = '250px';
            } else {
                homeRef.current.style.marginLeft = '0';
            }
        }
    }, [sidebarOpen]);

  return (
    <div ref={homeRef} className="home-container ml-[100px] ">
        <div className='flex justify-center items-center mx-auto mt-12 space-x-4'>
            <div className="bg-blue-600 text-white font-semibold  py-8 px-16 mx-5 rounded-lg hover:bg-purple-700 transition-colors duration-300"><Link to='/laboratory_service'>Laboratory Services</Link>  <FontAwesomeIcon icon="vials" /></div>
            <div className="bg-orange-600 text-white font-semibold py-8 px-16 mx-5 rounded-lg hover:bg-purple-700 transition-colors duration-300">Imaging Services  <FontAwesomeIcon icon="x-ray" /></div>
            <div className="bg-emerald-600 text-white font-semibold py-8 px-16 mx-5 rounded-lg hover:bg-purple-700 transition-colors duration-300">Tele-Radiology Services        <FontAwesomeIcon icon="laptop-medical" />
</div>

         

        </div>

        <div className='flex justify-center items-center mx-auto mt-12 space-x-4'>
            <div className="bg-purple-600 text-white font-semibold  py-2 px-12  rounded-lg hover:bg-purple-700 transition-colors duration-300"> <FontAwesomeIcon icon="user-injured"/>  Patient Counts   
 <div className='text-center'>82.91 Lac</div></div>
            <div className="bg-purple-600 text-white font-semibold py-2 px-16  rounded-lg hover:bg-purple-700 transition-colors duration-300"><FontAwesomeIcon icon="x-ray"/>  Test Counts<div className='text-center'>68.80 Lac</div></div>
            <div className="bg-purple-600 text-white font-semibold py-2 px-20  rounded-lg hover:bg-purple-700 transition-colors duration-300"><FontAwesomeIcon icon="dollar-sign" />  Revenue<div className='text-center'>129.81 Cr</div></div>

         

        </div>
      

        <div className='flex justify-center items-center mx-3 space-x-4 mt-10'>
            <PieChartComponentOne></PieChartComponentOne>
             {/* <BarChartComponentOne></BarChartComponentOne> */}
            <LineChartComponentOne></LineChartComponentOne> 

        </div>
        
        <div className='flex justify-center items-center mx-3 space-x-4 mt-10'>
            {/* <PieChartComponentOne></PieChartComponentOne> */}
             <BarChartComponentOne></BarChartComponentOne>
            {/* <LineChartComponentOne></LineChartComponentOne>  */}

        </div>
     
        {/* <div className='flex justify-center items-center mx-3 space-x-4 mt-10'>
            <LineChartComponentOne></LineChartComponentOne>

        </div> */}
    </div>
  )
}

export default Home