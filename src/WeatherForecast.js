import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherforecastDay from "./WeatherforecastDay";


export default function WeatherForecast(props) {
let [loaded, setLoaded]= useState(false);
let [forecast, setForecast]= useState(null);

useEffect(function() {
  setLoaded(false);
}, [props.coordinates]);

  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }

if (loaded) {
  return (
    <div className="weatherForecast">
      <div className="row">
        {forecast.map(function(dailyforecast, index){
          if (index < 5){
         return (
           <div className="col" key={index}>
             <WeatherforecastDay data={dailyforecast} />
           </div>
         );
          }else {
            return null;
          }
          
        })}
        
      </div>
    </div>
  );
  
}else {
   let apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
   let longitude = props.coordinates.lon;
   let latitude = props.coordinates.lat;
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

   axios.get(apiUrl).then(handleResponse);
  return null;
}  
}