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
    <div className="bckgr-img-cont">
      <div>
        <main>
          <input
            className="search"
            type="text"
            placeholder="search"
            onKeyPress={search}
            onKeyUp={picSearch}
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <div>
            {typeof weather.location != "undefined" ? (
              <div>
                <div className="weather">
                  <p>{weather.location.name}</p>
                  <p>{weather.location.country}</p>
                  <p>{weather.current.temp_c} C°</p>
                  <p>Humidity {weather.current.humidity}</p>
                  <p>{weather.current.condition.text}</p>
                  <img src={weather.current.condition.icon} alt="Logo" />
                  <p>Wind {weather.current.wind_kph} km/h</p>
                  <p>UV {weather.current.uv}</p>
                </div>
              </div>
            ) : (
              "City not found. Please try it again."
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Search;
