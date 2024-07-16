import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function ChartPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { xData, yData } = location.state || { xData: [], yData: [] };

  const data = {
    labels: xData,
    datasets: [
      {
        label: 'Sample Data',
        data: yData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-page">
      <h1>Graph</h1>
      <Line data={data} options={options} />
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default ChartPage;