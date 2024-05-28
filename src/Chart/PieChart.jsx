import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function PieChartComponentOne() {
  const [stateData, setStateData] = useState({ stateNames: [], patientCounts: [] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Example data for Indian states and patient counts
      const data = {
        data: [
          { state: 'Andhra Pradesh', patientCount: '1500' },
          { state: 'Arunachal Pradesh', patientCount: '200' },
          { state: 'Assam', patientCount: '1000' },
          { state: 'Bihar', patientCount: '1200' },
          { state: 'Chhattisgarh', patientCount: '800' },
          { state: 'Goa', patientCount: '600' },
          { state: 'Gujarat', patientCount: '1700' },
          { state: 'Haryana', patientCount: '900' },
          { state: 'Himachal Pradesh', patientCount: '300' },
          { state: 'Jharkhand', patientCount: '700' },
          { state: 'Karnataka', patientCount: '2000' },
          { state: 'Kerala', patientCount: '1800' },
          { state: 'Madhya Pradesh', patientCount: '1300' },
          { state: 'Maharashtra', patientCount: '2500' },
          { state: 'Manipur', patientCount: '400' },
          { state: 'Meghalaya', patientCount: '500' },
          { state: 'Mizoram', patientCount: '200' },
          { state: 'Nagaland', patientCount: '300' },
          { state: 'Odisha', patientCount: '1400' },
          { state: 'Punjab', patientCount: '1000' },
          { state: 'Rajasthan', patientCount: '1600' },
          { state: 'Sikkim', patientCount: '100' },
          { state: 'Tamil Nadu', patientCount: '2200' },
          { state: 'Telangana', patientCount: '1500' },
          { state: 'Tripura', patientCount: '400' },
          { state: 'Uttar Pradesh', patientCount: '2400' },
          { state: 'Uttarakhand', patientCount: '600' },
          { state: 'West Bengal', patientCount: '1900' },
          { state: 'Andaman and Nicobar Islands', patientCount: '100' },
          { state: 'Chandigarh', patientCount: '300' },
          { state: 'Dadra and Nagar Haveli and Daman and Diu', patientCount: '200' },
          { state: 'Delhi', patientCount: '2100' },
          { state: 'Jammu and Kashmir', patientCount: '700' },
          { state: 'Ladakh', patientCount: '50' },
          { state: 'Lakshadweep', patientCount: '30' },
          { state: 'Puducherry', patientCount: '400' },
        ],
      };

      const stateNames = data.data.map((item) => item.state);
      const patientCounts = data.data.map((item) => parseInt(item.patientCount) || 0);
      setStateData({ stateNames, patientCounts });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const generateColors = (numColors) => {
    const baseColors = [
      [255, 99, 132],
      [54, 162, 235],
      [255, 206, 86],
      [75, 192, 192],
      [153, 102, 255],
      [255, 159, 64],
      [100, 149, 237],
      [72, 209, 204],
      [199, 21, 133],
      [255, 165, 0],
      [106, 90, 205],
      [60, 179, 113],
      [255, 105, 180],
      [30, 144, 255],
      [176, 224, 230],
      [220, 20, 60],
      [189, 183, 107],
      [255, 248, 220],
      [233, 150, 122],
      [255, 69, 0],
    ];
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      colors.push(`rgba(${baseColors[i % baseColors.length].join(', ')}, 0.9)`);
    }
    return colors;
  };

  const labels = stateData.stateNames;
  const dataChart = stateData.patientCounts;
  const backgroundColor = generateColors(labels.length);

  const data = {
    labels: labels.map(
      (label, index) => `${label} (${((dataChart[index] / dataChart.reduce((acc, cur) => acc + cur, 0)) * 100).toFixed(2)}%)`
    ),
    datasets: [
      {
        data: dataChart,
        backgroundColor: backgroundColor,
        hoverBackgroundColor: backgroundColor,
      },
    ],
  };

  // Calculate the width and height based on the number of states
  const chartWidth = Math.max(500, labels.length * 10); // Reduced width
  const chartHeight = Math.max(500, labels.length * 10); // Reduced height

  return (
    <div className='piechart' style={{ width: `${chartWidth}px`, height: `${chartHeight}px`, marginLeft: '60px' }}>
      <h2 style={{ marginLeft: '0px' }}>Patient Counts by State</h2>
      <Pie data={data} style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}

export default PieChartComponentOne;
