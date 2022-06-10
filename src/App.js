import Search from "./components/Search";
import Home from "./components/Home";
import "./App.css";

import { useState } from "react";
import Forecast from "./components/Forecast";

function App() {
  const [data, setData] = useState("Budapest");
  const [weather, setWeather] = useState({});
  const [tdForecast, setTDForecast] = useState({});

  return (
    <div className="App">
      <Search
        data={data}
        setData={setData}
        weather={weather}
        setWeather={setWeather}
      />
      <Forecast
        data={data}
        setData={setData}
        weather={weather}
        setWeather={setWeather}
        tdForecast={tdForecast}
        setTDForecast={setTDForecast}
      />
    </div>
  );
}

export default App;
