import { Inter } from "next/font/google";
import { Title } from "src/components/Title";
import { Form } from "src/components/Form";
import { Result } from "src/components/Result";
import { useState } from "react";
import { Loading } from "src/components/Loading";

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
  const [loading, setLoading] = useState<boolean>(false);

  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    if (city === "") {
      alert("都市名を英語で入力してください");
      return;
    }
    e.preventDefault();
    setLoading(true);
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
    setCity("");
    setLoading(false);
  };
  return (
    <div>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} city={city} />
      {loading ? <Loading /> : <Result results={results} />}
    </div>
  );
}
