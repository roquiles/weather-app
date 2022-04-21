import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface ForecastContextData {}

interface ForecastProviderProps {
  children: ReactNode;
}

const ForecastContext = createContext<ForecastContextData>(
  {} as ForecastContextData
);

export function ForecastProvider(props: ForecastProviderProps) {
  const [city, setCity] = useState("fortaleza");
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    api
      .get(`/weather?q=${city}&appid=617bb0595bc02215630137ff7349e023`)
      .then((response) => setForecast(response.data));
  }, [city]);

  return (
    <ForecastContext.Provider value={forecast}>
      {props.children}
    </ForecastContext.Provider>
  );
}
