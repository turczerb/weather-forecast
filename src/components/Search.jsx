import { useState, useEffect } from "react";

const Search = (props) => {
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=f8ea03577810484b92f140651222803&q=${props.data}&aqi=no`
      )
        .then((res) => res.json())
        .then((result) => {
          props.setWeather(result);
          console.log(result);
        });
    }
  };

  return (
    <div>
      <div>
        <main>
          <input
            className="search"
            type="text"
            placeholder="search..."
            onKeyPress={search}
            value={props.data}
            onChange={(e) => props.setData(e.target.value)}
          />

          {typeof props.weather.location != "undefined" ? (
            <div className="conti">
              <div className="datas-cont">
                <div className="today">
                  <p className="lok" id="gird1">
                    {props.weather.location.name},{" "}
                    {props.weather.location.country}
                  </p>

                  <p className="temp" id="gird3">
                    {props.weather.current.temp_c} C°
                  </p>
                  <p id="gird4">Humidity {props.weather.current.humidity} %</p>
                  <p id="gird5">{props.weather.current.condition.text}</p>
                  <img
                    src={props.weather.current.condition.icon}
                    alt="Logo"
                    id="gird6"
                  />
                  <p id="gird7">Wind {props.weather.current.wind_kph} km/h</p>
                  <p id="gird8">
                    Feels like {props.weather.current.feelslike_c} C°
                  </p>
                  <p id="gird9"> UV {props.weather.current.uv}</p>
                </div>
              </div>
            </div>
          ) : (
            <p>City not found. Please try it again.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Search;
