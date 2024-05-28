import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function LineChartComponentOne() {
  const [chartData, setChartData] = useState({ labels: [], dataPoints: [] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Dummy revenue data for years 2020 to 2024
      const data = {
        data: [
          { year: '2020', revenue: 50000 },
          { year: '2021', revenue: 40000 },
          { year: '2022', revenue: 30000 },
          { year: '2023', revenue: 80000 },
          { year: '2024', revenue: 90000 },
        ],
      };

      const labels = data.data.map((item) => item.year);
      const dataPoints = data.data.map((item) => item.revenue);
      setChartData({ labels, dataPoints });
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

  const labels = chartData.labels;
  const dataPoints = chartData.dataPoints;
  const borderColor = generateColors(1)[0];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Revenue Over Years',
        data: dataPoints,
        fill: false,
        backgroundColor: borderColor,
        borderColor: borderColor,
        tension: 0.1,
      },
    ],
  };

  // Calculate the width and height based on the number of labels
  const chartWidth = Math.max(300, labels.length * 50); // Adjust the multiplier as needed
  const chartHeight = 400; // Fixed height

  return (
    <div className='linechart' style={{ width: `${chartWidth}px`, height: `${chartHeight}px`, marginLeft: '60px' }}>
      <h2 style={{ marginLeft: '0px' }}>Line Chart</h2>
      <Line data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
}

export default LineChartComponentOne;
