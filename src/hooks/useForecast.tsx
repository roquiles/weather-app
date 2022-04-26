import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface DailyForecast {
  temp: {
    max: number;
    min: number;
  };
  pop: number;
  weather: [
    {
      main: string;
      description: string;
    }
  ];
}

interface Forecast {
  timezone_offset: number;
  current: {
    feels_like: number;
    humidity: number;
    temp: number;
    weather: [
      {
        main: string;
        description: string;
      }
    ];
    wind_speed: number;
  };
  daily: DailyForecast[];
}

interface ForecastContextData {
  forecast: Forecast;
  city: string;
  changeCity: (city: string) => void;
}

interface ForecastProviderProps {
  children: ReactNode;
}

const ForecastContext = createContext<ForecastContextData>(
  {} as ForecastContextData
);

export function ForecastProvider(props: ForecastProviderProps) {
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });
  const [forecast, setForecast] = useState({
    timezone_offset: 0,
    current: {
      feels_like: 0,
      humidity: 0,
      temp: 0,
      weather: [
        {
          main: "",
          description: "",
        },
      ],
      wind_speed: 0,
    },
    daily: [],
  } as Forecast);

  useEffect(() => {
    api
      .get(
        `geo/1.0/direct?q=${city}&limit=1&appid=617bb0595bc02215630137ff7349e023`
      )
      .then((response) =>
        setCoordinates({ lat: response.data[0].lat, lon: response.data[0].lon })
      )
      .then(() =>
        api.get(
          `data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&exclude=minutely,hourly&appid=617bb0595bc02215630137ff7349e023`
        )
      )
      .then((response) => setForecast(response.data));
  }, [city, coordinates.lat, coordinates.lon]);

  function changeCity(city: string) {
    setCity(city);
  }

  return (
    <ForecastContext.Provider value={{ forecast, city, changeCity }}>
      {props.children}
    </ForecastContext.Provider>
  );
}

export function useForecast() {
  const context = useContext(ForecastContext);

  return context;
}
