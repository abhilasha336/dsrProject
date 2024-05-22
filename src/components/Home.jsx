import React from 'react'
import PieChartComponentOne from '../Chart/PieChart'
import BarChartComponentOne from '../Chart/BarChart'
import LineChartComponentOne from '../Chart/LineChart'

function Home() {
  return (
    <div>
        <div className='flex justify-center items-center mx-auto mt-12 space-x-4'>
            <div className="bg-purple-600 text-white font-semibold  py-10 px-8 mx-5 rounded-lg hover:bg-purple-700 transition-colors duration-300">Laboratory Services</div>
            <div className="bg-purple-600 text-white font-semibold py-10 px-8 mx-5 rounded-lg hover:bg-purple-700 transition-colors duration-300">Imaging Services</div>
            <div className="bg-purple-600 text-white font-semibold py-10 px-8 mx-5 rounded-lg hover:bg-purple-700 transition-colors duration-300">Tele-Radiology Services</div>

         

        </div>

        <div className="table-wrapper mx-auto mt-12">
                    <table className="fl-table">
                        <thead>
                        <tr>
                                    <th>SL No.</th> {/* Added a new heading for serial number */}
                                        {/* {getTableHeadings().map((heading, index) => (
                                            <th key={index}>{heading}</th>
                                        ))} */}
                                    <th>ScanType</th>
                                    <th>ScanDateandTime</th>
                                    <th>PatientId</th>
                                    <th>AccessionNo</th>
                                    <th>PatientName</th>
                                   
                                   
                                </tr>
                        </thead>
                        <tbody>
                            <tr>
                        <td>fafasf</td>
                        <td>fafasf</td>
                        <td>fafasf</td>
                        <td>fafasf</td>
                            </tr>
                            <tr>
                        <td>fafasf</td>
                        <td>fafasf</td>
                        <td>fafasf</td>
                        <td>fafasf</td>
                            </tr>
                        </tbody>
                    </table>
        </div>

        <div className='flex justify-center items-center mx-3 space-x-4 mt-10'>
            <PieChartComponentOne></PieChartComponentOne>
            <BarChartComponentOne></BarChartComponentOne>
            <LineChartComponentOne></LineChartComponentOne>

        </div>
    </div>
  )
}

export default Home