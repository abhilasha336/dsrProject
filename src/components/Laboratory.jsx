import React from 'react'
import IndiaMap from '../Chart/Map'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontAwesome.js'
import { Outlet } from 'react-router-dom';

function Laboratory() {
  return (
    <div className='labo-img'>
       <div className="flex justify-between items-center mx-auto  w-full px-5">
            <div className="flex justify-center items-center">
                 <div className="bg-purple-600 text-white font-semibold py-10 mt-2 px-8 ml-[260px] rounded-lg hover:bg-purple-700 transition-colors duration-300">
                     Laboratory Services
                    </div>
            </div>
            <div className="flex  items-center space-x-4">
                <div className="bg-purple-600 text-white font-semibold py-10 px-8 rounded-3xl hover:bg-purple-700 transition-colors duration-300">
                <Link to="/laboratory_service">Lab</Link>  
                </div>
                <div className="bg-purple-600 text-white font-semibold py-10 px-8 rounded-3xl hover:bg-purple-700 transition-colors duration-300">
             <Link to="/laboratory_service/poly_clinic"> Poly Clinic</Link>  
                </div>
            </div>
       </div>
<div className='mt-5'>
      <div className='float-left'>
      <IndiaMap></IndiaMap>

      </div>
      <div className='float-right'>
        <div className="bg-blue-600 text-white font-semibold  py-4 px-12 mx-5 mt-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"><Link to='/laboratory_service/kerala'>Kerala</Link>  <FontAwesomeIcon icon="vials" /></div>
        <div className="bg-orange-600 text-white font-semibold  py-4 px-12 mx-5 mt-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"><Link to='/laboratory_service'>Haryana</Link>  <FontAwesomeIcon icon="vials" /></div>
        <div className="bg-emerald-600 text-white font-semibold  py-4 px-12 mx-5 mt-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"><Link to='/laboratory_service'>Madhya Pradhesh</Link>  <FontAwesomeIcon icon="vials" /></div>
        <div className="bg-blue-600 text-white font-semibold  py-4 px-12 mx-5 mt-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"><Link to='/laboratory_service'>Andhra Pradhesh</Link>  <FontAwesomeIcon icon="vials" /></div>
        <div className="bg-orange-600 text-white font-semibold  py-4 px-12 mx-5 mt-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"><Link to='/laboratory_service'>Uttar Pradhesh</Link>  <FontAwesomeIcon icon="vials" /></div>
        <div className="bg-emerald-600 text-white font-semibold  py-4 px-12 mx-5  mt-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"><Link to='/laboratory_service'>Maharasthra</Link>  <FontAwesomeIcon icon="vials" /></div>
        <div className="bg-blue-600 text-white font-semibold  py-4 px-12 mx-5 mt-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"><Link to='/laboratory_service'>West Bengal</Link>  <FontAwesomeIcon icon="vials" /></div>
        <div className="bg-orange-600 text-white font-semibold  py-4 px-12 mx-5 mt-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"><Link to='/laboratory_service'>Tamil Nadu</Link>  <FontAwesomeIcon icon="vials" /></div>
        <div className="bg-emerald-600 text-white font-semibold  py-4 px-12 mx-5 mt-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"><Link to='/laboratory_service'>Laboratory Services</Link>  <FontAwesomeIcon icon="vials" /></div>
        <div className="bg-blue-600 text-white font-semibold  py-4 px-12 mx-5 mt-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"><Link to='/laboratory_service'>Laboratory Services</Link>  <FontAwesomeIcon icon="vials" /></div>

      </div>
      <div className='clear-both'>

      </div>
</div>
    </div>
  )
}

export default Laboratory