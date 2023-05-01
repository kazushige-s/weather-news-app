import { Inter } from "next/font/google";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { Result } from "./components/Result";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result />
    </div>
  );
}
