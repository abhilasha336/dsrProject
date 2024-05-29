import React from 'react'
import { Link } from 'react-router-dom'
import IndiaMap from '../Chart/Map'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontAwesome.js'
import MapPoly from '../Chart/MapPoly.jsx';
function PolyClinic() {
  return (
    <>
          <div className=''>
       <div className="flex justify-between items-center mx-auto mt-12 w-full px-5">
            <div className="flex justify-center items-center">
                 <div className="bg-purple-600 text-white font-semibold py-10 px-8 ml-[260px] rounded-lg hover:bg-purple-700 transition-colors duration-300">
                     Laboratory Services
                    </div>
            </div>
            <div className="flex  items-center space-x-4">
                <div className="bg-purple-600 text-white font-semibold py-10 px-8 rounded-3xl hover:bg-purple-700 transition-colors duration-300">
                <Link to="/laboratory_service">Lab</Link>  
                </div>
                <div className="bg-purple-600 text-white font-semibold py-10 px-8 rounded-3xl hover:bg-purple-700 transition-colors duration-300">
                Poly Clinic
                </div>
            </div>
       </div>
<div className='mt-5'>
      <div className='float-left'>
<MapPoly></MapPoly>
      </div>
      <div className='float-right'>
        <div className="bg-blue-600 text-white font-semibold  py-4 px-12 mx-5 mt-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"><Link to='/laboratory_service/kerala'>Kerala</Link>  <FontAwesomeIcon icon="vials" /></div>
        <div className="bg-orange-600 text-white font-semibold  py-4 px-12 mx-5 mt-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"><Link to='/laboratory_service'>Haryana</Link>  <FontAwesomeIcon icon="vials" /></div>
     

      </div>
      <div className='clear-both'>

      </div>
</div>

    </div>
    </>
  )
}

export default PolyClinic