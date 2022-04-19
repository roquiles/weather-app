import { MainContainer } from "../MainContainer";
import { SecondaryContainer } from "../SecondaryContainer";

export function WeatherCard() {
  return (
    <div>
      <h1>Weather Forecast</h1>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}
