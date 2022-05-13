import { useForecast } from "../../hooks/useForecast";
import { Container } from "./styles";
import { MdOutlineLocationOn } from "react-icons/md";
import { useEffect, useState } from "react";
import loadingSpinner from "../../assets/spinner.svg";
import { getLocalTime } from "../../utils/helpers";
import {
  daysOfTheWeek,
  iconMapper,
  monthsOfTheYear,
} from "../../utils/constants";

export function LeftContainer() {
  const [dayOrNight, setDayOrNight] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  const { forecast, location, isLoading } = useForecast();
  const weatherLabel =
    forecast.current.weather[0]["description"][0]?.toUpperCase() +
    forecast.current.weather[0]["description"]?.substring(1);

  // Discovering local time to determine wether it is day or night
  const date = new Date();
  const localTime = getLocalTime(date, forecast.timezone_offset);

  // Determining if it's day or night
  useEffect(() => {
    if (localTime >= 6 && localTime <= 17) {
      setDayOrNight("day");
    } else {
      setDayOrNight("night");
    }

    setWeatherIcon(dayOrNight + forecast.current.weather[0]["main"]);
  }, [localTime, dayOrNight, forecast.current.weather, forecast]);

  return (
    <Container>
      <h2>{daysOfTheWeek[date.getDay()]}</h2>
      <p id="date">{`${date.getDate()} ${
        monthsOfTheYear[date.getMonth()]
      } ${date.getFullYear()}`}</p>

      {isLoading ? (
        <img src={loadingSpinner} alt="loading" />
      ) : (
        <>
          <div id="location">
            <MdOutlineLocationOn size={20} />
            {`${location.city}, ${location.country}`}
          </div>

          <img src={iconMapper[weatherIcon]} alt="Cloudy" />
          <p id="temperature">{Math.round(forecast?.current?.temp)}ºC</p>
          <p id="weather-label">{weatherLabel}</p>
        </>
      )}
    </Container>
  );
}
