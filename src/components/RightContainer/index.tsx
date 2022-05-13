import { Container } from "./styles";
import { ChangeLocationButton } from "../ChangeLocationButton";
import { WeeklyForecast } from "../WeeklyForecast";
import { useForecast } from "../../hooks/useForecast";
import { toKmH } from "../../utils/helpers";

export function RightContainer() {
  const { forecast } = useForecast();

  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <th>FEELS LIKE</th>
            <td>{Math.round(forecast.current.feels_like)}ºC</td>
          </tr>
          <tr>
            <th>HUMIDITY</th>
            <td>{forecast.current.humidity}%</td>
          </tr>
          <tr>
            <th>PRECIPITATION</th>
            <td>{Math.round(forecast.daily[0]?.pop * 100)}%</td>
          </tr>
          <tr>
            <th>WIND</th>
            <td>{toKmH(forecast.current.wind_speed)}km/h</td>
          </tr>
        </tbody>
      </table>
      <WeeklyForecast />

      <ChangeLocationButton />
    </Container>
  );
}
