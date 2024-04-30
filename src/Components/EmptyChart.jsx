import React from 'react';
// import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';

const EmptyChart = () => {
  // const chartRef = useRef(null);
  // Data
  const xValues = ["Electronics", "Furniture", "Computer Accessories"];
  const yValues = [-1.0, 0, 1.0];
  const barColors = ['rgba(0, 0, 0, 0)'];

  // Chart data
  const data = {
    labels: xValues,
    datasets: [{
      borderWidth: 0,
      backgroundColor: barColors,
      data: yValues
    }]
  };

  // Chart options
  const options = {
    legend: { display: false },
    title: {
      display: true,
      text: "Categories Wise InActive Assets (Total: 0)"
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default EmptyChart;