import React from "react";

interface HourlyForecast {
  time: string;
  temp: string;
  icon: string;
}

interface HourlyWeatherProps {
  data: HourlyForecast[];
}

const HourlyWeather: React.FC<HourlyWeatherProps> = ({ data }) => {
  return (
    <section
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mt-6 overflow-x-auto"
      aria-label="Hourly weather forecast"
    >
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Hourly Forecast</h2>
      <div className="flex space-x-4 min-w-max">
        {data.map((hour, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-blue-50 dark:bg-gray-700 rounded-lg px-4 py-2 text-center"
          >
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{hour.time}</p>
            <img src={hour.icon} alt="Weather icon" className="w-10 h-10 my-1" />
            <p className="text-base font-semibold text-gray-800 dark:text-gray-100">{hour.temp}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HourlyWeather;
