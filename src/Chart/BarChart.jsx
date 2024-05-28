import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function BarChartComponentOne() {
  const [stateData, setStateData] = useState({ stateNames: [], scanCounts: [] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = {
        data: [
          { state: 'Andhra Pradesh', scanCount: '1500' },
          { state: 'Arunachal Pradesh', scanCount: '200' },
          { state: 'Assam', scanCount: '1000' },
          { state: 'Bihar', scanCount: '1200' },
          { state: 'Chhattisgarh', scanCount: '800' },
          { state: 'Goa', scanCount: '600' },
          { state: 'Gujarat', scanCount: '1700' },
          { state: 'Haryana', scanCount: '900' },
          { state: 'Himachal Pradesh', scanCount: '300' },
          { state: 'Jharkhand', scanCount: '700' },
          { state: 'Karnataka', scanCount: '2000' },
          { state: 'Kerala', scanCount: '1800' },
          { state: 'Madhya Pradesh', scanCount: '1300' },
          { state: 'Maharashtra', scanCount: '2500' },
          { state: 'Manipur', scanCount: '400' },
          { state: 'Meghalaya', scanCount: '500' },
          { state: 'Mizoram', scanCount: '200' },
          { state: 'Nagaland', scanCount: '300' },
          { state: 'Odisha', scanCount: '1400' },
          { state: 'Punjab', scanCount: '1000' },
          { state: 'Rajasthan', scanCount: '1600' },
          { state: 'Sikkim', scanCount: '100' },
          { state: 'Tamil Nadu', scanCount: '2200' },
          { state: 'Telangana', scanCount: '1500' },
          { state: 'Tripura', scanCount: '400' },
          { state: 'Uttar Pradesh', scanCount: '2400' },
          { state: 'Uttarakhand', scanCount: '600' },
          { state: 'West Bengal', scanCount: '1900' },
          { state: 'Andaman and Nicobar Islands', scanCount: '100' },
          { state: 'Chandigarh', scanCount: '300' },
          { state: 'Delhi', scanCount: '2100' },
          { state: 'Jammu and Kashmir', scanCount: '700' },
          { state: 'Ladakh', scanCount: '50' },
          { state: 'Lakshadweep', scanCount: '30' },
          { state: 'Puducherry', scanCount: '400' },
        ],
      };

      const stateNames = data.data.map((item) => item.state);
      const scanCounts = data.data.map((item) => parseInt(item.scanCount) || 0);
      setStateData({ stateNames, scanCounts });
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
  const dataChart = stateData.scanCounts;
  const backgroundColor = generateColors(labels.length);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Scan Counts',
        data: dataChart,
        backgroundColor: backgroundColor,
        hoverBackgroundColor: backgroundColor,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1000,
        },
      },
      x: {
        ticks: {
          maxRotation: 90,
          minRotation: 45,
          autoSkip: false,
        },
      },
    },
  };

  // Adjust chart dimensions
  const chartWidth = 800; // Set a fixed width
  const chartHeight = 400; // Set a fixed height

  return (
    <div className='barchart' style={{ width: `${chartWidth}px`, height: `${chartHeight}px`, marginLeft: '100px' }}>
      <h2 style={{ marginLeft: '0px' }}>Scan Counts by State</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChartComponentOne;
