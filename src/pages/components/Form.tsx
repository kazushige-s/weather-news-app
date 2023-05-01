import React from "react";

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: any) => void;
};

export const Form = (props: FormPropsType) => {
  const { setCity, getWeather } = props;
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
