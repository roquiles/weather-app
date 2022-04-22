import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface ForecastContextData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: [
    {
      main: string;
      description: string;
    }
  ];
}

interface ForecastProviderProps {
  children: ReactNode;
}

const ForecastContext = createContext<ForecastContextData>(
  {} as ForecastContextData
);

export function ForecastProvider(props: ForecastProviderProps) {
  const [city, setCity] = useState("Porto Alegre");
  const [forecast, setForecast] = useState({
    name: "",
    sys: { country: "" },
    main: {
      temp: 0,
      temp_min: 0,
      temp_max: 0,
    },
    weather: [
      {
        main: "",
        description: "",
      },
    ],
  } as ForecastContextData);

  useEffect(() => {
    api
      .get(
        `/weather?q=${city}&appid=617bb0595bc02215630137ff7349e023&units=metric`
      )
      .then((response) => setForecast(response.data));
  }, [city]);

  console.log(forecast);

  return (
    <ForecastContext.Provider value={forecast}>
      {props.children}
    </ForecastContext.Provider>
  );
}

export function useForecast() {
  const context = useContext(ForecastContext);

  return context;
}
