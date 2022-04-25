import { useState, useEffect } from "react";

const Search = (props) => {
  const [data, setData] = useState("");
  const [weather, setWeather] = useState({});
  const [pic, setPic] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=f8ea03577810484b92f140651222803&q=${data}&aqi=no`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setData("");
          console.log(result);
        });
    }
  };
  //(https://api.teleport.org/api/urban_areas/slug:${data}/images/      https://api.teleport.org/api/cities/?search=${data}
  const picSearch = (evt) => {
    if (evt.key === "Enter") {
      fetch(`https://api.teleport.org/api/urban_areas/slug:${data}/`)
        .then((res) => res.json())
        .then((result) => {
          setPic(result);
          setData("");
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
            onKeyUp={picSearch}
            value={data}
            onChange={(e) => setData(e.target.value)}
          />

          {typeof weather.location != "undefined" ? (
            <div className="conti">
              <div className="datas-cont">
                <p className="lok" id="gird1">
                  {weather.location.name}, {weather.location.country}
                </p>
                <p className="gird2">
                  Local time: {weather.location.localtime}
                </p>
                <p className="temp" id="gird3">
                  {weather.current.temp_c} C°
                </p>
                <p id="gird4">Humidity {weather.current.humidity} %</p>
                <p id="gird5">{weather.current.condition.text}</p>
                <img
                  src={weather.current.condition.icon}
                  alt="Logo"
                  className="gird6"
                />
                <p id="gird7">Wind {weather.current.wind_kph} km/h</p>
                <p id="gird8">Feels like {weather.current.feelslike_c} C°</p>
                <div id="gird9"> UV {weather.current.uv}</div>
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
