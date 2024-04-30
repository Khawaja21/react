import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const xValues = ["In use", "Damage", "in__Repair", "Stored"];
    const yValues = [58, 0, 0, 0];
    const barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145"
    ];

    if (chartRef && chartRef.current) {
      new Chart(chartRef.current, {
        type: "doughnut",
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
              text: "Assets Status"
            }
          }
        }
      });
    }
  }, []);

  return <canvas id="myChart" ref={chartRef} style={{ width: '100%', maxWidth: '600px' }} />;
};

export default DoughnutChart;
