import React from "react";

export default function WeatherTemperature(props) {
   return (
     <div className="weathertemperature">
       <span className="temperature">{Math.round(props.celsius)}</span>
       <span className="unit">
         ⁰C
       </span>
     </div>
   );
    } 
    