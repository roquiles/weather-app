import { Container, DailyForecastCard } from "./styles";
import { useForecast } from "../../hooks/useForecast";
import { daysOfTheWeek, iconMapper } from "../../utils/constants";

export function WeeklyForecast() {
  const { forecast } = useForecast();
  return (
    <Container>
      {forecast.daily.map((day, index) => {
        return index <= 3 ? (
          <DailyForecastCard key={index}>
            <img src={iconMapper[day.weather[0].main]} alt="Cloudy" />
            <p>{`${daysOfTheWeek[new Date().getDay() + index].slice(0, 3)}`}</p>
            <p>
              Min.
              <span> {Math.round(day.temp.min)}ºC</span>
            </p>
            <p>
              Max.
              <span> {Math.round(day.temp.max)}ºC</span>
            </p>
          </DailyForecastCard>
        ) : (
          ""
        );
      })}
    </Container>
  );
}
