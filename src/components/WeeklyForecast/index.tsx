import { Container, DailyForecastCard } from "./styles";
import { useForecast } from "../../hooks/useForecast";
import { daysOfTheWeek, iconMapper } from "../../utils/constants";
import loadingSpinner from "../../assets/spinner.svg";

export function WeeklyForecast() {
  const { forecast, isLoading } = useForecast();
  const currentWeekDay = new Date().getDay();

  return (
    <Container>
      {forecast.daily.map((day, index) => {
        const weekDay =
          currentWeekDay + index > 6
            ? currentWeekDay + index - 7
            : currentWeekDay + index;

        return index <= 3 ? (
          <DailyForecastCard key={index}>
            {isLoading ? (
              <img src={loadingSpinner} alt="loading" />
            ) : (
              <>
                <img src={iconMapper[day.weather[0].main]} alt="Cloudy" />
                <p>{`${daysOfTheWeek[weekDay].slice(0, 3)}`}</p>
                <p>
                  Min.
                  <span> {Math.round(day.temp.min)}ºC</span>
                </p>
                <p>
                  Max.
                  <span> {Math.round(day.temp.max)}ºC</span>
                </p>
              </>
            )}
          </DailyForecastCard>
        ) : (
          ""
        );
      })}
    </Container>
  );
}
