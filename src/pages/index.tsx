import { Inter } from "next/font/google";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { Result } from "./components/Result";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type ResultStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
};

export default function Home() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });

  const getWeather = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=0da1ce55290a4a60ba523948230105&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) =>
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.location.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        })
      );
  };
  return (
    <div>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result results={results} />
    </div>
  );
}
