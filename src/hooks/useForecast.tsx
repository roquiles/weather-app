import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { formatString } from "../utils/helpers";

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
  const [city, setCity] = useState("Porto Alegre");
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
    navigator.geolocation.getCurrentPosition((position) => {
      api
        .get(
          `data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&exclude=minutely,hourly&appid=bd3fa3208449f766d94a794a8613f45c`
        )
        .then((response) => {
          setForecast(response.data);
          api
            .get(
              `geo/1.0/reverse?lat=${response.data.lat}&lon=${response.data.lon}&limit=1&appid=bd3fa3208449f766d94a794a8613f45c`
            )
            .then((response) => {
              setCity(response.data[0].name);
            });
        });
    });
  }, []);

  useEffect(() => {
    api
      .get(
        `data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&exclude=minutely,hourly&appid=bd3fa3208449f766d94a794a8613f45c`
      )
      .then((response) => setForecast(response.data));
  }, [city, coordinates.lat, coordinates.lon]);

  async function changeCity(city: string) {
    await api
      .get(
        `geo/1.0/direct?q=${city}&limit=1&appid=bd3fa3208449f766d94a794a8613f45c`
      )
      .then((response) => {
        if (response.data.length > 0) {
          setCity(formatString(city));
          setCoordinates({
            lat: response.data[0].lat,
            lon: response.data[0].lon,
          });
        } else {
          throw new Error("Whoops! Invalid city name");
        }
      })
      .catch(alert);
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
