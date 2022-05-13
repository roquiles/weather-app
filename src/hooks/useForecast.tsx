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
  location: {
    city: string;
    country: string;
  };
  changeCity: (city: string) => void;
}

interface ForecastProviderProps {
  children: ReactNode;
}

const ForecastContext = createContext<ForecastContextData>(
  {} as ForecastContextData
);

export function ForecastProvider(props: ForecastProviderProps) {
  const [location, setLocation] = useState({
    city: "Porto Alegre",
    country: "RS",
  });
  const [coordinates, setCoordinates] = useState({
    lat: -30.0253, //Porto Alegre's latitude
    lon: -51.1367, //Porto Alegre's longitude
  });

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
              setLocation({
                city: response.data[0].name,
                country: response.data[0].country,
              });

              setCoordinates({
                lat: response.data.lat,
                lon: response.data.lon,
              });
            });
        });
    });
  }, []);

  useEffect(() => {
    api
      .get(
        `data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&exclude=minutely,hourly&appid=bd3fa3208449f766d94a794a8613f45c`
      )
      .then((response) => {
        setForecast(response.data);
      });
  }, [location, coordinates.lat, coordinates.lon]);

  function changeCity(city: string) {
    if (city === "") {
      alert("Whoops! Invalid city name");
      return;
    }

    api
      .get(
        `geo/1.0/direct?q=${city}&limit=1&appid=bd3fa3208449f766d94a794a8613f45c`
      )
      .then((response) => {
        if (response.data.length > 0) {
          setLocation({
            city: response.data[0].name,
            country: response.data[0].country,
          });
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
    <ForecastContext.Provider value={{ forecast, location, changeCity }}>
      {props.children}
    </ForecastContext.Provider>
  );
}

export function useForecast() {
  const context = useContext(ForecastContext);

  return context;
}
