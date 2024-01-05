import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const[ready, setReady]=useState(false);
  const[temperature, setTemperature]=useState(null);

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }

if (ready) {
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
        <h1>New York</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix d-flex align-items-center">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
                alt="Mostly Cloudy"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">{Math.round(temperature)}</span>
                <span className="unit">⁰C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
} else {
  let city = "New York";
  const apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "loading"
}
}

  