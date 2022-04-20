import { Container, DailyForecastCard } from "./styles";
import { WiDayShowers } from "react-icons/wi";

export function WeeklyForecast() {
  return (
    <Container>
      <DailyForecastCard>
        <WiDayShowers />
        <p>Tue</p>
        <span>29º</span>
      </DailyForecastCard>

      <DailyForecastCard>
        <WiDayShowers />
        <p>Wed</p>
        <span>29º</span>
      </DailyForecastCard>

      <DailyForecastCard>
        <WiDayShowers />
        <p>Tur</p>
        <span>29º</span>
      </DailyForecastCard>

      <DailyForecastCard>
        <WiDayShowers />
        <p>Fri</p>
        <span>29º</span>
      </DailyForecastCard>
    </Container>
  );
}
