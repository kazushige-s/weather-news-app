import Image from "next/image";
import React from "react";

type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};

export const Result = (props: ResultsPropsType) => {
  const { country, cityName, temperature, conditionText, icon } = props.results;
  // console.log(props);
  return (
    <div>
      {country && <div>{country}</div>}
      {cityName && <div>{cityName}</div>}
      {temperature && (
        <div>
          {temperature}
          <span>℃</span>
        </div>
      )}
      {conditionText && (
        <div>
          <img src={icon} alt="icon" />
          <span>{conditionText}</span>
        </div>
      )}
    </div>
  );
};
