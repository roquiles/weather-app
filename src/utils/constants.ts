import dayClear from "../assets/WeatherIcons/clear-day.svg";
import nightClear from "../assets/WeatherIcons/clear-night.svg";
import dayClouds from "../assets/WeatherIcons/cloudy-day.svg";
import nightClouds from "../assets/WeatherIcons/cloudy-night.svg";
import dayRain from "../assets/WeatherIcons/rain-day.svg";
import nightRain from "../assets/WeatherIcons/rain-night.svg";
import daySnowy from "../assets/WeatherIcons/snowy-day.svg";
import nightSnowy from "../assets/WeatherIcons/snowy-night.svg";
import rain from "../assets/WeatherIcons/rain.svg";
import { iconMapperType } from "../types";

export const iconMapper: iconMapperType = {
  dayClear,
  nightClear,
  dayClouds,
  nightClouds,
  dayRain,
  nightRain,
  daySnowy,
  nightSnowy,
  rain,
};

export const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const monthsOfTheYear = [
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
