import { Container } from "./styles";
import { ChangeLocationButton } from "../ChangeLocationButton";
import { WeeklyForecast } from "../WeeklyForecast";

export function RightContainer() {
  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <th>PRECIPITATION</th>
            <td>0%</td>
          </tr>
          <tr>
            <th>HUMIDITY</th>
            <td>34%</td>
          </tr>
          <tr>
            <th>WIND</th>
            <td>0km/h</td>
          </tr>
        </tbody>
      </table>

      <WeeklyForecast />

      <ChangeLocationButton />
    </Container>
  );
}
