import React, {useState} from "react";

export default function WeatherTemperature(props) {

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
        return((props.celsius * 9)/5+32);
    }
    const [unit, setUnit]= useState("celsius");
    if (unit=== "celsius") {
   return (
     <div className="weathertemperature">
       <span className="temperature">{Math.round(props.celsius)}</span>
       <span className="unit">
         ⁰C | <a href="/" onClick={showFahrenheit}>⁰F</a>{" "}
       </span>
     </div>
   );
    } else {
        return (
          <div className="weatherTemperature">
            <span className="temperature">{Math.round(fahrenheit())}</span>
            <span className="unit">
              <a href="/" onClick={showCelsius}>
                ⁰C
              </a> {" "}
              | ⁰F
            </span>
          </div>
        );
    }
    
}