import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function PieChartComponentOne() {
  const [districtData, setDistrictData] = useState({ districtNames: [], scanCounts: [] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Dummy data
      const data = {
        data: [
          { district: 'District 1', totalscans: '150' },
          { district: 'District 2', totalscans: '200' },
          { district: 'District 3', totalscans: '300' },
          { district: 'District 4', totalscans: '100' },
          { district: 'District 5', totalscans: '250' },
        ],
      };

      const districtNames = data.data.map((item) => item.district);
      const scanCounts = data.data.map((item) => parseInt(item.totalscans) || 0);
      setDistrictData({ districtNames, scanCounts });
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
    ];
    const colors = baseColors.slice(0, numColors).map((color) => `rgba(${color.join(', ')}, 0.9)`);
    return colors;
  };

  const labels = districtData.districtNames;
  const dataChart = districtData.scanCounts;
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

  // Calculate the width and height based on the number of districts
  const chartWidth = Math.max(300, labels.length * 50); // Adjust the multiplier as needed
  const chartHeight = Math.max(300, labels.length * 50); // Adjust the multiplier as needed

  return (
    <div className='piechart' style={{ width: `${chartWidth}px`, height: `${chartHeight}px`, marginLeft: '60px' }}>
      <h2 style={{ marginLeft: '0px' }}>Pie Chart</h2>
      <Pie data={data} style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}

export default PieChartComponentOne;
