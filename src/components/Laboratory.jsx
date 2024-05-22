import React from 'react'
import IndiaMap from '../Chart/Map'

function Laboratory() {
  return (
    <div>
       <div className="flex justify-between items-center mx-auto mt-12 w-full px-5">
            <div className="flex justify-center items-center">
                 <div className="bg-purple-600 text-white font-semibold py-10 px-8 ml-[260px] rounded-lg hover:bg-purple-700 transition-colors duration-300">
                     Laboratory Services
                    </div>
            </div>
            <div className="flex justify-end items-center space-x-4">
                <div className="bg-purple-600 text-white font-semibold py-10 px-8 rounded-3xl hover:bg-purple-700 transition-colors duration-300">
                    Imaging Services
                </div>
                <div className="bg-purple-600 text-white font-semibold py-10 px-8 rounded-3xl hover:bg-purple-700 transition-colors duration-300">
                    Tele-Radiology Services
                </div>
            </div>
       </div>

       <div>
       <IndiaMap></IndiaMap>
       </div>

    </div>
  )
}

export default Laboratory