import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";


export default function WeatherForecast() {
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col">
            <div className="weatherForecast-day">Thur</div>
            <WeatherIcon code="01d" size={36}/>
            <div>
              <span className="weatherForecast-temperature-max">19⁰</span>
              <span className="weatherForecast-temperature-min">10⁰</span>
            </div>
          </div>
        </div>
      </div>
    );
}