import React, { useEffect, useState } from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';
import '../forecast.css';

interface ForecastData {
  dates: string[];
  temperatures: number[];
}

const Forecast: React.FC = () => {
  const [data, setData] = useState<ForecastData | null>(null);

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max&timezone=auto")
      .then(res => res.json())
      .then(json => {
        const dates: string[] = json.daily.time;
        const temperatures: number[] = json.daily.temperature_2m_max;
        setData({ dates, temperatures });
      })
      .catch(() => setData(null));
  }, []);

  const getIcon = (temp: number) => {
    if (temp >= 25) return <Sun color="#facc15" />;
    if (temp >= 15) return <Cloud color="#6b7280" />;
    return <CloudRain color="#3b82f6" />;
  };

  return (
    <div className="forecast-container">
      <h1 className="forecast-title">3-Day Forecast</h1>
      {data ? (
        <div className="forecast-grid">
          {data.temperatures.slice(0, 3).map((temp, idx) => (
            <div key={idx} className="forecast-card">
              <div className="forecast-day">
                {new Date(data.dates[idx]).toLocaleDateString(undefined, {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
              <div className="forecast-temp">{temp}°C</div>
              <div className="forecast-icon">{getIcon(temp)}</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="forecast-loading">Loading...</p>
      )}
    </div>
  );
};

export default Forecast;
