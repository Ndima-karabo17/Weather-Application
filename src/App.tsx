import './App.css';

import Search from './components/Search';
import Alert from './components/Alert';
import Weather from './components/Weather';
import type { WeatherData } from './types';
import { useState, type FC } from 'react';


const App: FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  const handleSearch = async (city: string) => {
    if (!city.trim()) {
      setAlertMsg('City is required!');
      return;
    }

    setAlertMsg('');
    setError('');
    setLoading(true);

    try {
      const API_KEY = '2af682340b186e44c1923720521ab60f';
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}`
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'City not found');
      }

      const data: WeatherData = await res.json();
      setWeatherData(data);
    } catch (err) {
      setError((err as Error).message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Search title="Enter city name and press search button" onSearch={handleSearch} />

      {loading && <h2 className="text-2xl py-4 text-center">Loading...</h2>}

      {!loading && weatherData && <Weather data={weatherData} />}

      {alertMsg && (
        <Alert
          message={alertMsg}
          onClose={() => setAlertMsg('')}
        />
      )}

      {error && (
        <Alert
          message={error}
          onClose={() => setError('')}
        />
      )}
    </div>
  );
};

export default App;
