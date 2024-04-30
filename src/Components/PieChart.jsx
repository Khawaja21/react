// import React from "react";
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const xValues = ["Non Encode Assets", "Encode"];
    const yValues = [48, 10];
    const barColors = [
      "Green",
      "Red"
    ];

    if (chartRef && chartRef.current) {
      new Chart(chartRef.current, {
        type: "pie",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Encoded And Non-Encoded"
            }
          }
        }
      });
    }
  }, []);

  return <canvas id="myChart" ref={chartRef} style={{ width: '100%', maxWidth: '600px' }} />;
};

export default PieChart;
