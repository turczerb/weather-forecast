import { useState, useEffect } from "react";

const Forecast = (props) => {
  const search = (evt) => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=f8ea03577810484b92f140651222803&q=${props.data}&days=3&aqi=no&alerts=no`
    )
      .then((res) => res.json())
      .then((result) => {
        props.setTDForecast(result);
        console.log("Three day response: ");
        console.log(result);
      });
  };

  return typeof props.tdForecast.forecast != "undefined" ? (
    <div>
      <div className="forecast_container">
        {props.tdForecast.forecast.forecastday.map((item, index) => {
          return (
            <main key={index} className="forecast">
              <p className="lok" id="gird1">
                {props.tdForecast.location.name}
              </p>
              <p className="gird2">Date: {item.date}</p>
              <p className="temp" id="gird3">
                Average temperature: {item.day.avgtemp_c} C°
              </p>
              <p id="gird4">Humidity {item.day.avghumidity} %</p>
              <p id="gird5">{item.day.condition.text}</p>
              <img src={item.day.condition.icon} alt="Logo" id="gird6" />
              <p id="gird7">Wind {item.day.avgvis_km} km/h</p>
              <p id="gird8">Max temp {item.day.maxtemp_c} C°</p>
              <p id="gird9"> UV {item.day.uv}</p>
            </main>
          );
        })}
      </div>
    </div>
  ) : typeof props.weather.current != "undefined" ? (
    <div>
      <button onClick={search}>Get 3days report</button>
    </div>
  ) : (
    <div>No weather data to display</div>
  );
};

export default Forecast;
