import { WiHail } from "react-icons/wi";
import { MdOutlineLocationOn } from "react-icons/md";
import { Container } from "./styles";

export function LeftContainer() {
  return (
    <Container>
      <h2>Tuesday</h2>
      <p id="date">19 Abr 2022</p>

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
