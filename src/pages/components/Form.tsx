import { log } from "console";
import React, { useState } from "react";

export const Form = () => {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=0da1ce55290a4a60ba523948230105&q=London&aqi=no"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="city"
          placeholder="都市名"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" onClick={getWeather}>
          Get Weather
        </button>
      </form>
    </div>
  );
};
