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
      className="flex overflow-x-auto gap-4 p-5 bg-white dark:bg-black rounded-xl shadow-lg mt-10  scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 w-2xl"
      aria-label="Hourly weather forecast"
    >
      {data.map((hour, index) => (
        <div
          key={index}
          className="min-w-[120px] flex-shrink-0 flex flex-col items-center justify-center dark:bg-gray-700 rounded-lg p-4 text-center hover:bg-blue-100 dark:hover:bg-gray-600 transition duration-200"
        >
          <p className="text-lg font-medium text-black dark:text-white">{hour.time}</p>
          <img
            src={hour.icon}
            alt="Weather icon"
            className="w-16 h-16 my-2"
          />
          <p className="text-xl font-bold text-black dark:text-gray-200">{hour.temp}</p>
        </div>
      ))}
    </section>
  );
};

export default HourlyWeather;
