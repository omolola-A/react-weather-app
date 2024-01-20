import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
let [loaded, setLoaded]= useState(false);
let [forecast, setForecast]= useState(null);

  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }

if (loaded) {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">{forecast[0].dt}</div>
          <WeatherIcon code="01d" size={36} />
          <div>
            <span className="weatherForecast-temperature-max">
              {forecast[0].temp.max}⁰
            </span>
            <span className="weatherForecast-temperature-min">{forecast[0].temp.min}⁰</span>
          </div>
        </div>
      </div>
    </div>
  );
  
}else {
   let apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
   let longitude = props.coordinates.lon;
   let latitude = props.coordinates.lat;
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

   axios.get(apiUrl).then(handleResponse);
  return null;
}  
}