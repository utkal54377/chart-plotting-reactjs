import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const xData = xAxis.split(',').map(Number);
    const yData = yAxis.split(',').map(Number);
    navigate('/chart', { state: { xData, yData } });
  };

  return (
    <div className="home">
      <h1>Enter Data to Plot</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>X-Axis Data (comma separated):</label>
          <input type="text" value={xAxis} onChange={(e) => setXAxis(e.target.value)} />
        </div>
        <div>
          <label>Y-Axis Data (comma separated):</label>
          <input type="text" value={yAxis} onChange={(e) => setYAxis(e.target.value)} />
        </div>
        <button type="submit">Plot</button>
      </form>
    </div>
  );
}

export default Home;