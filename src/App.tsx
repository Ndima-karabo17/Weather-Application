import './App.css';
import './index.css';
import Search from './components/Search';
import Alert from './components/Alert';
import Weather from './components/Weather';
import WeeklyWeather from './components/WeeklyWeather';

import type { DailyForecast, WeatherData } from './types';
import { useState, type FC } from 'react';

const App: FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<DailyForecast[]>([]);
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

//To be edited
      const sampleForecast: DailyForecast[] = [
        { day: 'Mon', temp: '28°C', icon: 'https://openweathermap.org/img/wn/01d@2x.png' },
        { day: 'Tue', temp: '30°C', icon: 'https://openweathermap.org/img/wn/02d@2x.png' },
        { day: 'Wed', temp: '29°C', icon: 'https://openweathermap.org/img/wn/03d@2x.png' },
        { day: 'Thu', temp: '26°C', icon: 'https://openweathermap.org/img/wn/04d@2x.png' },
        { day: 'Fri', temp: '27°C', icon: 'https://openweathermap.org/img/wn/01d@2x.png' },
        { day: 'Sat', temp: '31°C', icon: 'https://openweathermap.org/img/wn/02d@2x.png' },
        { day: 'Sun', temp: '32°C', icon: 'https://openweathermap.org/img/wn/03d@2x.png' },
      ];

      setForecastData(sampleForecast);
    } catch (err) {
      setError((err as Error).message);
      setWeatherData(null);
      setForecastData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <Search title="Enter city name and press search button" onSearch={handleSearch} />

        {loading && (
          <h2 className="text-2xl text-center font-semibold text-gray-700">Loading...</h2>
        )}

        {alertMsg && (
          <Alert message={alertMsg} onClose={() => setAlertMsg('')} />
        )}

        {error && (
          <Alert message={error} onClose={() => setError('')} />
        )}

        {!loading && weatherData && (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <Weather data={weatherData} />
            </div>

            {forecastData.length > 0 && (
              <div className="md:w-1/2">
                <WeeklyWeather forecastData={forecastData} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
