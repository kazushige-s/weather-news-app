import React from "react";

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
  city: string;
};

export const Form = (props: FormPropsType) => {
  const { setCity, getWeather, city } = props;
  return (
    <div>
      <form onSubmit={getWeather}>
        <input
          type="text"
          name="city"
          placeholder="都市名"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};
