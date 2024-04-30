import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const xValues = ["Electronics", "Furniture", "Computer Accessories"];
    const yValues = [32, 15, 11];
    const barColors = ["green", "green", "green"];

    if (chartRef && chartRef.current) {
      new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          legend: { display: false },
          plugins: {
            title: {
              display: true,
              text: "Categories Wise Active Assets (Total: 58)"
            }
          }
        }
      });
    }
  }, []);

  return <canvas id="myChart" ref={chartRef} style={{ width: '100%', maxWidth: '600px' }} />;
};

export default BarChart;
