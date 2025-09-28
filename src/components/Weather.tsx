import type { FC } from "react";
import type { WeatherData } from "../types";

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  return (
    <section className="bg-white rounded-xl shadow p-6 mt-6 mx-auto max-w-xl">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-700">
        {data.name}, {data.sys.country}
      </h1>

     
      <div className="bg-blue-100 rounded-lg shadow hover:shadow-md transition-all p-5 text-center mb-6">
        <p className="text-sm text-gray-600 font-medium mb-1">Temperature</p>
        <p className="text-xl font-semibold text-gray-800">{data.main.temp} K</p>
        <p className="text-lg text-gray-700">{fahrenheit} °F / {celsius} °C</p>
      </div>

   
      <div className="flex flex-col items-center mb-6">
        <p className="text-gray-600 capitalize font-semibold text-base">
          {data.weather[0].description}
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="w-16 h-16 mt-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
       
        <div className="bg-blue-50 rounded-lg shadow hover:shadow-md transition-all p-4 text-center">
          <p className="text-sm text-gray-600 font-medium mb-1">Humidity</p>
          <p className="text-lg text-gray-800">{data.main.humidity}%</p>
        </div>

       
        <div className="bg-blue-50 rounded-lg shadow hover:shadow-md transition-all p-4 text-center">
          <p className="text-sm text-gray-600 font-medium mb-1">Pressure</p>
          <p className="text-lg text-gray-800">{data.main.pressure} hPa</p>
        </div>

       
        <div className="bg-blue-50 rounded-lg shadow hover:shadow-md transition-all p-4 text-center">
          <p className="text-sm text-gray-600 font-medium mb-1">Wind Speed</p>
          <p className="text-lg text-gray-800">{data.wind.speed} m/s</p>
        </div>

        <div className="bg-blue-50 rounded-lg shadow hover:shadow-md transition-all p-4 text-center">
          <p className="text-sm text-gray-600 font-medium mb-1">Wind Direction</p>
          <p className="text-lg text-gray-800">{data.wind.deg}°</p>
        </div>
      </div>
    </section>
  );
};

export default Weather;
