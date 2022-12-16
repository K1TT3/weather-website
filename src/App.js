import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const config = {
    headers: {
      "X-Api-Key": XApiKey,
    },
  };

  const XApiKey = "a2OGHdyD19BSWTAvzwLz9w==o4xI0wy0HpJhur5g";

  const url1 = `https://api.api-ninjas.com/v1/geocoding?city=${location}&country=Germany`;

  const url2 = `https://api.brightsky.dev/weather?lat=${lat}&lon=${lon}&date=${date}`; //date=2022-12-09

  var lat;
  var lon;
  var date;

  // lat = $lat, lon = $lon, date = $date
  //Methode für Geocoding API, Gib Name von Stadt, bekomme Lat und Lon,
  //Lat und Lon für Ansprechen Brightsky API

  const getCoordinate = () => {};

  function getCoordinates(location) {
    axios.get(url1, config).then((response) => {
      console.log(response.data);
    });
  }

  function searchLocation(event) {
    if (event.key === "Enter") {
      axios.get(url2).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          //onPress={searchLocation}
          onPress={getCoordinates(location)}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Leipzig</p>
          </div>
          <div className="temp">
            <h1>3°C</h1>
          </div>
          <div className="description">
            <p>Wolkig</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">2°C</p>
            <p>gefühlt</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Luftfeuchtigkeit</p>
          </div>
          <div className="wind">
            <p className="bold">5 km/h</p>
            <p>Windgeschwindigkeit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
