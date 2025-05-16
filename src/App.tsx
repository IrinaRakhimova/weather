import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ForecastPage from './pages/ForecastPage';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/forecast">Forecast</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forecast" element={<ForecastPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
};

export default App;