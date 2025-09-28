import React from "react";
import type { DailyForecast } from "../types";

interface WeeklyWeatherProps {
  forecastData: DailyForecast[];
}

const WeeklyWeather: React.FC<WeeklyWeatherProps> = ({ forecastData }) => {
  return (
    <section
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 px-4 py-6 bg-white rounded-xl shadow-lg mt-8"
      aria-label="Weekly weather forecast"
    >
      {forecastData.map((forecast, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition duration-200"
        >
          <h3 className="text-base font-medium text-blue-700">{forecast.day}</h3>
          <p className="text-xl font-bold text-gray-800 mt-1">{forecast.temp}</p>
          
          <img
            src={forecast.icon}
            alt="Weather icon"
            className="w-12 h-12 mt-2"
          />
        </div>
      ))}
    </section>
  );
};

export default WeeklyWeather;
