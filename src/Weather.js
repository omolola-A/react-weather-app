import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const[weatherData, setweatherData]=useState({ready: false});

  function handleResponse(response) {
    setweatherData({
      ready:true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt*1000),
      description: response.data.weather[0].description,
      iconUrl:"https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png",
      humidity: response.data.main.humidity 
    });
  
  }

if (weatherData.ready) {
return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData}/>
        
      </div>
    );
} else {
  const apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "loading"
}
}

  