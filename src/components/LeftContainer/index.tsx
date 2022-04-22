import { MdOutlineLocationOn } from "react-icons/md";
import { Container } from "./styles";
import Cloudy from "../../assets/WeatherIcons/cloudy-day.svg";
import { useForecast } from "../../hooks/ForecastContext";

export function LeftContainer() {
  const forecast = useForecast();

  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthsOfTheYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();

  return (
    <Container>
      <h2>{daysOfTheWeek[date.getDay()]}</h2>
      <p id="date">{`${date.getDate()} ${
        monthsOfTheYear[date.getMonth()]
      } ${date.getFullYear()}`}</p>

      <div id="location">
        <MdOutlineLocationOn size={20} />
        {`${forecast.name}, ${forecast.sys?.country}`}
      </div>

      <img src={Cloudy} alt="Cloudy" />
      <p id="temperature">{Math.round(forecast.main.temp)}ºC</p>
      <p id="weather-label">
        {forecast.weather[0]["description"][0]?.toUpperCase() +
          forecast.weather[0]["description"]?.substring(1)}
      </p>
    </Container>
  );
}
