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
  const { results } = props;
  // console.log(props);
  return (
    <div>
      {results.country && <div>{results.country}</div>}
      {results.cityName && <div>{results.cityName}</div>}
      {results.temperature && (
        <div>
          {results.temperature}
          <span>℃</span>
        </div>
      )}
      {results.conditionText && (
        <div>
          <img src={results.icon} alt="icon" />
          <span>{results.conditionText}</span>
        </div>
      )}
    </div>
  );
};
