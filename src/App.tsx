import { Header } from "./components/Header";
import { WeatherCard } from "./components/WeatherCard";
import { ForecastProvider } from "./ForecastContext";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ForecastProvider>
      <GlobalStyle />
      <Header />
      <WeatherCard />
    </ForecastProvider>
  );
}
