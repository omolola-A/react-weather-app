import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";


export default function Weather(props) {
  const[weatherData, setweatherData]=useState({ready: false});
  const[city, setCity]= useState(props.defaultCity)

  function handleResponse(response) {
    setweatherData({
      ready: true,
      coordinates:response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
    });
  
  }

  function search() {
    const apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);


  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCitychange(event) {
   setCity(event.target.value);
  }

if (weatherData.ready) {
return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCitychange}
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
        <WeatherForecast coordinates= {weatherData.coordinates}/>
        
      </div>
    );
} else {
  search();
 
  return "loading"
}
}

  