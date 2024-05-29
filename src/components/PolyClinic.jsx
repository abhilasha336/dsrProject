import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontAwesome.js'

function PolyClinic() {
  return (
    <>
      <div className='labo-img'>
        <div className="flex justify-between items-center mx-auto w-full px-5">
          <div className="flex justify-center items-center">
            <div className="bg-purple-600 text-white font-semibold py-10 px-8 mt-2 ml-[260px] rounded-lg hover:bg-purple-700 transition-colors duration-300">
              Laboratory Services
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-purple-600 text-white font-semibold py-10 px-8 mt-2 rounded-3xl hover:bg-purple-700 transition-colors duration-300">
              <Link to="/laboratory_service">Lab</Link>
            </div>
            <div className="bg-purple-600 text-white font-semibold py-10 px-8 mt-2 rounded-3xl hover:bg-purple-700 transition-colors duration-300">
              Poly Clinic
            </div>
          </div>
        </div>
        <div className='mt-5 flex justify-between'>
          <div className='relative w-[500px] h-[500px] left-[200px] flex-shrink-0'>
            <img src="/file.png" className='w-full h-full ' alt="Map" />
            <div className='absolute top-[50px] left-[150px]'>
              <text x="20" y="30" fontSize="20" fill="black">📍</text>
            </div>
            <div className='absolute top-[80px] left-[30px]'>
              <text x="20" y="30" fontSize="20" fill="black">📍</text>
            </div>
          </div>
          <div className='flex flex-col justify-start items-end space-y-4'>
            <div className="bg-blue-600 text-white font-semibold py-4 px-12 rounded-lg hover:bg-purple-700 transition-colors duration-300">
              <Link to='/laboratory_service/kerala'>Kerala <FontAwesomeIcon icon="vials" /></Link>
            </div>
            <div className="bg-orange-600 text-white font-semibold py-4 px-12 rounded-lg hover:bg-purple-700 transition-colors duration-300">
              <Link to='/laboratory_service'>Haryana <FontAwesomeIcon icon="vials" /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PolyClinic
