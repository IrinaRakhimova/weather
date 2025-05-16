import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ForecastPage from './pages/ForecastPage';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/weather">Home</Link>
        <Link to="/weather/forecast">Forecast</Link>
        <Link to="/weather/about">About</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/weather" element={<Home />} />
          <Route path="/weather/forecast" element={<ForecastPage />} />
          <Route path="/weather/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
};

export default App;