import { WiHail } from "react-icons/wi";
import { MdOutlineLocationOn } from "react-icons/md";
import { Container } from "./styles";

export function LeftContainer() {
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
        Porto Alegre, BR
      </div>

      <WiHail size={100} />
      <p id="temperature">29°C</p>
      <p id="weather-label">Sunny</p>
    </Container>
  );
}
