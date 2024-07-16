import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ChartPage from './Components/ChartPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<ChartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
