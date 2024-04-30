import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart1 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const xValues = ["Computer Accessories", "Furniture", "Electronics"];
    const yValues = [1, 0, 0];
    const barColors = ["red", "red", "red"];

    const chartData = {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    };
    
    const chartOptions = {
      legend: { display: false },
      title: {
        display: true,
        text: "Categories Wise Untagged Assets (Total: 1)"
      }
    };

    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: "line",
        data: chartData,
        options: chartOptions
      });
    }
  }, []);
  
  return <canvas id="myChart" ref={chartRef} style={{ width: '100%', maxWidth: '600px' }} />;
};

export default LineChart1;
