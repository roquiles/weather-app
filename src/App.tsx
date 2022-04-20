import { Header } from "./components/Header";
import { WeatherCard } from "./components/WeatherCard";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <WeatherCard />
    </div>
  );
}
